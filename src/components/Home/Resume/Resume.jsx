import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ResumeCard from './ResumeCard';
import { Typography, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Consumer } from '../../../Context';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';

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
			borderBottom: `3px solid ${theme.palette.darkAndLight}`,
			display: 'inline-block',
			marginBottom: theme.spacing.unit * 2,
			color: theme.palette.darkAndWhite
		},
		link: {
			color: theme.palette.darkAndLight,
		},
		lightIcon: {
			margin: theme.spacing.unit * 2,
			float: 'right',
			backgroundColor: theme.palette.darkAndLight,
			color: '#FFFFFF',
			'&:hover': {
				backgroundColor: theme.palette.hoverDarkAndLight,
			},
		},
	};
};

function Resume(props) {
	const { classes } = props;

	return (
		<Consumer>
			{(context) => {
				return (
					<React.Fragment>
						<Button className={classes.lightIcon} mini variant="fab" onClick={context.toggleTheme}>
							<FontAwesomeIcon icon={faLightbulb} />
						</Button>
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
										date="May 2017"
										caption="Related coursework: Analysis of Algorithms, Discrete Mathematics">
										A wonderful five year program which allowed me to spend over a years worth of time at co-ops and internships.
										Attained a minor in mathematics, and was able to take fun interesting courses like <i>Game Theory</i>, <i>Cryptography</i>, and <i>Computer Graphics</i>.
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
										subtitle="Software Developer"
										date="July 2017 - Current"
										caption="">
										Full stack development using primarily Node.js, SQL, and React to build highly available and scalable applications. I've worked
										across several teams and received recognitions for my cross-team efforts. I've had the opportunity to mentor interns during the summer, which has
										proven to be very rewarding.
									</ResumeCard>
									<ResumeCard
										title="Ellucian"
										subtitle="Software Developer Intern"
										date="May 2016 - August 2016"
										caption="">
										As an intern, I was given the freedom to create an initial implementation for a product that would help customers integrate with other Ellucian
										products. We primarily programmed in Node.js for our backend, and used jQuery and CSS for the front end. This was one of the first times I'd worked directly with
										remote employees, and it taught me quite a bit about communication within teams.
									</ResumeCard>
									<ResumeCard
										title="Lenel"
										subtitle="Automation Engineer"
										date="May 2015 - December 2015"
										caption="">
										At Lenel, I had the responsibility of designing and producint automated test cases for several of Lenel's products. I caught and verified bugs using regression tests,
										and worked in an agile development for the first time.
									</ResumeCard>
									<ResumeCard
										title="Rochester Software Associates"
										subtitle="Quality Assurance"
										date="May 2014 - December 2014"
										caption="">
										At RSA, I was in charge of creating and maintaining test cases for their <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.rocsoft.com/QDirect">QDirect</a> product
										based on feature specifications. I learned how to create useful test cases and bug reports.
									</ResumeCard>
								</Grid>
							</Grid>
						</div>
					</React.Fragment>
				);
			}}

		</Consumer>
	);
}

Resume.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);