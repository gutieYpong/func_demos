import React, { useState } from "react";

import useInterval from "./hooks/useInterval";
import { IntervalContainerExtend } from "./layouts/intervalContainer";

import TextField from '@mui/material/TextField';


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
    <IntervalContainerExtend>
      <h5>Dynamic Interval<br/>(Custom Hook)</h5>
      <span>{ count }</span>
      <div>
        <TextField 
          label="Configure interval"
          margin="dense"
          size="small"
          value={ delay }
          onChange={ handleDelayChange }
        />
      </div>
    </IntervalContainerExtend>
  );
}

export default DynamicIntervalUseHook;