import { React, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	formControl: {
		margin: theme.spacing(3),
	},
	buttonPadding : {
		paddingRight : '10px'
	},
	filterButtonStyle : {
		color : 'black',
		backgroundColor : '#e3f3f6',
		textTransform : 'none'
	}
}));

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

export default function FilterBox() {
	const [open, setOpen] = useState(false);
	const checkBoxClasses = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" className={checkBoxClasses.filterButtonStyle} onClick={handleClickOpen}>
				<FilterListOutlinedIcon className={checkBoxClasses.buttonPadding}/>
				Filter
			</Button>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<DialogTitle
					id="customized-dialog-title"
					onClose={handleClose}
				></DialogTitle>
				<DialogContent dividers>
					<div className={checkBoxClasses.root}>
						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">Distance</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox name="0-10" />}
									label="0-10 kms"
								/>
								<FormControlLabel
									control={<Checkbox name="11-20" />}
									label="11-20 kms"
								/>
								<FormControlLabel
									control={<Checkbox name="21-30" />}
									label="21-30 kms"
								/>
								<FormControlLabel
									control={<Checkbox name="31-40" />}
									label="31-40 kms"
								/>
							</FormGroup>
						</FormControl>

						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">Date Posted</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox name="Past 24 hours" />}
									label="Past 24 hours"
								/>
								<FormControlLabel
									control={<Checkbox name="Past Week" />}
									label="Past Week"
								/>
								<FormControlLabel
									control={<Checkbox name="Past Month" />}
									label="Past Month"
								/>
								<FormControlLabel
									control={<Checkbox name="Anytime" />}
									label="Anytime"
								/>
							</FormGroup>
						</FormControl>

						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">Green Commute</FormLabel>
							<FormGroup>
								<RadioGroup>
									<FormControlLabel
										value="Yes"
										control={<Radio />}
										label="Yes"
									/>
									<FormControlLabel value="No" control={<Radio />} label="No" />
								</RadioGroup>
							</FormGroup>
						</FormControl>
					</div>
					<div className={checkBoxClasses.root}>
						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">Job Type</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox name="Full - Time" />}
									label="Full - Time"
								/>
								<FormControlLabel
									control={<Checkbox name="Internship" />}
									label="Internship"
								/>
								<FormControlLabel
									control={<Checkbox name="Contract" />}
									label="Contract"
								/>
								<FormControlLabel
									control={<Checkbox name="Remote" />}
									label="Remote"
								/>
							</FormGroup>
						</FormControl>

						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">Experience Level</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox name="Fresher" />}
									label="Fresher"
								/>
								<FormControlLabel
									control={<Checkbox name="Mid-Level" />}
									label="Mid-Level"
								/>
								<FormControlLabel
									control={<Checkbox name="Director" />}
									label="Director"
								/>
								<FormControlLabel
									control={<Checkbox name="Executive" />}
									label="Executive"
								/>
							</FormGroup>
						</FormControl>

						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">Transport</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox name="Metro" />}
									label="Metro"
								/>
								<FormControlLabel
									control={<Checkbox name="MotorCycle" />}
									label="Motor Cycle"
								/>
								<FormControlLabel
									control={<Checkbox name="Bus" />}
									label="Bus"
								/>
								<FormControlLabel
									control={<Checkbox name="CarPooling" />}
									label="Car pooling"
								/>
							</FormGroup>
						</FormControl>
					</div>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
						Clear All
					</Button>
					<Button autoFocus onClick={handleClose} color="primary">
						Apply
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}