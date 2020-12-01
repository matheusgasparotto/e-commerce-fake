import FoodCard from "../../components/FoodCard";
import { useSelector } from "react-redux";
import { Container } from "./style";
import { useState, useEffect } from "react";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const [messages, setMessages] = useState();

  useEffect(() => {
    testMessages();
  }, [products]);

  const testMessages = () => {
    const fruits = products.filter((product) => product.type === "fruit");
    const meats = products.filter((product) => product.type === "meat");
    const carb = products.filter((product) => product.type === "carb");
    console.log(products);
    console.log(fruits.length);
    if (fruits.length === 0) {
      setMessages("Adicione uma fruta para ser mais saudável");
    }
    if (fruits.length > 0 && meats.length > 0) {
      setMessages("Parabéns, sua compra está saudável");
    }

    if (fruits.length === 0 && meats.length === 0 && carb.length > 0) {
      setMessages("Cuidado, muito açucar na dieta é prejudicial a saude");
    }
  };

  return (
    <Container>
      {products.length === 0 ? (
        <h1>Não há itens no carrinho</h1>
      ) : (
        products.map((product, index) => (
          <FoodCard key={index} data={product} removable />
        ))
      )}
      {products.length > 0 && <h1>{messages}</h1>}
    </Container>
  );
};

export default Cart;
