import React from "react";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MyTypography from "../../atoms/MyTypography/MyTypography";
import MyImage from '../../atoms/MyImage/MyImage';
import customtheme from "../../theme";
import { Grid } from "@material-ui/core";

const JobCardInfo = ( {cabServiceName,costEstimation,imageSrc} )  => {

  const useStyles = makeStyles((theme) => ({
    root: {
        display : 'inline-flex',
        width : '330px',
        height : '60px',
        flexDirection : 'row',
        alignItems: 'center',
    },
    alignStart : {
        display : 'inline-flex',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent : 'flex-start',
        width: '200px'
    },
    alignLast : {
        display : 'inline-flex',
        justifyContent : 'flex-end',
        alignItems : 'center',
        width:'130px',
        height : '60px'
    },
    cardDetailsDisplay : {
        display : 'flex',
        flexDirection : 'column',
        padding : '10% 10% 2% 3%',
        paddingTop : '0',
        gap : '4px'
    },
    typographyHeaderStyle : {
        fontFamily : 'Montserrat',
        color : '#19293b',
        fontSize : '16px',
        lineHeight : 1.5,
        letterSpacing : '0.1px'
    },
    typographyParagraphStyle : {
        fontFamily : 'Montserrat',
        color : '#5f7381',
        fontSize : '12px',
        lineHeight : 1.33,
        letterSpacing : '0.1px'
    },
    typographyBookNow : {
        color : '#5ac568',
        fontSize : '14px',
        alignItems : 'right',
        fontWeight : 600,
        fontFamily : 'Montserrat',
        float : 'right'
    }
}));

const classes = useStyles();

  return (
    <ThemeProvider theme={ customtheme } >
    <div className={classes.root}>
        <Grid className={classes.alignStart}>
            <Grid>
                <MyImage src={imageSrc} height="60px" width="60px" alt={cabServiceName} />
            </Grid>
            <Grid className={classes.cardDetailsDisplay}>
                <MyTypography className={classes.typographyHeaderStyle} children={cabServiceName} variant="h6" component="h5"  />
                <MyTypography className={classes.typographyParagraphStyle} children={costEstimation} variant="body2" component="p" />
            </Grid>
        </Grid>

        <Grid className={classes.alignLast}>
            <MyTypography className={classes.typographyBookNow}>{"Book Now"}</MyTypography>
        </Grid>
        
    </div>
    </ThemeProvider>
  );
}

export default JobCardInfo;