import api from "./api";

export async function signIn(user) {
  const response = await api.post(
    `${import.meta.env.VITE_API_BASE_URL}/api/user/sign-in`,
    { email: user.email, password: user.password }
  );
  return response.data;
}

export async function signUp(user) {
  const response = await api.post(
    `${import.meta.env.VITE_API_BASE_URL}/api/user/sign-up`,
    { email: user.email, password: user.password }
  );
  return response.data;
}
