import React, { useEffect, useState, useRef } from 'react'

import { IntervalContainer } from './layouts/intervalContainer';


/**
 * useRef 返回一個 mutable 的 ref 對像...
 * ...我們將 count 的最新值保存到 ref 的 current 屬性裡...
 * ...結合第一條思路修改代碼如下：
 */
const NormalInterval = ({ initCount }) => {
  const [count, setCount] = useState( initCount );
  const latestCount = useRef(count); // 定義一個ref, 初始值是10

  useEffect( () => {
    latestCount.current = count; // 更新
  })

  useEffect( () => {
    const timer = setInterval(() => {
      if (latestCount.current === 0) { // 此處判斷latestCount.current, 而不是count
        clearInterval(timer);
        return;
      }
      setCount( cnt => cnt - 1 );
    }, 1000)

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <IntervalContainer>
      <h5>Normal Interval</h5>
      <span>{ count }</span>
    </IntervalContainer>
  )
}

export default NormalInterval;