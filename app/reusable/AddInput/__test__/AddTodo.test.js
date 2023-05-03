import React from 'react';
import {render, screen} from '@testing-library/react-native';
import AddTodo from './AddTodo';

// we'll be using describe block to group all our test into one component
describe('AddInput', () => {
  describe('functionality 1', () => {
    it('should be able to test the change in the input', async () => {
      render(<AddTodo todo={[]} />);
      const inputElement = screen.getByPlaceholderText(/add a new task here/i);
      expect(inputElement).toBeTruthy;
    });
  });
});
