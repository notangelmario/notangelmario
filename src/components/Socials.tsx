import { useState } from 'react'
import { 
	Collapse, 
	Paper, 
	List, 
	ListItemButton, 
	ListItemAvatar, 
	ListItemIcon, 
	Avatar, 
	ListItemText
} from '@mui/material'
import { 
	ExpandMore as ExpandMoreIcon
} from '@mui/icons-material'
import { socials } from '../lib/socials'




function Socials() {
	const [open, setOpen] = useState(false)
	
	return (
		<List component={Paper}>
			<ListItemButton
				onClick={() => setOpen(!open)}
			>
				<ListItemIcon>
					<ExpandMoreIcon
						sx={{
							transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
							transition: 'transform 0.2s ease-in-out',
						}}
					/>
				</ListItemIcon>
				<ListItemText
					primary='@notangelmario'
				/>
			</ListItemButton>
			<Collapse in={open}>
				<List>
					{socials.map((social) => (
						<ListItemButton 
							key={social.name}
							href={social.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							<ListItemAvatar>
								<Avatar sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
									{social.icon}
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={social.name}
							/>
						</ListItemButton>
					))}
				</List>
			</Collapse>
		</List>
	)
}

export default Socials
