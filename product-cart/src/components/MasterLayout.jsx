import React from 'react';
import AppNavBar from "./AppNavBar.jsx";
import Footer from "./Footer.jsx";
import {Toaster} from "react-hot-toast";

const MasterLayout = (props) => {
    return (
        <div className="bg-light">
            <AppNavBar/>
            {props.children}
            <Toaster position="bottom-center"/>
            <Footer/>
        </div>
    );
};

export default MasterLayout;