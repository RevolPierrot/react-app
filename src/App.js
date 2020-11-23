import './App.css';
import Home from "./components/Home";
import Wetter from "./components/Wetter";
import Default from "./components/Default";
import Slideshow from "./components/Slideshow";
import Hello from "./components/Hello";
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
              <li><Link to="/slideshow">Slideshow</Link></li>
              <li><Link to="/hello">Hello</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home text="Das ist mein Text" person={person} />
            </Route>
            <Route path="/wetter">
              <Wetter/>
            </Route>
            <Route path="/slideshow">
              <Slideshow/>
            </Route>
            <Route path="/default">
              <Default message="" />
            </Route>
            <Route path="/hello">
              <Hello title="Moin moin" />
            </Route>
            <Redirect to="/default" />
          </Switch>
        </div>
      </Router>
  );
}
export default App;