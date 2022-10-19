import Links from "./Links.tsx";

export default function Header() {
	return (
		<div
			class="flex gap-4 mb-4"
		>
			<img
				src="/profile.png"
				class="w-16 h-16 rounded-full md:(w-48 h-48)"
			/>
			<div>
				<h1
					class="text-2xl font-bold mb-2 md:text-5xl"
				>
					Savin Angel-Mario
				</h1>
				<p>
					Hi! I'm a student and a big time tech enthusiast.
					I am the founder and main developer of <a href="https://fructo.land" target="_blank">Fructo</a>.
					I also built some apps like <a href="https://miniated.fructo.land" target="_blank">Miniated</a> and{" "}
					<a href="https://paquet.shop" target="_blank">Paquet</a>
				</p>
				<Links />
			</div>
		</div>
	);
}
