import { getData } from "@utils/request";

export const getUsers = () => {
  return getData("https://api.github.com/users/AlexShan2008");
};
