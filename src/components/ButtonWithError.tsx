import { Button } from 'antd'
import { FC, useState } from 'react'

// interface props {
//   setHasError?: (value: boolean) => void
// }

const ButtonWithError = () => {
  const [hasError, setHasError] = useState(false)
  const checkError = () => {
    setHasError(true)
  }
  if (hasError) {
    throw Error('Упс, ошибка')
  }
  return <Button onClick={checkError}>Вызвать ошибку</Button>
}

export default ButtonWithError
