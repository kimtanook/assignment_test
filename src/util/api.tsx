import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  timeout: 3000,
  maxContentLength: 2000,
  maxBodyLength: 2000,
  maxRedirects: 5,
});

export const getAdsData = async () => {
  return await axios
    .get(`http://34.22.82.239:8080/getAdList`)
    .then((response) => response.data.ads);
};

export const getUserData = async ({ queryKey }: { queryKey: string[] }) => {
  const [_, date] = queryKey;
  return await instance
    .get(`http://34.22.82.239:8080/getUserList?date=${date}`)
    .then((response) => response.data.users);
};
