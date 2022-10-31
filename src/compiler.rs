use gray_matter::Matter;
use gray_matter::engine::YAML;
use walkdir::WalkDir;
use serde::Deserialize;
use std::{path::Path, io::Result, fs::{self, create_dir_all}};
use comrak::{markdown_to_html, ComrakOptions};

macro_rules! HEAD {
    () => {
        "<head>\
            <meta charset=\"utf-8\">\
            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\
            <link rel=\"icon\" href=\"/favicon.png\">\
            <link rel=\"stylesheet\" href=\"/theme.css\">\
            <title>{}</title>\
            <meta name=\"description\" content=\"{}\">\
        </head>"
    };
}


pub struct MarkdownFile {
    path: String,
    body: String
}

#[derive(Deserialize)]
struct FrontMatter {
    pub title: Option<String>,
    pub description: Option<String>,

    pub nav: Option<bool>,
    pub footer: Option<bool>
}


pub fn get_files(pages_dir: &str) -> Vec<MarkdownFile> {
    let mut markdown_files: Vec<MarkdownFile> = Vec::new();
    

    let walker = WalkDir::new(pages_dir).into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.file_name().to_str().unwrap().ends_with(".md"))
        .filter(|e| !e.file_name().to_str().unwrap().starts_with("_"))
        .filter(|e| e.metadata().expect("Couldn't fetch metadata").is_file());


    for entry in walker {
        let path = entry.path();
        let file_contents = fs::read_to_string(path);

        match file_contents {
            Ok(contents) => {
                markdown_files.push(MarkdownFile {
                    path: path.to_str().unwrap().to_string(),
                    body: contents
                });
            }
            Err(_) => ()
        }
    };

    return markdown_files;
}


// TODO: Merge the static folder and the pages folder

pub fn generate_build_dir(build_dir: &str, static_dir: &str) {
    println!("Creating build folder...");

    let _ = fs::remove_dir_all(build_dir);

    fs::create_dir_all(build_dir)
        .expect("Couldn't generate build directory!");

    copy_dir_all(static_dir, build_dir)
        .expect("Couldn't copy static files to build directory!");
}

pub fn generate_markdown_files(markdown_files: &Vec<MarkdownFile>, build_dir: &str, nav: &str, footer: &str) {
    for md_file in markdown_files.iter() {
        let path = Path::new(&md_file.path);
        
        let matter = Matter::<YAML>::new();
        let result = matter.parse(&md_file.body);

        let mut path_split: Vec<&str> = path.to_str()
            .unwrap()
            .split("/")
            .collect();

        path_split.drain(0..1);

        let mut title = path_split.last().unwrap().to_string();
        let mut description = String::new();
        let mut nav_enabled = true;
        let mut footer_enabled = true;

        match result.data {
            Some(parsed) => {
                let front_matter: FrontMatter = match parsed.deserialize() {
                    Ok(fm) => fm,
                    Err(_) => FrontMatter {
                        title: Some("".to_string()),
                        description: Some("".to_string()),
                        nav: Some(true),
                        footer: Some(true)
                    }
                };
                
                if front_matter.title.is_some() {
                    title = front_matter.title.unwrap();
                }

                if front_matter.description.is_some() {
                    description = front_matter.description.unwrap();
                }

                if front_matter.nav.is_some() {
                    nav_enabled = front_matter.nav.unwrap();
                }

                if front_matter.footer.is_some() {
                    footer_enabled = front_matter.footer.unwrap();
                }
            }
            None => ()
        }

        let mut html = String::from("<html>");
        html.push_str(&format!(HEAD!(), title, description));
        html.push_str("<body><main>");

        if nav != "" && nav_enabled {
            html.push_str(nav);
        }

        html.push_str(&markdown_to_html(&result.content, &ComrakOptions {
            extension: comrak::ComrakExtensionOptions {
                strikethrough: true,
                table: true,
                autolink: true,
                tasklist: true,
                superscript: false,
                ..Default::default()
            },
            render: comrak::ComrakRenderOptions {
                unsafe_: true,
                ..Default::default()
            },
            ..Default::default()
        }));
        html.push_str("</main>");
        
        if footer != "" && footer_enabled {
            html.push_str(footer);
        }

        html.push_str("</body></html>");

        let new_path = 
            build_dir.to_owned() + 
            "/" + 
            &path_split.join("/")
                .replace(".md", ".html");

        println!("{}", new_path);

        if path_split.len() > 1 {
            create_dir_all(Path::new(&new_path).parent().unwrap())
                .expect("Couldn't create nested directory");
        }

        fs::write(new_path, html).unwrap();
    }
}

pub fn generate_footer(pages_dir: &str) -> String {
    let dir = fs::read_dir(pages_dir).expect("Couldn't read pages directory");
    
    let footer = dir.filter_map(|entry| entry.ok())
        .filter(|entry| entry.file_name().to_str().unwrap() == "_footer.md")
        .map(|entry| fs::read_to_string(entry.path()).unwrap())
        .collect::<Vec<String>>();

    if footer.len() > 0 {
        let mut footer_html = String::from("<footer>");
        footer_html.push_str(&markdown_to_html(&footer[0], &ComrakOptions {
            render: comrak::ComrakRenderOptions {
                unsafe_: true,
                ..Default::default()
            },
            ..Default::default()
        }));
        footer_html.push_str("</footer>");

        return footer_html;
    }

    return String::new();
}

pub fn generate_nav(pages_dir: &str) -> String {
   let dir = fs::read_dir(pages_dir).expect("Couldn't read pages directory");
    
    let nav = dir.filter_map(|entry| entry.ok())
        .filter(|entry| entry.file_name().to_str().unwrap() == "_nav.md")
        .map(|entry| fs::read_to_string(entry.path()).unwrap())
        .collect::<Vec<String>>();

    if nav.len() > 0 {
        let mut nav_html = String::from("<nav>");
        nav_html.push_str(&markdown_to_html(&nav[0], &ComrakOptions {
            render: comrak::ComrakRenderOptions {
                unsafe_: true,
                ..Default::default()
            },
            ..Default::default()
        }));
        nav_html.push_str("</nav>");

        return nav_html;
    }

    return String::new();
}

fn copy_dir_all(src: impl AsRef<Path>, dst: impl AsRef<Path>) -> Result<()> {
    fs::create_dir_all(&dst)?;
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let ty = entry.file_type()?;
        if ty.is_dir() {
            copy_dir_all(entry.path(), dst.as_ref().join(entry.file_name()))?;
        } else {
            fs::copy(entry.path(), dst.as_ref().join(entry.file_name()))?;
        }
    }
    Ok(())
}
