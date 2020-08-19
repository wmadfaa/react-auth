import React from "react";
import { Meta, Story } from "@storybook/react";
import AuthFormLayout, { SignInFormProps } from "./AuthFormLayout";
import SignInForm from "../SignInForm/SignInForm";

export default {
  title: "Base Components/AuthFormLayout",
  component: AuthFormLayout,
  decorators: [
    (story) => (
      <div className="bg-gray-900 w-full h-full items-center flex justify-center">
        {story()}
      </div>
    ),
  ],
} as Meta;

const COMPONENT_CHOICES = {
  empty: () => (
    <h6 className="text-center text-blue-500 text-sm">
      Select a Form The 'children' option in the control panel
    </h6>
  ),
  signIn: SignInForm,
};

interface TemplateProps extends SignInFormProps {
  children: keyof typeof COMPONENT_CHOICES;
}

const Template: Story<TemplateProps> = ({ children, ...props }) => (
  <AuthFormLayout {...props}>
    {React.createElement(COMPONENT_CHOICES[children])}
  </AuthFormLayout>
);

export const StandardSignInForm = Template.bind({});

StandardSignInForm.argTypes = {
  title: {
    control: { type: "text" },
  },
  secondaryTitle: {
    control: { type: "text" },
  },
  children: {
    control: {
      type: "select",
      options: Object.keys(COMPONENT_CHOICES),
    },
  },
};

StandardSignInForm.args = {
  title: "Sign in with",
  secondaryTitle: "Or sign in with credentials",
  children: "empty",
};
