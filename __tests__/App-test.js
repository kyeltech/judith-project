/**
 * @format
 */

import 'react-native';
import React from 'react';
import {addNumbers} from '../app/reusable/mathUtils';
import {screen} from 'react-test-renderer';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<addNumbers />);
// });

test('what is expected to pass', () => {
  expect(addNumbers(2, 4)).toEqual(6);
});

// export default {
//   typeAcquisition: {
//     include: ['jest'],
//   },
// };
