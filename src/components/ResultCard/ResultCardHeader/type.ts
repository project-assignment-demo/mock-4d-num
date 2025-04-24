interface ResultCardHeaderRef {
  getSelectedTime: string | undefined;
}

interface ResultCardHeaderProps {
  title: string;
  logo: string;
  date: string;
  day: string;
  drawNo: string;
  primaryColor: string;
  showTimeSelection: boolean;
  type: string;
  isScreenshot:boolean;
  onUpdateSelectedTime: (index: number) => void;
  openDrawerHandler?: () => void;
  refreshHandler?: () => void;
  sharedHandler?: () => void;
}

export type { ResultCardHeaderRef, ResultCardHeaderProps };
