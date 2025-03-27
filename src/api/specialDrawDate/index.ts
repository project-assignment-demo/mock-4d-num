import { api } from "../api";

async function getSpecialDraw(): Promise<string[]> {
  const result = await api.get<string[]>("/specialDraw");
  return result.data;
}

export { getSpecialDraw };
