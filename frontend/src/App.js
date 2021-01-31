import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Link, Switch} from 'react-router-dom'
import Login from './Component/Login';
import Register from './Component/Register';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container>
    <BrowserRouter>
    <Switch>
      <Route  exact path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
    </Container> 
  );
}

export default App;
