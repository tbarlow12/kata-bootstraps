import React from "react";

export interface ClickCounterProps {
  count: number;
  setCount: (count: number) => void;
}

export function ClickCounter(props: ClickCounterProps) {
  const { count, setCount } = props;

  return (
    <div className="click-counter">

      <h3>This is my click counter:</h3>
      <button onClick={() => setCount(count + 1)}>Increase Clicks</button>
      <br/>
      <button onClick={() => setCount(count - 1)}>Decrease Clicks</button>
      <br/>
      {count}
    </div>
  )
}