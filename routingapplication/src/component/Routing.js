import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import Profile from "./Profile";
import Header from "./Header";
import Footer from "./Footer";
import { PostDetails } from "./PostDetails";


const Routing=()=>{
    return(
    <BrowserRouter>
     <div className="container">
     <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Post" component={Post}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="/Post/:topic" component={PostDetails}/>
    <Footer/>
    </div>
  </BrowserRouter>
    )
}
      
export default Routing;

//anchor tag page will refresh we do not want that//
//links can be anywhere in the page