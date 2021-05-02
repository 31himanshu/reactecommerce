import React from 'react';
import ShopMen from './../../assests/shopMens.jpg';
import shopWomen from './../../assests/shopWomens.jpg';
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
        <a>
            Shop Women
        </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage:`url(${ShopMen})`
        }}
        >
     <a>
         shop Men
     </a>
        </div>
        </div>
        </div>
    )
}
export default Directory;