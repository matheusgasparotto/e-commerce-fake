import FoodCard from "../../components/FoodCard";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./style";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <Container>
      {products.map((product, index) => (
        <FoodCard key={index} data={product} removable />
      ))}
    </Container>
  );
};

export default Cart;
