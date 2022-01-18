import React, { useEffect, useState, useRef } from 'react'

import { IntervalContainer } from './layouts/intervalContainer';


const AdvancedInterval = () => {
  const [count, setCount] = useState(10)
  const timer = useRef(null)

  useEffect( () => {
    timer.current = setInterval(() => {
      setCount( cnt => cnt - 1 );
    }, 1000);
    return () => {
      clearInterval( timer.current );
    }
  }, [] )

  useEffect(() => {
    if ( count === 0 )
    {
      clearInterval( timer.current ); // 這裡可以成功清除定時器
      return;
    }
  }, [count] )

  return (
    <IntervalContainer>
      <h5>Advance Interval</h5>
      <span>{ count }</span>
    </IntervalContainer>
  )
}

export default AdvancedInterval

