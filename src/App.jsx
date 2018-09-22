import React, { Component } from 'react';
import Intro from './components/Intro/Intro.jsx';
import Resume from './components/Resume/Resume.jsx';
import Footer from './components/Footer/Footer.jsx';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#ffb300',
		},
	},
});

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Intro />
				<Resume />
				<Footer />
			</MuiThemeProvider>
		);
	}
}

export default App;
