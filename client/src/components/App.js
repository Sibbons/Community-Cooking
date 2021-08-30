import './App.css';
import LandingPage from './landingPage';
import { BrowserRouter, Route } from "react-router-dom";
import Recipe from './recipeInfo';
import Form from './form';

function App() {

  
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/:title" component={Recipe} />
        <Route exact path="/create/form" component={Form} />
      </BrowserRouter>
  </div>
  );
}

export default App;
