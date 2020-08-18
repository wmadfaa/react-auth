import React from "react";
import { Meta, Story } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Base Components/Input",
  component: Input,
  decorators: [(story) => <div className="p-4">{story()}</div>],
} as Meta;

const Template: Story<InputProps> = (props) => <Input {...props} />;

export const StandardInput = Template.bind({});

StandardInput.args = {
  id: "StandardInput",
  label: "Standard Input",
  hint: "use the controls panel to change me",
};

export const RoundedInput = Template.bind({});

RoundedInput.argTypes = {
  rounded: { control: { disable: true } },
};

RoundedInput.args = {
  rounded: true,
  id: "RoundedInput",
  label: "Rounded Input",
  hint: StandardInput.args.label,
};

const VariantTemplate: Story<InputProps> = (props) => (
  <div>
    <Input
      {...props}
      id={`${props.id}-primary`}
      variant="primary"
      label="primary"
    />
    <Input
      {...props}
      id={`${props.id}-secondary`}
      variant="secondary"
      label="secondary"
    />
  </div>
);

export const VariantInput = VariantTemplate.bind({});

VariantInput.argTypes = {
  variant: { control: { disable: true } },
  label: { control: { disable: true } },
};

VariantInput.args = {
  id: "VariantInput",
  hint: StandardInput.args.label,
};

const StatusTemplate: Story<InputProps> = (props) => (
  <div>
    <Input {...props} id={`${props.id}-info`} status="info" label="info" />
    <Input
      {...props}
      id={`${props.id}-success`}
      status="success"
      label="success"
    />
    <Input
      {...props}
      id={`${props.id}-warning`}
      status="warning"
      label="warning"
    />
    <Input
      {...props}
      id={`${props.id}-danger`}
      status="danger"
      label="danger"
    />
  </div>
);

export const Status = StatusTemplate.bind({});

Status.argTypes = {
  status: { control: { disable: true } },
  label: { control: { disable: true } },
};

Status.args = {
  id: "StatusInput",
  hint: StandardInput.args.label,
};
