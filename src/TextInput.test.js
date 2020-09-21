import React from 'react';
import TextInput from './TextInput.js';
import {render, fireEvent} from '@testing-library/react';

test('handles user input on button click', async () => {
  window.prompt = jest.fn(() => 'input from the user');
  console.log = jest.fn();

  const {getByText} = render(<TextInput/>);
  fireEvent.click(getByText('Button'));

  expect(window.prompt).toHaveBeenCalledWith('Please provide input');
  expect(console.log).toHaveBeenCalledWith('input from the user');
})