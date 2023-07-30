import React from 'react'
interface InputComponentProps {
  className: string
  type: string
  placeholder: string
  onChange: (e: any) => void
}
const InputComponent = ({
  className,
  type,
  placeholder,
  onChange,
}: InputComponentProps) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      required
      onChange={onChange}
    />
  )
}

export default InputComponent
