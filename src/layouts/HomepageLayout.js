import React from 'react';
import Header from './../components/Header/index';
import Footer from './../components/Footer'
const HomepageLayout=props=>{
    return (
        <div  className="fullheight">
<Header {...props}/>

    {props.children}

        </div>
    );
}
export default HomepageLayout;