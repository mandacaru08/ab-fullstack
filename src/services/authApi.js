import api from "./api";

async function signIn(user) {
  const response = await api.post(
    `${import.meta.env.VITE_API_BASE_URL}/api/user/sign-in`,
    { email: user.email, password: user.password }
  );
  return response.data;
}

async function signUp({ email, password }) {
  try {
    await api.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/user/sign-up`,
      { email, password }
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { signIn, signUp};
