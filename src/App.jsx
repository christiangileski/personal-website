import React, { Component } from 'react';
import Intro from './components/Intro/Intro.jsx';
import Resume from './components/Resume/Resume.jsx';
import Footer from './components/Footer/Footer.jsx';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Intro />
				<Resume />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
