import React from 'react';
import Header from './../components/Header/index';
import Footer from './../components/Footer/index';
const MainLayout=props=>{
    return (
        <div >
<Header {...props}/>
<div className="main">
    {props.children}

</div>

        </div>
    );
}
export default MainLayout;