import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './components/Display';
import { useDarkMode } from './hooks/useDarkMode'
import { render, fireEvent } from '@testing-library/dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('fires properly', () => {
  fireEvent.click[useDarkMode]
})

test('toggle is there', () => {
  const { getByText } = render(<Display />);

  getByText(/dark/i);
})
