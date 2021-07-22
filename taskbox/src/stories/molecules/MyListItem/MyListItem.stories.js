import React from "react";
import MyListItem from "./MyListItem";
import DashboardIcon from '@material-ui/icons/Dashboard';

import { Secondary, Tertiary } from "../../atoms/MyTypography/MyTypography.stories";

export default {
    title: "List Item",
    component: MyListItem,
};
const Template = (args) => <MyListItem {...args} />;

export const PrimaryListItem = Template.bind({});

PrimaryListItem.args = {
    icon: <DashboardIcon />,
    text: <Secondary {...Secondary.args} />,
    divStyles : {
        height : '50px',
        width : '240px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap : '10px',
        padding: '8px 10px',
    }
};

export const SecondaryListItem = Template.bind({});


SecondaryListItem.args = {
    icon: <DashboardIcon color="#324552" />,
    text: <Tertiary {...Tertiary.args} />,
    divStyles: {
        backgroundColor: 'rgba(90, 197, 104, 0.15)',
        borderRadius: '10px',
        display: 'inline-flex',
        height : '50px',
        width : '240px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap : '10px',
        padding: '8px 10px',
    }
};