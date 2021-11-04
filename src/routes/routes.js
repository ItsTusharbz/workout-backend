import { Route, Switch } from "react-router-dom";
import { routesArray } from "../utils/util";
import Home from "../views/Home/Home";

export default function Routes() {
  return (
    <Switch>
      {routesArray.map((r) => (
        <Route path="/home" component={Home}></Route>
      ))}
    </Switch>
  );
}
