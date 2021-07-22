import React from "react";

import ProfileItem from "./ProfileItem";


export default {
    title: "Profile Item",
    component: ProfileItem,
};
const Template = (args) => <ProfileItem {...args} />;

export const PrimaryProfileDisplay = Template.bind({});


PrimaryProfileDisplay.args = {
    
};