import { useState } from "react";
import { Container, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

import useInterval from "./hooks/useInterval";


const DynamicIntervalUseHook = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

  useInterval(( ) => {
    // Your custom logic here
    setCount( count + 1 );
  }, delay );

  const handleDelayChange = ( event ) => {
    setDelay( Number( event.target.value ) );
  }

  return (
    <Container
      w={'75%'}
      minH={'300px'}
      border={'5px dashed #000000'}
      textAlign={'center'}
      p={4}
    >
      <FormControl>
        <FormLabel>Adjustment</FormLabel>
        <Input
          size='sm'
          value={ delay }
          onChange={ handleDelayChange }
        />
      </FormControl>
      <Heading mt={8}>{ count }</Heading>
    </Container>
  );
}

export default DynamicIntervalUseHook;