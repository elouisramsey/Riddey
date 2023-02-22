type Props = {
  count: number
}

const CurrentUsage = ({ count }: Props) => {
  return (
    <aside
      className='current-usage'
      role='status'
      aria-label={`Current Usage: ${count} out of 10 boards in use`}
    >
      <h3>Current Usage</h3>
      <p className='counterText'>{count} out of 10 boards in use</p>
      <div className='indicator'>
        <div
          style={{
            width: `${count * 20}px`,
            backgroundColor: '#E26559',
            height: '100%',
            transition: 'width 1s ease-in-out'
          }}
          role='progressbar'
          aria-valuemin={0}
          aria-valuemax={10}
          aria-valuenow={count}
        />
      </div>
    </aside>
  )
}

export default CurrentUsage
