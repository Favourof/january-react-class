import axios from "axios";

const baseURL = "http://localhost:4001";

// puplic url without jwt token
export const publicUrl = axios.create({ baseURL });

// Private url with jwt Token
export const privateUrl = axios.create({ baseURL });

privateUrl.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Inject JWT
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// RESPONSE Interceptor: Handle 401 Unauthorized globally
privateUrl.interceptors.response.use(
  (response) => response, // If request succeeds, just return the response
  (error) => {
    // If the server returns 401, the token is likely expired or invalid
    if (error.response?.status === 401) {
      console.error("Session expired. Logging out...");
      localStorage.removeItem("token"); // Clear the bad token
      window.location.href = "/login"; // Force redirect to login
    }
    return Promise.reject(error);
  },
);
