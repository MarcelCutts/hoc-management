import React from "react";
import { withStateHandlers, withProps, compose } from "recompose";

const withCountState = withStateHandlers(
  ({ initialCounter = 0 }) => ({
    counter: initialCounter
  }),
  {
    incrementOn: ({ counter }) => value => ({
      counter: counter + value
    }),
    decrementOn: ({ counter }) => value => ({
      counter: counter - value
    })
  }
);

const doubleCounter = withProps(({ counter }) => ({ doubleCounter: counter * 2 }));

const Counter = ({ counter, doubleCounter, incrementOn, decrementOn }) => (
  <div>
    <div>Single {counter}</div>
    <div>Double {doubleCounter}</div>
    <button onClick={() => incrementOn(2)}>Inc</button>
    <button onClick={() => decrementOn(3)}>Dec</button>
  </div>
);

const enhance = compose(
  withCountState,
  doubleCounter
);

export default enhance(Counter);
