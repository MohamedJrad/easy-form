import {
  Input,
  Select,
  CheckboxGroup,
  RadioGroup,
  FileSelector,
  DatePicker,
  TimePicker,
  Number,
} from '@med-jrad/react-form-fields'
import { Props } from './types'

const Index = ({ field, meta }: Props) => {
  const {
    type,
    name,
    label,
    isRequired,
    isHidden,
    isDisabled,
    onValueChange,
    options,
    defaultValue,
    placeholder,
    locale,
    dateFormat,
    onEyeIconClicked,
    isLoading,
    maxLength,
    isWithRequiredStar,
  } = field
  const { error, touched } = meta

  switch (type) {
    case 'text':
      return (
        <Input
          type="text"
          name={name}
          label={label}
          placeholder={placeholder}
          isRequired={isRequired}
          isHidden={isHidden}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
          maxLength={maxLength}
          isWithRequiredStar={isWithRequiredStar}
        />
      )
    case 'phone':
      return <div />
    case 'textarea':
      return (
        <Input
          type="text"
          name={name}
          label={label}
          placeholder={placeholder}
          isRequired={isRequired}
          isHidden={isHidden}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
          isMultiline
          minRows={3}
          isWithRequiredStar={isWithRequiredStar}
        />
      )
    case 'email':
      return (
        <Input
          type="email"
          name={name}
          label={label}
          placeholder={placeholder}
          isRequired={isRequired}
          isHidden={isHidden}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
          maxLength={maxLength}
          isWithRequiredStar={isWithRequiredStar}
        />
      )
    case 'password':
      return (
        <Input
          type="password"
          name={name}
          label={label}
          placeholder={placeholder}
          isRequired={isRequired}
          isHidden={isHidden}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
          maxLength={maxLength}
          isWithRequiredStar={isWithRequiredStar}
        />
      )
    case 'number':
      return (
        <Number
          name={name}
          label={label}
          placeholder={placeholder}
          isRequired={isRequired}
          isHidden={isHidden}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
          maxLength={maxLength}
        />
      )
    case 'date':
      return (
        <DatePicker
          label={label}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
          locale={locale}
          dateFormat={dateFormat}
        />
      )
    case 'time':
      return (
        <TimePicker
          label={label}
          isRequired={isRequired}
          isHidden={isHidden}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
        />
      )
    case 'select':
      return (
        <Select
          name={name}
          label={label}
          placeholder={placeholder}
          options={options}
          isRequired={isRequired}
          isHidden={isHidden}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
          isWithRequiredStar={isWithRequiredStar}
        />
      )
    case 'radioGroup':
      return (
        <RadioGroup
          name={name}
          label={label}
          options={options}
          isRequired={isRequired}
          isHidden={isHidden}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
          isWithRequiredStar={isWithRequiredStar}
        />
      )
    case 'checkboxGroup':
      return (
        <CheckboxGroup
          name={name}
          label={label}
          options={options}
          isRequired={isRequired}
          isHidden={isHidden}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
          isWithRequiredStar={isWithRequiredStar}
        />
      )
    case 'file':
      return (
        <FileSelector
          //  name={name}
          label={label}
          placeholder={placeholder}
          isRequired={isRequired}
          isHidden={isHidden}
          isDisabled={isDisabled}
          defaultValue={defaultValue}
          isTouched={touched}
          error={error || ''}
          onValueChange={onValueChange}
          onEyeIconClicked={onEyeIconClicked}
          isLoading={isLoading}
          isWithRequiredStar={isWithRequiredStar}
        />
      )
    default:
      return <div />
  }
}

export default Index
