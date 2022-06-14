import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";


const Claim = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    return <>
        <div className="flex flex-col relative max-w-[500px] select-none mx-auto">
            <div className="flex flex-row fixed top-0 max-w-[500px] w-full bg-white justify-between py-5 px-4">
                <img onClick={() => navigate(-1)} className="cursor-pointer" src="/assets/back.svg" alt="Back" />
                <p className="font-medium text-lg">FiCafe Event</p>
                <img className="cursor-pointer" src="/assets/cancel.svg" alt="Cancel" />
            </div>
            <div className="flex flex-col">
                <img className="pt-[68px]" src="/assets/token-bg.png" alt="bg" />
                <div className="flex flex-col px-4">
                    <div className="flex flex-col mt-20 px-4 py-2 bg-[#FFF9F3] rounded-[4px]">
                        <p className="text-xs text-[#8089A9]">Receiving address</p>
                        <p>Account 1 (0x0742...c086)</p>
                    </div>
                    <div className="h-14" />
                    <button onClick={() => { FiToken.postMessage('sendAPI'); }} className="flex relative justify-center items-center max-w-[186px] mx-auto">
                        <p className="absolute font-medium">Claim 10 FiCafe tokens</p>
                        <img src="/assets/claim.svg" alt="claim" />
                    </button>
                </div>
            </div>
            {visible ? <Modal visible={visible} onHide={() => setVisible(false)}>
                <div className={`flex flex-col bg-white w-[300px] justify-center items-center px-8 py-6`}>
                    <img src="/assets/success.svg" width={56} alt="Success" />
                    <div className="h-5" />
                    <p className="text-base">10 FiCafe tokens are yours now!</p>
                    <div className="h-10" />
                    <div className="flex flex-row bottom-0 max-w-[500px] w-full bg-white justify-between">
                        <button className="w-full bg-[#500EC1] h-[44px] rounded-3xl text-white font-medium text-center items-center justify-center flex">
                            Ok I got it!
                        </button>
                    </div>
                </div>
            </Modal> : null}
        </div>
    </>
}



export default Claim;