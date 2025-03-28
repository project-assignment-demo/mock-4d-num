import { api } from "../api";
import {
  getPrevNextResultConfig,
  ResultDTO,
  ShareResultImageDto,
  ShareResultImageExistDto,
  ShareResultImageExistPayload,
  UploadShareResultImagePayload,
} from "./type";

const getResults = async (date: string): Promise<ResultDTO[]> => {
  try {
    const rawResults = await api.get<ResultDTO[]>(`result/${date}`);
    return rawResults.data;
  } catch (error) {
    console.error("Error fetching result:", error);
    throw error;
  }
};

const getPrevOrNextResultPath = (
  action: getPrevNextResultConfig["action"],
  target: getPrevNextResultConfig["target"]
) => {
  const actionMap: Record<getPrevNextResultConfig["action"], string> = {
    next: "Next",
    prev: "Prev",
  };

  const targetMap: Record<getPrevNextResultConfig["target"], string> = {
    mysg: "MYSG",
    other: "other",
  };

  return `/${targetMap[target]}${actionMap[action]}`;
};

const getPrexOrNextResultByDate = async ({
  action,
  target,
  date,
}: getPrevNextResultConfig) => {
  const apiPath = getPrevOrNextResultPath(action, target);
  const results = await api.get<ResultDTO[]>(`${apiPath}/${date}`);

  return results.data;
};

const uploadResultShareImage = async (
  payload: UploadShareResultImagePayload
) => {
  return api.post<ShareResultImageDto>("baseToUrl", payload);
};

const checkResultShareImageExist = async (
  payload: ShareResultImageExistPayload
) => {
  return api.post<ShareResultImageExistDto>("image-exist", payload);
};

export {
  getResults,
  getPrexOrNextResultByDate,
  uploadResultShareImage,
  checkResultShareImageExist,
};
