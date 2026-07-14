import api from "../utils/axiosConfig";

const PACKAGE_URL = "v1/packages";


// Get all packages
export const getAllPackages = async () => {

    const response = await api.get(PACKAGE_URL);

    return response.data;
};


// Get packages by event
export const getPackagesByEvent = async (eventId) => {

    const response = await api.get(
        `${PACKAGE_URL}/event/${eventId}`
    );

    return response.data;
};


// Get package by id
export const getPackageById = async (id) => {

    const response = await api.get(
        `${PACKAGE_URL}/${id}`
    );

    return response.data;
};


// Create package
export const createPackage = async (packageData) => {

    const response = await api.post(
        PACKAGE_URL,
        packageData
    );

    return response.data;
};


// Update package
export const updatePackage = async (id, packageData) => {

    const response = await api.put(
        `${PACKAGE_URL}/${id}`,
        packageData
    );

    return response.data;
};


// Delete package
export const deletePackage = async (id) => {

    const response = await api.delete(
        `${PACKAGE_URL}/${id}`
    );

    return response.data;
};