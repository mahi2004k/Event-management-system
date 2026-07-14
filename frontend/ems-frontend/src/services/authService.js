import api from "../utils/axiosConfig";

const AUTH_URL = "/auth";

export const register = async (userData) => {
  const response = await api.post(`${AUTH_URL}/register`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post(`${AUTH_URL}/login`, credentials);

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};