

import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Switch,Route } from 'react-router-dom';

import {checkUserSession} from './redux/User/user.actions';
import AdminToolbar from './components/AdminToolbaar';
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import AdminLayout from './layouts/AdminLayout';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration/index';
import Login from './pages/Login/index';
import Dashboard from './pages/Dashboard/index';
import Search from './pages/Search/index';
import Recovery from './pages/Recovery/index';
import Admin from './pages/Admin/index';
import WithAuth from './hoc/WithAuth';
import WithAdminAuth from './hoc/withAdminAuth';
import './default.scss';

 const  App =props=>{
  const dispatch=useDispatch();
  
  useEffect(()=>{
    
    dispatch(checkUserSession()); 
    
    

 },[]);
 
 
 
     
    return (
      <div className="App">
        <AdminToolbar/>
        <Switch>
      <Route exact path="/" render={()=>(
        <HomepageLayout>
          <Homepage/>
        </HomepageLayout>
      )}/>
      <Route path="/search" render={()=>(
      <MainLayout>
        <Search/>
      </MainLayout>
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
       <Route path="/admin" render={()=>(
         <WithAdminAuth>
        < AdminLayout>
          <Admin/>
        </ AdminLayout>
        </WithAdminAuth>
      )}/>
      </Switch>
      </div>
    );
   }
  


export default App;
