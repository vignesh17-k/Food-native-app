import utils from "../utils";

const product = {
	get_categories: () => {
		return utils.api_request({
			url: 'api/products/categories',
			method: 'GET'
		});
	},


	get_popular_rails: () => {
		return utils.api_request({
			url: 'api/products/popular',
			method: 'GET'
		});
	},

	get_menu_rails: () => {
		return utils.api_request({
			url: 'api/products/menu_item',
			method: 'GET'
		});
	},


	get_product_details: (product_id: string) => {
		return utils.api_request({
			url: `api/products/detail/${product_id}`,
			method: 'GET'
		});
	},


};


export default product;
