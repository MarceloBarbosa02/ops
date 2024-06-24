import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CompleteIcon = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <Path
      fill="#0D6EDE"
      fillRule="evenodd"
      d="M6.467 2.985a5.008 5.008 0 0 0-3.731 3.732 8.902 8.902 0 0 0 0 4.066 5.007 5.007 0 0 0 3.731 3.732 8.901 8.901 0 0 0 4.067 0 5.007 5.007 0 0 0 3.731-3.732 8.901 8.901 0 0 0 0-4.066 5.007 5.007 0 0 0-3.732-3.732 8.902 8.902 0 0 0-4.066 0Zm5.399 4.106a.5.5 0 0 0-.732-.682L7.67 10.12 5.854 8.306a.5.5 0 0 0-.708.707l2.182 2.181a.5.5 0 0 0 .72-.012l3.818-4.09Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CompleteIcon;
