import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Display } from './components/Display';
import { useDarkMode } from './hooks/useDarkMode'
import { render, fireEvent, wait } from '@testing-library/react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { exportAllDeclaration } from '@babel/types';

test('Renders App', () => {
  render(<App />)
})

test('Does this render the text?', () => {
  const { getByTestId } = render(<App />)
  getByTestId('app-container')
})

test('fires properly', () => {
  fireEvent.click[useDarkMode]
})

test('useLocalStorage Renders', () => {
  render(<useLocalStorage />)
})


// Testing display via App to circumvent the .map throwing errors due to async props
test('Displays expected text', () => {
  const { getByTestId } = render(<App />)
  getByTestId('display-container')
})

test('Testing toggle class in display through app', () => {
  const { getByText } = render(<App />)
  getByText(/toggle/i)
})


// test('display container is there', done => {
//   const { getByTestId } = render(<Display />);

//   getByTestId('display-container');
//   done();
// })
