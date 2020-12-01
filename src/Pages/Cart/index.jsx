import FoodCard from "../../components/FoodCard";
import { useSelector } from "react-redux";
import { Container } from "./style";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  console.log(products);
  return (
    <Container>
      {products.length === 0 ? (
        <h1>Não há itens no carrinho</h1>
      ) : (
        products.map((product, index) => (
          <FoodCard key={index} data={product} removable />
        ))
      )}
    </Container>
  );
};

export default Cart;
