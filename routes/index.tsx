/**@jsx h */
/**@jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Handler, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import Container from "../components/Container.tsx";
import Header from "../components/Header.tsx";
import Links from "../components/Links.tsx";
import Projects from "../components/Projects.tsx";
import Stack from "../components/Stack.tsx";
import Wave from "../components/Wave.tsx";

export default function Home(props: PageProps<{ headerImage: string }>) {
	return (
		<>
			<Header headerImage={props.data.headerImage} />
			<Container>
				<h1 class={tw`text-4xl`}>
					Savin Angel-Mario
				</h1>
				<Links />
				<a
					href="/changelog"
					class={tw`
						mt-2
						p-4
						block
						bg-primary
						text-black
						rounded
					`}
				>
					<span class={tw`!text-base !align-middle material-symbols-outlined mr-2`}>
						history
					</span>
					Life Changelog
					<span
						class={tw`p-2 bg-green-500 rounded-full text-xs align-middle ml-2`}
					>
						NEW
					</span>
				</a>	
			</Container>			
			<Wave color="#d4cafa"/>
			<div
				class={tw`bg-primary text-black`}
			>
				<Container>
					<Stack>
						<Projects />
					</Stack>
				</Container>
			</div>
			<Wave color="#d4cafa" upsideDown/>
		</>
	);
}

export const handler: Handler = (_, ctx) => {
	const URL = "https://source.unsplash.com/collection/1614965?w=1080";

	return ctx.render({
		headerImage: URL,
	});
};
