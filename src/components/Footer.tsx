import { ReactComponent as Wave } from '../assets/wave.svg'
import { Container, Box, Typography, IconButton, Stack } from '@mui/material'
import { socials } from '../lib/socials'



function Footer() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					maxWidth: '100%',
					overflow: 'hidden',
					'& > *': {
						fill: theme => theme.palette.background.paper,
					}
				}}
			>
				<Wave width='100%' height='64'/>
			</Box>
			<Box
				sx={{
					backgroundColor: 'background.paper',
					paddingBottom: theme => theme.spacing(2),
				}}
			>
				<Container>
					<Stack
						justifyContent='center'
						alignItems='center'
						alignContent='center'
					>
						<Typography>
							Made with <span role='img' aria-label='love'>❤️</span> by me
						</Typography>
						<Stack
							direction='row'
							justifyContent='center'
							spacing={1}
						>
							{socials.slice(0, 3).map(social => (
								<IconButton
									key={social.name}
									href={social.url}
									target='_blank'
									rel='noopener'
									aria-label={social.name}
								>
									{social.icon}
								</IconButton>
							))}
						</Stack>
					</Stack>
				</Container>	
			</Box>
		</div>
	)
}

export default Footer