import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

export type CartProduct = Product & {
  quantity?: number;
};

export type CartData = {
  id?: string;
  _id?: string;
  user_id?: string;
  products?: CartProduct[];
};

type CartState = {
  cart_data: CartData | null;
};

const initialState: CartState = {
  cart_data: null,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    set_cart: (state, { payload }: PayloadAction<CartData>) => {
      state.cart_data = {
        ...payload,
        products: payload.products ?? [],
      };
    },
    clear_cart: (state) => {
      state.cart_data = null;
    },
    set_cart_products: (state, { payload }: PayloadAction<CartProduct[]>) => {
      if (state.cart_data) {
        state.cart_data.products = payload;
      }
    },
  },
});

export const { set_cart, clear_cart, set_cart_products } = CartSlice.actions;
export default CartSlice.reducer;
