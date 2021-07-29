import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import JobCardInfo from '../../molecules/JobCardInfo/JobCardInfo'
import green, { Typography } from '@material-ui/core'
import DescriptionCard from '../../molecules/DescriptionCard/DescriptionCard'
import DescriptionList from '../../molecules/DescriptionList/DescriptionList'
import { useDispatch } from "react-redux";
import { savedJob } from "../../store/actions";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
// {positionAppliedName,companyName,locationName,imageSrc,head,body,title,text}






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
        marginTop:'500px',
        position: "fixed",
        marginLeft:'100px'
    },
    
    

}));








toast.configure()
export default function Right(props)   {

  const classes = useStyles();
  const dispatch = useDispatch();
  const job = props.job

  const showToastMessageForSaveOperation = () => {
    //   toast('Job Saved',{ position: toast.POSITION.TOP_RIGHTT, autoClose: 2000    })
      alert('Job Saved')
  }

  const showToastMessageForApplyOperation = () => {
    //   toast('Job Saved',{ position: toast.POSITION.TOP_RIGHTT, autoClose: 2000    })
      alert('Job Applied')
  }

  return (
    <div className={classes.columnAlignment}>
        <JobCardInfo positionAppliedName={job.roleName} companyName={job.companyName} locationName={ job.locationName } imageSrc={job.imageSrc} />
        <div className={ classes.buttonAlignment}>
        <Button  className={` ${classes.buttonStyle} ${classes.buttonSave}` } onClick = {() => {showToastMessageForSaveOperation(); dispatch(savedJob(job))}} > Save</Button>
        <Button  className={` ${classes.buttonStyle} ${classes.buttonApply}` }  variant="contained" onClick = {() => {showToastMessageForApplyOperation(); dispatch(savedJob(job))}}> Apply</Button>
        </div>
        <DescriptionCard head={job.head} body={job.body} />
        <DescriptionList title={job.title} text={job.text} />
        <Button  className={`  ${classes.buttonRoutes}` }  variant="contained"> Green Commute Routes</Button>
    </div>
  );
}