import "./App.css";
import "./assets/style.css";
import "./assets/bootstrap.min.css";
import AppLayout from "./AppLayout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AppLayout} />
        <Route exact path="/about" component={AppLayout} />
        <Route exact path="/service" component={AppLayout} />
        <Route exact path="/contact" component={AppLayout} />
      </Switch>
    </div>
  );
}

export default App;
