import axios from "axios";

const API_ROOT = "https://hisbe-production.up.railway.app/api/";
// const API_ROOT = "http://127.0.0.1:8000/api/";
export const loginUser = async (cred: { email: string; password: string }) => {
  console.log("Login______");

  return await axios.post(API_ROOT + "api-token-auth/", {
    username: cred.email,
    password: cred.password,
  });
};

export const registerUser = async (cred: {
  email: string;
  password: string;
}) => {
  return await axios.post(API_ROOT + "register/", {
    username: cred.email,
    password: cred.password,
  });
};
