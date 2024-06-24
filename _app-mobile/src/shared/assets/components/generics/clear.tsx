import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ClearIcon = () => (
  <Svg width={16} height={16} fill="none">
    <Path
      fill="#999"
      fillRule="evenodd"
      d="M6.02 2.23a8.67 8.67 0 0 1 3.96 0 5.087 5.087 0 0 1 3.79 3.79 8.671 8.671 0 0 1 0 3.96 5.087 5.087 0 0 1-3.79 3.791 8.671 8.671 0 0 1-3.96 0 5.087 5.087 0 0 1-3.791-3.79 8.67 8.67 0 0 1 0-3.961 5.087 5.087 0 0 1 3.79-3.79ZM7.141 6.6a.383.383 0 1 0-.542.542L7.458 8l-.858.858a.383.383 0 1 0 .542.541l.857-.857.858.857a.383.383 0 1 0 .541-.541L8.541 8l.857-.857a.383.383 0 1 0-.541-.542l-.858.858-.857-.858Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ClearIcon;
