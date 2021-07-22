import React from "react";
import {
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import MyTypography from "../../atoms/MyTypography/MyTypography";



const LocationListItem = ( {locationName,...rest} )  => {

  const useStyles = makeStyles((theme) => ({
    root: {
        display : 'inline-flex',
        flexDirection : 'row',
        alignItems : 'center',
    },
    typoStyle : {
      textOverflow : 'ellipsis',
      overflow : 'hidden'
    }
}));

const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem>
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <MyTypography noWrap children={locationName} {...rest} className={classes.typoStyle} />
      </ListItem>
    </div>
  );
}

export default LocationListItem;