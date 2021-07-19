import React from "react";
import JobSearch from './jobSearch'

export default {
    title: "Molecules/JobSearch",
    component: JobSearch,
};

const Template = (args) => <JobSearch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    
};