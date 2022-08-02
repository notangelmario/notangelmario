/**@jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Container from "./Container.tsx";

type Props = {
	headerImage: string;
};

export default function Header(props: Props) {
	return (
		<div
			class={tw`relative h-56`}
		>
			<div
				class={tw`absolute rounded-b h-44 w-full`}
				style={{
					backgroundImage: `url(${props.headerImage})`,
				}}
			>
			</div>
			<Container>
				<div
					class={tw`
						absolute
						flex justify-center items-center
						rounded-full w-36 h-36
						mt-20
						bg-white dark:bg-dark
					`}
				>
					<img
						class={tw`
							rounded-full w-32 h-32
						`}
						src="/profile.png"
					/>
				</div>
			</Container>
		</div>
	);
}
