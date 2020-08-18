import React from "react";
import { Meta, Story } from "@storybook/react";
import SignInForm, { SignInFormProps } from "./SignInForm";

export default {
  title: "Base Components/SignInForm",
  component: SignInForm,
  decorators: [
    (story) => (
      <div className="bg-gray-900 w-full h-full items-center flex justify-center">
        {story()}
      </div>
    ),
  ],
} as Meta;

const Template: Story<SignInFormProps> = (props) => <SignInForm {...props} />;

export const StandardSignInForm = Template.bind({});

StandardSignInForm.args = {};
