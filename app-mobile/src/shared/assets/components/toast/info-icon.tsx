import Svg, { Path, Circle } from 'react-native-svg';

export const InfoIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
        fill="#0D6EDE"
      />
      <Path
        d="M12 15.5V11.5"
        stroke="#FAFAFA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle
        cx="12"
        cy="9"
        r="0.5"
        stroke="#FAFAFA"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

// import * as React from "react"
// import Svg, { SvgProps, Path } from "react-native-svg"
// const SvgComponent = (props: SvgProps) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={24}
//     height={24}
//     fill="none"
//     {...props}
//   >
//     <Path
//       fill="#0152F8"
//       stroke="#0152F8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M9.144 3.83c1.879-.44 3.833-.44 5.712 0a7.13 7.13 0 0 1 5.313 5.314c.441 1.879.441 3.833 0 5.712a7.13 7.13 0 0 1-5.313 5.313c-1.879.441-3.833.441-5.712 0a7.13 7.13 0 0 1-5.314-5.313 12.506 12.506 0 0 1 0-5.712A7.13 7.13 0 0 1 9.144 3.83Zm3.451 6.629a1.458 1.458 0 1 0-1.19 0 1.218 1.218 0 0 0-.623 1.062v3.83a1.218 1.218 0 0 0 2.436 0v-3.83c0-.456-.251-.854-.623-1.062Z"
//     />
//   </Svg>
// )
// export default SvgComponent
