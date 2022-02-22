import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, useMediaQuery, createTheme } from '@mui/material'
import { fetchWall } from './lib/wall'
import { defaultTheme } from './lib/theme';
import { lightenDarkenColor } from './lib/lightenDarken';
import { usePalette } from 'react-palette' 
import HomePage from './pages/HomePage';
import Splash from './components/Splash';
import Footer from './components/Footer';




function App() {
	const [wallUrl, setWallUrl] = useState('');
	const wallPalette = usePalette(wallUrl);
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [ loaded, setLoaded ] = useState(false);

	// Changes theme color meta tag
	useEffect(() => {
		const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
		
		if (wallPalette.data?.lightMuted && themeColorMetaTag) {
			if (prefersDarkMode) {
				themeColorMetaTag.setAttribute('content', lightenDarkenColor(wallPalette.data.lightMuted, -20));
			} else {
				themeColorMetaTag.setAttribute('content', lightenDarkenColor(wallPalette?.data.lightMuted, 60));
			}
		}
	}, [wallPalette, prefersDarkMode]);

	useEffect(() => {
		fetchWall().then((wallUrl) => {
			setWallUrl(wallUrl);
		});
	}, []);


	const loadingValue = useMemo(() => {
		const STUFF_TO_LOAD = [
			wallUrl,
			!wallPalette.loading
		]
		const value = 100 / STUFF_TO_LOAD.length * STUFF_TO_LOAD.filter((v) => v).length;

		if (value === 100) {
			setLoaded(true);
		}

		return value;
	}, [wallUrl, wallPalette]);


	// lock scroll while loading
	useEffect(() => {
		window.scrollTo(0, 0);

		if (loaded) {
			document.body.style.overflow = 'auto';
		} else {
			document.body.style.overflow = 'hidden';
		}
	}, [loaded]);


	const theme = useMemo(() => {
		if (wallPalette) {
			return createTheme({
				...defaultTheme,
				palette: {
					primary: {
						main: wallPalette?.data.vibrant || defaultTheme.palette.primary.main,
						dark: wallPalette?.data.darkVibrant || defaultTheme.palette.primary.dark,
						light: wallPalette?.data.lightVibrant || defaultTheme.palette.primary.light,
					},
					secondary: {
						main: wallPalette?.data.muted || defaultTheme.palette.secondary.main,
						dark: wallPalette?.data.darkMuted || defaultTheme.palette.secondary.dark,
						light: wallPalette?.data.lightMuted || defaultTheme.palette.secondary.light,
					},
					background: {
						default: prefersDarkMode ? '#121212' : '#fff',
						paper: prefersDarkMode ? '#242424' : wallPalette?.data.lightMuted ? lightenDarkenColor(wallPalette?.data.lightMuted, 60) : defaultTheme.palette.background.paper,
					},
					mode: prefersDarkMode ? 'dark' : 'light',
				},
			})
		} else {
			return defaultTheme;
		}
	}, [prefersDarkMode, wallPalette]);
	


	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<Splash value={loadingValue}/>
			<HomePage wallUrl={wallUrl}/>
			<Footer />
		</ThemeProvider>
	)
}

export default App;
