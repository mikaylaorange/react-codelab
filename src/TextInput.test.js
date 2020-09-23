import React from 'react';
import TextInput from './TextInput.js';
import {render, fireEvent} from '@testing-library/react';

test('handles user input on button click', async () => {
  window.prompt = jest.fn(() => 'input from the user');
  console.log = jest.fn();

  const {getByText} = render(<TextInput promptText = "Name?"/>);
  fireEvent.click(getByText('Name?'));

  expect(window.prompt).toHaveBeenCalledWith('Name?');
  expect(console.log).toHaveBeenCalledWith('input from the user');
  expect(getByText(/input from the user/i)).toBeInTheDocument();
})