import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import openSocket from 'socket.io-client';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

const styles = theme => ({
	container: {
		height: '100vh'
	},
});


class LED extends React.Component {
	constructor(props) {
		super(props);

		// this.socket = openSocket(`${window.location.protocol}//${window.location.hostname}:8333/led`, { secure: true });
		this.socket = openSocket(`${window.location.protocol}//claybenson.me:8333/led`, { secure: true });
		this.state = {
			selectedColor: {
				r: 0,
				g: 0,
				b: 0,
			},
		};

		this.onColorClicked = this.onColorClicked.bind(this);
	}

	onColorClicked({rgb}) {
		this.setState({
			selectedColor: rgb,
		});
		this.socket.emit('color', rgb);
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.container}>
				<Grid container>
					<Grid item xs={4}/>
					<Grid container item xs={4} justify="center">
						<SketchPicker
							color={this.state.selectedColor}
							onChangeComplete={this.onColorClicked}
							disableAlpha={true} />
					</Grid>
					<Grid item xs={4}/>
				</Grid>
			</div>
		)
	}
}

LED.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LED);