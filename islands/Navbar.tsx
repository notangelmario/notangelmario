/**@jsx h */
import { h } from "preact";
import { tw } from "@twind";

export type Props = {
	back?: boolean;
};

export default function Navbar(props: Props) {
	return (
		<div
			class={tw`
					fixed flex w-full bg-white dark:bg-dark
					-top-px left-0 right-0
					items-center content-center
					
					shadow-md

					px-2 py-2 z-30
				`}
		>
			<div>
				{props.back && (
					<button
						onClick={() => history.back()}
					>
						<span class={tw`material-symbols-outlined align-middle`}>
							arrow_back
						</span>
					</button>
				)}
			</div>
		</div>
	);
}