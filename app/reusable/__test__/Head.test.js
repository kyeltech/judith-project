import {render, screen} from '@testing-library/react-native';
import Title from '../Title';

test('render test in an header', () => {
  render(<Title title={'my heading text'} />);
  const titleElement = screen.getByText(/my heading text/i);
  expect(titleElement).toBeTruthy();
});

test('render test id in an header ', () => {
  render(<Title title="my heading textsss" />);
  const ElementID = screen.getByTestId('title');
  expect(ElementID).toBeTruthy();
});
