import { Typography, useTheme } from '@mui/material'
import { useMemo } from 'react'


function GitHubStats() {
	const theme = useTheme()
	const themeArgs = useMemo(() => (
		`title_color=${theme.palette.primary.main.slice(1, 7)}&text_color=${theme.palette.text.primary.slice(1, 7)}&icon_color=${theme.palette.text.primary.slice(1, 6)}&border_radius=${theme.shape.borderRadius}&bg_color=${theme.palette.background.paper.slice(1, 7)}`
	), [theme])

	return (
		<>
			<Typography
				variant='h3'
			>
				GitHub Stats
			</Typography>
			<img
				src={`https://github-readme-stats.vercel.app/api?username=notangelmario&show_icons=true&hide_border=true&${themeArgs}`}
				alt=""
			/>
		</>
	)
}

export default GitHubStats