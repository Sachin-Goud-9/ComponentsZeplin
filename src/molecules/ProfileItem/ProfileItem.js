import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Icon from "@material-ui/core/Icon";
import { ListItemAvatar, StylesProvider } from "@material-ui/core";

import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MessageIcon from '@material-ui/icons/Message';
import MyTypography from '../../atoms/MyTypography/MyTypography';
import MyImage from '../../atoms/MyImage/MyImage';
import { makeStyles } from '@material-ui/core/styles';


const ProfileItem = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            display : 'inline-flex'
        },
        arrowIcon : {
            paddingLeft : '10px',
            paddingRight : '20px'
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ListItem button>
                <ListItemIcon>
                    <MessageIcon />
                </ListItemIcon>
                <ListItemIcon>
                    <NotificationsIcon />
                </ListItemIcon>
                <ListItemAvatar>
                    <MyImage
                        src="images/profileimg.png"
                        height="40px"
                        width="40px"
                        alt="PROFILE IMAGE"
                    />
                </ListItemAvatar>
                <ListItemText>
                    <MyTypography children="Sara Joseph" />
                </ListItemText>
                <ListItemIcon className={classes.arrowIcon}>
                    <KeyboardArrowDownIcon />
                </ListItemIcon>
            </ListItem>
        </div>
    );
}

export default ProfileItem;