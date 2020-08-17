import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Base Components/Button",
  component: Button,
  decorators: [(story) => <div className="p-4">{story()}</div>],
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);

export const Standard = Template.bind({});

Standard.argTypes = {
  children: { control: { type: "text" } },
};

Standard.args = {
  children: "label",
};

export const Rounded = Template.bind({});

Rounded.argTypes = {
  ...Standard.argTypes,
  rounded: { control: { disable: true } },
};

Rounded.args = {
  rounded: true,
  children: "rounded label",
};

const SizesTemplate: Story<ButtonProps> = (props) => (
  <div>
    <Button {...props} size="lg">
      large button
    </Button>
    <Button {...props} size="md">
      medium button
    </Button>
    <Button {...props} size="sm">
      small button
    </Button>
  </div>
);

export const Sizes = SizesTemplate.bind({});

Sizes.argTypes = {
  size: { control: { disable: true } },
  children: { control: { disable: true } },
};

const VariantTemplate: Story<ButtonProps> = (props) => (
  <div>
    <Button {...props} variant="primary">
      primary
    </Button>
    <Button {...props} variant="secondary">
      secondary
    </Button>
  </div>
);

export const Variant = VariantTemplate.bind({});

Variant.argTypes = {
  variant: { control: { disable: true } },
  children: { control: { disable: true } },
};

const StatusTemplate: Story<ButtonProps> = (props) => (
  <div>
    <Button {...props} status="info">
      info
    </Button>
    <Button {...props} status="success">
      success
    </Button>
    <Button {...props} status="warning">
      warning
    </Button>
    <Button {...props} status="danger">
      danger
    </Button>
  </div>
);

export const Status = StatusTemplate.bind({});

Status.argTypes = {
  ...Variant.argTypes,
};
