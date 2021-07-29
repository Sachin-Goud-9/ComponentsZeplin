
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Icon from "@material-ui/core/Icon";
import { Button, Fade, IconButton, ListItemAvatar, Menu, MenuItem, StylesProvider, Typography } from "@material-ui/core";

import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MessageIcon from '@material-ui/icons/Message';
import MyTypography from '../../atoms/MyTypography/MyTypography';
import MyImage from '../../atoms/MyImage/MyImage';
import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const ProfileItem = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            display : 'inline-flex',
            paddingTop: '15px'
        },
        arrowIcon : {
            paddingLeft : '10px',
            paddingRight : '20px'
        },
        header: {
            paddingTop: '10px'
        }
    }));

    const classes = useStyles();


    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className={classes.root}>
            {/* <ListItem button>
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
            </ListItem> */}

        
            <ListItemIcon>
                <MessageIcon />
                </ListItemIcon>
                <ListItemIcon>
                    <NotificationsIcon />
                </ListItemIcon>
                <ListItemAvatar>
                    <MyImage
                        src="logo192.png"
                        height="40px"
                        width="40px"
                        alt="PROFILE IMAGE"
                    />
                </ListItemAvatar>
            <Typography> 
                Sara Joseph
            </Typography>
            <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
          <ExpandMoreOutlinedIcon />
      </IconButton>
        <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </div>
    );
}

export default ProfileItem;