import React from "react";

import { IntervalContainerExtend } from "./layouts/intervalContainer";

import TextField from '@mui/material/TextField';


class DynamicIntervalInClass extends React.Component {
  state = {
    count: 0,
    delay: 1000,
  };

  componentDidMount() {
    this.interval = setInterval( this.tick, this.state.delay );
  }
  componentDidUpdate( prevProps, prevState ) {
    if( prevState.delay !== this.state.delay ) {
      clearInterval( this.interval );
      this.interval = setInterval( this.tick, this.state.delay );
    }
  }
  componentWillUnmount() {
    clearInterval( this.interval );
  }
  tick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDelayChange = ( event ) => {
    this.setState({ delay: Number( event.target.value ) });
  }

  render() {
    return (
      <IntervalContainerExtend>
        <h5>Dynamic Interval (Class)</h5>
        <span>{ this.state.count }</span>
        <div>
          <TextField 
            label="Configure interval"
            margin="dense"
            size="small"
            value={ this.state.delay }
            onChange={ this.handleDelayChange }
          />
        </div>
      </IntervalContainerExtend>
    );
  }
}

export default DynamicIntervalInClass;