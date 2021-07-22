import React from "react";

import MyImage from "./MyImage";

export default {
    title: "Image",
    component: MyImage,
};
const Template = (args) => <MyImage {...args} />;

export const SmallIconStyle = Template.bind({});

SmallIconStyle.args = {
    src:"images/profileimg.png",
    height:"40px",
    width:"40px",
    alt: "An Image"
};

export const MediumIconStyle = Template.bind({});

MediumIconStyle.args = {
    src:"images/bmwlogo.png",
    height:"50px",
    width:"50px",
    alt: "An Image"
};

export const LargeIconStyle = Template.bind({});

LargeIconStyle.args = {
    src:"images/hplogo.png",
    height:"80px",
    width:"80px",
    alt: "An Image"
};

export const PrimaryImageMap = Template.bind({});

PrimaryImageMap.args = {
    src:"images/map.png",
    height:"150px",
    width:"350px",
    alt: "An Image"
};

export const ImageMapShade = Template.bind({});

ImageMapShade.args = {
    ...PrimaryImageMap.args,
    styles : {
        boxShadow: '0px 6px 5px #ccc',
        borderRadius : "10px"
    }
};