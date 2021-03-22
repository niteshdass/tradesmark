import React from 'react'
import { isAuth } from '../Api/Auth/authApi';
import { BrowserRouter, Route, Link,Redirect } from "react-router-dom";
const OrderDetails = () => {
              if(!isAuth()){
        return <Redirect to={`/login`} />
  }
      return (
            <>
                  <div class="container">
                        <div class="section">
                              <h5 class="pagetitle">Order Details</h5>
                        </div>
                  </div>

                  <div class="container full">
                        <div class="section">


                              <ul class="collection invoice-item">



                                    <li class="collection-item avatar">
                                          <div class="item-det">
                                                <img src="assets/images/c3.jpg" alt="" class="circle" />
                                                <span class="title">ID:2431112</span>
                                                <p>Price:600 Tk</p>
                                                <p>Date: 12/12/12</p>
                                          </div>

                                          <div class="secondary-content">
                                                <h6 class="top-0 ">Pending</h6>
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
                                                <span class="title">ID:2431112</span>
                                                <p>Price:600 Tk</p>
                                                <p>Date: 12/12/12</p>
                                          </div>

                                          <div class="secondary-content">
                                                <h6 class="top-0 ">Proccess</h6>
                                          </div>

                                    </li>



                              </ul>


                        </div>
                  </div>  
            </>
      )
}

export default OrderDetails
