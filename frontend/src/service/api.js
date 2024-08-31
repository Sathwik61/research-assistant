import axios from 'axios';

const API_URI = 'https://pb698gh0-8000.inc1.devtunnels.ms/api/v1';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}

export const GetLinks= async (data)=>{
    try {
        const response = await axios.post(`${API_URI}/getlinks`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}