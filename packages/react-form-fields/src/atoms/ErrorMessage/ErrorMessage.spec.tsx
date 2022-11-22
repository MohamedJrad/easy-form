import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Index from './ErrorMessage'
describe(`Default`, () => {
  it(`renders`, () => {
    render(<Index />)
  })
})
