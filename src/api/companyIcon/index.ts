import { CompanyIcon, LotteryIcon } from "./type";
export async function getCompanyIcon(): Promise<LotteryIcon[]> {
  const source = {
    M: "https://qa.4dnum.com/s3/site-logo/4Dlogo-01.png",
    PMP: "https://qa.4dnum.com/s3/site-logo/4Dlogo-02.png",
    ST: "https://qa.4dnum.com/s3/site-logo/4Dlogo-03.png",
    SG: "https://qa.4dnum.com/s3/site-logo/4Dlogo-04.png",
    CS: "https://qa.4dnum.com/s3/site-logo/4Dlogo-07.png",
    STC: "https://qa.4dnum.com/s3/site-logo/4Dlogo-05.png",
    EE: "https://qa.4dnum.com/s3/site-logo/4Dlogo-06.png",
    H: "https://qa.4dnum.com/s3/site-logo/4Dlogo-10.png",
    P: "https://qa.4dnum.com/s3/site-logo/4Dlogo-08.png",
    GD: "https://qa.4dnum.com/s3/site-logo/4Dlogo-09.png",
    WB: "https://qa.4dnum.com/s3/site-logo/4Dlogo-11.png",
  };
  return Object.entries(source).map(([id, source]) => ({
    id,
    source,
    label: getCompanyLabelById(id),
  }));
}

const getCompanyLabelById = (id: string): string => {
  switch (id) {
    case "M": {
      return "Magnum 4D";
    }
    case "PMP": {
      return "Da Ma Cai 1+3D";
    }
    case "ST": {
      return "SportsToto 4D";
    }
    case "SG": {
      return "Singapore 4D";
    }
    case "CS": {
      return "Special CashSweep";
    }
    case "STC": {
      return "Sandakan 4D";
    }
    case "EE":
      {
      }
      return "Sabah 88 4D";
    case "H": {
      return "8LUCKY";
    }
    case "P": {
      return "Perdana Lottery";
    }
    case "GD": {
      return "Grand Dragon 4D";
    }
    case "WB": {
      return "9 Winbox";
    }
    default: {
      throw Error(
        "invalid lottery key                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "
      );
    }
  }
};
