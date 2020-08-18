import React from "react";
import { Meta, Story } from "@storybook/react";
import Navbar, { NavbarProps } from "./Navbar";

export default {
  title: "Base Components/Navbar",
  component: Navbar,
  decorators: [
    (story) => <div className="bg-gray-900 w-full h-full">{story()}</div>,
  ],
} as Meta;

const Template: Story<NavbarProps> = (props) => <Navbar {...props} />;

export const StandardNavbar = Template.bind({});

StandardNavbar.args = {};
