import { Card, CardActionArea, Grid, makeStyles } from "@material-ui/core";
import React from "react"
import MyImage from "../../atoms/MyImage/MyImage";
import MyTypography from "../../atoms/MyTypography/MyTypography";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


const useStyles = makeStyles((theme) => ({
    root: {
		maxWidth: '750px',
		maxHeight: '138px',
        padding : '1.5%',
        borderRadius : '10px'
	},
    logoPadding: {
		padding: "5% 3% 3% 5%",
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	spacing: {
		display: "flex",
        width : '65px',
		paddingRight: "5%",
		justifyContent: "space-around",
	},
	inCol: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
    iconGrp : {
        display : 'inline-flex',
        flexDirection : 'row',
        gap : '8px'
    },
    roleTypoHeader : {
        fontSize : '18px',
        fontFamily : 'Montserrat',
        fontWeight : '600',
        color : '#324552',
        lineHeight : 1.33,
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing : '0.2px'
    },
    companyLocationTypoHeader : {
        fontSize : '16px',
        fontFamily : 'Montserrat',
        fontWeight : 'normal',
        color : '#5f7381',
        lineHeight : 1.57,
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing : '0.1px',
        paddingTop : '2%'
    },
    commuteRoutesTypo : {
        fontSize : '14px',
        fontFamily : 'Montserrat',
        fontWeight : 500,
        color : '#19293b',
        lineHeight : 1.33,
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing : '0.2px',
        paddingTop : '7%'  
    },
    padding : {
        paddingTop : '0',
        lineHeight : 1.33
    },
    jobInfoPadding : {
        paddingLeft : '20px'
    },
	icons : {
		color : 'red'
	}
}))

export function JobCardForPage3(props){
    const icons = props.icons
    const classes = useStyles();
    return(
        <div>
            <Card variant="outlined" className={classes.root}>
					<CardActionArea>
						<Grid container>
							<Grid item xs={1}>
								<MyImage alt={props.logo} src={props.logo} width="50px" height="50px" />
							</Grid>
							<Grid item xs={8} className={classes.jobInfoPadding}>
								<MyTypography gutterBottom className={classes.roleTypoHeader}>
									{props.roleName}
								</MyTypography>

								<MyTypography
									className={` ${classes.companyLocationTypoHeader} ${classes.padding} `}
								>
									{props.companyName}
								</MyTypography>
								<MyTypography
									className={` ${classes.companyLocationTypoHeader} `}
								>
									{props.location}
								</MyTypography>
							</Grid>
                            <Grid item xs={1}></Grid>
							<Grid item xs={2} className={classes.inCol}>
								<div className={classes.spacing}>
									<MyTypography variant="body1" component="p">
										2d
									</MyTypography>
									<MoreHorizIcon fontSize="small" />
								</div>
                                <div className={classes.iconGrp}> 
                                    {icons && Object.keys(icons).map(iconName => (
                                        <span>{iconName} </span>
                                    ))}
                                   
                                </div> 
							</Grid>
						</Grid>
					</CardActionArea>
				</Card>
        </div>
    );
}