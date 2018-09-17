import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import ResumeCard from './ResumeCard';
import { Typography, Grid } from '@material-ui/core';

const styles = (theme) => {
	return {
		layout: {
			width: 'auto',
			marginLeft: theme.spacing.unit * 6,
			marginRight: theme.spacing.unit * 6,
			[theme.breakpoints.up(1000 + theme.spacing.unit * 6 * 2)]: {
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
			display: 'inline-block',
			marginBottom: theme.spacing.unit * 2,
		},
	};
}

function Resume(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<CssBaseline />
			<div id="about" className={classes.layout}>
				<Grid container direction="row">
					<Grid className={classes.cardCategory} item xs={12} sm={3}>
						<Typography className={classes.cardCategoryLabel} variant="headline">
							Education
						</Typography>
					</Grid>
					<Grid item xs={12} sm={9}>
						<ResumeCard 
							title="Rochester Institute of Technology"
							subtitle="BS in Computer Science"
							date="May 2018"
							caption="Related coursework: Analysis of Algorithms, Discrete Mathematics">
							A five year program at RIT which allotted a full year for coop experience. A five year program at RIT which allotted a full year for coop experience.
							A five year program at RIT which allotted a full year for coop experience. A five year program at RIT which allotted a full year for coop experience.
							A five year program at RIT which allotted a full year for coop experience. A five year program at RIT which allotted a full year for coop experience.
							A five year program at RIT which allotted a full year for coop experience. A five year program at RIT which allotted a full year for coop experience.
						</ResumeCard>
					</Grid>
				</Grid>
				<Grid container direction="row">
					<Grid className={classes.cardCategory} item xs={12} sm={3}>
						<Typography className={classes.cardCategoryLabel} variant="headline">
							Work
						</Typography>
					</Grid>
					<Grid item xs={12} sm={9}>
						<ResumeCard 
							title="Ellucian"
							subtitle="Associate Software Developer"
							date="August 2017 - Current"
							caption="">
							A place that I work and write computer code. A place that I work and write computer code. A place that I work and write computer code.
							A place that I work and write computer code. A place that I work and write computer code. A place that I work and write computer code.
							A place that I work and write computer code. A place that I work and write computer code. A place that I work and write computer code.
							A place that I work and write computer code. A place that I work and write computer code. A place that I work and write computer code.
						</ResumeCard>
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