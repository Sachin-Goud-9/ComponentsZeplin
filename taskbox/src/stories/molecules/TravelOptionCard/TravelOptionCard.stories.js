import React from "react";

import TravelOptionCard from "./TravelOptionCard";

export default {
    title: "Travel Option Card ",
    component: TravelOptionCard,
};
const Template = (args) => <TravelOptionCard {...args} />;

export const PrimaryTravelOptionCard = Template.bind({});

PrimaryTravelOptionCard.args = {
    imageSrc : 'images/ola.png',
    cabServiceName : "Ola",
    costEstimation : "Approx Rs. 65"
};

export const SecondaryTravelOptionCard = Template.bind({});

SecondaryTravelOptionCard.args = {
    imageSrc : 'images/uber.png',
    cabServiceName : "Uber",
    costEstimation : "Approx Rs. 65"
}
