type LuckBookType = "wzt" | "gzt" | "qzt";

interface LuckyBookPayload {
  type: LuckBookType;
  index: number;
  locale: string;
}

interface LuckyBookDto {
  number: number;
  content: string;
  image: string;
}

interface SearchLuckyBookItem extends LuckyBookDto {
  cat: string;
}

interface SearchLuckyBookUrl {
  url: null | string;
  label: string;
  active: boolean;
}

interface SearchLuckyBookDto {
  current_page: number;
  data: SearchLuckyBookItem[];
  first_page_url: string;
  from: number;
  last_page: 1;
  last_page_url: string;
  links: SearchLuckyBookUrl[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

interface SearchLuckBookContentPayload {
  type?: LuckBookType | undefined;
  locale: string;
  keyword: string;
}

export type { LuckyBookPayload, LuckyBookDto, SearchLuckyBookDto, SearchLuckBookContentPayload };
