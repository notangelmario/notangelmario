import Container from "../components/Container.tsx";
import Header from "../components/Header.tsx";
import Links from "../components/Links.tsx";
import Wave from "../components/Wave.tsx";

export default function Home() {
	return (
		<div class="h-full flex flex-col justify-center bg-purple">
			<Wave/>
			<div class="bg-dark py-4">
				<Container>
					<Header />
					<Links />
					<a
						href="/more"
						class="bg-purple rounded block text-center mx-auto text-dark mt-4 no-underline py-2 px-4"
					>
						There's more...
					</a>
				</Container>
			</div>
			<Wave upsideDown/>
		</div>
	);
}