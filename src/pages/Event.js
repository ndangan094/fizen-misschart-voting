
import React, { useEffect, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";

function Event() {

    const [dateNow, setDateNow] = useState(new Date().getTime() / 1000)
    const dateEvent = 1655893889;
    const timeEvent = 3600*12;



    useEffect(() => {
        setInterval(() => {
            setDateNow(new Date().getTime() / 1000);
            console.log("a");
        }, 5000)
    }, [])

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
                <span className="text-center w-full">To receive free <span className="font-semibold">FiCafe</span>, please send your</span>
                <div className="h-3" />
                <div className="flex flex-row justify-around w-full font-medium text-xs">
                    <div className="flex flex-col items-center ">
                        <img src="/assets/wallet.png" width={48} alt="Wallet" />
                        <div className="h-[6px]" />
                        <p>Wallet address</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img src="/assets/image.png" width={48} alt="Image" />
                        <div className="h-[6px]" />
                        <p>A screenshot</p>
                        <p>of Fizen wallet</p>
                    </div>
                </div>
                <div className="h-3" />
                <p className="text-xs"> to our telegram:</p>
                <div className="h-[6px]" />
                <button onClick={() => { window.open("https://t.me/fizen_io"); }} className="flex w-full">
                    <div className="flex flex-row justify-center items-end w-full bg-[#26A5E4]/[0.1] py-[10px] rounded">
                        <img src="/assets/telegram.svg" alt="Telegram" />
                        <div className="w-2" />
                        <p className="text-black">https://t.me/fizen_io</p>
                    </div>
                </button>
                <div className="h-3" />
                <div className="flex flex-col justify-center text-[11px] items-start w-full text-left">
                    <p>We will check and send FiCafe (worth $5) to you immediately</p>
                </div>
                <div className="h-[1px] w-full bg-[#E5C3A1] my-[14px]" />
                <div className="flex flex-row text-xs">
                    <p className="px-2">•</p>
                    <span>You will be able to buy a Starbucks giftcard with FiCafe token and use the giftcard in all <span className="font-semibold">Starbucks stores in Vietnam</span>.</span>
                </div>
                <div className="h-2" />
                <div className="flex flex-row text-xs">
                    <p className="px-2">•</p>
                    <span>All gift cards will be valid for <span className="font-semibold">90 days</span> from the date of purchase.</span>
                </div>
            </div>
        </>)
    }

    const EventEnd = () => {
        return (<>
            <div className="flex flex-col justify-center items-center text-[#35084F] text-center ">
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

    const Selfie = () => {
        return <>
            <div className="flex flex-col relative mx-4 justify-center items-end w-full">
                <img src="/assets/selfie.png" alt="Selfie" />
                <div className="flex flex-col absolute text-[#35084F] ml-[45%] mt-5 text-xs">
                    <p >Take a selfie at the store to have a chance to win :</p>
                    <div className="h-2" />
                    <p className="font-semibold text-sm">200 USDT + 3,200 Fi Tokens</p>
                    <div className="h-1" />
                    <span>(worth <span className="font-semibold">$800</span> at IDO)</span>
                </div>
            </div>
        </>
    }

    return (
        <div className="flex flex-col relative max-w-[500px] select-none mx-auto">
             <div className="flex flex-row fixed top-0 max-w-[500px] w-full bg-[#FBFBFD] justify-between py-4 px-4 z-10">
                    <img onClick={() => { FiToken.postMessage(JSON.stringify({ type: "back" })) }} className="cursor-pointer" src="/assets/back.svg" alt="Back" />
                    <p className="font-medium text-lg">FiCafe Event</p>
                    <img onClick={() => { FiToken.postMessage(JSON.stringify({ type: "close" })) }} className="cursor-pointer" src="/assets/cancel.svg" alt="Cancel" />
                </div>
            <img src="/assets/bg-event.png" alt="claim" />
            <div className="flex flex-col absolute w-full mt-[60px]">

                <div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center px-4 my-5">
                    <div className="flex flex-col justify-center items-center bg-[#F2B858] rounded-[18px] p-1 w-full">
                        <p className="text-white">FiCafe Event</p>
                        <div className="h-1" />
                        <div className="flex flex-col justify-center items-center bg-[#FFF9F3] rounded-2xl w-full py-1 px-4">
                            <img className="py-2" width={78} src="/assets/token-logo.png" alt="Fi Token" />
                            {dateNow < dateEvent ? <EventEarly /> : null}
                            {(dateEvent <= dateNow && dateNow <= (dateEvent + timeEvent)) ? <EventOnGoing /> : null}
                            {dateNow > (dateEvent + timeEvent) ? <EventEnd /> : null}

                        </div>
                    </div>
                    {(dateEvent <= dateNow && dateNow <= (dateEvent + timeEvent)) ? <Selfie /> : null}

                    <div className="h-11" />
                    <button onClick={() => { FiToken.postMessage(JSON.stringify({ type: "back" })) }} className="flex relative justify-center items-center max-w-[186px] mx-auto">
                        <p className="absolute font-medium">Back</p>
                        <img src="/assets/claim.svg" alt="claim" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Event;
