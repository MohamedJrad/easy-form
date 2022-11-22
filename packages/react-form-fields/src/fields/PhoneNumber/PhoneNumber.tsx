import React, { useEffect, useState } from 'react'
//import PhoneInput from "react-phone-input-2";
import { FieldLabel, ErrorMessage, FieldContainer } from '../../atoms'
import { Props } from './types'
import { defaultProps } from './defaultProps'
import { useLogic } from './useLogic'
import { StyledTextField, StyledPhoneInput } from './styles'
//import "react-phone-input-2/lib/style.css";

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
      <div dir="ltr">
        <StyledPhoneInput
          // disableCountryCode={true}
          disabled={isDisabled}
          value={`+216${defaultValue}`}
          defaultMask=".. ... ..."
          country="tn"
          placeholder=""
          disableDropdown
          disableCountryCode
          countryCodeEditable={false}
          onChange={(phone) => {
            handleChange(phone)
          }}
        />{' '}
      </div>
      <ErrorMessage error={error || ''} isTouched={isTouched} />
    </FieldContainer>
  )
}

Index.defaultProps = defaultProps

export default Index
