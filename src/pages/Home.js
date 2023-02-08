import React from "react";
import { useNavigate, } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);

    const claim = query.get("claim");
    return (
        <div className="flex flex-col relative max-w-[500px] select-none mx-auto">
            <div className="flex flex-row fixed top-0 max-w-[500px] w-full justify-between py-4 px-4 z-10">
                <div className=" w-6" />
                <p className="font-medium text-lg text-white">Miss charm</p>
                <img onClick={() => { FiToken.postMessage(JSON.stringify({ type: "close" })) }} className="cursor-pointer" src="/assets/cancel.svg" alt="Cancel" />
            </div>
            <div className="flex flex-row fixed max-w-[500px]"> 
                <img  src="/assets/bg.png" />
            </div>
            <div className="flex flex-col fixed items-center justify-center w-full max-w-[500px]">
                <div className="h-[190px]"/>
                <img className="w-[123px]" src="/assets/miss-charm-logo.png" />
                <div className="h-[40px]"/>
                <p className=" text-base text-[#F8D181]">The voting page will be opened on</p>
                <div className="h-[12px]"/>
                <p className=" text-[32px] font-semibold text-[#F8D181]">9 Feb 2023</p>
            </div>
        </div>
    );
}

export default Home;


