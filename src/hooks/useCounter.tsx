import { useState } from 'react'

const useCounter = () => {
  const [count, setCount] = useState<number>(0)

  const increaseCount = () => setCount(count + 1)

  return {
    count,
    increaseCount
  }
}

export default useCounter
