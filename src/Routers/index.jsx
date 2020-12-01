import { Route, Switch } from "react-router-dom";
import Foods from "../Pages/Foods";
import Cart from "../Pages/Cart";
import { Button, Toolbar } from "@material-ui/core";
import { StyledAppBar } from "./style";
import { useHistory } from "react-router-dom";

const Routers = () => {
  const history = useHistory();

  const goToCart = () => {
    history.push("/cart");
  };
  const goToProducts = () => {
    history.push("/foods");
  };

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <Button onClick={goToProducts}>Produtos</Button>
          <Button onClick={goToCart}>Carrinho</Button>
        </Toolbar>
      </StyledAppBar>
      <Switch>
        <Route path="/foods">
          <Foods />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route exct path="/"></Route>
      </Switch>
    </div>
  );
};

export default Routers;
