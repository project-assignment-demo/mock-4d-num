// import createApiClient, { API_BASE_URL } from "../utils";

import createApiClient, { API_BASE_URL } from "./utils";

const prefix = "api/v1/";
const api = createApiClient(API_BASE_URL + prefix);

export { api }