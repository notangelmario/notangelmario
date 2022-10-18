import { join } from "$std/path/mod.ts";
import { Handler } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "gfm";
import Container from "../components/Container.tsx";
import Wave from "../components/Wave.tsx";
import Navbar from "../components/Navbar.tsx";

export default function Home({ data: { markdown } }: { data: { markdown: string } }) {
	return (
		<>
			<Head>
				<style>
					{`
						img {
							object-fit: cover;
							max-height: 150px;
							border-radius: 1.5rem;
						}
					`}
					{CSS}
				</style>
			</Head>
			<Navbar />
			<div class="pb-16">
				<div class="bg-dark py-4">
					<Container>
						<div
							class="mb-4 markdown-body w-full"
							data-color-mode="dark" data-dark-theme="dark"
							dangerouslySetInnerHTML={{ __html: markdown }}
						></div>
					</Container>
				</div>
				<Wave upsideDown/>
			</div>
		</>
	);
}


export const handler: Handler = async (_, ctx) => {
	const text = await Deno.readTextFile(join("static", "MORE.md"));

	const markdown: string = render(text);
	
	return ctx.render({ markdown });
}