import React from "react";
import TopNavBar from "./TopNavBar";

import { PrimaryProfileDisplay } from "../../molecules/ProfileItem/ProfileItem.stories";

import LocationListItem from "../../molecules/LocationListItem/LocationListItem";

export default {
    title: "Top Navigation Bar",
    component: TopNavBar,
};
const Template = (args) => <TopNavBar {...args} />;

export const TopNavBarPrimary = Template.bind({});


TopNavBarPrimary.args = {
    locationItem : <LocationListItem children="East Marredpally, Secunderabad"/>,
    profileItem : <PrimaryProfileDisplay />
};