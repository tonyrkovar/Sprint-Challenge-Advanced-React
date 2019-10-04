import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './components/Display';
import { useDarkMode } from './hooks/useDarkMode'
import { render, fireEvent } from '@testing-library/dom';
import { tsExternalModuleReference } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('fires properly', () => {
  // const { getByText } = render(<Display />)
  fireEvent.click[useDarkMode]
})