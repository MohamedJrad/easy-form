import { Field } from './Field'

export type Schema = {
  fields: Field[]
  onSubmit: (e: unknown) => void
  submitButtonLabel: string
  placement: number[] | number[][]
  fieldMinWidth: number
  fieldRightMargin: number
}
