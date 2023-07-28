import { Button } from 'antd'
import { useState } from 'react'

const ButtonWithError = () => {
  const [hasError, setHasError] = useState(false)
  if (hasError) {
    throw Error('Упс, ошибка')
  }
  return <Button onClick={() => setHasError(true)}>Вызвать ошибку</Button>
}

export default ButtonWithError
