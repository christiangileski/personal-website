import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitch, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IconButton from '@material-ui/core/IconButton';
import { ArrowDropDown } from '@material-ui/icons'

import './Intro.css'

const styles = theme => ({
	icon: {
		marginRight: theme.spacing.unit * 2,
	},
	greeting: {
		color: 'yellow',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '2.7rem',
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: '3rem',
		},
	},
	name: {
		color: 'rgba(255,255,255,1)',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '3.2rem',
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: '3.5rem',
		},
	},
	intro: {
		color: 'rgba(255,255,255,.8)',
		marginLeft: '1rem',
		marginRight: '1rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.9rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '1.2rem',
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: '1.3125rem',
		},
	},
	button: {
		color: 'rgba(255,255,0,.8)',
		border: '1px solid rgba(255, 255, 0, 0.8)'
	},
	noAnchorStyle: {
		textDecoration: 'none'
	},
	heroUnit: {
		background: 'linear-gradient(rgba(20,20,20, 0.5), rgba(20,20,20, 0.5)), url(./intro-bg.jpg) no-repeat center center',
		backgroundSize: 'cover',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		position: 'relative',
		minHeight: '400px'
	},
	iconSet: {
		position: 'absolute',
		bottom: '0',
		fontSize: '3rem',
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing.unit * 3,
		},
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing.unit * 7,
		},
		[theme.breakpoints.up('lg')]: {
			marginBottom: theme.spacing.unit * 10,
		},
	},
	icon: {
		color: 'white',
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '2.7rem',
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: '3rem',
		},
	},
	heroContent: {
		margin: '0 auto',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '18rem',
		},
		[theme.breakpoints.up('sm')]: {
			maxWidth: '28rem',
		},
		[theme.breakpoints.up('md')]: {
			maxWidth: '36rem',
		},
		[theme.breakpoints.up('lg')]: {
			maxWidth: '40rem',
		},
	},
	heroButtons: {
		marginTop: theme.spacing.unit * 4,
	},
});

function Intro(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<div className={classes.heroUnit}>
					<div className={classes.heroContent}>
						<Typography align="center" className={classes.greeting} gutterBottom>
							Hello.
						</Typography>
						<Typography variant="display3" align="center" className={classes.name} gutterBottom>
							I'm Clay Benson
						</Typography>
						<Typography variant="title" align="center" className={classes.intro} paragraph>
							Something short and sweet about myself to grab the interest of the viewer.
							Probably something about like... software? I&apos;m not really sure.
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={16} justify="center">
								<Grid item>
									<AnchorLink className={classes.noAnchorStyle} href='#about'>
										{/* <Button variant="outlined" className={classes.button}>
											About me
										</Button> */}
										<IconButton className={classes.button} aria-label="Delete">
											<ArrowDropDown />
										</IconButton>
									</AnchorLink>
								</Grid>
							</Grid>
						</div>
					</div>
					<div className={classes.iconSet}>
						<a href="https://github.com/ClayBenson94" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={classNames(classes.icon, 'clickable')} icon={faGithub} /></a>
						<a href="https://www.linkedin.com/in/claybenson94/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={classNames(classes.icon, 'clickable')} icon={faLinkedin} /></a>
						<a href="https://www.twitch.tv/piercinggoblin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={classNames(classes.icon, 'clickable')} icon={faTwitch} /></a>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
}

Intro.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);