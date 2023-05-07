jest.unmock('axios');
import React from 'react';
import {screen, render} from '@testing-library/react-native';
import Socials from '../Socials';
import {QueryClient, QueryClientProvider} from 'react-query';

jest.mock('axios', () => ({
  __esModule: false,
  default: {
    get: () => ({
      data: [{userId: 'not'}, {userId: 'really'}, {userId: 'one'}],
    }),
  },
}));

describe('Socials Cards', () => {
  // adding a before each
  beforeEach(() => {
    console.log('RUNNING BEFORE EACH TEST');
  });
  it('should pass', async () => {
    render(
      // whenever i know i'm handling a routing inside a file
      <QueryClientProvider client={new QueryClient()}>
        <Socials />
      </QueryClientProvider>,
    );
    const followerViewElement = await screen.findByTestId('follower-item-0');
    expect(followerViewElement).toBeInTheDocument('follower-item-0');
    // const inputField = screen.getAllByPlaceholderText(/add a new task here/i);
    // const button = screen.getByRole('button', {name: /Add/i});
    // fireEvent.changeText(inputField, {target: {value: 'Go Grocery shopping'}});
    // fireEvent.press(button);
    // const viewElement = screen.getByText(/Go Grocery shopping/i);
    // expect(viewElement).toHaveBeenCalled();
  });
});
