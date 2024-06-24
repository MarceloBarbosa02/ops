import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SyncIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke="#0D6EDE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12.05a9.665 9.665 0 0 1-2.847 6.852c-3.81 3.8-9.98 3.8-13.79 0a9.909 9.909 0 0 1-1.666-2.23M2.517 11.855a9.735 9.735 0 0 1 2.846-6.732c3.81-3.8 9.98-3.8 13.79 0a9.908 9.908 0 0 1 1.667 2.23"
    />
    <Path
      stroke="#0D6EDE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.086 7.353 21.5 8l-.106-4.956M7.414 16.647 3 16l.106 4.956"
    />
  </Svg>
);

export default SyncIcon;
