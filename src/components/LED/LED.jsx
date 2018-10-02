import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import io from 'socket.io-client';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons'
import LockModal from './LockModal';

const styles = theme => ({
	controlsContainer: {
		height: '100vh',
		width: '100vw',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	gridSpacing: {
		margin: theme.spacing.unit * 3,
	},
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
			locked: false,
			lockModalOpen: false,
		};

		this.onColorClicked = this.onColorClicked.bind(this);
		this.onLockCancel = this.onLockCancel.bind(this);
		this.onLockSubmit = this.onLockSubmit.bind(this);
	}

	onColorClicked({rgb}) {
		this.socket.emit('color', rgb);
	}

	componentDidMount() {
		this.socket.on('set color', (rgb) => {
			this.setState({
				selectedColor: rgb,
			});
		});

		this.socket.on('locked', (locked) => {
			this.setState({
				locked: locked
			});
		});
	}

	onLockCancel() {
		this.setState({
			lockModalOpen: false,
		});
	}

	onLockSubmit(password) {
		this.socket.emit('toggle lock', password);
		this.setState({
			lockModalOpen: false,
		});
	}

	render() {
		const { classes } = this.props;
		const { selectedColor, locked, lockModalOpen } = this.state;
		const boxShadowStyle = { boxShadow: `0 0 4rem 1.3rem rgb(${selectedColor.r},${selectedColor.g},${selectedColor.b})`}

		return (
			<React.Fragment>
				<LockModal open={lockModalOpen} onCancel={this.onLockCancel} onSubmit={this.onLockSubmit}/>

				{/* Main Body */}
				<div className={classes.controlsContainer}>
					<Grid container direction="column" alignItems="center" justify="center">
						<Grid className={classes.gridSpacing} style={boxShadowStyle} item xs={12}>
							<SketchPicker
								color={selectedColor}
								onChangeComplete={this.onColorClicked}
								disableAlpha={true} />
						</Grid>
						<Grid container alignItems="center" justify="center" className={classes.gridSpacing} item xs={12}>
							<Button className={classes.button} onClick={() => { this.setState({lockModalOpen: true}) }} color="primary" mini variant="fab">
								<FontAwesomeIcon icon={locked ? faLock : faLockOpen} />
							</Button>
							<Button disabled={locked} className={classes.button} color="primary" variant="contained" onClick={() => { this.onColorClicked({ rgb: { r: 0, g: 0, b: 255 } }) }}>Make it Blue!</Button>
						</Grid>
					</Grid>
				</div>
			</React.Fragment>
		)
	}
}

LED.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LED);