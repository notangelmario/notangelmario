/**@jsx h */
/**@jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Handler, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import Container from "../components/Container.tsx";
import Header from "../components/Header.tsx";

export default function Home(props: PageProps<{ headerImage: string }>) {
	return (
		<>
			<Header headerImage={props.data.headerImage} />
			<Container>
				<h1 class={tw`text-3xl`}>
					Savin Angel-Mario
				</h1>
			</Container>
		</>
	);
}

export const handler: Handler = (_, ctx) => {
	const URL = "https://source.unsplash.com/collection/1614965/1920x1080";

	return ctx.render({
		headerImage: URL,
	});
};
