import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const BlockedIcon = () => {
  const colors = useTheme();

  // if (colors.theme === 'light') {
  //   return (
  //     <Svg width={39} height={52} fill="none">
  //       <Path
  //         fill={colors.gray[600]}
  //         d="M31.655 22.395h-4.436v-8.933c0-5.556-2.82-9.09-7.564-9.09-4.745 0-7.565 3.534-7.565 9.09v8.933H7.655v-8.933c-.002-8.421 4.81-13.066 12-13.066s12 4.645 12 13.066v8.933Z"
  //       />
  //       <Path
  //         fill={colors.gray[500]}
  //         d="M36.063 20.82H3.246a2.353 2.353 0 0 0-2.353 2.352v25.965c0 1.3 1.054 2.353 2.353 2.353h32.816c1.3 0 2.353-1.054 2.353-2.353V23.172c0-1.3-1.054-2.353-2.353-2.353Z"
  //       />
  //       <Path
  //         stroke={colors.gray[900]}
  //         strokeLinecap="round"
  //         strokeWidth={0.37}
  //         d="M3.604 35.072V24.938a1.4 1.4 0 0 1 1.4-1.4h3.639"
  //       />
  //       <Path
  //         fill={colors.gray[900]}
  //         d="M23.444 40.99a1.744 1.744 0 0 1-1.721 2.017h-4.136a1.743 1.743 0 0 1-1.721-2.018l.588-3.69a4.638 4.638 0 1 1 6.403 0l.588 3.69h-.001Z"
  //       />
  //       <Path
  //         stroke={colors.gray[900]}
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={0.31}
  //         d="M36.063 20.82H3.246a2.353 2.353 0 0 0-2.353 2.352v25.965c0 1.3 1.054 2.353 2.353 2.353h32.816c1.3 0 2.353-1.054 2.353-2.353V23.172c0-1.3-1.054-2.353-2.353-2.353Z"
  //       />
  //       <Path
  //         stroke={colors.gray[900]}
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={0.37}
  //         d="M23.444 40.99a1.744 1.744 0 0 1-1.721 2.017h-4.136a1.743 1.743 0 0 1-1.721-2.018l.588-3.69a4.638 4.638 0 1 1 6.403 0l.588 3.69h-.001Z"
  //       />
  //     </Svg>
  //   );
  // }

  return (
    <Svg width={39} height={52} fill="none">
      <Path
        fill={colors.gray[300]}
        d="M31.655 22.395h-4.436v-8.933c0-5.556-2.82-9.09-7.564-9.09-4.745 0-7.565 3.534-7.565 9.09v8.933H7.655v-8.933c-.002-8.421 4.81-13.066 12-13.066s12 4.645 12 13.066v8.933Z"
      />
      <Path
        fill={colors.gray[400]}
        d="M36.063 20.82H3.246a2.353 2.353 0 0 0-2.353 2.352v25.965c0 1.3 1.054 2.353 2.353 2.353h32.816c1.3 0 2.353-1.054 2.353-2.353V23.172c0-1.3-1.054-2.353-2.353-2.353Z"
      />
      <Path
        stroke={colors.gray[50]}
        strokeLinecap="round"
        strokeWidth={0.37}
        d="M3.604 35.072V24.938a1.4 1.4 0 0 1 1.4-1.4h3.639"
      />
      <Path
        fill={colors.gray[50]}
        d="M23.444 40.99a1.744 1.744 0 0 1-1.721 2.017h-4.136a1.743 1.743 0 0 1-1.721-2.018l.588-3.69a4.638 4.638 0 1 1 6.403 0l.588 3.69Z"
      />
      <Path
        stroke={colors.gray[50]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.31}
        d="M36.063 20.82H3.246a2.353 2.353 0 0 0-2.353 2.352v25.965c0 1.3 1.054 2.353 2.353 2.353h32.816c1.3 0 2.353-1.054 2.353-2.353V23.172c0-1.3-1.054-2.353-2.353-2.353Z"
      />
      <Path
        stroke={colors.gray[50]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.37}
        d="M23.444 40.99a1.744 1.744 0 0 1-1.721 2.017h-4.136a1.743 1.743 0 0 1-1.721-2.018l.588-3.69a4.638 4.638 0 1 1 6.403 0l.588 3.69h0Z"
      />
    </Svg>
  );
};

export default BlockedIcon;
