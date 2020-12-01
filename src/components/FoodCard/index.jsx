import { CardMedia, Button, Typography } from "@material-ui/core";
import { StyeldCard } from "./style";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/modules/cart/actions";

const FoodCard = ({ data, removable = false }) => {
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addProduct(data));
  };

  const removeCart = () => {
    const { id } = data;
    dispatch(removeProduct(id));
  };

  const { name } = data;
  return (
    <StyeldCard>
      <CardMedia></CardMedia>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      {removable ? (
        <Button onClick={removeCart}>Remover do carrinho</Button>
      ) : (
        <Button onClick={addCart}>Inserir no carrinho</Button>
      )}
    </StyeldCard>
  );
};

export default FoodCard;
