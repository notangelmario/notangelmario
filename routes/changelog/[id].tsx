/**@jsx h */
/**@jsxFrag Fragment */
import { h, Fragment } from "preact";
import { join } from "$std/path/mod.ts";
import { render, CSS } from "gfm";
import { tw } from "@twind";
import { css } from "twind/css";
import { Head } from "$fresh/runtime.ts";
import { PageProps, Handler } from "$fresh/server.ts";
import Navbar from "../../islands/Navbar.tsx";
import Container from "../../components/Container.tsx";

type DataProps = {
	content: string;
}

export default function Changelog(props: PageProps<DataProps>) {
	return (
		<>
			<Head>
				<style>
					{CSS}
				</style>
			</Head>
			<Navbar back />
			<Container
				data-color-mode="auto"
				data-light-theme="light" 
				data-dark-theme="dark"
				class={tw`mt-16 markdown-body ${css({
					"ol, ul": {
						listStyle: "inherit!important"
					}
				})}`}
				dangerouslySetInnerHTML={{ __html: props.data.content }}
			/>
		</>
	)
}

export const handler: Handler = async (_, ctx) => {
	const id = ctx.params.id;

	const file = await Deno.readTextFile(join("docs", "life-changelog", `${id}.md`));
	const content = render(file);

	return ctx.render({
		content,
	})
}