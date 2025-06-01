import { createSlice } from "@reduxjs/toolkit";
import { filter, find } from "lodash";


const Wishlist = createSlice({
  name: "wishlist",
  initialState: {
    wishlist_data: []
  },

  reducers: {
    //get all wishlist api
    set_wishlist: (state, action) => {
      state.wishlist_data = action?.payload;
    },

    update_wishlist: (state, action) => {
      const product_data = action.payload;
      const product_id_exist = find(state?.wishlist_data, (item: any) => item?.id === product_data?.id);
      if (product_id_exist) {
        state.wishlist_data = filter(state?.wishlist_data, (item: any) => item?.id !== product_data?.id);
      } else {
        state.wishlist_data = [...(state?.wishlist_data || []), product_data];
      }
    },

    //add wishlist api
    add_to_wishlist(state, action) {
      state.wishlist_data?.push(action?.payload);
    },

    //remove wishlist api
    remove_from_wishlist(state, action) {
      const product_id = action.payload;
      state.wishlist_data = filter(state?.wishlist_data, (item) => item?.id !== product_id);
    },
  },
});

export const { set_wishlist, add_to_wishlist, remove_from_wishlist, update_wishlist } = Wishlist.actions;
export default Wishlist.reducer;
