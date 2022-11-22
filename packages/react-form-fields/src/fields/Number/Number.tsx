import React from 'react'
import { FieldLabel, ErrorMessage, FieldContainer } from '../../atoms'
import { Props } from './types'
//import { defaultProps } from './defaultProps'
import { useLogic } from './useLogic'
//import { StyledTextField, StyledPhoneInput } from './styles'

//import "react-phone-input-2/lib/style.css";
//import { TextField } from '@mui/material'

const Index = ({
  type,
  name,
  label,
  placeholder,
  defaultValue,
  isHidden,
  isReadOnly,
  isRequired,
  isTouched,
  isDisabled,
  error,
  maxLength,
  isWithRequiredStar,
  onValueChange,
  isMultiline,
  minRows,
}: Props) => {
  const { handleChange } = useLogic({
    type,
    defaultValue,
    maxLength,
    onValueChange,
  })

  return (
    <FieldContainer isHidden={isHidden}>
      <FieldLabel
        label={label}
        isRequired={isRequired}
        isWithRequiredStar={isWithRequiredStar}
      />
      <div>
        {/* <StyledPhoneInput
          maxLength={maxLength}
          // enableLongNumbers={5}
          disabled={isDisabled}
          disableCountryCode
          value={defaultValue}
          placeholder={placeholder}
          prefix=""
          autoFormat={false}
          defaultMask=".. .. .. .."
          disableDropdown
          onChange={(phone) => {
            handleChange(phone)
          }}
          localization={{ de: 'Deutschland' }}
        /> */}

        {/* <StyledTextField
        type={type}
        name={name}
        placeholder={placeholder}
       // value={value}
        error={isTouched && !!error}
        disabled={isDisabled}
        multiline={isMultiline}
        minRows={minRows}
        onChange={handleChange}
        InputProps={{
          readOnly: isReadOnly,
        }}
         inputProps={{ type: 'number'}} 
        sx={{
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
        }}
      /> */}
      </div>
      <ErrorMessage error={error || ''} isTouched={isTouched} />
    </FieldContainer>
  )
}

//Index.defaultProps = defaultProps

export default Index
