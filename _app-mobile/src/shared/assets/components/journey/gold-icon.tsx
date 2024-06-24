import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { TIconProps } from './box-icon';
import { useTheme } from 'styled-components/native';

const GoldIcon = ({ active }: TIconProps) => {
  const colors = useTheme();

  // if (colors.theme === 'dark') {
  //   return (
  //     <Svg width={67} height={52} fill="none">
  //       <Path
  //         fill={active ? colors.blue[300] : colors.gray[600]}
  //         d="m41.964 8.099 3.614 11.344-28.914 18.531-3.614-11.35L41.964 8.1Z"
  //       />
  //       <Path
  //         fill={colors.gray[900]}
  //         d="M41.964 8.1 13.051 26.625l-8.659-5.549L33.306 2.552 41.964 8.1Z"
  //       />
  //       <Path
  //         fill={active ? colors.gray[50] : colors.gray[500]}
  //         d="m13.05 26.625 3.615 11.35L.773 27.792l3.619-6.716 8.659 5.549Z"
  //       />
  //       <Path
  //         stroke={active ? colors.gray[50] : colors.gray[500]}
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={0.375}
  //         d="M16.665 37.975.773 27.792l3.619-6.716 8.659 5.549 3.614 11.35Z"
  //       />
  //       <Path
  //         stroke={active ? colors.gray[50] : colors.gray[500]}
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={0.375}
  //         d="m16.665 37.975 28.913-18.531L41.965 8.1l-8.658-5.55L4.392 21.077M13.05 26.624 41.964 8.1"
  //       />
  //       <Path
  //         fill={active ? colors.blue[300] : colors.gray[600]}
  //         d="m62.612 21.327 3.615 11.345-28.919 18.53-3.614-11.35 28.918-18.525Z"
  //       />
  //       <Path
  //         fill={colors.gray[900]}
  //         d="M62.613 21.328 33.695 39.854l-8.66-5.549 28.92-18.526 8.658 5.549Z"
  //       />
  //       <Path
  //         fill={active ? colors.gray[50] : colors.gray[500]}
  //         d="m33.694 39.853 3.615 11.35L21.42 41.02l3.615-6.715 8.658 5.548Z"
  //       />
  //       <Path
  //         stroke={active ? colors.gray[50] : colors.gray[500]}
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={0.375}
  //         d="M37.309 51.203 21.42 41.02l3.615-6.715 8.658 5.548 3.615 11.35Z"
  //       />
  //       <Path
  //         stroke={active ? colors.gray[50] : colors.gray[500]}
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={0.375}
  //         d="m37.309 51.204 28.918-18.532-3.614-11.344-8.659-5.549-28.918 18.526M33.694 39.853l28.918-18.526"
  //       />
  //       <Path
  //         fill={active ? colors.blue[300] : colors.gray[600]}
  //         d="m54.5 5.843 3.614 11.344-28.918 18.531-3.615-11.35L54.5 5.844Z"
  //       />
  //       <Path
  //         fill={colors.gray[900]}
  //         d="M54.5 5.844 25.583 24.369l-8.659-5.548L45.837.295 54.5 5.844Z"
  //       />
  //       <Path
  //         fill={active ? colors.gray[50] : colors.gray[500]}
  //         d="m25.582 24.37 3.614 11.349L13.31 25.536l3.614-6.716 8.66 5.55Z"
  //       />
  //       <Path
  //         stroke={active ? colors.gray[50] : colors.gray[500]}
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={0.375}
  //         d="M29.196 35.719 13.31 25.536l3.614-6.716 8.66 5.55 3.613 11.349Z"
  //       />
  //       <Path
  //         stroke={active ? colors.gray[50] : colors.gray[500]}
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={0.375}
  //         d="m29.196 35.72 28.919-18.532L54.5 5.844 45.837.294 16.923 18.822M25.581 24.369 54.5 5.843"
  //       />
  //     </Svg>
  //   );
  // }

  return (
    <Svg width={67} height={52} fill="none">
      <Path
        fill={active ? colors.blue[600] : colors.gray[300]}
        d="m41.964 8.1 3.614 11.344-28.913 18.53-3.614-11.35L41.964 8.1Z"
      />
      <Path
        fill={colors.gray[50]}
        d="M41.964 8.1 13.051 26.625l-8.659-5.549L33.306 2.552 41.964 8.1Z"
      />
      <Path
        fill={active ? colors.gray[900] : colors.gray[400]}
        d="m13.051 26.625 3.614 11.35L.773 27.792l3.62-6.715 8.658 5.548Z"
      />
      <Path
        stroke={active ? colors.gray[900] : colors.gray[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.31}
        d="M16.665 37.975.773 27.792l3.62-6.715 8.658 5.548 3.614 11.35Z"
      />
      <Path
        stroke={active ? colors.gray[900] : colors.gray[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.31}
        d="m16.665 37.975 28.913-18.531L41.965 8.1l-8.658-5.55L4.392 21.077M13.05 26.625 41.965 8.099"
      />
      <Path
        fill={active ? colors.blue[600] : colors.gray[300]}
        d="m62.612 21.329 3.615 11.344-28.919 18.531-3.614-11.35L62.612 21.33Z"
      />
      <Path
        fill={colors.gray[50]}
        d="M62.613 21.329 33.695 39.855l-8.659-5.549L53.955 15.78l8.658 5.549Z"
      />
      <Path
        fill={active ? colors.gray[900] : colors.gray[400]}
        d="m33.694 39.854 3.615 11.35L21.42 41.021l3.615-6.715 8.658 5.548Z"
      />
      <Path
        stroke={active ? colors.gray[900] : colors.gray[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.31}
        d="M37.309 51.204 21.42 41.021l3.615-6.715 8.658 5.548 3.615 11.35Z"
      />
      <Path
        stroke={active ? colors.gray[900] : colors.gray[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.31}
        d="m37.31 51.205 28.918-18.532-3.615-11.344-8.658-5.549-28.919 18.526M33.694 39.854 62.612 21.33"
      />
      <Path
        fill={active ? colors.blue[600] : colors.gray[300]}
        d="m54.5 5.844 3.615 11.344L29.196 35.72l-3.614-11.35L54.501 5.845Z"
      />
      <Path
        fill={colors.gray[50]}
        d="M54.501 5.844 25.583 24.37l-8.66-5.549L45.838.295l8.664 5.55Z"
      />
      <Path
        fill={active ? colors.gray[900] : colors.gray[400]}
        d="m25.583 24.37 3.614 11.35L13.31 25.537l3.614-6.716 8.659 5.549Z"
      />
      <Path
        stroke={active ? colors.gray[900] : colors.gray[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.31}
        d="M29.197 35.72 13.31 25.537l3.614-6.716 8.659 5.549 3.614 11.35Z"
      />
      <Path
        stroke={active ? colors.gray[900] : colors.gray[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.31}
        d="m29.197 35.72 28.918-18.531-3.614-11.345L45.837.295 16.924 18.821M25.582 24.37 54.501 5.843"
      />
    </Svg>
  );
};

export default GoldIcon;
