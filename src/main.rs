use clap::Parser;
use std::{path::Path, process};
use crate::files::{get_files, generate_build_dir, generate_markdown_files};

mod files;

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
struct Args {
    #[arg(short, long, value_parser = directory_validator, default_value_t = String::from("static"))]
    static_dir: String,
    #[arg(short, long, value_parser = directory_validator, default_value_t = String::from("build"))]
    build_dir: String,
    #[arg(short, long, value_parser = directory_validator, default_value_t = String::from("pages"))]
    pages_dir: String,
}

#[derive(Debug)]
pub struct MarkdownFile {
    path: String,
    body: String
}

fn main() {
    let args = Args::parse();

    let build_dir: &str = args.build_dir.as_str();
    let static_dir: &str = args.static_dir.as_str();
    let pages_dir: &str = args.pages_dir.as_str();

    if !Path::new(pages_dir).is_dir() {
        eprintln!("Couldn't find pages directory!");
        process::exit(1);
    }
    
    println!("Started build step...\n");

    let markdown_files = get_files(pages_dir);
    
    generate_build_dir(&build_dir, &static_dir);
    generate_markdown_files(&markdown_files, &build_dir);

    println!("Successfully built {} markdown files", markdown_files.len());
}

fn directory_validator(s: &str) -> Result<String, String> {
    if Path::new(&s).is_dir() {
        Ok(s.to_string())
    } else {
        Err(format!("{} is not a directory", s))
    }
}
