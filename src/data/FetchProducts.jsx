import { useEffect, useState } from "react";
import { API_URL } from "../env";
const FetchProducts = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/product`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductsList(data);
      });
  }, []);
  return productsList;
};
export default FetchProducts;
