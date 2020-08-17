import React from "react";
import { Meta, Story } from "@storybook/react";
import Label, { LabelProps } from "./Label";

export default {
  title: "Base Components/Label",
  component: Label,
  decorators: [(story) => <div className="p-4">{story()}</div>],
} as Meta;

const Template: Story<LabelProps> = ({ children, ...rest }) => (
  <Label {...rest}>{children}</Label>
);

export const Default = Template.bind({});

Default.args = {
  children: "label",
};

const VariantTemplate: Story<LabelProps> = (props) => (
  <div>
    <Label {...props} variant="primary">
      primary
    </Label>
    <Label {...props} variant="secondary">
      secondary
    </Label>
  </div>
);

export const variant = VariantTemplate.bind({});

variant.argTypes = {
  variant: { control: { disable: true } },
  children: { control: { disable: true } },
};

const StatusTemplate: Story<LabelProps> = (props) => (
  <div>
    <Label {...props} status="info">
      info
    </Label>
    <Label {...props} status="success">
      success
    </Label>
    <Label {...props} status="warning">
      warning
    </Label>
    <Label {...props} status="danger">
      danger
    </Label>
  </div>
);

export const status = StatusTemplate.bind({});

status.argTypes = {
  ...variant.argTypes,
};
