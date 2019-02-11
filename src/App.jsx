import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { createMuiTheme, MuiThemeProvider, CssBaseline } from '@material-ui/core';
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
								main: '#1f2e34',
								secondary: '#c07279',
								hoverMain: '#172227',
								hoverSecondary: '#b86168'
							},
						},
					});
					theme.palette.darkAndLight = context.isDark ? theme.palette.primary.secondary : theme.palette.primary.main;
					theme.palette.hoverDarkAndLight = context.isDark ? theme.palette.primary.hoverSecondary : theme.palette.primary.hoverMain;
					theme.palette.darkAndWhite = context.isDark ? '#ffffff' : theme.palette.primary.main;
					return (
						<MuiThemeProvider theme={theme}>
							<CssBaseline />
							<Router>
								<Switch>
									<Route exact path='/' component={Home} />
									<Route status={404} component={NotFound} />
								</Switch>
							</Router>
						</MuiThemeProvider>
					);
				}}
			</Consumer>
		);
	}
}

export default App;
