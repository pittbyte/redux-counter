import React from 'react';
import { createRoot } from 'react-dom/client';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
      count: state.count + 1
  };
    case 'DECREMENT':
      return {
      count: state.count - 1
      };
    default: 
      return state;
  }

}

const store = configureStore({ reducer });

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);