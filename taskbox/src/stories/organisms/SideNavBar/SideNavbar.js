import React from 'react';
import MyTypography from '../../atoms/MyTypography/MyTypography';
import { List, ThemeProvider } from '@material-ui/core'
import MyListItem from '../../molecules/MyListItem/MyListItem';
import { Tertiary } from '../../atoms/MyTypography/MyTypography.stories';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const SideNavBar = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(1);


    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const listItemTheme = createTheme({
        overrides : {
            MuiListItem : {
                root : {
                    '&$selected': {
                        backgroundColor:  'rgba(223, 230, 224, 0.15)',
                        '&:hover' : {
                            backgroundColor: 'rgba(223, 230, 224, 0.15)'
                        }	
                    },
                    '&:hover' : {
                        backgroundColor: 'rgba(90, 197, 104, 0.15)'
                    }	
                }
            }
        }
    });

    const responsiveListItemTheme = responsiveFontSizes(listItemTheme);


    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 270,
            backgroundColor: theme.palette.background.paper,
        },
        headerStyle: {
            padding: '10px',
            paddingLeft: '45px',
            display: 'flex',
            justifyContent: 'center',
        },
        listItemStyle: {
            paddingLeft: '40px',
            justifyContent: 'center',
            height: '50px',
            width: '240px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '10px',
            padding: '8px 10px',
            cursor: 'pointer'
        },
        selectedItemStyle: {
            backgroundColor: 'rgba(90, 197, 104, 0.15)',
            borderRadius: '10px',
            height: '50px',
            width: '240px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '10px',
            padding: '8px 10px',
            paddingLeft: '40px',
            cursor: 'pointer'
        },
        headerTextStyle: {
            fontSize: '20px',
            color: '#5ac568',
            fontFamily: 'Montserrat',
            lineHeight: '24px',
            letterSpacing: '0.1px',
            fontWeight: 'bold'
        },
        listItemTextStyle: {
            fontSize: '16px',
            color: '#324552',
            fontFamily: 'Montserrat',
            lineHeight: '26px',
            letterSpacing: '0.2px',
            fontWeight: 'bold'
        },
        icon: {
            color: '#9bbdcb',
        },
        selectedIcon: {
            color: '#5ac568'
        },
        typographyStyle: {
            fontSize: '16px',
            color: '#5f7381',
            fontFamily: 'Montserrat',
            lineHeight: '24px',
            letterSpacing: '0.1px',
        },
        selectedTypographyStyle: {
            fontSize: '16px',
            color: '#5ac568',
            fontFamily: 'Montserrat',
            lineHeight: '24px',
            letterSpacing: '0.1px',
        }
    }));

    const classes = useStyles();

    return (

        <div className={`${classes.root} `}>
            <div className={classes.headerStyle}>
                <Tertiary children="Green Commute" className={classes.headerTextStyle} />
            </div>
            <div>
                <List>
                    <ThemeProvider theme={responsiveListItemTheme}>
                        <div className={selectedIndex === 0 ? classes.selectedItemStyle : classes.listItemStyle}>
                            <MyListItem selected={selectedIndex === 0}
                                onClick={(event) => handleListItemClick(event, 0)}
                                icon={<DashboardOutlinedIcon className={selectedIndex === 0 ? classes.selectedIcon : classes.icon} />}
                                text={<MyTypography children="Dashboard" variant="h4" component="h3" className={selectedIndex === 0 ? classes.selectedTypographyStyle : classes.typographyStyle} />}
                                className={`  ${classes.listItemTextStyle}  `}  />
                        </div>
                        <div className={selectedIndex === 1 ? classes.selectedItemStyle : classes.listItemStyle}>
                            <MyListItem selected={selectedIndex === 1}
                                onClick={(event) => handleListItemClick(event, 1)} 
                                icon={<WorkOutlineOutlinedIcon className={selectedIndex === 1 ? classes.selectedIcon : classes.icon} />} 
                                text={<MyTypography children="Find Jobs" variant="h4" component="h3" className={selectedIndex === 1 ? classes.selectedTypographyStyle : classes.typographyStyle} />} 
                                className={`  ${classes.listItemTextStyle}  `}  />
                        </div>
                        <div className={selectedIndex === 2 ? classes.selectedItemStyle : classes.listItemStyle}>
                            <MyListItem selected={selectedIndex === 2}
                                onClick={(event) => handleListItemClick(event, 2)} 
                                icon={<TurnedInNotOutlinedIcon className={selectedIndex === 2 ? classes.selectedIcon : classes.icon} />} 
                                text={<MyTypography children="Saved Jobs" variant="h4" component="h3" className={selectedIndex === 2 ? classes.selectedTypographyStyle : classes.typographyStyle} />} 
                                className={`  ${classes.listItemTextStyle}  `} />
                        </div>
                        <div className={selectedIndex === 3 ? classes.selectedItemStyle : classes.listItemStyle}>
                            <MyListItem selected={selectedIndex === 3}
                                onClick={(event) => handleListItemClick(event, 3)} 
                                icon={<MenuBookOutlinedIcon className={selectedIndex === 3 ? classes.selectedIcon : classes.icon} />} 
                                text={<MyTypography children="Practice Test" variant="h4" component="h3" className={selectedIndex === 3 ? classes.selectedTypographyStyle : classes.typographyStyle} />} 
                                className={`  ${classes.listItemTextStyle}  `} />
                        </div>
                        <div className={selectedIndex === 4 ? classes.selectedItemStyle : classes.listItemStyle}>
                            <MyListItem selected={selectedIndex === 4}
                                onClick={(event) => handleListItemClick(event, 4)} 
                                icon={<DateRangeOutlinedIcon className={selectedIndex === 4 ? classes.selectedIcon : classes.icon} />} 
                                text={<MyTypography children="News & Events" variant="h4" component="h3" className={selectedIndex === 4 ? classes.selectedTypographyStyle : classes.typographyStyle} />} 
                                className={`  ${classes.listItemTextStyle}  `} />
                        </div>
                        <Divider light />
                        <div className={selectedIndex === 5 ? classes.selectedItemStyle : classes.listItemStyle}>
                            <MyListItem selected={selectedIndex === 5}
                                onClick={(event) => handleListItemClick(event, 5)} 
                                icon={<HelpOutlineOutlinedIcon className={selectedIndex === 5 ? classes.selectedIcon : classes.icon} />} 
                                text={<MyTypography children="Need Help?" variant="h4" component="h3" className={selectedIndex === 5 ? classes.selectedTypographyStyle : classes.typographyStyle} />} 
                                className={`  ${classes.listItemTextStyle}  `} />
                        </div>
                        <div className={selectedIndex === 6 ? classes.selectedItemStyle : classes.listItemStyle}>
                            <MyListItem selected={selectedIndex === 6}
                                onClick={(event) => handleListItemClick(event, 6)} 
                                icon={<ContactPhoneOutlinedIcon className={selectedIndex === 6 ? classes.selectedIcon : classes.icon} />} 
                                text={<MyTypography children="Contact Us" variant="h4" component="h3" className={selectedIndex === 6 ? classes.selectedTypographyStyle : classes.typographyStyle} />} 
                                className={`  ${classes.listItemTextStyle}  `} />
                        </div>
                        <div className={selectedIndex === 7 ? classes.selectedItemStyle : classes.listItemStyle}>
                            <MyListItem selected={selectedIndex === 7}
                                onClick={(event) => handleListItemClick(event, 7)} 
                                icon={<SettingsOutlinedIcon className={selectedIndex === 7 ? classes.selectedIcon : classes.icon} />} 
                                text={<MyTypography children="Settings" variant="h4" component="h3" className={selectedIndex === 7 ? classes.selectedTypographyStyle : classes.typographyStyle} />} 
                                className={`  ${classes.listItemTextStyle}  `} />
                        </div>

                    </ThemeProvider>
                </List>
            </div>
        </div>
    );

}

export default SideNavBar
