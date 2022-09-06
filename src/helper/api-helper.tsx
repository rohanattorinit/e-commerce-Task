import axios from "axios";
const getProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products/1");
    return { data: res.data, status: "success" };
  } catch (error) {
    return error;
  }
};

export { getProducts };
