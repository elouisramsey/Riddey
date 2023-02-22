import useCounter from 'hooks/useCounter'
import Board from './Board'
import Button from './Button'
import CurrentUsage from './CurrentUsage'

const BoardsContainer = () => {
  const { count, increaseCount } = useCounter()
  return (
    <section className='boardsContainer'>
      <section className='boardContainer'>
        {[...Array(count)].map((_, i) => (
          <Board featureNumber={i + 1} key={i} />
        ))}
      </section>

      <CurrentUsage count={count} />
      <Button onClick={increaseCount} disabled={count === 10}>
        Add New Board
      </Button>
    </section>
  )
}

export default BoardsContainer
