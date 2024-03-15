import React from 'react'

export const ResultModal = ({result, targetTime,reference}) => {
  return (
    <dialog ref={reference} className='result-modal'>
        <h2>{result}</h2>
        <p>the target time was {targetTime} seconds.</p>
        <p>you stopped the timer with X seconds left</p>
        <form method='dialog'>
            <button>Close</button>
        </form>
    </dialog>
  )
}
