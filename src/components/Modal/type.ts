interface ShareInfoConfig {
    shareUrl: string;
    date: Date;
    title: string;
  }
  
  interface DownloadImageConfig {
    imageUrl: string | undefined;
    title: string;
    date: Date;
  }

  export type { ShareInfoConfig, DownloadImageConfig }