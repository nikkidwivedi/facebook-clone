import React from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/LoginPage' exact={true} component={LoginPage}/>
        <Route path='/HeaderArea' component={HeaderArea}/>
      </Switch>
    </div>
  );
}

export default App;
