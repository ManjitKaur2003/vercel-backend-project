import axios from "axios";

let rawBaseUrl = (import.meta.env.VITE_API_BASE_URL || "/api/").trim();
if (!rawBaseUrl.endsWith("/")) {
  rawBaseUrl += "/";
}
const apiBaseUrl = rawBaseUrl;

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

// request:
apiClient.interceptors.request.use(
  (config) => {
    console.log("request sent");
    return config;
  },
  (error) => {
    console.log("request error", error.message);
    return Promise.reject(error);
  },
);

//  response:
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      console.log("Unauthorized || Forrbidden");

      //    redirect to login page
    }
    return Promise.reject(error);
  },
);

export default apiClient;
