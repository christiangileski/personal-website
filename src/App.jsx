import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/led' component={()=>{
						return (
							<div>Welcome to my LED page!</div>
						);
					}} />
					<Route status={404} component={() => {
						return (
							<div>
								<div><pre>Page Not Found</pre></div>
								{/* <div><a href="javascript:history.back();">Go Back</a></div> */}
								<div><a href="/">Go Home</a></div>
							</div>
						);
					}} />
				</Switch>
			</Router>
		);
	}
}

export default App;
