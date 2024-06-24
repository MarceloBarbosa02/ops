import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PencilIcon = () => {
  return (
    <Svg width={17} height={16} fill="none">
      <Path
        stroke="#0D6EDE"
        strokeWidth={1.5}
        d="M12 7.329C10.586 7.8 8.7 5.915 9.172 4.5m.581-.581L6.707 6.966a10.334 10.334 0 0 0-2.719 4.801l-.147.589a.25.25 0 0 0 .304.304l.589-.148a10.334 10.334 0 0 0 4.8-2.718l3.047-3.046A2 2 0 0 0 9.753 3.92Z"
      />
    </Svg>
  );
};

export default PencilIcon;
