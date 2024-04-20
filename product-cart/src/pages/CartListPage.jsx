import React from 'react';
import MasterLayout from "../components/MasterLayout.jsx";
import CartList from "../components/CartList.jsx";

const CartListPage = () => {
    return (
        <MasterLayout>
            <CartList/>
        </MasterLayout>
    );
};

export default CartListPage;