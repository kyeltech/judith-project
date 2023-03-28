//import liraries
import React from 'react';
import renderer from 'react-test-renderer';
import Sum from './sum';

test('render wetin them tell you', () => {
  const tree = renderer.create(<Sum />).toJSON();
  expect(tree).toMatchSnapshot();
});
