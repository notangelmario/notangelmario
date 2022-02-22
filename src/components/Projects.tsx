import { useState } from 'react';
import { Typography, Card, CardMedia, CardActionArea, Box, Container, Stack, Grid, Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@mui/material'
import { projects } from '../lib/projects'
import { ReactComponent as Wave }  from '../assets/wave.svg'



function Projects() {
	const [dialogOpen, setDialogOpen] = useState(false)
	const [projectSelected, setProjectSelected] = useState<number>(0)

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
		}}>
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
				<Wave width='100%' height='128'/>
			</Box>
			<Box
				sx={{
					backgroundColor: 'background.paper',
				}}
			>
				<Container>
					<Stack>
						<Typography
							variant='h3'
						>
							Projects
						</Typography>
						<Grid
							container
							direction='row'
							spacing={2}
							sx={{
								marginLeft: theme => `-${theme.spacing(2)}!important`,
							}}
						>
							{projects.map((project, idx) => (
								<Grid 
									key={project.name}
									item
									xs={12}
									sm={6}
								>
									<Card
										sx={{
											backgroundColor: 'background.default',
										}}
									>
										<CardActionArea
											onClick={() => {
												setProjectSelected(idx)
												setDialogOpen(true)
											}}
										>
											<CardMedia
												image={project.cover}
												sx={{
													backgroundColor: 'background.default',
													backgroundPosition: 'center',
													height: '128px',
												}}
											/>
										</CardActionArea>
									</Card>
								</Grid>
							))}
						</Grid>
					</Stack>
				</Container>
			</Box>
			<Box
				sx={{
					display: 'flex',
					maxWidth: '100%',
					overflow: 'hidden',
					transform: 'rotate(180deg)',
					'& > *': {
						fill: theme => theme.palette.background.paper,
					}
				}}
			>
				<Wave width='100%' height='128'/>
			</Box>
			<Dialog
				open={dialogOpen}
				onClose={() => setDialogOpen(false)}
				maxWidth='md'
				fullWidth
			>
				<img
					src={projects[projectSelected].cover}
					alt={projects[projectSelected].name}
					style={{
						backgroundColor: 'white',
						minHeight: '128px',
						objectFit: 'contain',
					}}
				/>
				<DialogContent>
					<Typography
						variant='h4'
					>
						About {projects[projectSelected].name}
					</Typography>
					<DialogContentText>
						{projects[projectSelected]?.description}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => setDialogOpen(false)}
					>
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default Projects