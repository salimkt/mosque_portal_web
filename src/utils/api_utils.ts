import axios from "axios";
import { memberType } from "./types";

const API_ROOT = "https://web-production-962f9.up.railway.app/api/";
// const API_ROOT = "https://hisbe-production.up.railway.app/api/";
// const API_ROOT = "http://127.0.0.1:8000/api/";
export const loginUser = async (cred: { email: string; password: string }) => {
  console.log("Login______");

  return await axios.post(API_ROOT + "token", {
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

export const addPeople = async (member: memberType) => {
  return await axios.post(API_ROOT + "member/", member);
};

export const getMembers = async () => {
  return await axios.get(API_ROOT + "member/");
};

export const updateMemberData = async (member: memberType) => {
  return await axios.put(
    API_ROOT + "member/" + member.register_number + "/",
    member
  );
};

export const getHouseNames = async () => {
  return await axios.get(API_ROOT + "house-names/");
};
export const getAreaNames = async () => {
  return await axios.get(API_ROOT + "areas/");
};

export const setToken = (token: string) => {
  axios.defaults["headers"].post = { Authorization: "Bearer " + token };
  axios.defaults["headers"].get = { Authorization: "Bearer " + token };
  axios.defaults["headers"].put = { Authorization: "Bearer " + token };
  axios.defaults["headers"].delete = { Authorization: "Bearer " + token };
};
