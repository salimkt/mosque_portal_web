import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialstate = {
  scanning: false,
  editing: false,
  parent: undefined,
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
    setEditing: (
      state: typeof initialstate,
      action: PayloadAction<boolean>
    ) => {
      state.editing = action.payload;
    },
    setParent: (
      state: typeof initialstate,
      action: PayloadAction<number | undefined>
    ) => {
      //@ts-ignore
      state.parent = action.payload;
    },
  },
});

export const { setScanning, setEditing } = FlagSlice.actions;
export default FlagSlice.reducer;
