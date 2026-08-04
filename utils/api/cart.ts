import utils from "../utils";

type InitializeCartBody = {
  user_id: string;
};

const cart = {
  initialize_cart: (data: InitializeCartBody) => {
    return utils.api_request({
      url: "api/cart/initialize",
      method: "POST",
      data,
    });
  },
};

export default cart;
