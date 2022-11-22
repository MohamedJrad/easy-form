import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Index from './CheckboxGroup'

describe(`Default`, () => {
  it(`renders`, () => {
    render(<Index />)
  })
})
