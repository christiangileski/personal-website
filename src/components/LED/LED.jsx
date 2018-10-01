import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import io from 'socket.io-client';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons'

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
			lockPassword: '',
		};

		this.onColorClicked = this.onColorClicked.bind(this);
		this.onLockCancel = this.onLockCancel.bind(this);
		this.onLockSubmit = this.onLockSubmit.bind(this);
		this.onLockPasswordChange = this.onLockPasswordChange.bind(this);
		this.onLockKeyPressed = this.onLockKeyPressed.bind(this);
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
			lockPassword: '',
		});
	}

	onLockSubmit() {
		this.socket.emit('toggle lock', this.state.lockPassword);
		this.onLockCancel();
	}

	onLockPasswordChange(e) {
		this.setState({
			lockPassword: e.target.value,
		});
	}

	onLockKeyPressed(e) {
		if (e.key.toLowerCase() === 'enter') {
			this.onLockSubmit();
		}
	}

	render() {
		const { classes } = this.props;
		const { selectedColor, locked, lockModalOpen } = this.state;
		const boxShadowStyle = { boxShadow: `0 0 4rem 0.5rem rgb(${selectedColor.r},${selectedColor.g},${selectedColor.b})`}

		return (
			<React.Fragment>
				{/* Lock Dialog */}
				<Dialog	open={lockModalOpen} onClose={this.onLockCancel}>
					<DialogTitle>Enter password to lock</DialogTitle>
					<DialogContent>
						<TextField
							onKeyPress={this.onLockKeyPressed}
							onChange={this.onLockPasswordChange}
							autoFocus
							margin="dense"
							label="Password"
							type="password"
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.onLockCancel} color="primary">
							Cancel
						</Button>
						<Button onClick={this.onLockSubmit} color="primary">
							Submit
						</Button>
					</DialogActions>
				</Dialog>

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
							<Button className={classes.button} color="primary" variant="contained" onClick={() => { this.onColorClicked({ rgb: { r: 0, g: 0, b: 255 } }) }}>Make it Blue!</Button>
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