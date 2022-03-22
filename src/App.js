import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppCars from "./pages/AppCars";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/cars">
            <AppCars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
