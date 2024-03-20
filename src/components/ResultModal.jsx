import React, { useImperativeHandle } from "react";

export const ResultModal = ({ result, targetTime }, ref) => {
  useImperativeHandle(reference);

  return (
    <dialog ref={ref} className="result-modal">
      <h2>{result}</h2>
      <p>the target time was {targetTime} seconds.</p>
      <p>you stopped the timer with X seconds left</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};
