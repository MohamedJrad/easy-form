import { ReactNode } from 'react'
import { StyledButton } from './styles'

interface Props {
  children: ReactNode | ReactNode[]
}

const Index = ({ children }: Props) => {
  return <StyledButton type="submit">{children}</StyledButton>
}

export default Index
