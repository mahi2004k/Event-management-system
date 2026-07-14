import api from "../utils/axiosConfig";

const EVENT_URL = "v1/events";


export const getAllEvents = async () => {

    const response = await api.get(EVENT_URL);

    return response.data;

};


export const getEventById = async (id) => {

    const response = await api.get(`${EVENT_URL}/${id}`);

    return response.data;

};