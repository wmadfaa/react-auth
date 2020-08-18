import React from "react";
import { Meta, Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
  title: "Base Components/Checkbox",
  component: Checkbox,
  decorators: [(story) => <div className="p-4">{story()}</div>],
} as Meta;

const Template: Story<CheckboxProps> = ({ children, ...rest }) => (
  <Checkbox {...rest}>{children}</Checkbox>
);

export const StandardCheckbox = Template.bind({});

StandardCheckbox.argTypes = {
  children: { control: { type: "text" } },
};

StandardCheckbox.args = {
  children: "label",
};

const VariantTemplate: Story<CheckboxProps> = (props) => (
  <div>
    <Checkbox {...props} variant="primary">
      primary
    </Checkbox>
    <Checkbox {...props} variant="secondary">
      secondary
    </Checkbox>
  </div>
);

export const VariantCheckbox = VariantTemplate.bind({});

VariantCheckbox.argTypes = {
  variant: { control: { disable: true } },
  children: { control: { disable: true } },
};

const StatusTemplate: Story<CheckboxProps> = (props) => (
  <div>
    <Checkbox {...props} status="info">
      info
    </Checkbox>
    <Checkbox {...props} status="success">
      success
    </Checkbox>
    <Checkbox {...props} status="warning">
      warning
    </Checkbox>
    <Checkbox {...props} status="danger">
      danger
    </Checkbox>
  </div>
);

export const Status = StatusTemplate.bind({});

Status.argTypes = {
  status: { control: { disable: true } },
  children: { control: { disable: true } },
};
