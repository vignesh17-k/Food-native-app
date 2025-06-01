import { add_to_wishlist, remove_from_wishlist } from "../store/slices/WishlistSlice";
import wishlist from "../utils/api/wishlist";

export const add_to_wishlist_action = (product_id: any) => async (dispatch: any) => {
    try {
        const response = await wishlist.add_product_to_wishlist({ product_id })
        console.log(response, 'added');
    } catch (error) {
        dispatch(remove_from_wishlist(product_id));
        console.error("Error adding to wishlist:", error);
    }
};


export const remove_from_wishlist_action = (product_id: any, data: any) => async (dispatch: any) => {
    try {
        const response = await wishlist.remove_product_from_wishlist(product_id)
        console.log(response, 'removed');
    } catch (error) {
        dispatch(add_to_wishlist(data));
        console.error("Error removing from wishlist:", error);
    }
};