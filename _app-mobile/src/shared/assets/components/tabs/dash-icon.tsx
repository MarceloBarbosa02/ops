import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export const DashIcon = ({ focused }: IconGenericProps) => {
  const colors = useTheme();

  return (
    <Svg width={25} height={25} fill="none">
      <Path
        fill={focused ? colors.blue[400] : colors.gray[500]}
        d="M20.676 9.75a.75.75 0 0 0-1.5 0h1.5Zm-14.58 0a.75.75 0 1 0-1.5 0h1.5Zm9.053 10.988-.172-.73.172.73Zm-5.026 0 .172-.73-.172.73Zm5.342-15.693-.533.528.533-.528Zm5.639 6.744a.75.75 0 0 0 1.064-1.057l-1.064 1.057ZM9.808 5.045l.532.528-.532-.528Zm-6.704 5.687a.75.75 0 0 0 1.064 1.057l-1.064-1.057Zm7.25 7.62-.736-.14.737.14Zm.02-.104.737.138-.737-.138Zm4.524 0-.737.138.738-.138Zm.02.103.737-.138-.737.138Zm-.29 2.232-.677-.323.677.323Zm-.794-.077a.75.75 0 1 0 1.354.644l-1.354-.644Zm-3.19.077-.677.322.678-.322Zm-.56.567a.75.75 0 0 0 1.354-.644l-1.354.644Zm1.913-4.677-.2-.722.2.722Zm1.278 0 .2-.722-.2.722Zm5.901-6.723v4.918h1.5V9.75h-1.5Zm-13.08 4.918V9.75h-1.5v4.918h1.5Zm8.881 5.34a10.18 10.18 0 0 1-4.682 0l-.344 1.46a11.68 11.68 0 0 0 5.37 0l-.344-1.46Zm-4.682 0c-2.456-.58-4.199-2.79-4.199-5.34h-1.5c0 3.24 2.214 6.058 5.355 6.8l.344-1.46Zm5.027 1.46c3.14-.742 5.354-3.56 5.354-6.8h-1.5c0 2.55-1.742 4.76-4.199 5.34l.345 1.46Zm-.39-15.895 6.172 6.216 1.064-1.057-6.171-6.215-1.065 1.056ZM9.276 4.517l-6.172 6.215 1.064 1.057 6.172-6.216-1.064-1.056Zm6.72 0c-.65-.657-1.192-1.204-1.678-1.577-.503-.387-1.036-.66-1.682-.66v1.5c.183 0 .398.064.768.349.388.298.847.758 1.528 1.444l1.065-1.056ZM10.34 5.573c.682-.686 1.14-1.146 1.528-1.444.37-.285.586-.348.768-.348v-1.5c-.645 0-1.178.272-1.682.659-.486.373-1.027.92-1.678 1.577l1.064 1.056Zm.752 12.916.02-.103-1.475-.276-.02.103 1.475.276Zm3.07-.103.019.103 1.474-.276-.02-.103-1.474.276Zm-.211 1.874-.117.246 1.354.644.117-.245-1.354-.645Zm-3.984.645.117.245 1.354-.644-.116-.246-1.355.645Zm4.214-2.416c.112.6.032 1.221-.23 1.771l1.354.645c.399-.837.521-1.78.35-2.692l-1.474.276Zm-4.563-.276a4.384 4.384 0 0 0 .35 2.692l1.354-.645a2.884 2.884 0 0 1-.23-1.77l-1.474-.277Zm2.58-1.017c.287-.08.59-.08.877 0l.4-1.445a3.14 3.14 0 0 0-1.678 0l.4 1.445Zm3.438.914a3.024 3.024 0 0 0-2.16-2.36l-.401 1.446c.555.154.978.614 1.086 1.19l1.475-.276Zm-4.525.276a1.524 1.524 0 0 1 1.087-1.19l-.401-1.445a3.024 3.024 0 0 0-2.16 2.359l1.474.276Z"
      />
    </Svg>
  );
};
