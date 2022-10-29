use crate::MarkdownFile;
use walkdir::WalkDir;
use std::{path::Path, io::Result, fs::{self, create_dir_all}};
use markdown;

pub fn get_files(pages_dir: &str) -> Vec<MarkdownFile> {
    let mut markdown_files: Vec<MarkdownFile> = Vec::new();
    

    let walker = WalkDir::new(pages_dir).into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.metadata().unwrap().is_file());


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


pub fn generate_build_dir(build_dir: &str, static_dir: &str) {
    fs::create_dir_all(build_dir)
        .expect("Couldn't generate build directory");

    copy_dir_all(static_dir, build_dir)
        .expect("Couldn't copy static files to build directory");
}

pub fn generate_markdown_files(markdown_files: &Vec<MarkdownFile>, build_dir: &str) {
    for md_file in markdown_files.iter() {
        let path = Path::new(&md_file.path);
        let mut split: Vec<&str> = path.to_str()
            .unwrap()
            .split("/")
            .collect();

        split.drain(0..1);

        println!("{:?}", split);

        

        let html = markdown::to_html(&md_file.body);
        let new_path = 
            build_dir.to_owned() + 
            "/" + 
            &split.join("/")
                .replace(".md", ".html");

        println!("{}", new_path);

        if split.len() > 1 {
            create_dir_all(Path::new(&new_path).parent().unwrap())
                .expect("");
        }

        fs::write(new_path, html).unwrap();
    }
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
