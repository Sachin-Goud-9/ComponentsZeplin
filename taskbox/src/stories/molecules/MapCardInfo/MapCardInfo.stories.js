import React from "react";

import MapCardInfo from "./MapCardInfo";

export default {
    title: "Map Card Info",
    component: MapCardInfo,
};
const Template = (args) => <MapCardInfo {...args} />;

export const PrimaryMapCardInfo = Template.bind({});


PrimaryMapCardInfo.args = {
    mapImageSrc : 'images/map.png',
    srcLocation : "East Marredpally Secunderabad",
    destLocation : "Hitech City",
};