import React from 'react'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { isAuth } from '../Api/Auth/authApi';
const PackageDetails = () => {
                if(!isAuth()){
        return <Redirect to={`/login`} />
      }
      
      return (
            <>
                  
                  
                  <div class="container">
                        <div class="section">
                              <h5 class="pagetitle">Package Details</h5>
                        </div>
                  </div>

                  <div class="container full">
                        <div class="section">


                              <ul class="collection invoice-item">



                                    <li class="collection-item avatar">
                                          <div class="item-det" >
                                                <img src="assets/images/c3.jpg" alt="" class="circle" />
                                                <span class="title">PRO PACK</span>
                                                <p >Price:600 Tk</p>
                                                <p>Remaing Order:6</p>
                                                <p>Last Date: 12/12/12</p>
                                          </div>

                                          <div class="secondary-content">
                                                <h6 class="top-0 ">Active</h6>
                                          </div>

                                    </li>



                              </ul>


                        </div>
                  </div>
            
            
 <div class="container full">
                        <div class="section">


                              <ul class="collection invoice-item">



                                    <li class="collection-item avatar">
                                          <div class="item-det">
                                                <img src="assets/images/c3.jpg" alt="" class="circle" />
                                                <span class="title">Super Pack</span>
                                                <p>Price:600 Tk</p>
                                                <p>Remaing Order:6</p>
                                                <p>Last Date: 12/12/12</p>
                                          </div>

                                          <div class="secondary-content">
                                                <h6 class="top-0 ">Active</h6>
                                          </div>

                                    </li>



                              </ul>


                        </div>
                  </div>           
            
            </>
      )
}

export default PackageDetails
