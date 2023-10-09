import { useEffect, useState, useRef } from 'react'
import { Container, Heading } from '@chakra-ui/react';


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
      clearInterval( timer.current );  // 這裡可以成功清除定時器
      return;
    }
  }, [count] )

  return (
    <Container
      w={'75%'}
      minH={'300px'}
      border={'5px dashed #000000'}
      textAlign={'center'}
      p={4}
    >
      <Heading mt={8}>{ count }</Heading>
    </Container>
  )
}

export default AdvancedInterval

