import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlertProps } from "@mui/material";
import { memberType } from "../../utils/types";

const initialstate = {
  alert: {
    visible: false,
    mode: "success",
    message: "",
    // button1: {name: '', callback: () => {}},
    // button2: { name: "", callback: () => {} },
  },
  userlist: [],
  formdata: {
    register_number: "",
    name: "",
    mobile: "",
    dob: "",
    father: "",
    house: 0,
    area: 0,
    blood_group: "",
  },
  house_names: [""],
  area_names: [""],
};

export interface alert_payload {
  visible: boolean;
  mode: AlertProps["severity"];
  message: string;
}
export const MainSlice = createSlice({
  name: "main",
  initialState: initialstate,
  reducers: {
    setAlert: (
      state: typeof initialstate,
      action: PayloadAction<alert_payload>
    ) => {
      //@ts-ignore
      state.alert = action.payload;
    },
    setMembers: (state: typeof initialstate, action: PayloadAction<any>) => {
      //@ts-ignore
      state.userlist = action.payload;
    },
    setFormData: (
      state: typeof initialstate,
      action: PayloadAction<memberType>
    ) => {
      state.formdata = action.payload;
    },
    setHouseNames: (
      state: typeof initialstate,
      action: PayloadAction<string[]>
    ) => {
      state.house_names = action.payload;
    },
    setAreaNames: (
      state: typeof initialstate,
      action: PayloadAction<string[]>
    ) => {
      state.area_names = action.payload;
    },
  },
});
export const {
  setAlert,
  setMembers,
  setFormData,
  setHouseNames,
  setAreaNames,
} = MainSlice.actions;
export default MainSlice.reducer;
