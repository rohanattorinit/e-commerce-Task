import { useEffect } from "react";
import { Product } from "../App";
import { ProductCard } from "../components/ProductCard";
import { getProducts } from "../helper/api-helper";

export const ProductList = (props: any) => {
  const { setProducts, products } = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchproducts = await getProducts();
        setProducts(fetchproducts);
      } catch (error) {
        //handle error
      }
    };
    fetchData();
  }, [setProducts]);

  return (
    <>
      {products?.length !== 0 ? (
        products?.map((product: Product) => {
          <ProductCard
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />;
        })
      ) : (
        <p>No Products Available!</p>
      )}
    </>
  );
};
