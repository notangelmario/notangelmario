import Spotify from 'react-spotify-embed'
import { Typography, Stack, Grid, useTheme } from '@mui/material'
import { musicLinks } from '../lib/music'



function Music() {
	const theme = useTheme()

	return (
		<Stack>
			<Typography
				variant='h3'
			>
				Music
			</Typography>
			<Grid
				container
				direction='row'
				spacing={2}
				sx={{
					marginLeft: theme => `-${theme.spacing(2)}!important`,
				}}
			>
				{musicLinks.map((link, idx) => (
					<Grid
						key={idx}
						item
						xs={12}
						sm={6}
					>
						<Spotify
							link={link}
							width='100%'
							wide
							style={{
								borderRadius: theme.shape.borderRadius,
							}}
						/>
					</Grid>
				))}
			</Grid>
		</Stack>
	)
}

export default Music