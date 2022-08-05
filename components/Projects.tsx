/**@jsx h */
/**@jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { projects } from "../lib/projects.ts";

export default function Projects() {
	return (
		<>
			<h2 class={tw`text-4xl`}>Projects</h2>
			<div
				class={tw`grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2`}
			>
				{projects.map((project, idx) => (
					<a
						key={idx}
						href={project.url}
					>
						<div
							class={tw`rounded bg-paper-light text-black dark:(bg-paper-dark text-white)`}
						>
							<img
								src={project.image}
								alt={project.name}
								class={tw`rounded max-h-24 object-cover`}
							/>
							<h1
								class={tw`py-2 px-4`}
							>
								{project.name}
							</h1>
						</div>
					</a>
				))}
			</div>
		</>
	)
}