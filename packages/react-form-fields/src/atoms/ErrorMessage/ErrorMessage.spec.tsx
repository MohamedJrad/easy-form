import { render } from "@testing-library/react";
import Index from "./ErrorMessage";

describe(`Default`, () => {
  it(`renders`, () => {
    render(<Index />);
  });
});
