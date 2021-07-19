import React from "react";

import Customtextfield from "./customtextfield";

export default {
  title: "Example/textfield",
  component: Customtextfield,
};
const Template = (args) => <Customtextfield {...args} />;
export const Primary = Template.bind({});
