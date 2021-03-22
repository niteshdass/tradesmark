import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { getPackage } from '../Api/Package/packApi';
const Package = () => {

     const [cat,setCat] = useState([])

     useEffect(() => {
       getPackage().then(item => {
        setCat(item)
      })
     }, [])
    
    cat.map(item => console.log("pack", item.name))
    
    
      return (
            <>
                <div class="container">
                <div class="section">
                    <h5 class="pagetitle">Package</h5>
                </div>
            </div>


            <div class="container">
                <div class="section">



                      <div class="row ui-mediabox team-box">
                          
                          {cat.map(item => (
                               <div style={{ margin: "2%" }} class="col s12 m5 pad-0  team-member z-depth-1 card">
                            <a class="img-wrap"    >
                                <img class="z-depth-1" style={{ width: "100%" }} src="assets/images/p4.jpg" />
                            </a>
                                  <h5 class="bot-0 name">{item.name}</h5>

                                  <p style={{fontWeight:"900"}} class="bot-0 name">Price- {item.price} Tk | Order- {item.quantity} | time- {item.validity } Month</p>
                                  
                                  <div class="brief">{ item.description}</div>



                            <a style={{ marginLeft: "45%" }} class="btn-floating btn waves-effect waves-light green lighten-2 "><i class="mdi mdi-plus"></i></a>




                            <div class="spacer"></div>
                        </div>
                          ))}

                       
                     

                    </div>


                </div>
            </div>
            </>
      )
}

export default Package
