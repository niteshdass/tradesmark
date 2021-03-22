import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link,Redirect,useHistory,useParams } from "react-router-dom";
import { isAuth, removeCookie, removeLocalStorage } from '../Api/Auth/authApi';

const Zone = () => {


   
      const { cat } = useParams();
      console.log("cat",cat)
  
  return (
    <>

                  
                  <div class="container">
                        <div class="section">
                              <h5 class="pagetitle">Your Zone</h5>
                        </div>
                  </div>

                 
            
             <div class="container full">
                        <div class="section">
                              <ul class="collection invoice-item">
                                    <Link to={`/order/${cat}/solid/dhaka_sylhet/600`} class="collection-item avatar">
                                          <div class="item-det">
                                                <span class="title">Dhaka to Sylhet</span>
                                                <p>Price:600 Tk</p>
                                                <p>Day Order:6</p>
                                          </div>
                                    </Link>
                              </ul>
                        </div>
              </div>
            
             <div class="container full">
                        <div class="section">
                              <ul class="collection invoice-item">
                                    <Link to={`/order/${cat}/solid/dhaka_khulna/700`} class="collection-item avatar">
                                          <div class="item-det">
                                                <span class="title">Dhaka to khulna</span>
                                                <p>Price:600 Tk</p>
                                                <p>Day Order:6</p>
                                          </div>
                                    </Link>
                              </ul>
                        </div>
                  </div> 


    </>
  )
}

export default Zone
