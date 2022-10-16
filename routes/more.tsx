import { Handler } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "gfm";
import Container from "../components/Container.tsx";
import Wave from "../components/Wave.tsx";

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
			<div class="">
				<Wave/>
				<div class="bg-white dark:bg-dark py-4">
					<Container>
						<div
							class="mb-4 markdown-body w-full"
							data-color-mode="light" data-light-theme="light" data-dark-theme="dark"
							dangerouslySetInnerHTML={{ __html: markdown }}
						></div>
					</Container>
				</div>
				<Wave upsideDown/>
				<a
					href="mailto:savin@angelmario.eu"
					class="text-center text-dark no-underline"
				>
					savin@angelmario.eu
				</a>
			</div>
		</>
	);
}


export const handler: Handler = async (_, ctx) => {
	const text = await Deno.readTextFile("MORE.md");

	const markdown = render(text)

	return ctx.render({ markdown })
}