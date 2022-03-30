import { useState } from 'react';
import { Alert, AlertTitle, Slide, Snackbar } from "@mui/material";
import ad from '../lib/ad'


function AdBanner() {
	const [open, setOpen] = useState(ad.enabled);

	return (
		<Snackbar
			open={open}
			anchorOrigin={{
				horizontal: 'center',
				vertical: 'bottom',
			}}
			autoHideDuration={10000}
			TransitionComponent={Slide}
			onClose={() => setOpen(false)}
		>
			<Alert
				severity='info'
				onClose={() => setOpen(false)}
			>
				<AlertTitle>{ad.title}</AlertTitle>
				{ad.description}
			</Alert>
		</Snackbar>
	)
}

export default AdBanner