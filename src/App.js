import React from "react";
import Navbar from '../src/components/Navbar'
import Home from './Pages/index'
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Footer from "./components/Footer";
import VideoSpot from "./components/videos";
import Forums from "./components/Forums";
import ArchivePage from "./Pages/archivepage";
import BuySellPage from "./Pages/buysell";









function App() {
  return (
    <>
   <GlobalStyle />
   <Navbar />
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/archivepage" component={ArchivePage}   />
     <Route path="/videopage" component={VideoSpot} />
     <Route path="/buysellpage" component={BuySellPage} />
     <Route path="/forumpage" component={Forums} />
   </Switch>
   <Footer />
    </>
  )      
   
}

export default App;
