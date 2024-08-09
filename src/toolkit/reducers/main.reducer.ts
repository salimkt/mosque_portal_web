import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
      registerNumber: "1234",
      name: "John Doe",
      houseName: "",
      fathersName: "",
      occupation: "",
      maleMembers: "",
      femaleMembers: "",
      area: "",
      mobileNumber: "123-456-7890",
      bloodGroup: "",
      rationCardNumber: "",
    },
    {
      id: 1,
      registerNumber: "1234",
      name: "Jane Smith",
      houseName: "",
      fathersName: "",
      occupation: "",
      maleMembers: "",
      femaleMembers: "",
      area: "",
      mobileNumber: "123-456-7890",
      bloodGroup: "",
      rationCardNumber: "",
    },
    {
      id: 1,
      registerNumber: "1234",
      name: "Alice Johnson",
      houseName: "",
      fathersName: "",
      occupation: "",
      maleMembers: "",
      femaleMembers: "",
      area: "",
      mobileNumber: "123-456-7890",
      bloodGroup: "",
      rationCardNumber: "",
    },
  ],
};
export const MainSlice = createSlice({
  name: "main",
  initialState: initialstate,
  reducers: {
    setAlert: (
      state: typeof initialstate,
      action: PayloadAction<(typeof initialstate)["alert"]>
    ) => {
      state.alert = action.payload;
    },
  },
});
export const { setAlert } = MainSlice.actions;
export default MainSlice.reducer;
