import api from "../utils/axiosConfig";


export const getProfile = async()=>{

    const response =
        await api.get("/v1/users/profile");


    return response.data;

};