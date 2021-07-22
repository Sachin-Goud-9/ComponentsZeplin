import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyTypography from '../../atoms/MyTypography/MyTypography';
import Typography from '@material-ui/core/Typography';

const DescriptionList= ({ title,text}) => {
const useStyles = makeStyles((theme) => ({
    alignment: {
        width: '330px',
        height: '220px',
        display : 'flex',
        flexDirection : 'column',
        gap:'30px',

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
       // filter: blur('3px'),
      
    },
    root: {
        width: 400,
        filter: "blur(1px)"
      },
   

}));


    const classes = useStyles();
    var noBlur=text.slice(0,text.length-1);
    
    // const noBlur = [];
    var blur = text[text.length-1];
    // // if(text){
    //     const len = text.length;
    //     for(var i=0;i<len-1;i++){
    //         noBlur.push(text[i]);
    //     }
    //     blur.push(text[len-1]);
    // }
 return (
     <div classeName={classes.alignment}>
        <MyTypography children={title} variant="h6" component="h5" className={classes.typographyHeaderStyle} />
        <ul>
            
        {noBlur &&  noBlur.map((bodyName)=>(
           <li> <MyTypography children={bodyName} variant="h6" component="h5" className={classes.typographyParagraphStyle} /></li>
        ))}
       </ul>
       <div className={classes.root}>
       <ul>
       <li>
           <MyTypography  children={blur} variant="h6" component="h5" className={classes.typographyParagraphStyle} />
       </li>
       </ul>
        </div>
        
     </div>
 )

}
export default DescriptionList