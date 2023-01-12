import React from 'react'

export default function CounterControl(props) {
  return (
    <div className="action">
      <button onClick={() => props.setCounter(props.counter+1)  } > Plus 1 </button>
      <button onClick={() => props.setCounter(props.counter-1)  } > Minus 1  </button>
    </div>
  )
}
