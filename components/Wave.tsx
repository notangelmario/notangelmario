import { tw } from "twind";

type Props = {
	upsideDown?: boolean;
}

export default function Wave(props: Props) {
	return (
		<div
			class={tw`
				h-16
				${props.upsideDown ? "transform rotate-180 -mt-px" : "-mb-px"}
			`}
		>
			<svg 
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
				width="100%"
				height="100%"
				style=""
			>
			<style>
				{`path {
					fill: #212121;
				}`}
			</style>
				<path fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,96C384,85,480,107,576,122.7C672,139,768,149,864,176C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
			</svg>
		</div>
	)
}