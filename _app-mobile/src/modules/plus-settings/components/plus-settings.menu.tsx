import { usePlusSettings } from '../screens/use-plus-settings';
import PlusSettingsItem from './plus-settings.item';

import * as S from './plus-settings.styles';

const PlusSettingsMenu = () => {
  const { rows_menu } = usePlusSettings();

  return (
    <S.WrapperMenu>
      {rows_menu.map((item, index) => (
        <PlusSettingsItem
          key={item.label}
          icon={item.icon}
          title={item.label}
          index={index}
          navigate={item.navigation}
        />
      ))}
    </S.WrapperMenu>
  );
};

export default PlusSettingsMenu;
