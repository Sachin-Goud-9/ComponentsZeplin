import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import JobCardInfo from '../../molecules/JobCardInfo/JobCardInfo'
import green from '@material-ui/core'
import DescriptionCard from '../../molecules/DescriptionCard/DescriptionCard'
import DescriptionList from '../../molecules/DescriptionList/DescriptionList'
const Right = (  {positionAppliedName,companyName,locationName,imageSrc,head,body,title,text} )  => {

  const useStyles = makeStyles((theme) => ({
    columnAlignment: {
        display : 'inline-flex',
        flexDirection : 'column',
        gap:'15px',
    },
    buttonStyle:{
        width:'101px',
        height:'38px',

    },
    buttonAlignment:{
        display : 'inline-flex',
        gap:'15px',  
        paddingLeft:'70px', 
    },
    buttonSave:{
        color:'#5ac568',
        backgroundColor:"white",
        borderRadius:'10px',
        border:'2px solid #5ac568',
        textTransform:'none',
    },
    buttonApply:{
        backgroundColor:'#5ac568',
        color:"white",
        borderRadius:'10px',
        textTransform:'none',
        fontWeight:'bold'
        //border:'2px solid #5ac568'
    },
    buttonRoutes:{
        backgroundColor:'#5ac568',
        color:"white",
        borderRadius:'10px',
        textTransform:'none',
        fontWeight:'bold',
        border:'2px solid #5ac568',
        width:'208px',
        height:'50px',
        marginTop:'350px',
        position: "fixed",
        marginLeft:'100px'
    },
    
    

}));

const classes = useStyles();

  return (
    <div className={classes.columnAlignment}>
        <JobCardInfo positionAppliedName={positionAppliedName} companyName={companyName} locationName={locationName} imageSrc={imageSrc} />
        <div className={ classes.buttonAlignment}>
        <Button  className={` ${classes.buttonStyle} ${classes.buttonSave}` }   > Save</Button>
        <Button  className={` ${classes.buttonStyle} ${classes.buttonApply}` }  variant="contained"> Apply</Button>
        </div>
        <DescriptionCard head={head} body={body} />
        <DescriptionList title={title} text={text} />
        <Button  className={`  ${classes.buttonRoutes}` }  variant="contained"> Green Commute Routes</Button>
    </div>
  );
}

export default Right;
