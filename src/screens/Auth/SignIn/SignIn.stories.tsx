import React from "react";
import { Meta, Story } from "@storybook/react";

import SignIn from "./SignIn";

export default {
  title: "Screens/Auth/SignIn",
  component: SignIn,
} as Meta;

const Template: Story = (props) => <SignIn {...props} />;

export const Standard = Template.bind({});
