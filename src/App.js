import React from "react";
import Navbar from '../src/components/Navbar'
import Home from './Pages/index'
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Footer from "./components/Footer";



function App() {
  return (
    <>
    <GlobalStyle />
   <Navbar />
   <Switch>
     <Route path="/" exact component={Home}/>
   </Switch>
   <Footer />
    </>
  )      
   
}

export default App;
