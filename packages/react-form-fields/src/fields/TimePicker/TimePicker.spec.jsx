import React from "react";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import Meta, * as stories from "./TimePicker.stories";

const { Default } = composeStories(stories, Meta);

describe(`Default`, () => {
  it(`renders`, () => {
    render(<Default />);
  });
});
