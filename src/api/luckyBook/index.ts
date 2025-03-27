import { api } from "../api";
import {
  LuckyBookPayload,
  LuckyBookDto,
  SearchLuckBookContentPayload,
  SearchLuckyBookDto,
} from "./type";

async function getLuckyBook({ type, index, locale }: LuckyBookPayload) {
  //   const locale = "en";
  const result = await api.get<LuckyBookDto[]>(
    `/content/${type}/${locale}/${index}`
  );
  return result.data;
}

async function searchLuckyBookContent({
  type,
  locale,
  keyword,
}: SearchLuckBookContentPayload) {
  const result = await api.get<SearchLuckyBookDto>(
    `/newSearch/${locale}/${type ?? "all"}/${keyword}?page=1`
  );
  return result.data;
}

export { getLuckyBook, searchLuckyBookContent };
