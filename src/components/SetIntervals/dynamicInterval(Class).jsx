import React from "react";

import { Container, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";


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
            value={ this.state.delay }
            onChange={ this.handleDelayChange }
          />
        </FormControl>
        <Heading mt={8}>{ this.state.count }</Heading>
      </Container>
    );
  }
}

export default DynamicIntervalInClass;