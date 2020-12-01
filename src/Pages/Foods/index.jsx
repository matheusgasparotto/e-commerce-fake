import { useSelector } from "react-redux";
import FoodCard from "../../components/FoodCard";
import { Container } from "./style";

const Foods = () => {
  const foods = useSelector((state) => state.products.foods);

  return (
    <Container>
      {foods.map((product, index) => (
        <FoodCard key={index} data={product} />
      ))}
    </Container>
  );
};

export default Foods;
