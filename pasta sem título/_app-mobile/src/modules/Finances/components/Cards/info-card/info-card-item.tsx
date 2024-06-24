import { useInfoCard } from "./use-info-card";
import { TInfoCardProps } from "./info-card.types";

import * as S from "./info-card.styles";
import { Dots, Typography } from "@shared/components";
import { TooltipCustom } from "@shared/components/tooltip";
import { format } from "@shared/utils";

const InfoCardItem = ({ type, balance }: TInfoCardProps) => {
  const { balanceItems, toggle, typeTooltip } = useInfoCard();

  return (
    <S.WrapperItem>
      <TooltipCustom
        title={balanceItems[type].title}
        endContent
        description={typeTooltip[type]}
        typeWeight="medium"
      />
      {toggle ? (
        <Typography
          title={`${format.money(balance!)}`}
          weight="black"
          style={{ color: balanceItems[type].color }}
        />
      ) : (
        <S.WrapperLabel>
          <Typography
            title={`R$`}
            variant="body"
            size="small"
            weight="black"
            colorValue="neutral-light"
          />
          <Dots />
        </S.WrapperLabel>
      )}
    </S.WrapperItem>
  );
};

export default InfoCardItem;
