import Container from "../components/Container.tsx";
import Wave from "../components/Wave.tsx";
import Navbar from "../components/Navbar.tsx";
import { Card } from "../components/Card.tsx";
import { PageProps } from "$fresh/server.ts";

export default function More(props: PageProps) {
	return (
		<>
			<Navbar pathname={props.url.pathname}/>
			<div class="pb-16 bg-purple">
				<div class="bg-dark py-4">
					<Container class="space-y-4">
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
				<Wave upsideDown/>
			</div>
		</>
	);
}