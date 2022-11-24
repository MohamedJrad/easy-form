import { render } from '@testing-library/react'
import Index from './index'

describe(`Default`, () => {
  it(`renders`, () => {
    render(<Index />)
  })
})
// describe(`Disabled`, () => {
//   it(`renders`, () => {
//     render(<Disabled />);
//   });
// });
// describe(`Error`, () => {
//   it(`renders`, () => {
//     render(<Error />);
//   });
// });
// describe(`ReadOnly`, () => {
//   it(`renders`, () => {
//     render(<ReadOnly />);
//   });
// });
// describe(`Required`, () => {
//   it(`renders`, () => {
//     render(<Required />);
//   });
// });
// describe(`WithDefaultValue`, () => {
//   it(`renders`, () => {
//     render(<WithDefaultValue />);
//   });
// });
