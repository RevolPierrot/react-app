import './App.css';
import Home from "./components/Home";
import Wetter from "./components/Wetter";
import Default from "./components/Default";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
/* In React können Funktionen entweder klassisch als function definiert werden o.a. via Klassen-def*/
function App() {
  const person = {
    firstname: "Captain",
    lastname: "Incognito",
  };
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/wetter">Wetter</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home text="Das ist mein Text" person={person} />
            </Route>
            <Route path="/wetter">
              <Wetter/>
            </Route>
            <Route path="/default">
              <Default message="Diese Route existiert nicht" />
            </Route>
            <Redirect to="/default" />
          </Switch>
        </div>
      </Router>
  );
}
export default App;