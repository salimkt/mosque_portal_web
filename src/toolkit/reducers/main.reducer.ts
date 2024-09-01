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
  userlist: [
    {
      id: 1,
      register_number: "123456",
      name: "John Doe",
      house_name: "Green Villa",
      fathers_name: "Richard Doe",
      occupation: "Engineer",
      male_members: 2,
      female_members: 3,
      area: "Downtown",
      mobile_number: "9876543210",
      blood_group: "O+",
      ration_card_number: "RC123456",
    },
    {
      id: 2,
      register_number: "123452",
      name: "John md",
      house_name: "Green Villa",
      fathers_name: "Richard Doe",
      occupation: "Engineer",
      male_members: 2,
      female_members: 3,
      area: "Downtown",
      mobile_number: "9876543210",
      blood_group: "O+",
      ration_card_number: "RC123453",
    },
  ],
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
