import React from 'react';
import bottom from '../app/reusable/Test/bottom';
import {act, create} from 'react-test-renderer';

const tree = create(<bottom />);

test('should', () => {
  expect(tree).toMatchSnapshot;
});

test('should ', () => {
  //    button pressed
  const button = tree.root.findByProps({TestID: 'my-button'}).props;
  act(() => button.onPress());

  //   text passed

  const text = tree.root.findByProps({TestID: 'my-text'}).props;
  expect(text.children).toEqual('button pressed');
});
