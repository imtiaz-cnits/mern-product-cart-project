import React from 'react';
import Helper from "../utility/Helper.js";
import toast from "react-hot-toast";

const LoginForm = () => {

    let [submit, setSubmit] = React.useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        if (Helper.isEmpty(email)) {
            toast.error("Email address is empty!");
        }
        else {
            setSubmit(true);
            // API Call
            // setSubmit(true);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4 mt-5">
                    <div className="card mt-5">
                        <form onSubmit={onSubmit} className="p-4">
                            <label className="form-label">Enter Your Email Here</label>
                            <input name='email' type='email' className="form-control mt-2"/>
                            <button disabled={submit} type="submit" className="w-100 btn btn-success mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;