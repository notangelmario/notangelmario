const URL = 'https://source.unsplash.com/collection/1614965/1920x1080'


async function fetchWall() {
	return await fetch(URL)
		.then(response => response.url)
}

export {
	fetchWall
};