import api from './api';

export async function signIn(email, password) {
    const response = await api.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/sign-in`, {email, password: password});
    return response.data;
};

export async function signUp(email, password) {
    const response = await api.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/sign-up`, {email, password: password});
    return response.data;
};