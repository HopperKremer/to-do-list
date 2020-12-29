import './App.css';
import Home from './components/home.component';
import List from './components/items.component';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/nav';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
