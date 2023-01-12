import React, { useState } from 'react'
import Counter from '../components/Counter'
import CounterControl from '../components/CounterControl'

export default function Index() {

  const [counter,setCounter] = useState(0)


  return (
    <div>
      <h2 className="heading"> Index Page </h2>
      <div className="counter">
        <Counter counter={counter} />
        <CounterControl counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}
