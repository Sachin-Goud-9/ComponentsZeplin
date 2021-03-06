import React from 'react';
import HorizontalLinearStepper from './CustomStepperTab';

export default {
    title: "Atom/Stepper",
    component: HorizontalLinearStepper,
};
const Template = (args) => <HorizontalLinearStepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    step: ['Your Location'],
};