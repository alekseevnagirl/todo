const baseURL = process.env.VUE_APP_JSON_SERVICE_URL;

export const fetchPosts = async () => {
  const response = await fetch(`${baseURL}`);
  return response.json();
};
