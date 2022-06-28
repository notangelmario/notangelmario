type Project = {
	name: string;
	cover: string;
	description: string;
	url?: string;
}

const projects: Project[] = [
	{
		name: 'O sama de cuvinte',
		cover: '/assets/podcast.jpg',
		description: 'A new podcast made by me to share with others my experience and my point of view.'
	},
	{
		name: 'Paquet',
		cover: '/assets/paquet.png',
		description: 'From the ashes of Pingy, Paquet is a new platform made by the community for the community.'
	},
	{
		name: 'Pingy',
		cover: '/assets/pingy.png',
		description: 'A delivery service for local shops and communities. Pingy was a cross-platform app available to everyone. Unfortunately, it is no longer available due to funding.'
	},
	{
		name: 'Solander',
		cover: '/assets/solander.png',
		description: 'A web app for searching a local area near you and meeting up with friends. Finding out about local events, callouts for places, dangers, and more. Unfortunately, it was shutdown due to low demand.'
	}
]


export {
	projects
}