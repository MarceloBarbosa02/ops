import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RemoveIcon = () => (
  <Svg width={25} height={24} fill="none">
    <Path
      stroke="#171717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.5 10v7m-4-7v7m-4-11v11.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.987.218-2.105V6m-12 0h2m-2 0h-2m4 0h8m-8 0c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.082-1.083C10.102 3 10.568 3 11.5 3h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765m0 0h2m0 0h2"
    />
  </Svg>
);

export default RemoveIcon;
