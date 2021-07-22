import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const MyListItem = ({icon,text,...rest}) => {

    return (
      <div >  
         <ListItem {...rest}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </div>    
    );
    //style={{display: 'inline-flex',...divStyles}}

}

export default MyListItem
