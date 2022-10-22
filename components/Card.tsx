import type { JSX } from "preact";

interface Props {
	title: string;
	image: string; 
}

export function Card(props: Props & JSX.IntrinsicElements["div"]) {
	return (
		<div
			class="relative rounded p-8 overflow-hidden"
		>
			<h2 class="relative z-10 text-5xl text-bold">
				{props.title}
			</h2>
			<p class="relative z-10">
				{props.children}
			</p>
			<img 
				src={props.image}
				class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
			/>
		</div>	
	)
}