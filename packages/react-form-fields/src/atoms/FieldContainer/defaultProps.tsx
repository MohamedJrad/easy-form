import React from 'react'

const Child = () => {
  return <div style={{ width: '100%', height: '90px', background: 'red' }} />
}

export const defaultProps: unknown = {
  isHidden: false,
  children: <Child />,
}
