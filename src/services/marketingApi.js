import api from "./api";

export async function getMarketingPosts() {
  const response = await api.get(
    `${import.meta.env.VITE_API_URL}/api/marketing`
  );
  return response.data;
}
