import {render, screen} from '@testing-library/react-native';
import TodoFooter from '../TodoFooter';

// we'll be using describe block to group all our test into one component
describe('todoFooter', () => {
  //  inside the describe block, we can decide to now group them  as children of the parent block to best seperate the components

  describe('functionality 1', () => {
    it('should render the correct amount of incomplete tasks ', async () => {
      render(<TodoFooter numberOfIncompletedTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeTruthy;
    });
  });

  describe('functionality 2', () => {
    it('should render "task" when the number of incomplete task is one', async () => {
      render(<TodoFooter numberOfIncompletedTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toContain;
    });
  });

  describe('functionality 3', () => {
    it('should render "task" if the task left is 1', async () => {
      render(<TodoFooter numberOfIncompletedTasks={1} />);
      const paragraphElement = screen.getByTestId('para');
      expect(paragraphElement).toBeTruthy;
    });
  });
});
