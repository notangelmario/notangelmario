import { createTheme } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'


const defaultTheme = createTheme({
	palette: {
		primary: {
			main: '#656565'
		},
		secondary: {
			main: '#656565'
		},
	},
	shadows: Array(25).fill('none') as Shadows,
	shape: {
		borderRadius: 20,
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: 'md'
			}
		},
		MuiStack: {
			defaultProps: {
				spacing: 2,
			}
		},
	}
})


export {
	defaultTheme
}