import type { Handler, PageProps } from "$fresh/server.ts"
import { join } from "$std/path/mod.ts";
import { extract } from "$std/encoding/front_matter.ts";
import Navbar from "../../components/Navbar.tsx";
import Container from "../../components/Container.tsx";

export default function Wrote(props: PageProps<{ pages: Page[] }>) {
	return (
		<>
			<Navbar pathname={props.url.pathname} />
			<Container
				class="space-y-2 mt-2"
			>
				{props.data.pages.map((page, idx) => (
					<a
						key={idx}
						href={page.link}
						class="block text-white no-underline p-4 border border-darkish rounded"
					>
						<h2
							class="text-3xl no-underline"
						>
							{page.title}
						</h2>
						<p
							class="opacity-50 no-underline"
						>
							{page.description}{" "}
							&middot;{" "}
							{page.tags.map((tag) => "#" + tag + " ")}
						</p>
					</a>
				))}
			</Container>
		</>
	)
}


export interface Page {
	title: string;
	description: string;
	tags: string[];

	link: string;
}

export const handler: Handler = async (_, ctx) => {
	const files = Deno.readDir("blog");
	const pages = []

	for await (const file of files) {
		const page = await Deno.readTextFile(join("blog", file.name))

		const meta = extract<Page>(page);

		pages.push({
			...meta.attrs,
			link: `/wrote/${file.name.slice(0, -3)}`
		});
	}

	return ctx.render({
		pages
	})
}