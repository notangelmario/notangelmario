import { links } from "../lib/links.ts";

export default function Links() {
	return (
		<div
			class="flex flex-row gap-x-2 flex-wrap"
		>
			{links.map((link, idx) => (
				<a
					class="block"
					target="_blank"
					key={idx}
					href={link.url}
				>
					<img
						src={`/icons/${link.icon}.svg`}
						class="w-8 h-8 filter invert"
					/>
				</a>
			))}
		</div>
	)
}