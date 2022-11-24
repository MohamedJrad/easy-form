import { useState, useEffect, MouseEvent } from 'react'

export const useLogic = (onValueChange?: (e: File | string) => void) => {
  const [selectedFile, setSelectedFile] = useState<File | ''>('')

  const onDrop = (e: File[]) => {
    //setSelectedFile(e[0])
  }
  const removeFile = (e: MouseEvent<Element, Event>) => {
    // e.stopPropagation()
    // setSelectedFile('')
  }

  const handleEyeIconClick = (
    e: MouseEvent<Element, Event>,
    onEyeIconClicked?: () => void,
  ) => {
    // e.stopPropagation()
    // if (typeof onEyeIconClicked === 'function') {
    //   onEyeIconClicked()
    // }
  }

  useEffect(() => {
    if (typeof onValueChange === 'function') {
      onValueChange(selectedFile)
    }
  }, [selectedFile])

  return { onDrop, removeFile, selectedFile, handleEyeIconClick }
}
