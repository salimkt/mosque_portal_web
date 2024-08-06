import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { users } from "../../components/userlist";
const initialstate = {
  alert: {
    visible: false,
    mode: "success",
    message: "",
    // button1: {name: '', callback: () => {}},
    // button2: { name: "", callback: () => {} },
  },
  userlist: users,
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
