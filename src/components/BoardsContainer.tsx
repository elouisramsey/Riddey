import useCounter from 'hooks/useCounter'
import { useCallback, useMemo } from 'react'
import Board from './Board'
import Button from './Button'
import CurrentUsage from './CurrentUsage'

const BoardsContainer = () => {
  const { count, increaseCount } = useCounter()

  const boards = useMemo(() => {
    return [...Array(count)].map((_, i) => (
      <Board featureNumber={i + 1} key={i} />
    ))
  }, [count])

  const handleIncreaseCount = useCallback(() => {
    increaseCount()
  }, [increaseCount])

  return (
    <section className='boardsContainer'>
      <section className='boardContainer'>{boards}</section>

      <CurrentUsage count={count} />
      <Button onClick={handleIncreaseCount} disabled={count === 10}>
        Add New Board
      </Button>
    </section>
  )
}

export default BoardsContainer
