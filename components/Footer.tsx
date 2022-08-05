/**@jsx h */
import { h } from "preact";
import { tw } from "@twind";


export default function Footer() {
	return (
		<footer
			class={tw`bg-primary rounded-t text-center text-black p-4`}
		>
			<h1>Made with <span role="img">❤</span></h1>
			<p>&copy; Savin Angel-Mario 2022</p>
		</footer>
	)
}