import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import ResumeCard from './ResumeCard';
import { Typography, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const styles = (theme) => {
	console.log('theme', theme);
	return {
		layout: {
			width: 'auto',
			marginLeft: theme.spacing.unit * 3,
			marginRight: theme.spacing.unit * 3,
			[theme.breakpoints.up(1000 + theme.spacing.unit * 3 * 2)]: {
				width: 1000,
				marginLeft: 'auto',
				marginRight: 'auto',
			},
			padding: `${theme.spacing.unit * 8}px 0`,
		},
		cardCategory: {
			[theme.breakpoints.down('xs')]: {
				textAlign: 'center',
			},
		},
		cardCategoryLabel: {
			borderBottom: `3px solid ${theme.palette.primary.main}`,
			display: 'inline',
		},
	};
}

function Resume(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<CssBaseline />
			<div id="about" className={classes.layout}>
				<Grid container direction="row" spacing={16}>
					<Grid className={classes.cardCategory} item xs={12} sm={3}>
						<Typography className={classes.cardCategoryLabel} variant="headline">
							Education
						</Typography>
					</Grid>
					<Grid item xs={12} sm={9}>
						<ResumeCard />
						<ResumeCard />
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	);
}

Resume.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);