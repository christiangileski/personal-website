import React from 'react';

const Context = React.createContext();

class Provider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLight: true,
		}

		this.toggleTheme = this.toggleTheme.bind(this);
	}

	toggleTheme() {
		this.setState({
			isLight: !this.state.isLight,
		});
	}

	render() {
		return (
			<Context.Provider value={{
				toggleTheme: this.toggleTheme,
				...this.state,
			}}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

const Consumer = Context.Consumer;

export {
	Provider,
	Consumer,
}