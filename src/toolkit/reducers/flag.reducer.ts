import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialstate = {
  scanning: false,
};

export const FlagSlice = createSlice({
  name: "flags",
  initialState: initialstate,
  reducers: {
    setScanning: (
      state: typeof initialstate,
      action: PayloadAction<boolean>
    ) => {
      state.scanning = action.payload;
    },
  },
});

export const { setScanning } = FlagSlice.actions;
export default FlagSlice.reducer;
