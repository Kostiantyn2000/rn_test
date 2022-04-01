import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgClose = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    style={{
      fill: '#000',
    }}
    {...props}>
    <Path d="M4.707 3.293 3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414l7.293 7.293 1.414-1.414L13.414 12l7.293-7.293-1.414-1.414L12 10.586 4.707 3.293z" />
  </Svg>
);

export default SvgClose;
