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
    house_name: "",
    fathers_name: "",
    occupation: "",
    male_members: 0,
    female_members: 0,
    area: "",
    mobile_number: "",
    blood_group: "",
    ration_card_number: "",
  },
  house_names: [""],
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
  },
});
export const { setAlert, setMembers, setFormData, setHouseNames } =
  MainSlice.actions;
export default MainSlice.reducer;
