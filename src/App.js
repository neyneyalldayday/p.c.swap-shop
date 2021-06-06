import React from "react";
import Navbar from '../src/components/Navbar'
import Home from './Pages/index'
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Footer from "./components/Footer";
import VideoSpot from "./components/videos";
import ArchivePage from "./Pages/archivepage";
import BuySellPage from "./Pages/buysell";
import ForumPage from "./Pages/forumpage";
import socketClient from "socket.io-client"

const SERVER = "http://127.0.0.1:8080";









function App() {
  const socket = socketClient (SERVER);
        socket.on('connection', () => {
          console.log(`I'm connected to the back-end`)
        });
  return (
    <>
   <GlobalStyle />
   <Navbar />
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/archivepage" component={ArchivePage}   />
     <Route path="/videopage" component={VideoSpot} />
     <Route path="/buysellpage" component={BuySellPage} />
     <Route path="/forumpage" component={ForumPage} />
   </Switch>
   <Footer />
    </>
  )      
   
}

export default App;
