import React from 'react';
import { Route, Switch } from 'react-router-dom'
import 'normalize.css/normalize.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>hats</div>
);


function App() {
  return (
    <div>
      <switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;