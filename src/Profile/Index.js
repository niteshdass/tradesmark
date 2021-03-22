import React,{useEffect,useState} from 'react'
import { BrowserRouter, Route, Link,Redirect,useHistory } from "react-router-dom";
import { isAuth, removeCookie, removeLocalStorage } from '../Api/Auth/authApi';
import MyImage from './uploads/nitesh-1616236855018.jpg'
const Index = () => {

  const [user, setUser] = useState({})
  
  const history = useHistory()

      useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
      }, [])
  
         if(!isAuth()){
        return <Redirect to={`/login`} />
  }

console.log("user",user)

  const Logout = () => {
    
    removeCookie("token")
    localStorage.removeItem("user")
    history.push('/login')
   
  }
  
  return (
    <>

      <div class="ui-profile">
        <div class="primg">

          <img class="circle" style={{  width: "50%", height: "50%", marginLeft: "25%", marginTop: "15%" }} src={MyImage} />

        </div>
        <div class="prinfo card-panel">
          <div class="prname">
            <h4 class="name">{user.name} </h4>
            <div class="pos">{user.email} </div>
          </div>
          <div class="center profile-btn">
            <a class="waves-effect waves-light ">Activity</a>
          </div>

          <div class="count" style={{ width: "50%" }}>
            <h6 class="num">398</h6>
            <div class="tit">Orders</div>
          </div>
          <div class="count">
            <h6 class="num">212</h6>
            <div class="tit">Packages</div>
          </div>



        </div>
      </div>

      <div class="ui-profile" style={{ marginTop: "35%" }}>

        <div class="prinfo card-panel" style={{ marginBottom: "12%", }} >
          <div class="prname">
            <Link to="/OrderDetails"><h6 class="name" style={{color:"black", fontWeight:"1200"}} >Order Details <i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>

        <div class="prinfo card-panel" style={{ marginBottom: "12%", }} >
          <div class="prname">
            <Link to="/PackageDetails"><h6 class="name" style={{color:"black", fontWeight:"1200"}} >Package Details <i style={{ width: "20px", }}
              class="mdi mdi-arrow-right" data-page=""></i> </h6> </Link>

          </div>
        </div>
        <div class="prinfo card-panel" style={{ marginBottom: "12%", backgroundColor: "#ffad33" }} >
          <div class="prname">
            <h6 onClick={Logout} class="name">Logout</h6>

          </div>
        </div>
      </div>


    </>
  )
}

export default Index
