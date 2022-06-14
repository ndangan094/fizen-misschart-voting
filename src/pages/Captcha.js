import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";


const Captcha = () => {
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const [token, setToken] = useState(null);
    function onChange(value) {
        console.log(value)
        setToken(value);
    }

    return (
        <div className="flex flex-col relative max-w-[500px] select-none  mx-auto">
            <div className="flex flex-row fixed top-0 max-w-[500px] w-full bg-white justify-between py-5 px-4">
                <img onClick={() => navigate(-1)} className="cursor-pointer" src="/assets/back.svg" alt="Back" />
                <p className="font-medium text-lg">FiCafe Event</p>
                <img className="cursor-pointer" src="/assets/cancel.svg" alt="Cancel" />
            </div>
            {token == null ? <div className="flex flex-row fixed bottom-0 max-w-[500px] w-full bg-white justify-between pb-14 px-4">
                <button className="w-full bg-[#8089A9] h-[44px] rounded-3xl text-white font-medium text-center items-center justify-center flex">
                    Next
                </button>
            </div> : <div className="flex flex-row fixed bottom-0 max-w-[500px] w-full bg-white justify-between pb-14 px-4">
                <Link to={`/claim?accountName=${ query.get("accountName")}&address=${ query.get("address")}&token=${token}`} className="w-full bg-[#500EC1] h-[44px] rounded-3xl text-white font-medium text-center items-center justify-center flex">
                    Next
                </Link>
            </div>}
            <div className="pt-28 flex justify-center">
                <ReCAPTCHA
                    sitekey="6LcDvmsgAAAAAP-4LRXDDK6J9zoEyV69LnvzHL1k"
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default Captcha;