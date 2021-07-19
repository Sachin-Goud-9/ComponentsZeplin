import React from 'react';
import AQI from './aqi';

export default {
    title: "Molecules/AQI",
    component: AQI,
    argTypes:{
        color: {control: 'color'},
    },
};
const Template = (args) => <AQI {...args} />;

export const LocationPrimary = Template.bind({});
LocationPrimary.args = {
    text: "Enter location to know Time Air Quality Index (AQI)",
    imgPath: "yourLocation.png",
    isNumber: false,
    count:"",
    isNumberTag:false,
    numberTag:"",
    textSize:"26px",
    color:"#19293b",
};

export const LocationSecondary = Template.bind({});
LocationSecondary.args = {
    text: "Real - Time Air Quality Index (AQI) in this location",
    imgPath: "yourLocation.png",
    isNumber: true,
    count:"894",
    isNumberTag:true,
    numberTag:"Hyderabad",
    textSize:"20px",
    countSize: "100px",
    numberTagSize: "26px",
    color:"#19293b",
};

export const SkillsPrimary = Template.bind({});
SkillsPrimary.args = {
    text: "Enter location to know Time Air Quality Index (AQI)",
    imgPath: "jobLocation.png",
    isNumber: true,
    count:"953",
    isNumberTag:false,
    numberTag:"",
    textSize:"20px",
    countSize: "100px",
    color:"#19293b",
};
