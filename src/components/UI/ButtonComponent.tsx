import { Button } from 'antd'
import React from 'react'
interface ButtonComponentProps {
  type: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed'
  isDisabled: boolean
  onClickButton: () => void
}

const ButtonComponent = ({
  type,
  isDisabled,
  onClickButton,
}: ButtonComponentProps) => {
  return (
    <div>
      <Button type={type} disabled={isDisabled} onClick={onClickButton}>
        Проверить ответы
      </Button>
    </div>
  )
}

export default ButtonComponent
