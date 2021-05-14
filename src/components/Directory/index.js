import React from 'react';
import ShopMen from './../../assests/a7.jpg';
import shopWomen from './../../assests/a6.jpg';
import {Link} from 'react-router-dom'
import './styles.scss';
const Directory=props=>{
    return (
        <div className="directory">
            <div className="wrap">
        <div
        className="item"
        style={{
            backgroundImage:`url(${shopWomen})`
        }}
        >
    <Link to="/search/academic" >
    
           <b>Academic</b>
     
    </Link>
        
        </div>
        <div
          className="item"
          style={{
            backgroundImage:`url(${ShopMen})`
        }}
        >
     <Link to="/search/nonacademic">
     <b> Non Academic</b></Link>
       
     
        </div>
        </div>
        </div>
    )
}
export default Directory;