import Svg, { Path, Circle } from 'react-native-svg';

// export const WarningIcon = () => {
//   return (
//     <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <Path
//         d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
//         fill="#EBCB00"
//       />
//       <Path
//         d="M12 15.5V11.5"
//         stroke="#171717"
//         stroke-width="1.5"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//       <Circle
//         cx="12"
//         cy="9"
//         r="0.5"
//         stroke="#171717"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </Svg>
//   );
// };

const WarningIcon = () => (
  <Svg width={16} height={16} fill="none">
    <Path fill="#171717" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Z" />
    <Path
      fill="#EBCB00"
      fillRule="evenodd"
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM7 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default WarningIcon;
