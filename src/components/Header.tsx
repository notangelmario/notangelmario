import { Card, CardMedia, Avatar, Container } from '@mui/material'
import { ParallaxBanner } from 'react-scroll-parallax'

type Props = {
	imageUrl: string
}

export const AVATAR_SIZE = 128


function Header(props: Props) {
	return (
		<Card
			sx={{
				borderTopLeftRadius: 0,
				borderTopRightRadius: 0,
				marginBottom: '48px',
				overflow: 'hidden',
			}}
		>
			<CardMedia
				component={ParallaxBanner}
				layers={[
					{
						image: props.imageUrl,
						speed: -15,
					}
				]}
				sx={{
					height: 'max(25vw, 256px)',
				}}
			/>
			<Container>
				<Avatar
					src='/assets/profile.png'
					sx={{
						width: `${AVATAR_SIZE + 16}px`,
						height: `${AVATAR_SIZE + 16}px`,
						position: 'absolute',
						marginTop: '-96px',
						border: theme => `16px solid ${theme.palette.background.default}`,
					}}
				/>
			</Container>
		</Card>
	)
}

export default Header