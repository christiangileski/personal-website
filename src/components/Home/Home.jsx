import React, { Component } from 'react';
import Intro from './Intro/Intro.jsx';
import Resume from './Resume/Resume.jsx';

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Intro />
				<Resume />
			</React.Fragment>
		);
	}
}

export default Home;
