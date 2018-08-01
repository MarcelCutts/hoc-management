import React from "react";
import { State } from "react-powerplug";
import { adopt } from "react-adopt";

const Counter = ({ counter, doubleCounter, incrementOn, decrementOn, resetCounter }) => (
  <div>
    <div>Single {counter}</div>
    <div>Double {doubleCounter}</div>
    <button onClick={incrementOn}>Inc</button>
    <button onClick={decrementOn}>Dec</button>
  </div>
);

const mapper = {
  c: <State initial={{ counter: 0 }} />
};

const mapProps = ({ c }) => ({
  c,
  doubleCounter: c.state.counter * 2
});

const Composed = adopt(mapper, mapProps);

export default () => (
  <Composed>
    {({ c, doubleCounter }) => {
      const incrementOn = () => c.setState({ counter: c.state.counter + 2 });
      const decrementOn = () => c.setState({ counter: c.state.counter - 3 });
      return (
        <Counter
          counter={c.state.counter}
          doubleCounter={doubleCounter}
          incrementOn={incrementOn}
          decrementOn={decrementOn}
        />
      );
    }}
  </Composed>
);
