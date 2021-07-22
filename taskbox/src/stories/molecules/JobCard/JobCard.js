import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import MyTypography from "../../atoms/MyTypography/MyTypography";
import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Grid } from "@material-ui/core";


const useStyles = makeStyles({
	root: {
		width: '330px',
		height: '308px',
		margin: "20px 30px 20px 60px",
	},
	root2: {
		maxWidth: '690px',
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
});

export default function JobCard({
	logo,
	roleName,
	companyName,
	location,
	icons,
}) {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	// const routeArray = [1, 2, 3, 4];
	// routeArray.map((num) => console.log(num));

	if (open) {
		return (
			<div
				onClick={() => {
					setOpen(!open);
				}}
			>
				<Card className={classes.root} variant="outlined">
					<CardActionArea>
						<div className={classes.header}>
							<MyImage
								className={classes.logoPadding}
								alt={logo}
								src={logo}
								width="80px"
								height="80px"
							/>
							<div className={` ${classes.spacing}`}>
								<MyTypography variant="body1" component="p">
									2d
								</MyTypography>
								<MoreHorizIcon
									className={classes.moreIconPadding}
									fontSize="small"
								/>
							</div>
						</div>
						<CardContent>
							<MyTypography gutterBottom className={classes.roleTypoHeader}>
								{roleName}
							</MyTypography>

							<MyTypography
                                className={` ${classes.companyLocationTypoHeader} `}
							>
								{companyName}
							</MyTypography>
							<MyTypography
                                className={classes.companyLocationTypoHeader}
							>
								{location}
							</MyTypography>

							<MyTypography gutterBottom className={classes.commuteRoutesTypo}>
								Commute routes available:
							</MyTypography>
							{/* {Object.values(icons).map((value) => value)} */}
							<div className={classes.iconGrp}> 
                                {icons && icons.map(iconName => (
                                    <iconName className={classes.icons} /> 
                                ))}
                            </div> 
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		);
	} else {
		return (
			<div
				onClick={() => {
					setOpen(!open);
				}}
			>
                
				<Card variant="outlined" className={classes.root2}>
					<CardActionArea>
						<Grid container>
							<Grid item xs={1}>
								<MyImage alt={logo} src={logo} width="50px" height="50px" />
							</Grid>
							<Grid item xs={8} className={classes.jobInfoPadding}>
								<MyTypography gutterBottom className={classes.roleTypoHeader}>
									{roleName}
								</MyTypography>

								<MyTypography
									className={` ${classes.companyLocationTypoHeader} ${classes.padding} `}
								>
									{companyName}
								</MyTypography>
								<MyTypography
									className={` ${classes.companyLocationTypoHeader} `}
								>
									{location}
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
                                    {icons && icons.map(iconName => (
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
}