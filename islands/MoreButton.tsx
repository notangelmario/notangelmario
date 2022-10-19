import { useEffect, useState } from "preact/hooks";
import Button from "../components/Button.tsx";

export default function MoreButton() {
	const [roundedCorners, setRoundedCorners] = useState([false, true, false, true]);
	
	useEffect(() => {
		const interval = setInterval(() => {
			setRoundedCorners([
				Math.random() < 0.5,
				Math.random() < 0.5,
				Math.random() < 0.5,
				Math.random() < 0.5
			])
		}, 1500);

		return () => {
			clearInterval(interval);
		}
	})

	return (
		<Button
			class={`
				${roundedCorners[0] ? "rounded-tl-3xl" : "rounded-tl-none"}
				${roundedCorners[1] ? "rounded-tr-3xl" : "rounded-tr-none"}
				${roundedCorners[2] ? "rounded-br-3xl" : "rounded-br-none"}
				${roundedCorners[3] ? "rounded-bl-3xl" : "rounded-bl-none"}

				transition-all duration-500 linear
			`}
		>
			There's more...
		</Button>
	)
}