import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import io from 'socket.io-client';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

const styles = theme => ({
	controlsContainer: {
		height: '100vh',
		width: '100vw',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonGroup: {
		margin: theme.spacing.unit * 2,
	},
	button: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	}
});

class LED extends React.Component {
	constructor(props) {
		super(props);

		// this.socket = io(`${window.location.protocol}//${window.location.hostname}:8333/led`, { secure: true });
		this.socket = io(`${window.location.protocol}//claybenson.me:8333/led`, { secure: true });
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
			<div className={classes.controlsContainer}>
				<Grid container direction="column" alignItems="center" justify="center">
					<Grid item xs={12}>
						<SketchPicker
							color={this.state.selectedColor}
							onChangeComplete={this.onColorClicked}
							disableAlpha={true} />
					</Grid>
					<Grid alignItems="center" justify="center" className={classes.buttonGroup} item xs={12}>
						<Button className={classes.button} color="primary" variant="contained" onClick={() => { this.onColorClicked({ rgb: { r: 0, g: 0, b: 255 } }) }}>Yeeter</Button>
						<Button className={classes.button} color="primary" variant="contained" onClick={() => { this.onColorClicked({ rgb: { r: 0, g: 0, b: 255 } }) }}>Yeeter</Button>
						<Button className={classes.button} color="primary" variant="contained" onClick={() => { this.onColorClicked({ rgb: { r: 0, g: 0, b: 255 } }) }}>Yeeter</Button>
						<Button className={classes.button} color="primary" variant="contained" onClick={() => { this.onColorClicked({ rgb: { r: 0, g: 0, b: 255 } }) }}>Yeeter</Button>
						<Button className={classes.button} color="primary" variant="contained" onClick={() => { this.onColorClicked({ rgb: { r: 0, g: 0, b: 255 } }) }}>Yeeter</Button>
						<Button className={classes.button} color="primary" variant="contained" onClick={() => { this.onColorClicked({ rgb: { r: 0, g: 0, b: 255 } }) }}>Yeeter</Button>
						<Button className={classes.button} color="primary" variant="contained" onClick={() => { this.onColorClicked({ rgb: { r: 0, g: 0, b: 255 } }) }}>Yeeter</Button>
					</Grid>
				</Grid>
			</div>
		)
	}
}

LED.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LED);