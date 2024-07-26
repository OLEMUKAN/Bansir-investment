import axios from 'axios';

const API_BASE_URL = 'https://api.bansir-investments.com';

export const getServices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services`);
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

// Add more API calls as needed