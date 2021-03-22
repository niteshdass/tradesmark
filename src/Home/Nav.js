import React from 'react'
import { BrowserRouter, Route, Link,useHistory } from "react-router-dom";
import { isAuth, removeCookie } from '../Api/Auth/authApi';
const Nav = () => {

    const history = useHistory()
    
     const Logout = () => {
    
    removeCookie("token")
    localStorage.removeItem("user")
    history.push('/login')
   
  }

      return (
            <>
                <nav class="fix_topscroll logo_on_fixed  topbar navigation" role="navigation">
                <div class="nav-wrapper container">
                    <a id="logo-container" href="index.html" class=" brand-logo " >T-BOSS</a>

 <a href="#" data-target="" style={{ background: "white" }}  class="waves-effect waves-circle navicon back-button htmlmode show-on-large "><i
        class="mdi mdi-arrow-left" data-page=""></i></a>
                    <a href="#" data-target="slide-nav" style={{ background: "white" }} class="waves-effect waves-circle navicon sidenav-trigger show-on-large"><i class="mdi mdi-menu"></i></a>
                    

                </div>
                  </nav>
                  
  <ul id="slide-nav" class="sidenav sidemenu">
                <li class="menu-close"><i class="mdi mdi-close"></i></li>
                <li class="user-wrap">
                    <div class="user-view row">

                        <div class="col s9 infoarea">
                            <a href="ui-app-profile.html"><span class="name">User Name</span></a>
                            <a href="ui-app-profile.html"><span class="email">user@gmail.com</span></a>
                        </div>
                    </div>
                </li>


                <li class="menulinks">
                    <ul class="collapsible">
                        <li class="sh-wrap"><div class="subheader">Navigation</div></li>
                        <li class="lvl1 ">
                            <div class=" waves-effect " >
                                <Link to="/">
                                    <i class="mdi mdi-home-outline"></i>
                                    <span class="title">Home</span>
                                </Link>
                            </div>
                        </li>
                        <li class="lvl1 ">
                            <div class=" waves-effect " >
                                <Link to="/profile/1">
                                    <i class="mdi mdi-account"></i>
                                    <span class="title">Profile</span>
                                </Link>
                            </div>
                          </li>
                          {
                              !isAuth() ? <>
                              <li class="lvl1 ">
                            <div class=" waves-effect " >
                                <Link to="/registration">
                                    <i class="mdi mdi-lock"></i>
                                    <span class="title">Registration</span>
                                </Link>
                            </div>
                          </li>
                          <li class="lvl1 ">
                            <div class=" waves-effect " >
                                <Link to="/login">
                                    <i class="mdi mdi-lock-open"></i>
                                    <span class="title">Login</span>
                                </Link>
                            </div>
                        </li></>: <li class="lvl1 ">
                            <div class=" waves-effect " >
                                <a onClick={Logout}>
                                    <i class="mdi mdi-lock-open"></i>
                                    <span class="title">Logout</span>
                                </a>
                            </div>
                        </li>
                          }
                          





                    </ul>
                </li>




            </ul>                
            </>
      )
}

export default Nav

