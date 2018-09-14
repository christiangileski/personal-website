import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';

const styles = theme => ({
	resumePaper: {
		paddingBottom: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 4,
	},
});

function ResumeCard(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<CssBaseline />
			<div className={classes.resumePaper}>
				<Typography style={{fontWeight: 600}} color="textPrimary" paragraph variant="headline" >
					Rochester Institute of Technology
				</Typography>
				<Typography color="textSecondary" variant="title" >
					BS in Computer Science
				</Typography>
				<Typography color="textSecondary" paragraph style={{ display: 'inline-block' }} variant="title" >
					Minor in Mathematics
				</Typography>
				<Typography color="textSecondary" paragraph style={{ marginLeft: '5px', marginRight: '5px', display: 'inline-block' }} variant="subheading" >
					•
				</Typography>
				<Typography color="textSecondary" paragraph style={{ display: 'inline-block' }} variant="subheading" >
					May 2018
				</Typography>
				<Typography color="textPrimary" paragraph variant="body1" >
					A five year program at RIT which allotted a full year for coop experience. A five year program at RIT which allotted a full year for coop experience.
					A five year program at RIT which allotted a full year for coop experience. A five year program at RIT which allotted a full year for coop experience.
					A five year program at RIT which allotted a full year for coop experience. A five year program at RIT which allotted a full year for coop experience.
					A five year program at RIT which allotted a full year for coop experience. A five year program at RIT which allotted a full year for coop experience.
				</Typography>
				<Typography variant="caption" >
					Related coursework: Analysis of Algorithms, Discrete Mathematics
				</Typography>
			</div>
		</React.Fragment>
	);
}

ResumeCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeCard);