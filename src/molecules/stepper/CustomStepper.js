import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { Step, Stepper, StepLabel } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import customtheme from '../../theme';
import { withStyles } from '@material-ui/styles';
import { StepConnector } from '@material-ui/core';
import Customtextfield from '../textfield/customtextfield';
// import Mybutton from '../button/mybutton';

// function getSteps() {
//     return ['Your Location', 'Job Location', 'Your Skills'];
// }

const QontoConnector = withStyles({
    active: {
      '& $line': {
        borderColor: '#ffffff',
      },
    },
    completed: {
      '& $line': {
        borderColor: '#ffffff',
      },
    },
    line: {
      borderColor: '#ffffff',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })(StepConnector);

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),

    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    iconContainer: { // define styles for icon container
        transform: 'scale(2)',
    },
    
  }));


const questionForLocation = ["Where do you stay?", "Where do you want to work?", "What do you want to do?"]

export default function HorizontalLinearStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps= ['Your Location', 'Job Location', 'Your Skills'];
    const contentToSelect = ['Where do you stay?','Where do you want to work?', 'What do you want to do?']
    // const steps = props.steps;
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
    <ThemeProvider theme = {customtheme}>
      <div >
            <Stepper activeStep={activeStep}  connector={<QontoConnector />}>
            {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepSkipped(index)) {
                stepProps.completed = false;
                }
                return (
                <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps} >{label}</StepLabel>
                </Step>
                );
            })}
            </Stepper>
            <div>
              <Typography style={{ width: "550px", height: "84px", fontSize:"32px", fontFamily: "Montserrat", color:"#19293b", textAlign: "left", 
                padding: "200px 50px 50px 50px"}}>
              More than 2000 people are using
              Green Commute 
              </Typography>
              <Typography style={{ textAlign: "left", paddingLeft: "50px", paddingBottom: "20px"}}>
                {contentToSelect[activeStep]}
              </Typography>
              <Typography style={{ textAlign: "left", paddingLeft: "50px"}}>
                <Customtextfield activeStep={activeStep}/>
              </Typography>
            </div>
        <div style={{ paddingLeft: "50px"}}>
          {activeStep === steps.length ? (
            <div style={{marginTop: "50px"}}>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button variant="contained" onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div style={{marginTop: "50px"}}>
              <div>
                <Button style={{marginRight: "20px"}} disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    style={{marginRight: "20px"}}
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
  
                <Button
                  style={{marginRight: "20px"}}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      </ThemeProvider>
    );
  }