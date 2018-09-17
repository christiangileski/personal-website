import React, { Component } from 'react';
import Intro from './components/Intro/Intro.jsx';
import Resume from './components/Resume/Resume.jsx';
import Footer from './components/Footer/Footer.jsx';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ffb300',
		},
		secondary: {
			main: '#ff5722',
		},
	},
});

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<React.Fragment>
					<Intro />
					<Resume />
					<Footer />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default App;
