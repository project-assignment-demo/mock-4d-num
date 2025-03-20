import { CompanyDTO } from "./type";

export async function fetchIcons(): Promise<CompanyDTO[]> {
  const icons = {
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
  return Object.entries(icons).map(([id, source]) => ({
    id,
    source,
  }));
}




