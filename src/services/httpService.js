import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACE_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACE_URL}/user/refresh-token`,
          { withCredentials: true }
        );
        if (data) return app(originalConfig);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);
export default http;
