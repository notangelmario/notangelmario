use std::{path::Path, process};
use crate::files::{get_files, generate_build_dir, generate_markdown_files};

mod files;

#[derive(Debug)]
pub struct MarkdownFile {
    path: String,
    body: String
}

fn main() {
    let build_dir: &str = "build";
    let static_dir: &str = "static";
    let pages_dir: &str = "pages";

    if !Path::new(pages_dir).is_dir() {
        eprintln!("Couldn't find pages directory!");
        process::exit(1);
    }

    println!("Started build step...\n");

    let markdown_files = get_files(pages_dir);
    
    generate_build_dir(build_dir, static_dir);
    generate_markdown_files(&markdown_files, build_dir);

    println!("Successfully built {} markdown files", markdown_files.len());
}
