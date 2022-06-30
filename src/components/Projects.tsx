import { useState } from 'react';
import { Typography, Card, CardMedia, CardActionArea, Box, Container, Stack, Grid, Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@mui/material'
import { projects } from '../lib/projects'
import { ReactComponent as Wave }  from '../assets/wave.svg'



function Projects() {
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
											overflow: 'hidden'
										}}
									>
										<CardActionArea
											component="a"
											target="_blank"
											rel="noopener noreferrer"
											href={project?.url}
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
		</div>
	)
}

export default Projects