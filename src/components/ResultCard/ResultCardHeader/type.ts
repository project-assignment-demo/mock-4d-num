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
  onUpdateSelectedTime: (index: number) => void;
}

export type { ResultCardHeaderRef, ResultCardHeaderProps };
