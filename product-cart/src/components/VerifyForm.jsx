import React, {useState} from 'react';
import ButtonSpinner from "./ButtonSpinner.jsx";
import Helper from "../utility/Helper.js";
import toast from "react-hot-toast";
import axios from "axios";

const VerifyForm = () => {
    let [submit, setSubmit] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let otp = formData.get('otp');
        if (Helper.isEmpty(otp)) {
            toast.error("Verification Code Required!");
        }
        else {
            let email = sessionStorage.getItem("email");
            setSubmit(true);
            // API Call
            let res = await axios.post(`${Helper.API_BASE}/verify-login`, {UserEmail:email, OTP:otp});
            setSubmit(false);
            if (res.data ['msg'] === "success") {
                sessionStorage.removeItem('email');
                sessionStorage.setItem('token', res.data['data']);
                window.location.href = '/';
            }
            else {
                toast.error("Request failed!");

            }
        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4 mt-5">
                    <div className="card mt-5">
                        <form onSubmit={onSubmit} className="p-4">
                            <label className="form-label">Enter Verification Code</label>
                            <input name='otp' type='text' className="form-control mt-2"/>
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

export default VerifyForm;