import utils from "../utils";

const wishlist = {
    get_wishlist_data: () => {
        return utils.api_request({
            url: 'api/wishlist',
            method: 'GET'
        });
    },

    add_product_to_wishlist: (data: any) => {
        return utils.api_request({
            url: 'api/wishlist/add',
            method: 'POST',
            data: data
        });
    },

    remove_product_from_wishlist: (product_id:any) => {
        return utils.api_request({
            url: `api/wishlist/remove/${product_id}`,
            method: 'delete'
        });
    },

};


export default wishlist;
