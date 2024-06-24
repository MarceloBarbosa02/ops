import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const LogoKVNIcon = (props: SvgProps) => (
  <Svg width={106} height={30} fill="none" {...props}>
    <Path
      fill="#FAFAFA"
      d="M29.153.512v.748L16.714 15l12.439 13.738v.748h-6.394l-10.84-11.789H5.422v11.79H.028V.511h5.395v11.79h6.495L22.758.513h6.395V.512ZM71.51.512 55.522 29.486h-5.395L34.142.512h6.244l12.439 22.88L65.314.512h6.195ZM105.971 7.005v22.482h-5.395V7.005c0-.599-.5-1.098-1.099-1.098H82.992c-.6 0-1.099.5-1.099 1.098v22.482h-5.395V.511h22.98a6.481 6.481 0 0 1 6.494 6.493h-.001Z"
    />
  </Svg>
);
