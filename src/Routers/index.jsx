import { Route, Switch } from "react-router-dom";
import Foods from "../Pages/Foods";

const Routers = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/foods">
          <Foods />
        </Route>
      </Switch>
    </div>
  );
};

export default Routers;
