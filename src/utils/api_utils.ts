import axios from "axios";
import { memberType } from "./types";

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

export const addPeople = async (member: memberType) => {
  return await axios.post(API_ROOT + "people/add/", member);
};

export const getMembers = async () => {
  return await axios.get(API_ROOT + "people/");
};

export const updateMemberData = async (member: memberType) => {
  return await axios.put(
    API_ROOT + "people/update/" + member.register_number + "/",
    member
  );
};
