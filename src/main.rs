use clap::{Parser, Subcommand};
use std::{path::Path, process};
use crate::compiler::{
    get_files, 
    generate_build_dir, 
    generate_markdown_files, 
    generate_footer, 
    generate_nav,
    MarkdownFile
};

mod compiler;

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
struct Args {
    #[command(subcommand)]
    command: Commands
}

#[derive(Subcommand)]
enum Commands {
    /// Builds the site
    Build {
        /// Sets the static folder location
        #[arg(short, long, value_parser = directory_validator, default_value_t = String::from("static"))]
        static_dir: String,

        /// Sets the build folder location
        #[arg(short, long, default_value_t = String::from("build"))]
        build_dir: String,

        /// Sets the pages folder location
        #[arg(short, long, value_parser = directory_validator, default_value_t = String::from("pages"))]
        pages_dir: String,
    } 
}

fn main() {
    let args = Args::parse();

    match &args.command {
        Commands::Build { static_dir, build_dir, pages_dir } => {
            if !Path::new(pages_dir).is_dir() {
                eprintln!("Couldn't find pages directory!");
                process::exit(1);
            }
            
            println!("Started build step...\n");

            let markdown_files: Vec<MarkdownFile> = get_files(pages_dir);
            let footer: String = generate_footer(&pages_dir);
            let nav: String = generate_nav(&pages_dir);

            generate_build_dir(&build_dir, &static_dir);
            
            println!("Generating markdown files...");
            generate_markdown_files(&markdown_files, &build_dir, &nav, &footer);

            println!("Successfully built {} markdown files", markdown_files.len());
        }
    }

}

fn directory_validator(s: &str) -> Result<String, String> {
    if Path::new(&s).is_dir() {
        Ok(s.to_string())
    } else {
        Err(format!("{} is not a directory", s))
    }
}
