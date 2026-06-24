import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterValues } from "../../src/screens/Home/components/FilterModal";

type SearchState = {
  product_filters: FilterValues | null;
};

const initialState: SearchState = {
  product_filters: null,
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    set_product_filters: (state, { payload }: PayloadAction<FilterValues>) => {
      state.product_filters = payload;
    },
    clear_product_filters: (state) => {
      state.product_filters = null;
    },
  },
});

export const { set_product_filters, clear_product_filters } = SearchSlice.actions;
export default SearchSlice.reducer;
