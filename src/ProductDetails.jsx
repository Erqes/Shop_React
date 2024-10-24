import { useState, useEffect } from "react";
import { API_URL } from "./env";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/product/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductDetails(data);
      });
  }, []);
  return <div>{productDetails.id}</div>;
};
export default ProductDetails;
