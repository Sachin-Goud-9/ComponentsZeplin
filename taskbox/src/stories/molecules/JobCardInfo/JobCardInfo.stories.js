import React from "react";

import JobCardInfo from "./JobCardInfo";

export default {
    title: "Job Card Info",
    component: JobCardInfo,
};
const Template = (args) => <JobCardInfo {...args} />;

export const PrimaryJobCardInfo = Template.bind({});


PrimaryJobCardInfo.args = {
    imageSrc : 'images/logo192.png',
    positionAppliedName : "User Experience Designer",
    companyName : "BMW",
    locationName : "Hitech City Telangana"
};