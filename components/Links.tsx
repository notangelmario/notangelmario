import { links } from "../lib/links.ts";

export default function Links() {
	return (
		<div
			class="flex flex-row gap-x-2 flex-wrap"
		>
			{links.map((link, idx) => (
				<>
					<a
						class="underline block"
						target="_blank"
						key={idx}
						href={link.url}
					>
						{link.name}
					</a>
					{idx !== links.length - 1 && (
						<span>&middot;</span>
					)}
				</>
			))}
		</div>
	)
}