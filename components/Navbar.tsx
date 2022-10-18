


export default function Navbar() {
	return (
		<>
			<nav
				class="fixed top-0 left-0 w-full h-16 py-2 px-4 flex items-center bg-dark gap-4 shadow-lg"
			>
				<img 
					src="/profile.png"
					class="h-full rounded-full"
					alt="Profile Picture"
				/>
				<a
					href="/wrote"
				>
					Home
				</a>
			</nav>
			<div class="h-16"/>
		</>
	)
}