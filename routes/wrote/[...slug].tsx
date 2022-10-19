import type { Handler, PageProps } from "$fresh/server.ts";
import { extract } from "$std/encoding/front_matter.ts";
import { Head } from "$fresh/runtime.ts";
import { render, CSS } from "gfm"; 
import type { Page } from "./index.tsx";
import { join } from "$std/path/mod.ts";
import Container from "../../components/Container.tsx";
import Navbar from "../../components/Navbar.tsx";

export default function Writing(props: PageProps<{ html: string, tags: string[] }>) {
	return (
		<>
			<Head>
				<style>
					{CSS}
				</style>
			</Head>
			<Navbar pathname={props.url.pathname} />
			<Container
				class="py-4"
			>
				<div 
					class="markdown-body mb-4"
					data-color-mode="light" data-light-theme="light"
					dangerouslySetInnerHTML={{ __html: props.data.html }}
				/>
				<p class="font-bold">
					{props.data.tags.map((tag) => "#" + tag + " ")}
				</p>
			</Container>
		</>
	)
}

export const handler: Handler = async (req, ctx) => {
	const url = new URL(req.url);
	const fileName = `${url.pathname.replace("/wrote/", "")}.md`;
	const file = await Deno.readTextFile(join("blog", fileName));

	const extracted = extract<Page>(file);

	const html = render(extracted.body);

	return ctx.render({
		html,
		tags: extracted.attrs.tags
	})
}