import api from "../utils/axiosConfig";


const PAYMENT_URL = "v1/payments";


// Create Payment

export const createPayment = async(payment)=>{

    const response = await api.post(
        PAYMENT_URL,
        payment
    );

    return response.data;

};


// Get Payment By Booking

export const getPaymentByBooking = async(bookingId)=>{

    const response = await api.get(
        `${PAYMENT_URL}/booking/${bookingId}`
    );

    return response.data;

};