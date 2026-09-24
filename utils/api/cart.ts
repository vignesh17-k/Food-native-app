import utils from "../utils";

type InitializeCartBody = {
  user_id: string;
};


type AddToCartBody = {
  product_id: string;
  quantity: number;
  selectedSize: string;
  cart_id: string;
};


type UpdateCartItemBody = {
  cart_item_id: string;
  quantity: number;
  selectedSize: string;
  cart_id: string;
  product_id: string;
};

const cart = {
  initialize_cart: (data: InitializeCartBody) => {
    return utils.api_request({
      url: "api/cart/initialize",
      method: "POST",
      data,
    });
  },


  add_to_cart: (data: AddToCartBody) => {
    return utils.api_request({
      url: "api/cart/item",
      method: "POST",
      data,
    });
  },

  update_cart_item: (data: UpdateCartItemBody) => {
    return utils.api_request({
      url: "api/cart/item",
      method: "POST",
      data,
    });
  },



  get_cart_details: () => {
    return utils.api_request({
      url: "api/cart/details",
      method: "GET",
    });
  },


};

export default cart;
