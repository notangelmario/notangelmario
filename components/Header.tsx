import Links from "./Links.tsx";

export default function Header() {
	return (
		<div class="relative mb-4 bg-darkish rounded p-8">
			<img
				src="/profile.png"
				class="absolute rounded-full w-32 h-32 -top-16 border-8 border-darkish"
			/>
			<div class="mt-12">
				<h1 class="text-2xl font-bold mb-2 md:text-5xl">
					Savin Angel-Mario
				</h1>
				<p>
					Hi! I'm a student and a big time tech enthusiast. I am the
					founder and main developer of{" "}
					<a href="https://fructo.land" target="_blank">Fructo</a>. I
					also built some apps like{" "}
					<a href="https://marker.fructo.land" target="_blank">
						Marker
					</a>{" "}
					and <a href="https://paquet.shop" target="_blank">Paquet</a>.
				</p>
				<Links />
			</div>
		</div>
	);
}
