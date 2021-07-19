import React from "react";

import Mybutton from "./CustomButton";

import { action } from "@storybook/addon-actions";

export default {
  title: "Atom/Button",
  component: Mybutton,
};
const Template = (args) => <Mybutton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  text: "Primary",
  color: "primary",
  variant: "contained",
  click: action("primary clicked"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  text: "Secondary",
  color: "primary",
  variant: "outlined",
  click: action("secondary clicked"),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  text: "Tertiary",
  color: "secondary",
  variant: "standard",
  click: action("tertiary clicked"),
};
