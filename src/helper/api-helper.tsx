import axios from "axios";
const getProducts = async () => {
  try {
    const res = axios.get("https://fakestoreapi.com/products/1");
    return await res;
  } catch (error) {
    console.error(error);
  }
};

export { getProducts };
