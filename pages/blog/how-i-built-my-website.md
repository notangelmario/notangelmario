---
title: How I built my website &middot; Savin Angel-Mario
description: How I made my website using a custom framework built in rust
---

![](https://www.pngitem.com/pimgs/m/346-3468947_images-rust-lang-ar21-rust-programming-language-logo.png)

# How I built my website

> Published on 30.10.2022
>
> 2 min read

Hello there! This is my first blog. If you are seeing this, well, good news.
This sucker actually works.

If you read my [programming page](/programming), you already know I decided
to build my website using a custom framework.

## Why?

I wanted something simple, fast, but flexible. I searched the web a lot
but nothing satisifed me. I tried using plain HTML, vanilla JS, [fresh](https://fresh.deno.dev),
[Astro](https://astro.build). I even tried using GitHub's Pages service.
Not enough flexibility.

## So...

I decided to make my own page framework. I first started using Deno to build it
but then I though to myself: "Hey, what if I built it in Rust?". I just started
learning Rust so I though it would be a great exercise to get comfortable with
the language.

## The process

I wanted to use Markdown to make my pages. I didn't want anything too fancy.
I already heavily use Markdown to write my documents.

I love the gruvbox colorscheme so I decided to use that as a my theme.

So I got to building, it took me like 3 days but in the end it
did what it needed to do - generate HTML from Markdown files

This custom framework supports:

* Custom metadata
* Custom footer
* Using a static folder
* Nesting
* Using custom input and output directories

## Fin

This is just a simple blog to test out my framework, that's why I made it this short.
