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
										subtitle="BS in Game Design & Development"
										date="Fall 2012 - Fall 2016"
										caption="Related coursework: Rich Media Web Application Development | Data Structures and Algorithms | Interation, Immersion & Media Interface">
										An exciting four-year program which allowed me to grow as a developer both inside the classroom and outside during my tenure as a student, having been able to participate in diverse internships and co-ops.
										In addition to game development and web application development, I studied <i>Communications</i> as a concentration, which allowed me to improve on versatile life skills in courses such as <i>Public Speaking</i> and <i>Technical Writing</i>.
									</ResumeCard>
								</Grid>
							</Grid>
							<Grid container direction="row">
								<Grid className={classes.cardCategory} item xs={12} sm={3}>
									<Typography className={classes.cardCategoryLabel} variant="headline">
										Career
									</Typography>
								</Grid>
								<Grid item xs={12} sm={9}>
									<ResumeCard
										title="Ellucian"
										subtitle="Software Developer"
										date="February 2017 - Current"
										caption="">
										Full-stack development using primarily <i>Node.js</i>, <i>SQL</i>, and <i>React</i> to build highly available and scalable applications. I've worked across numerous teams and received recognitions for my cross-team efforts! In addition, I've had the opportunity to work directly with our user experience team in early adaptation and implementation of an <i>Ellucian-themed component library</i> using <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://material-ui.com/">Material-UI</a> components styled for re-use in many Ethos application interfaces. Prior to this, I had directly developed an internal React component library used by multiple teams for user interface implementation. I have also worked directly with <i>Jenkins</i>, <i>Amazon Web Services</i>, and our Ellucian Cloud Operations, Application Security, and Information Security teams for deploying and maintaining applications using <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://aws.amazon.com/ecs/">Amazon Elastic Container Service</a>.
									</ResumeCard>
									<ResumeCard
										title="Viewpoint Construction Software"
										subtitle="Software Development Intern"
										date="August 2015 - January 2016"
										caption="">
										Contributed to the <i>Viewpoint Pricer</i> website using Javascript, HTML5, and CSS. This software acted as a financial tool to pair suppliers and contractors based on required supplies and competing contractor prices for those supplies. I also implemented and monitored <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://analytics.google.com/analytics/web/">Google Analytics</a> for the site during my internship. In addition, I contributed to the Viewpoint Estimation software, which is a codebase written in both C# and C++. This involved adding new features as well as updating existing legacy code, including writing several <i>C++/CLI wrappers</i> to use as reference in the C# legacy code.
									</ResumeCard>
									<ResumeCard
										title="iD Tech Camps"
										subtitle="Java Instructor"
										date="May 2014 - August 2014"
										caption="">
										Java instruction for pre-teens of all experience levels during several one week-long sessions throughout the summer. However, most students attended numerous weeks, if not the entire summer, to sharpen their abilties as developers. I would tailor the pace of my instruction for each individual camper to keep them engaged while stimulating them and encouraging them to take on new challenges. Lessons varied from teaching the fundamentals to developing GUIs and creating simple games such as tic-tac-toe. I also acted as a camp counselor, supervising campers of all ages and playing recreational activities with such as kickball, whiffle ball, and computer games!
									</ResumeCard>
								</Grid>
							</Grid>
							<Grid container direction="row">
								<Grid className={classes.cardCategory} item xs={12} sm={3}>
									<Typography className={classes.cardCategoryLabel} variant="headline">
										Activities and Honors
									</Typography>
								</Grid>
								<Grid item xs={12} sm={9}>
									<ResumeCard
										title="Ellucian"
										subtitle="Ellucian Action Committee"
										date="Septempber 2017 - Current"
										caption="">
										Our committee plans and organizes all company events which occur in the Rochester office. We organize events to promote office morale and show appreciation for the employees, as well as charitable events to give back to the community. Every winter, we have a donation drive for <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.uwrochester.org/">United Way</a>, where employees during the month of December can donate jackets, hats, gloves, socks, and other winter apparel. This committee also organizes the winter holiday party, other holiday events such as the Fourth of July or Halloween, the annual Thanksgiving potluck, the office car wash for charity, and much more.
									</ResumeCard>
									<ResumeCard
										title="Rochester Institute of Technology"
										subtitle="Dean's List Recognition"
										date="Multiple semesters"
										caption="">
										Throughout my four years at RIT, I earned the recognition of being placed on the Dean's List many semesters. Full-time undergraduate students at Rochester Institute of Technology will be placed on the Dean's List if their term GPA is <i>greater than or equal to 3.40</i>.
									</ResumeCard>
									<ResumeCard
										title="GRADA"
										subtitle="Ultimate Frisbee player"
										date="Fall 2012 - Current"
										caption="">
										Since first attending RIT and joining the club ultimate frisbee team, I have been an active player in seasonal leagues for the <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://rocultimate.org/">Greater Rochester Area Disc Association</a>. I played competitively during my time at RIT for the club team, however I enjoy playing recreationally, and GRADA has given me fun opportunities to socialize, play in tournaments, and make new friends.
									</ResumeCard>
									<ResumeCard
										title="Kickball League of Rochester"
										subtitle="Recreational player"
										date="Summer 2017 - Current"
										caption="">
										I started playing kickball in 2017 after a close friend of mine asked me to join his team with a number of his colleagues. It quickly became one of my favorite recreational pastimes to enjoy with my friends. In addition to loving the game, I enjoy the post-game celebrations each week at whichever local bar sponsors our team! It's a wonderful opportunity to spend time with my friends during the week, in addition to meeting new people and making new friends during the games.
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