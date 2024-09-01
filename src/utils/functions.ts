import { store } from "../toolkit/store";
import { memberType } from "./types";
import * as actions from "../toolkit/reducers";

export const getHouseNames = (userlist: memberType[]) => {
  let housenames: string[] = [];
  userlist.map((member) => {
    !housenames.includes(member.house_name) &&
      housenames.push(member.house_name);
  });
  return housenames;
};

export const handleEdit = (member: memberType, navigate: any) => {
  store.dispatch(actions.setFormData(member));
  store.dispatch(actions.setEditing(true));
  navigate("/userform");
};
