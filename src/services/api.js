import axios from 'axios';

const API_URL = 'https://susanruan-24deviceenergyforecasting.hf.space/forecast_24hr_values';
const API_OVERALL = 'https://susanruan-24EnergyForecasting.hf.space/forecast_values';
const ACCESS_TOKEN = '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';

export const fetchDeviceData = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from the API:', error.response ? error.response.data : error.message);
        throw error;
    }
};
// Fetch Overall Data (New API)
export const fetchOverallData = async () => {
    try {
        const response = await axios.get(API_OVERALL, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Overall data from the API:', error);
        throw error;
    }
};