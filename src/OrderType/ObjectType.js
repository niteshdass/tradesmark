import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link,Redirect,useHistory,useParams } from "react-router-dom";
import { isAuth, removeCookie, removeLocalStorage } from '../Api/Auth/authApi';

const ObjectType = () => {
      const { cat } = useParams();
      console.log("cat",cat)
  
  return (
    <>

                  
                  <div class="container">
                        <div class="section">
                              <h5 class="pagetitle">Your Order Type</h5>
                        </div>
                  </div>

                  <div class="container full">
                        <div class="section">

        <div class="prinfo card-panel" style={{ marginBottom: "4%", height:"70px" }} >
          <div class="prname">
            <Link to={`/order/${cat}/liquid`} ><h6 class="name" style={{color:"black", fontWeight:"1200"}} >Liquid <i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>


                  <div class="prinfo card-panel" style={{ marginBottom: "4%", height:"70px" }} >
          <div class="prname">
            <Link to={`/order/${cat}/solid`}><h6 class="name" style={{color:"black", fontWeight:"1200"}} >Solid <i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>

                          
                          
                  <div class="prinfo card-panel" style={{ marginBottom: "4%", height:"70px" }} >
          <div class="prname">
            <Link to={`/order/${cat}/glass`}><h6 class="name" style={{color:"black", fontWeight:"1200"}} >Glass <i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
                          </div>
                          
            
                  <div class="prinfo card-panel" style={{ marginBottom: "4%", height:"70px" }} >
          <div class="prname">
            <Link to={`/order/${cat}/custom`}><h6 class="name" style={{color:"black", fontWeight:"1200"}} >Customize <i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>




                        </div>
                  </div>
            
            
 


    </>
  )
}

export default ObjectType
