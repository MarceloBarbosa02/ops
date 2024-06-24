import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { IconGenericProps } from '../icons-types';
import { colors } from '@/shared/theme';

const LockedIcon = ({ isActive }: IconGenericProps) => {
  // if (colors.theme === 'dark') {
  //   return (
  //     <Svg width={39} height={52} fill="none">
  //       <Path
  //         fill={active ? colors.gray[50] : colors.gray[600]}
  //         d="M31.655 22.395h-4.436v-8.933c0-5.556-2.82-9.09-7.564-9.09-4.745 0-7.565 3.534-7.565 9.09v8.933H7.655v-8.933c-.002-8.421 4.81-13.066 12-13.066s12 4.645 12 13.066v8.933Z"
  //       />
  //       <Path
  //         fill={active ? colors.blue[300] : colors.gray[500]}
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
    <Svg width={66} height={67} fill="none">
      <Path
        fill={isActive ? colors.gray[900] : colors.gray[300]}
        d="M43.18 29.468h-4.435V22.13c0-4.564-2.82-7.467-7.564-7.467-4.745 0-7.565 2.903-7.565 7.467v7.338h-4.435V22.13c-.002-6.918 4.809-10.733 12-10.733 7.19 0 12 3.815 12 10.733v7.338Z"
      />
      <Path
        fill={isActive ? colors.blue[600] : colors.gray[400]}
        d="M44.845 28.173H17.89a1.933 1.933 0 0 0-1.933 1.933v21.328c0 1.068.865 1.933 1.933 1.933h26.955a1.933 1.933 0 0 0 1.933-1.933V30.106a1.933 1.933 0 0 0-1.933-1.933Z"
      />
      <Path
        stroke={isActive ? colors.gray[900] : colors.gray[50]}
        strokeLinecap="round"
        strokeWidth={0.304}
        d="M22.13 48.42V38.036c0-.635.516-1.15 1.15-1.15h3.89"
      />
      <Path
        fill={colors.gray[50]}
        d="M34.48 44.741a1.432 1.432 0 0 1-1.414 1.658H29.67c-.88 0-1.552-.787-1.414-1.658l.484-3.031a3.81 3.81 0 1 1 5.26 0l.482 3.031Z"
      />
      <Path
        stroke={isActive ? colors.gray[900] : colors.gray[50]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.255}
        d="M44.845 28.173H17.89a1.933 1.933 0 0 0-1.933 1.933v21.328c0 1.068.865 1.933 1.933 1.933h26.955a1.933 1.933 0 0 0 1.933-1.933V30.106a1.933 1.933 0 0 0-1.933-1.933Z"
      />
      <Path
        stroke={isActive ? colors.gray[900] : colors.gray[50]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.304}
        d="M34.48 44.741a1.432 1.432 0 0 1-1.414 1.658H29.67c-.88 0-1.552-.787-1.414-1.658l.484-3.031a3.81 3.81 0 1 1 5.26 0l.482 3.031h0Z"
      />
    </Svg>
  );
};

export default LockedIcon;
