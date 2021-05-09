

import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Switch,Route ,Redirect} from 'react-router-dom';
import {auth,handleUserProfile} from './firebase/utils';
import {setCurrentUser} from './redux/User/user.actions';
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
    
     
    const authListener=auth.onAuthStateChanged(async userAuth=>{
     if(userAuth){
       const userRef= await handleUserProfile(userAuth);
       userRef.onSnapshot(snapshot=>{
        dispatch( setCurrentUser({
           
             id:snapshot.id,
             ...snapshot.data()
           
         }));
       })
     }
  dispatch(setCurrentUser(userAuth));
    });
    
return ()=>{
  authListener();
};
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
