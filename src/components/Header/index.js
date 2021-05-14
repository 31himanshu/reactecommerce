import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {signOutUserStart} from './../../redux/User/user.actions'
import './styles.scss';
import '../styles.scss';
import {Link} from 'react-router-dom';

import logo from '../../assests/thestore.jfif';
import {selectCartData, selectCartItemsCount} from './../../redux/Cart/cart.selectors'
const mapState=(state)=>(
    {
        currentUser:state.user.currentUser,
        totalNumCartItems:selectCartItemsCount(state)
    }
)
const Header=props=>{
    const dispatch=useDispatch();
    const {currentUser,totalNumCartItems}=useSelector(mapState);
    const signOut=()=>{
        dispatch(signOutUserStart());
    }
    return(
        <header className="header">
       <div className="wrap">
           <div className="logo">
               <Link to="/">
      <img src={logo} alt="logo"/>
      </Link>
           </div>
           <nav>
               <ul>
                   <li>
                       <Link to="/">
                         Home
                       </Link>
                   </li>
                   <li>
                      <Link to="/search">
                          Search
                      </Link>
                   </li>
               </ul>
           </nav>
           <div className="calltoActions">
               <ul>
              <li>
                  <Link to="/cart">
                  Your Cart ({totalNumCartItems})
                  </Link>
                 
              </li>
               {currentUser &&[
                  
                        <li>
      <Link to="/dashboard">
    My Account
      </Link>
  </li>, 
                       <li>
                           <span onClick={()=>signOut()}>
                               LOGOUT
                           </span>
                       </li>, 
                      
                  
               ]}
               
               
              
               {!currentUser&& [
  
      
  <li>
      <Link to="/registration">
      Register
      </Link>
  </li>,
  <li>, 
      <Link to="/login">
      LOGIN
      </Link>
  </li>
  

               ]}</ul>
             
           </div>
       </div>
        </header>
    );
}
Header.defaultProps={
    currentUser:null
};

export default Header;