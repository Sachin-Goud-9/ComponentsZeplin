import React from "react";
import SideNavBar from './SideNavbar'

export default {
    title: "Side Nav Bar",
    component: SideNavBar,
};
const Template = (args) => <SideNavBar {...args} />;



export const SideNavPrimary = Template.bind({});

SideNavPrimary.args = {

    typographyDivStyle : {
        padding : '10px',
        justifyContent : 'center'
    }
};
