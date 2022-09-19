import type { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App(props: AppProps) {
	return (
		<html>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=0"
				/>
				<link rel="icon" href="/profile.png" />
				<meta name="color-scheme" content="light dark" />
				<meta
					name="theme-color"
					content="#d4cafa"
				/>

				<title>Savin Angel-Mario</title>
				<meta
					name="description"
					content="My bio"
				/>

				<link href="/global.css" rel="stylesheet" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Fredoka:wght@100;300;400;500;700&display=swap"
				/>
			</Head>
			{/* @ts-ignore */}
			<main class="h-full" onTouchStart="">
				<props.Component />
			</main>
		</html>
	);
}
