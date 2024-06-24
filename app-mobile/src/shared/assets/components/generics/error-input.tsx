import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ErrorInputIcon = () => (
  <Svg width={12} height={12} fill="none">
    <Path fill="#FAFAFA" d="M11.998 6a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
    <Path
      fill="#DA2B59"
      fillRule="evenodd"
      d="M5.997 12a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM6 3.708a.042.042 0 1 0 0 .084.042.042 0 0 0 0-.084Zm-.709.042a.708.708 0 1 1 1.417 0 .708.708 0 0 1-1.417 0ZM6 6.083c.368 0 .666.299.666.667v1.5a.667.667 0 1 1-1.333 0v-1.5c0-.368.298-.667.667-.667Z"
      clipRule="evenodd"
    />
  </Svg>
);
