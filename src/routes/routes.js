import { Route, Switch } from "react-router-dom";
import Home from "../views/Home/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
    </Switch>
  );
}
