import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendMessage = async (message) => {
    const response = await apiClient.post('/chat/message', { user_input: message });
    return response.data;
};