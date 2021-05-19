import React from "react";
import Navbar from '../src/components/Navbar'
import Home from './Pages/index'
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Footer from "./components/Footer";
import PhotoArchive from "./components/PhotoArchive";



function App() {
  return (
    <>
    <GlobalStyle />
   <Navbar />
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/archive" component={PhotoArchive} />
   </Switch>
   <Footer />
    </>
  )      
   
}

export default App;
