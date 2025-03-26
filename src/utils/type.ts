import { ResultKey } from "../store/result/type";

type ResulCardMap = Record<
  ResultKey,
  { primaryColor: string; secondaryColor: string }
>;

export type { ResulCardMap };
