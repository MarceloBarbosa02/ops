import Svg, { Path } from 'react-native-svg';

export const ErrorIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fill="#DA2B59"
        d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"
      />
      <Path
        stroke="#FAFAFA"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m16 8-8 8m8 0L8 8"
      />
    </Svg>
  );
};
