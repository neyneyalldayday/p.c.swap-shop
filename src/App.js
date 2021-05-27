import React from "react";
import Navbar from '../src/components/Navbar'
import Home from './Pages/index'
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Footer from "./components/Footer";
import PhotoArchive from "./components/PhotoArchive";
import VideoSpot from "./components/videos";
import BuySell from "./components/BuySell";
import Forums from "./components/Forums";



function App() {
  return (
    <>
    <GlobalStyle />
   <Navbar />
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/archive" component={PhotoArchive} />
     <Route path="/videopage" component={VideoSpot} />
     <Route path="/buysellpage" component={BuySell} />
     <Route path="/forumpage" component={Forums} />
   </Switch>
   <Footer />
    </>
  )      
   
}

export default App;
