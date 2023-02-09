import React from "react";
import { useNavigate, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function Voting() {
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const claim = query.get("claim");
    let isSubmit = false;

    const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));

    const onSubmit = async () => {
        console.log(query.get("address"));
        console.log(query.get("deviceId"));
        console.log(query.get("signature"));
        isSubmit = true;
        if (query.get("address") == null || query.get("deviceId") == null || query.get("signature") == null) {
            toast("Submit address failed. Please try again later", { type: "error", isLoading: false, autoClose: 3000, hideProgressBar: true, theme: "colored", position: "top-center", });
            isSubmit = false;
        } else {
            const id = toast.loading("Please wait...", { theme: "colored", position: "top-center", });
            axios.post('https://dev-api-giftcard.fizen.io/api/misscharm/whitelist', {
                "address": query.get("address"),
                "deviceID": query.get("deviceId"),
                "signature": query.get("signature")
            })
                .then(function (response) {
                    console.log(response);
                    isSubmit = false;
                    if (response.data.success) {
                        toast.update(id, { render: "Submit address completed. You will be notified once you receive token", type: "success", isLoading: false, autoClose: 3000, hideProgressBar: true, theme: "colored", position: "top-center", });
                    } else if (response.data.success == false && response.data.reason == "MISSCHARM.WHITELIST_ADDRESS.ADDRESS.DUPLICATE") {
                        toast.update(id, { render: "Submit address failed. You have already submitted address", type: "error", isLoading: false, autoClose: 3000, hideProgressBar: true, theme: "colored", position: "top-center", });

                    } else if (response.data.success == false && response.data.reason == "MISSCHARM.WHITELIST_ADDRESS.DEVICE.DUPLICATE") {
                        toast.update(id, { render: "Submit address failed. You have already submitted on this device", type: "error", isLoading: false, autoClose: 3000, hideProgressBar: true, theme: "colored", position: "top-center", });
                    } else {
                        toast.update(id, { render: "Submit address failed. Please try again later", type: "error", isLoading: false, autoClose: 3000, hideProgressBar: true, theme: "colored", position: "top-center", });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    isSubmit = false;
                    toast.update(id, { render: "Submit address failed. Please try again later", type: "error", isLoading: false, autoClose: 3000, hideProgressBar: true, theme: "colored", position: "top-center", });
                });
        }

    }
    return (
        <div className="flex flex-col relative max-w-[500px] select-none mx-auto">
            <div className="flex flex-row fixed top-0 max-w-[500px] w-full justify-between py-4 px-4 z-10">
                <div className=" w-6" />
                <p className="font-medium text-lg text-white"></p>
                <img onClick={() => { FiToken.postMessage(JSON.stringify({ type: "close" })) }} className="cursor-pointer" src="/assets/cancel.svg" alt="Cancel" />
            </div>
            <div className="flex flex-row fixed max-w-[500px]">
                <img src="/assets/bg-2.png" />
            </div>
            <div className="flex flex-col fixed items-center w-full h-screen max-w-[500px]">
                <div className="flex flex-col items-center w-full mx-4">
                    <div className="h-[40px]" />
                    <img className="w-[77px]" src="/assets/miss-charm-logo.png" />
                    <div className="h-[24px]" />
                    <p className=" text-base text-center text-[#F8D181]">{"You will receive 1 Miss Fizen Vote (MFV)"}</p>
                    <p className=" text-base text-center text-[#F8D181]">{"token after submitting your wallet."}</p>
                    <div className="h-[40px]" />
                    <img className="w-[190px]" src="/assets/logo-token.png" />
                    <div className="h-[40px]" />
                    <p className=" text-base text-center text-[#F8D181]">{"Distribution time: Before the Swimsuit"}</p>
                    <p className=" text-base text-center text-[#F8D181]">{"show by Fizen at 5 PM, February 9th"}</p>
                    <div className="h-[30px]" />
                    <div className="flex flex-row w-full">
                        <div className="w-4" />
                        <div className="flex flex-col w-full bg-white px-4 py-[7px] rounded">
                            <p className="text-[#8089A9]">Receiving address</p>
                            <div className="h-[2px]" />
                            <p className="text-[#282736] text-base">{`${query.get("address").slice(0, 10)}...${query.get("address").slice(query.get("address").length - 10, query.get("address").length)}`}</p>
                        </div>
                        <div className="w-4" />

                    </div>
                    <div className="h-[60px]" />
                    <img onClick={() => {
                        if (isSubmit == false) {
                            onSubmit();
                        }
                    }} className="w-[187px]" src="/assets/submit.png" />

                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Voting;


