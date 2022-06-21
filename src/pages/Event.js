
import React from "react";
import { Link, useNavigate, } from "react-router-dom";

function Event() {

    const dateNow = (new Date().getTime()/1000);
    const dateEvent = 1655781000;
                      
    console.log(dateNow);
    console.log(dateEvent);
    console.log(dateEvent+1800);

    const EventEarly = () => {
        return (<>
            <div className="flex flex-col justify-center items-center text-[#35084F] text-center">
                <p className="font-medium">The free FiCafe event has not started yet.</p>
                <p>Please come back later.</p>
                <div className="h-4" />
            </div>
        </>)
    }

    const EventOnGoing = () => {
        return (<>
            <div className="flex flex-col justify-start items-start w-full p-1 text-[#35084F]">
                <span>To receive free <span className="font-semibold">FiCafe</span>, please send your</span>
                <div className="flex flex-row font-semibold">
                    <p className="px-2">•</p>
                    <p>wallet address</p>
                </div>
                <div className="flex flex-row font-semibold">
                    <p className="px-2">•</p>
                    <p>a screenshot of Fizen wallet</p>
                </div>
                <div className="h-3" />
                <p> to our telegram:</p>
                <div className="h-[6px]" />
                <button onClick={() => { window.open("https://t.me/fizen_io"); }} className="flex w-full">
                    <div className="flex flex-row justify-center items-end w-full bg-[#26A5E4]/[0.1] py-[10px] rounded">
                        <img src="/assets/telegram.svg" alt="Telegram" />
                        <div className="w-2" />
                        <p className="text-black">https://t.me/fizen_io</p>
                    </div>
                </button>
                <div className="h-3" />
                <div className="flex flex-col justify-center items-center w-full text-center">
                    <p >We will check and send FiCafe (worth $5) to you immediately</p>
                </div>
                <div className="h-[1px] w-full bg-[#E5C3A1] my-[14px]" />
                <span className="text-center">You will be able to buy a Starbucks giftcard with FiCafe token and use the giftcard in all Starbucks stores in <span className="font-bold">Vietnam</span>.</span>
            </div>
        </>)
    }

    const EventEnd = () => {
        return (<>
            <div className="flex flex-col justify-center items-center text-[#35084F] text-center w-full">
                <p className="font-medium">The free FiCafe event has ended.</p>
                <p>Join us for more coming events</p>
                <div className="h-4" />
                <button onClick={() => { window.open("https://t.me/fizen_io"); }} className="flex w-full">
                    <div className="flex flex-row justify-center items-end w-full bg-[#26A5E4]/[0.1] py-[10px] rounded">
                        <img src="/assets/telegram.svg" alt="Telegram" />
                        <div className="w-2" />
                        <p className="text-black">https://t.me/fizen_io</p>
                    </div>
                </button>
                <div className="h-4" />
            </div>
        </>)
    }

    return (
        <div className="flex flex-col relative max-w-[500px] select-none mx-auto">
            <div className="flex flex-row fixed top-0 max-w-[500px] w-full bg-[#FBFBFD] justify-between py-4 px-4">
                <img onClick={() => { FiToken.postMessage(JSON.stringify({ type: "back" })) }} className="cursor-pointer" src="/assets/back.svg" alt="Back" />
                <p className="font-medium text-lg">FiCafe Event</p>
                <img onClick={() => { FiToken.postMessage(JSON.stringify({ type: "close" })) }} className="cursor-pointer" src="/assets/cancel.svg" alt="Cancel" />
            </div>
            <div className="flex flex-col mt-[184px]">
                <div className="flex flex-col justify-center items-center bg-[#F2B858] rounded-[18px] mx-4 p-1">
                    <p className="text-white">FiCafe Event</p>
                    <div className="h-1" />
                    <div className="flex flex-col justify-center items-center bg-[#FFF9F3] rounded-2xl w-full py-1 px-4">
                        <img className="py-2" src="/assets/token-logo.png" alt="Fi Token" />
                        {dateNow<dateEvent?<EventEarly/>:null}
                        {(dateEvent<=dateNow &&dateNow<=(dateEvent+1800))?<EventOnGoing/>:null}
                        {dateNow>(dateEvent+1800)?<EventEnd/>:null}

                    </div>
                </div>
                <div className="h-11" />
                <button onClick={() => {FiToken.postMessage(JSON.stringify({ type: "back" })) }} className="flex relative justify-center items-center max-w-[186px] mx-auto">
                    <p className="absolute font-medium">Back</p>
                    <img src="/assets/claim.svg" alt="claim" />
                </button>
            </div>
        </div>
    );
}

export default Event;
