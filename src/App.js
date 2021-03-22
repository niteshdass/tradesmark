import React, { Component } from 'react'
import Student from './Home/Index'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Nav from './Home/Nav';
import Slide from './Home/Slide';
import Login from './Login/Index';
import Registration from './Registration/Index';
import Order from './Order/Index.js'
 import Profile from './Profile/Index'
import PackageDetails from './Profile/PackageDetails';
import OrderDetails from './Profile/OrderDetails';
import Index from './Payment/Index';
import Online from './Payment/Online';
import ObjectType from './OrderType/ObjectType.js';
import MyFile from './Registration/MyFile';
import Zone from './Order/Zone';

export default class App extends Component {
  render() {
{
      console.log("path", this.props.location)
      //"proxy": "http://127.0.0.1:8000",
          }
    
    return (
      <>
        
        <BrowserRouter> 
          
          <Nav />
        
      
          <Route path="/" exact component={Student} />
          <Route path="/myfile" exact component={MyFile} />
          <Route path="/object_type/:cat?" exact component={ObjectType}/>
          <Route path="/payment_type" exact component={Index} />
          <Route path="/payment/online" exact component={Online}/>
          <Route path="/profile/:id" exact component={Profile} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/order/:cat?/:order_type?" exact component={Order} />
          <Route path="/zone/:cat?/:order_type?" exact component={Zone} />
          <Route path="/orderdetails" exact component={OrderDetails}/>
            <Route path="/packagedetails" exact component={PackageDetails} />
           
        </BrowserRouter>
        
        
      </>
    )
  }
}




