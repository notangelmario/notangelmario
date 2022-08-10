/**@jsx h */
/**@jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { join } from "$std/path/mod.ts";
import { PageProps, Handler } from "$fresh/server.ts";
import Container from "../../components/Container.tsx";
import Navbar from "../../islands/Navbar.tsx";

type DataProps = {
	changelogs: string[];
}

export default function ChangelogRoot(props: PageProps<DataProps>) {
	return (
		<>
			<Navbar back />
			<Container class={tw`mt-16`}>
				<h1
					class={tw`text-4xl`}
				>
					Life changelog
				</h1>
				<ul>
					{props.data.changelogs.map((changelog, idx) => (
						<li key={idx}>
							<a 
								href={join("/changelog", changelog.slice(0, -3))}
								class={tw`underline`}
							>
								&middot; {changelog.replace("-", ".").slice(0, -3)}
							</a>
						</li>	
					))}
				</ul>
			</Container>
		</>
	)
}

export const handler: Handler = async (_, ctx) => {
	const changelogs = await Deno.readDir(join("docs", "life-changelog"))
	const changelogsList = [] as string[];


	for await (const dirEntry of changelogs) {
		changelogsList.push(dirEntry.name);
	}

	return ctx.render({
		changelogs: changelogsList,
	});
}