import api from "../utils/axiosConfig";

const CATEGORY_URL = "v1/categories";


export const getAllCategories = async () => {

    const response = await api.get(CATEGORY_URL);

    return response.data;

};