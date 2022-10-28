export default function Button(props: { children: string; class?: string }) {
	return (
		<button
			class={`
				bg-purple rounded block 
				text-center mx-auto text-dark 
				mt-4 py-2 px-4

				${props.class || ""}
			`}
		>
			{props.children}
		</button>
	);
}
