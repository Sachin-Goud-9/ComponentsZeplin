import React from 'react'
import CustomImage from './CustomImage';

export default {
    title: "Atom/Image",
    component: CustomImage,
  };
  const Template = (args) => <CustomImage {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    imgPath: "jobLocation.png",
    imgAltText: "alternate text"
  };