import React from "react";
import Request from "../Request.js";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Setting mock
const mock = new MockAdapter(axios);
mock.onGet("/users").reply(200, {
  users: [{ id: 1, name: "John Smith" }],
});

export default {
  title: "Test/Request",
  component: Request,
  argTypes: {},
};

const Template = (args) => <Request {...args} />;

export const Default = Template.bind({});

Default.args = {};
