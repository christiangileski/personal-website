import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitch, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IconButton from '@material-ui/core/IconButton';
import { ArrowDropDown } from '@material-ui/icons'

import './Intro.css'

const styles = theme => ({
	appBar: {
		position: 'relative',
	},
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
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
			width: 1100,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	cardGrid: {
		padding: `${theme.spacing.unit * 8}px 0`,
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing.unit * 6,
	},
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Intro(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<CssBaseline />
			{/* <AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<CameraIcon className={classes.icon} />
					<Typography variant="title" color="inherit" noWrap>
						Album layout
					</Typography>
				</Toolbar>
			</AppBar> */}
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
						<a href="https://github.com/ClayBenson94" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={classes.icon} icon={faGithub} /></a>
						<a href="https://www.linkedin.com/in/claybenson94/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={classes.icon} icon={faLinkedin} /></a>
						<a href="https://www.twitch.tv/piercinggoblin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={classes.icon} icon={faTwitch} /></a>
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