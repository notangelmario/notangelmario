const links = [
	{
		href: "/more",
		title: "More"
	}
]

interface Props {
	pathname: string
}

export default function Navbar(props: Props) {
	return (
		<>
			<nav
				class="fixed top-0 left-0 w-full h-16 py-2 px-4 flex items-center bg-dark shadow-lg z-20"
			>
				<a
					href="/"
					class="block mr-4 h-full"
				>
					<img 
						src="/profile.png"
						class="h-full rounded-full"
						alt="Profile Picture"
					/>
				</a>
				{links.map((link) => (
					<a
						href={link.href === props.pathname ?  undefined : link.href}
						class={`p-4 ${link.href === props.pathname ? "text-white no-underline" : ""}`}
					>
						{link.title}
					</a>
				))}
			</nav>
			<div class="h-16"/>
		</>
	)
}