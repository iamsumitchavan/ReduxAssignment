import axios from "axios";

export const GetUserList = async (query: string) => {
  return await axios
    .get(`https://api.github.com/users/${query}`)
    .then((response) => {
      return response.data;
    });
};
