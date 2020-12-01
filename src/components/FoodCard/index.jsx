import { CardMedia, Button, Typography } from "@material-ui/core";
import { StyeldCard } from "./style";

const FoodCard = ({ data, removable = false }) => {
  const { name } = data;
  return (
    <StyeldCard>
      <CardMedia></CardMedia>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      {removable ? (
        <Button>Remover do carrinho</Button>
      ) : (
        <Button>Inserir no carrinho</Button>
      )}
    </StyeldCard>
  );
};

export default FoodCard;
