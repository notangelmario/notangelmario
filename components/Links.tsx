/**@jsx h */
/**@jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { links } from "../lib/links.ts";

export default function Links() {
	return (
		<div
			class={tw`flex flex-row gap-x-2 flex-wrap`}
		>
			{links.map((link, idx) => (
				<>
					<a
						class={tw`underline block`}
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