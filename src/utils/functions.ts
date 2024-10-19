import { store } from "../toolkit/store";
import { memberType } from "./types";
import * as actions from "../toolkit/reducers";

export const handleEdit = (member: memberType, navigate: any) => {
  store.dispatch(actions.setFormData(member));
  store.dispatch(actions.setEditing(true));
  navigate("/userform");
};

export const handleMemberView = (member: memberType, navigate: any) => {
  store.dispatch(actions.setMemberata(member));
  // store.dispatch(actions.setEditing(true));
  navigate("/member-view");
};
