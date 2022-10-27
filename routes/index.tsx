import "$std/dotenv/load.ts";
import type { Handler, PageProps } from "$fresh/server.ts";
import { join } from "$std/path/mod.ts";
import Container from "../components/Container.tsx";
import Header from "../components/Header.tsx";
import Card from "../components/Card.tsx";

export default function Home(props: PageProps<{ image: string }>) {
	return (
		<div class="relative h-full flex justify-center">
			<img
				src={props.data.image}
				class="fixed top-2 left-0 w-5/6 md:(w-4/6) object-cover z-0 rounded opacity-40 pointer-events-none"
			/>
			<div class="z-10 py-32" style={{ height: "min-content" }}>
				<Container>
					<Header />
				</Container>
				<Container class="mt-4 space-y-4">
				<h1 class="text-6xl">
					More...
				</h1>
				<Card title="Student" image="images/faculty.jpg">
							I study at the <a href="https://flls.unibuc.ro" target="_blank">Faculty of Foreign Languages and Literatures</a>.
							Currently studying English and Slovak. I am aiming to not only help myself,
							but also help other students and the faculty in any way I can.
						</Card>
						<Card title="Volunteering" image="images/volunteer.jpg">
							Volunteering helped me shape up to be what I am. I own 3 youthpasses. I traveled to{" "}
							<a href="https://en.wikipedia.org/wiki/Ankara" target="_blank">Ankara</a>, <a href="https://en.wikipedia.org/wiki/Istanbul" target="_blank">Istanbul</a>,{" "}
							<a href="https://ro.wikipedia.org/wiki/Sinaia" target="_blank">Sinaia</a> and much more. 
						</Card>
						<Card title="Music" image="images/guitar.jpg">
							I love music. From Country, Indie and Jazz to Rock, Pop and Phonk. I also
							love to make music. Music has always been a way for me to express my 
							feelings, stories and love.
						</Card>
						<Card title="Art" image="images/draw.jpg">
							I also love simple, minimalist art. The "just enough to express".
							I have numerous drawings but I keep them to myself as a private
							wallpaper gallery. 
						</Card>
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
