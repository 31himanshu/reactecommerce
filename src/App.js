

import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Switch,Route } from 'react-router-dom';

import {checkUserSession} from './redux/User/user.actions';
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration/index';
import Login from './pages/Login/index';
import Dashboard from './pages/Dashboard/index';
import Recovery from './pages/Recovery/index';
import WithAuth from './hoc/WithAuth';
import './default.scss';

 const  App =props=>{
  const dispatch=useDispatch();
  
  useEffect(()=>{
    
    dispatch(checkUserSession()); 
    
    

 },[]);
 
 
 
     
    return (
      <div className="App">
        <Switch>
      <Route exact path="/" render={()=>(
        <HomepageLayout>
          <Homepage/>
        </HomepageLayout>
      )}/>
      <Route path="/registration" render={()=>(
        <MainLayout>
          <Registration/>
        </MainLayout>
      )}/>
       <Route path="/login" 
       render={()=>(
        <MainLayout>
          <Login/>
        </MainLayout>
      )}/>
      <Route path="/recovery" render={()=>(
        <MainLayout>
          <Recovery/>
        </MainLayout>
      )}/>
       <Route path="/dashboard" render={()=>(
         <WithAuth>
        <MainLayout>
          <Dashboard/>
        </MainLayout>
        </WithAuth>
      )}/>
      </Switch>
      </div>
    );
   }
  


export default App;
