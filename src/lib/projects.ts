type Project = {
	name: string;
	cover: string;
	description: string;
	url?: string;
}

const projects: Project[] = [
	{
		name: 'Paquet',
		cover: '/assets/paquet.png',
		description: 'From the ashes of Pingy, Paquet is a new delivery service better than ever before. A platform that allows you to easily order food from nearby shops.'
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