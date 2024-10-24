import { Row, Col } from "react-bootstrap";
import { ProductsListItems } from "./components/ProductListItems";
import FetchProducts from "./data/fetchProducts";

const ProductsList = () => {
  const productsList = FetchProducts();
  return (
    <>
      <Row md={3} xs={2} lg={5} className="g-3">
        {productsList.map((product) => (
          <Col key={product.id}>
            <ProductsListItems {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default ProductsList;
