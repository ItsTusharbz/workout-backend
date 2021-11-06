import { Route, Switch } from "react-router-dom";
import Home from "../views/Home/Home";
import Tracker from "../views/Tracker/Tracker";

export default function Routes() {
  return (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/tracker" component={Tracker} />
        <Route path="/" component={Home} />
    </Switch>
  );
}
