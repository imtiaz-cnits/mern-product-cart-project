import React from 'react';
import MasterLayout from "../components/MasterLayout.jsx";

const PageNotFound = () => {
    return (
        <MasterLayout>
            <div className="container">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-md-12 mt-5">
                        <h1>404 Not Found</h1>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default PageNotFound;