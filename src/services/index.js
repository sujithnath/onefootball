import axios from "axios";

const getRequest = async (url) => {
  if (!url) {
    return;
  }
  return await axios.get(url);
};

export { getRequest };
