import { Props } from './types'

export const defaultProps: Props = {
  label: 'File Selector',
  placeholder: `"Drag & Drop or Click to Browse"`,
  isRequired: false,
  defaultValue: '',
  isReadOnly: false,
  isHidden: false,
  error: 'Error message',
  isTouched: false,
  maxSize: 5,
}
