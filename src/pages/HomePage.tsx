import { Container, Typography, Stack } from '@mui/material'
import Header from '../components/Header'
import Socials from '../components/Socials'
import Projects from '../components/Projects'
import Music from '../components/Music'
import GitHubStats from '../components/GitHubStats'


type Props = {
	wallUrl: string
}


function HomePage(props: Props) {
	return (
		<>
			<Header imageUrl={props.wallUrl} />
			<Container>
				<Stack>
					<Typography
						variant='h2'
					>
						Savin Angel-Mario
					</Typography>
					<Socials />
				</Stack>
			</Container>
			<Projects />
			<Container>
				<Stack>
					<Music />
					<GitHubStats />
				</Stack>
			</Container>
		</>
	)
}


export default HomePage