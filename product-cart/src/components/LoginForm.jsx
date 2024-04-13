import React, {useState} from 'react';
import Helper from "../utility/Helper.js";
import toast from "react-hot-toast";
import ButtonSpinner from "./ButtonSpinner.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    let [submit, setSubmit] = useState(false);
    let navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        if (Helper.isEmpty(email)) {
            toast.error("Email address is empty!");
        }
        else {
            setSubmit(true);
            // API Call
            let res = await axios.post(`${Helper.API_BASE}/user-login`, {UserEmail:email})
            if (res.data ['msg'] === "success") {
                toast.success(res.data['data']);
                sessionStorage.setItem('email', email);
                navigate('/verify');
            }
            else {
                toast.error("Request failed!");
                setSubmit(false);
            }
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
                            <button disabled={submit} type="submit" className="w-100 btn btn-success mt-3">
                                {submit ? (<ButtonSpinner/>) : ("Submit")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;