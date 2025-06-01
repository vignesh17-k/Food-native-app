import { createSlice } from "@reduxjs/toolkit";

const Home = createSlice({
  name: "home",
  initialState: {
    section_data: []
  },
  reducers: {
    set_section_data: (state, { payload }) => {
      state.section_data = payload;
    }
  },
});

export const { set_section_data } = Home.actions;
export default Home.reducer;
