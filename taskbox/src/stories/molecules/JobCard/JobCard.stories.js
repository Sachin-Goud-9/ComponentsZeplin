import React from "react";

import JobCard from "./JobCard";

import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';

export default {
    title: "Job Card",
    component: JobCard,
};

const Template = (args) => <JobCard {...args} />;

export const PrimaryJobCard = Template.bind({});


PrimaryJobCard.args = {
    logo : "images/hplogo.png",
    roleName : 'User Experience Designer',
    companyName: 'Hp',
    location : 'Hyderabad, Telangana India',
    icons : ["LocalTaxiOutlinedIcon", "TrainOutlinedIcon" , "DirectionsBusOutlinedIcon"  , "MotorcycleOutlinedIcon" ]
};