import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyTypography from '../../atoms/MyTypography/MyTypography';
const DescriptionCard= ({ head,body}) => {
const useStyles = makeStyles((theme) => ({
    alignment: {
        width: '330px',
        height: '220px',
        display : 'flex',
        flexDirection : 'column',
        gap:'30px',
        // fontFamily: 'Montserrat',
        // fontSize: '14px',
        // fontWeight: 'normal',
        // fontStretch: 'normal',
        // fontStyle: 'normal',
        // lineHeight: 1.57,
        // letterSpacing: '0.1px',
        // textAlign: 'left',
        // color:'#5f7381',
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
        fontSize : '14px',
        lineHeight : 1.57,
        letterSpacing : '0.1px',
        textAlign:'left',
       
    },
   

}));

    const classes = useStyles();
 return (
     <div classeName={classes.alignment}>
        <MyTypography children={head} variant="h6" component="h5" className={classes.typographyHeaderStyle} />
        <MyTypography children={body} variant="h6" component="h5" className={classes.typographyParagraphStyle} />
        
     </div>
 )

}
export default DescriptionCard