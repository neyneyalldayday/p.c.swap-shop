import React from "react";
import Navbar from '../src/components/Navbar'
import Home from './Pages/index'
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';



function App() {
  return (
    <>
    <GlobalStyle />
   <Navbar />
   <Switch>
     <Route path="/" exact component={Home}/>
   </Switch>
    </>
  )      
   
}

export default App;
