import React, { Component } from 'react';
import Intro from './components/Intro/Intro.jsx';
import Resume from './components/Resume/Resume.jsx';
import Footer from './components/Footer/Footer.jsx';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Consumer } from './Context';

class App extends Component {
	render() {
		return (
			<Consumer>
				{(context) => {
					const theme = createMuiTheme({
						palette: {
							type: context.isDark ? 'dark' : 'light',
							primary: {
								main: '#ffb300',
							},
						},
					});
					theme.palette.darkAndLight = context.isDark ? theme.palette.primary.main : theme.palette.primary.dark;
					return (
						<MuiThemeProvider theme={theme}>
							<CssBaseline />
							<Intro />
							<Resume />
							<Footer />
						</MuiThemeProvider>
					);
				}}
			</Consumer>
		);
	}
}

export default App;
