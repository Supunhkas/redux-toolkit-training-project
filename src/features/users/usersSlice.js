import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "0", name: "supun" },
  { id: "1", name: "sony" },
  { id: "2", name: "shane" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
