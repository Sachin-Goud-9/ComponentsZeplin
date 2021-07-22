import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MyTypography from "../../atoms/MyTypography/MyTypography";
import MyImage from '../../atoms/MyImage/MyImage';
import CloseIcon from '@material-ui/icons/Close';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const JobCardInfo = ( {mapImageSrc,srcLocation,destLocation} )  => {

  const useStyles = makeStyles((theme) => ({
    root: {
        display : 'inline-flex',
        width : '390px',
        flexDirection : 'column',
    },
    headerDiv : {
        display : 'inline-flex',
        flexDirection : 'row',
        gap : '10px',
        padding : '3%'
    },
    imageDiv : {
        padding : '5% 5% 5% 0',
    },
    listItemDiv : {
        display : 'flex',
        flexDirection : 'column',
        gap : '10px',
        width : '330px'
    },
    innerListItemDiv : {
        display : 'inline-flex',
        flexDirection : 'row',
        alignItems : 'center',
    },
    innerListItemDivStyling : {
        backgroundColor : '#e3f3f6',
        borderRadius : '10px',
    },
    typographyHeaderStyle : {
        fontFamily : 'Montserrat',
        color : '#19293b',
        fontSize : '16px',
        lineHeight : 1.5,
        letterSpacing : '0.1px'
    },
    hide : {
        overflow : 'hidden',
        textOverflow : 'ellipsis'
    },
    srcLocationDiv : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        padding : '2% 5% 3% 5%'
    },
    locationTypo : {
        padding : '2% 5% 0 4%'
    }
}));

const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className= {classes.headerDiv}>
            <ArrowBackIcon />
            <MyTypography children="Commute Routes" variant="h6" component="h5" className={classes.typographyHeaderStyle} />
        </div>
        <div className={classes.imageDiv}>
            <MyImage src={mapImageSrc} height="135.2px" width="330px" alt="Map Directions"/>
        </div>
        <div className={classes.listItemDiv}>
            <div className={` ${classes.innerListItemDiv} ${classes.innerListItemDivStyling} `}>
                <div className={` ${classes.srcLocationDiv} ${classes.hide} `}>
                    <LocationOnIcon />
                    <MyTypography noWrap className={classes.locationTypo}>{srcLocation}</MyTypography>
                    <CloseIcon />
                </div>
            </div>
            <div className={classes.innerListItemDivStyling}>
                <div className={` ${classes.srcLocationDiv} ${classes.hide} `}>
                    <LocationOnIcon />
                    <MyTypography noWrap className={classes.locationTypo}>{destLocation}</MyTypography>
                </div>
            </div>  
        </div>
    </div>
  );
}

export default JobCardInfo;