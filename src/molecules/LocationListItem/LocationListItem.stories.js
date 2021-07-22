import React from "react";

import LocationListItem from "./LocationListItem";

export default {
    title: "Location List Item",
    component: LocationListItem,
};
const Template = (args) => <LocationListItem {...args} />;

export const PrimaryLocation = Template.bind({});


PrimaryLocation.args = {
    locationName : 'East Marredpally, Secunderabad'
};