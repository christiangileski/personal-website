import React, { Component } from 'react';
import Intro from './components/Intro/Intro';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

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
