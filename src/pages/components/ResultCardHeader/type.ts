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
    availableTimes: string[] | undefined;
    setSelectedTime: (time: string) => void;
  }
  

export type { ResultCardHeaderRef, ResultCardHeaderProps }