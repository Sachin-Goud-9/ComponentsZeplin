import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MyTypography from "../../atoms/MyTypography/MyTypography";
import MyImage from '../../atoms/MyImage/MyImage';

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

    <div className={classes.root}>
        <div className={classes.alignStart}>
            <div>
                <MyImage src={imageSrc} height="60px" width="60px" alt={cabServiceName} />
            </div>
            <div className={classes.cardDetailsDisplay}>
                <MyTypography children={cabServiceName} variant="h6" component="h5" className={classes.typographyHeaderStyle} />
                <MyTypography children={costEstimation} variant="body2" component="p" className={classes.typographyParagraphStyle}/>
            </div>
        </div>

        <div className={classes.alignLast}>
            <MyTypography className={classes.typographyBookNow}>{"Book Now"}</MyTypography>
        </div>
        
    </div>
  );
}

export default JobCardInfo;