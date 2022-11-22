import React from "react";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import Meta, * as stories from "./FileSelector.stories";

const {
  Default,
  Error,
  Loading,
  LongLabel,
  Longplaceholder,
  RTLLongplaceholder,
  Required,
  RightToLeft,
} = composeStories(stories, Meta);

describe(`Default`, () => {
  it(`renders`, () => {
    render(<Default />);
  });
});
describe(`Error`, () => {
  it(`renders`, () => {
    render(<Error />);
  });
});
describe(`Loading`, () => {
  it(`renders`, () => {
    render(<Loading />);
  });
});
describe(`LongLabel`, () => {
  it(`renders`, () => {
    render(<LongLabel />);
  });
});

describe(`Long placeholder`, () => {
  it(`renders`, () => {
    render(<Longplaceholder />);
  });
});
describe(`Right To Left`, () => {
  it(`renders`, () => {
    render(<RightToLeft />);
  });
});

describe(`Right To Left Long placeholder`, () => {
  it(`renders`, () => {
    render(<RTLLongplaceholder />);
  });
});
describe(`Required`, () => {
  it(`renders`, () => {
    render(<Required />);
  });
});
