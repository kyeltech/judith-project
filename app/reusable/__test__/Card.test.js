import {screen, fireEvent, render} from '@testing-library/react-native';
import Cards from '../Cards';

describe('Todo Cards', () => {
  it('should pass', async () => {
    render(<Cards />);
    // const inputField = screen.getAllByPlaceholderText(/add a new task here/i);
    // const button = screen.getByRole('button', {name: /Add/i});
    // fireEvent.changeText(inputField, {target: {value: 'Go Grocery shopping'}});
    // fireEvent.press(button);
    // const viewElement = screen.getByText(/Go Grocery shopping/i);
    // expect(viewElement).toHaveBeenCalled();
  });
});
