import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SuccessIcon = () => (
  <Svg width={18} height={18} fill="none">
    <Path
      fill="#27825C"
      fillRule="evenodd"
      d="M5.95.353A7.511 7.511 0 0 0 .353 5.95a13.354 13.354 0 0 0 0 6.1 7.511 7.511 0 0 0 5.597 5.597c2.006.47 4.094.47 6.1 0a7.511 7.511 0 0 0 5.597-5.597c.47-2.006.47-4.094 0-6.1A7.511 7.511 0 0 0 12.05.353a13.354 13.354 0 0 0-6.1 0Zm7.598 6.159a.75.75 0 1 0-1.096-1.024L7.89 10.375l-2.36-2.36a.75.75 0 0 0-1.06 1.06l2.909 2.91a.75.75 0 0 0 1.078-.019l5.091-5.454Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SuccessIcon;
