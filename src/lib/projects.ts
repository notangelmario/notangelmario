type Project = {
	name: string;
	cover: string;
	url?: string;
}

const projects: Project[] = [
	{
		name: 'Discutii fara perdea',
		cover: '/assets/podcast.png',
		url: "https://anchor.fm/discutii_fara_perdea"
	},
	{
		name: 'Paquet',
		cover: '/assets/paquet.png',
		url: "https://paquet.shop"
	},
	{
		name: 'Pingy',
		cover: '/assets/pingy.png',
		url: "https://pingy.ro"
	},
	{
		name: 'Solander',
		cover: '/assets/solander.png',
		url: "https://github.com/notangelmario/solander"
	}
]


export {
	projects
}