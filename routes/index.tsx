import Container from "../components/Container.tsx";
import Header from "../components/Header.tsx";
import Links from "../components/Links.tsx";
import Wave from "../components/Wave.tsx";

export default function Home(props: PageProps<{ headerImage: string }>) {
	return (
		<div class="h-full flex flex-col justify-center">
			<Wave/>
			<div class="bg-white dark:bg-dark py-4">
				<Container>
					<Header />
					<Links />
				</Container>
			</div>
			<Wave upsideDown/>
		</div>
	);
}