import type { Handler, PageProps } from "$fresh/server.ts";
import { join } from "$std/path/mod.ts";
import Container from "../components/Container.tsx";
import Header from "../components/Header.tsx";
import MoreButton from "../islands/MoreButton.tsx";

export default function Home(props: PageProps<{ image: string }>) {
	return (
		<div class="relative h-full flex flex-col justify-center overflow-hidden">
			<img
				src={props.data.image}
				class="absolute top-32 w-5/6 md:(top-16 w-4/6) object-cover opacity-40 z-0 rounded pointer-events-none"
			/>
			<div class="z-10">
				<Container>
					<Header />
					<a
						href="/more"
					>
						<MoreButton />
					</a>
				</Container>
			</div>
		</div>
	);
}

export const handler: Handler = async (_, ctx) => {
	const files = Deno.readDir(join("static", "images"));
	const images = [];

	for await (const file of files) {
		file.isFile && images.push(join("images", file.name));
	}

	return ctx.render({
		image: images[Math.floor(Math.random() * images.length)]
	});
}