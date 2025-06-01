import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "./axios";

interface Props {
    url: string,
    method: string,
    data?: any,
    params?: any
}

const utils = {
    store_data: async (key: string, value: any) => {
        try {
            await AsyncStorage.setItem(key, value);
            console.log("Data stored successfully");
        } catch (error) {
            console.error("Error storing data:", error);
        }
    },

    retrieve_data: async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                let data = JSON.parse(value);
                return data;
            }
        } catch (error) {
            console.error("Error retrieving data:", error);
        }
    },

    api_request: async ({ url, method, data, params }: Props) => {
        try {
            const response = await axiosInstance({
                method,
                url,
                data,
                params,
            });
            return response.data;
        } catch (error) {
            console.error('API Error:', error.response?.data || error.message);
            throw error.response?.data || error.message;
        }
    }

}

export default utils;