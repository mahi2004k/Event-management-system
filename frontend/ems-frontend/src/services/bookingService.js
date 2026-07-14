import api from "../utils/axiosConfig";

const BOOKING_URL = "v1/bookings";

// Create Booking
export const createBooking = async (booking) => {
    const response = await api.post(BOOKING_URL, booking);
    return response.data;
};

// Get All Bookings (Admin)
export const getAllBookings = async () => {
    const response = await api.get(BOOKING_URL);
    return response.data;
};

// Get Booking By ID
export const getBookingById = async (id) => {
    const response = await api.get(`${BOOKING_URL}/${id}`);
    return response.data;
};

// Get Logged-in User Bookings
export const getMyBookings = async () => {
    const response = await api.get(`${BOOKING_URL}/my`);
    return response.data;
};

// Get Bookings By Package (Admin)
export const getBookingsByPackage = async (packageId) => {
    const response = await api.get(`${BOOKING_URL}/package/${packageId}`);
    return response.data;
};

// Update Booking
export const updateBooking = async (id, booking) => {
    const response = await api.put(`${BOOKING_URL}/${id}`, booking);
    return response.data;
};

// Cancel Booking
export const cancelBooking = async (id) => {
    const response = await api.patch(`${BOOKING_URL}/${id}/cancel`);
    return response.data;
};