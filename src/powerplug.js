import React from "react";
import { State, Compose } from "react-powerplug";

const Counter = ({ counter, doubleCounter, incrementOn, decrementOn, resetCounter }) => (
  <div>
    <div>Single {counter}</div>
    <div>Double {doubleCounter}</div>
    <button onClick={incrementOn}>Inc</button>
    <button onClick={decrementOn}>Dec</button>
  </div>
);

export default (
  <Compose components={[<State initial={{ counter: 0 }} />]}>
    {s => {
      const incrementOn = () => s.setState({ counter: s.state.counter + 2 });
      const decrementOn = () => s.setState({ counter: s.state.counter - 3 });
      const doubleCounter = s.state.counter * 2;
      return (
        <Counter
          counter={s.state.counter}
          doubleCounter={doubleCounter}
          incrementOn={incrementOn}
          decrementOn={decrementOn}
        />
      );
    }}
  </Compose>
);
