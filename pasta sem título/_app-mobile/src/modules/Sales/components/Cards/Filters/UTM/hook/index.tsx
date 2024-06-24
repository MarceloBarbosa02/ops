import { useSalesStore } from "@shared/store/useSalesStore";
import { UTMProps } from "@shared/types/entities";
import { useState } from "react";

export type UTMFilterProps =
  | "utmCampaign"
  | "utmContent"
  | "utmMedium"
  | "utmSource"
  | "utmSrc"
  | "utmTerm";

const initial_utm = {
  utmCampaign: {
    text: "",
    isActive: false,
  },
  utmContent: {
    text: "",
    isActive: false,
  },
  utmMedium: {
    text: "",
    isActive: false,
  },
  utmSource: {
    text: "",
    isActive: false,
  },
  utmSrc: {
    text: "",
    isActive: false,
  },
  utmTerm: {
    text: "",
    isActive: false,
  },
};

export const useUTMFilters = () => {
  const [utmFilters, setUtmFilters] = useState<UTMProps>(initial_utm);
  const { handleSetChangeUTMFilter } = useSalesStore((store) => {
    return {
      handleSetChangeUTMFilter: store.handleSetChangeUTMFilter,
    };
  });

  const handleUTMFiltersAll = () => {
    if (
      utmFilters?.utmCampaign?.isActive &&
      utmFilters?.utmContent?.isActive &&
      utmFilters?.utmMedium?.isActive &&
      utmFilters?.utmSource?.isActive &&
      utmFilters?.utmSrc?.isActive &&
      utmFilters?.utmTerm?.isActive
    ) {
      setUtmFilters(initial_utm);
    } else {
      setUtmFilters({
        utmCampaign: {
          isActive: true,
          text: "",
        },
        utmContent: {
          isActive: true,
          text: "",
        },
        utmMedium: {
          isActive: true,
          text: "",
        },
        utmSource: {
          isActive: true,
          text: "",
        },
        utmSrc: {
          isActive: true,
          text: "",
        },
        utmTerm: {
          isActive: true,
          text: "",
        },
      });
    }
  };

  const handleUTMFiltersOne = (utm: UTMFilterProps) => {
    setUtmFilters({
      ...utmFilters,
      [utm]: {
        ...utmFilters[utm],
        isActive: !utmFilters[utm].isActive,
      },
    });
    handleSetChangeUTMFilter(utm, "");
  };

  return {
    utmFilters,
    handleUTMFiltersAll,
    handleUTMFiltersOne,
  };
};
