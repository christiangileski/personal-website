import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Intro from './components/Intro/Intro.jsx';
import Resume from './components/Resume/Resume.jsx';
import Footer from './components/Footer/Footer.jsx';

const muiTheme = createMuiTheme({
	// breakpoints: {
	// 	keys: ['xs', 'sm', 'md', 'lg'],
	// 	values: [
	// 		{ smell: 360 },
	// 		{ smell: 768 },
	// 		{ smell: 992 },
	// 		{ smell: 1200 }
	// 	],
	// },
});

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={muiTheme}>
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
