import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Grids from "./Grids.js"
import AppBar from "./components/AppBar.js"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/getusers">
            <AppBar />
             <Grids/>
          </Route>
          <Route path="/">
            <AppBar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
