import { useState, useEffect } from 'react'
import { Avatar, CircularProgress, Box, Fade } from '@mui/material'
import { AVATAR_SIZE } from './Header'


type Props = {
	value: number
}

function Splash(props: Props) {
	const [ disapear, setDisapear ] = useState(false)

	useEffect(() => {
		if(props.value === 100) {
			setTimeout(() => {
				setDisapear(true)
			}, 2000)
		}
	}, [props.value])

	return (
		<Fade
			appear={false}
			in={!disapear}
			timeout={1000}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignContent: 'center',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%',
					width: '100%',
					position: 'absolute',
					top: 0,
					left: 0,
					backgroundColor: 'background.default',
					zIndex: 9999,
				}}
			>
				<CircularProgress 
					thickness={4}
					size={AVATAR_SIZE + 16 * 2 + 16}
					value={props.value}
					variant='determinate'
				/>
				<Avatar
					src='/assets/profile.png'
					sx={{
						width: `${AVATAR_SIZE + 16}px`,
						height: `${AVATAR_SIZE + 16}px`,
						position: 'absolute',
					}}
				/>
			</Box>
		</Fade>
	)
}

export default Splash