import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { useCountdown } from "utils";
import EventEarly from "./EventEarly";
import EventEnd from "./EventEnd";

function Home() {
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const [dateCountDown, setDateCountdown] = useState();
    const STEP = { early: 1, startEarly: 2, start: 3, end: 4 };
    const [currentStep, setCurrentStep] = useState();
    const [data, setData] = useState();
    const [currentTimeNow, setCurrentTimeNow] = useState(new Date().getTime())
    const [eventTime, setEventTime] = useState()
    const [diff, setDiff] = useState();

    let interval;


    const setStep = ({ step }) => {
        if (currentStep != step) {
            setCurrentStep(step);
        }
    }


    const getData = async () => {
        const res = await axios.post("https://dev-api-giftcard.fizen.io/api/reward-token/status", { eventID: "62b3e235b2a83f00076beda3" })
        console.log(res.data.data)
        setData(res.data.data);
        let currentTime = parseInt(new Date().getTime() / 1000);
        setCurrentTimeNow(currentTime);
        setEventTime(res.data.data.currentDistributeStartTime);
        console.log(currentTime);
       
        if (currentTime < res.data.data.eventStartDate ) {
            setStep({ step: 1 })
        } else if (res.data.data.eventStartDate < currentTime && currentTime < res.data.data.currentDistributeStartTime ) {
            console.log("adsad")
            setStep({ step: 2 })
            setDiff(res.data.data.currentDistributeStartTime - currentTime);
        } else if (res.data.data.currentDistributeStartTime < currentTime && currentTime < res.data.data.eventEndDate ) {
            if (res.data.data.rewardTokenCount.afterCurrentDistributeTime === res.data.data.rewardTokenCount.remainingEventSlots) {       
                console.log("cvbj")
                    setStep({ step: 2 })
                    setDiff(res.data.data.nextDistributeStartTime - currentTime);
            }else{
                setStep({ step: 3 })
            }
        }
        else if (currentTime > res.data.data.eventEndDate ) {
            setCurrentStep(4);
        }

    }

    useEffect(() => {
        getData();
        interval = setInterval(() => {
            getData();
        }, 5000)
    }, [])

    const [countdown] = useCountdown(
        diff,
        true,
        () => { },
        { isWaitingAfterCountDownEnd: false, waitingAfterCountDownEndSeconds: 0 },
    );


    console.log(diff);
    console.log(currentStep);
    console.log(countdown);
    console.log("addres",query.get("address"));



    const claim = query.get("claim");
    return (
        <div>
            {currentStep === 1 ? <EventEarly /> : null}
            {currentStep === 3 || currentStep === 2 ? <div className="flex flex-col relative max-w-[500px] select-none mx-auto">
                <div className="flex flex-row fixed top-0 max-w-[500px] w-full bg-[#FBFBFD] justify-between py-4 px-4 z-10">
                    <img onClick={() => { FiToken.postMessage(JSON.stringify({ type: "back" })) }} className="cursor-pointer" src="/assets/back.svg" alt="Back" />
                    <p className="font-medium text-lg">FiCafe Event</p>
                    <img onClick={() => { FiToken.postMessage(JSON.stringify({ type: "close" })) }} className="cursor-pointer" src="/assets/cancel.svg" alt="Cancel" />
                </div>
                <div className="flex flex-col pt-[60px]">
                    <img src="/assets/fi-food-banner.png" alt="Banner" />
                    <div className="flex flex-col px-4">
                        <div className="text-2xl font-medium py-5">
                            <span><span className="text-[#FF8C24]">FREE COFFEE</span> FOR CRYPTO LOVERS! TOTAL PRIZE OF <span className="text-[#FF8C24]">$5,100</span> GIVING AWAY IN 1 WEEK.</span>
                        </div>
                        {currentStep === 2 ?
                            <div className="flex relative">
                                <img src="/assets/banner-countdown.png" />
                                <div className="absolute bottom-[18%] right-[14%] text-white text-[6.5vw] sm:text-[28px]">{`${countdown.hours}:${countdown.minutes}:${countdown.seconds}`}</div>
                            </div> :
                            <div className="flex relative">
                                <img src="/assets/banner-claim.png" />
                                <div className="flex flex-col absolute bottom-[50%] right-[20%] text-black">
                                    <p className="text-xs text-[#8089A9] font-medium">Token claimed</p>
                                    <span className="text-lg text-[#FF8C24] font-medium">{data.rewardTokenCount.afterCurrentDistributeTime}<span className="text-base text-black font-medium">/{data.rewardTokenCount.remainingEventSlots}</span></span>
                                </div>
                            </div>
                        }
                        <div className="h-9" />
                        <p>Fizen envisioned the future of cryptocurrency as a medium of payment and everyone can use their crypto for daily purchasing. We are bringing this future one step closer by building Fizen Wallet - a  crypto super wallet application that allows users to use crypto in a diverse ecosystem of E-Commerce, GameFi, and DeFi. </p>
                        <p className="pt-3">Would you like to join us for a coffee and talk about this vision?</p>
                        <span className="pt-3">
                            <span className="font-medium">
                                {"Claim your free  "}
                                <img className="inline" src="/assets/fi-logo.svg" alt="logo-fi" />
                                {" FiCafe Token "}
                            </span>
                            to buy coffee at <span className="text-black">Starbucks</span> or <span className="text-black">{"Costa Coffee "}</span>
                            NOW! Coffee and gas fees are on us!
                        </span>
                        <div className="h-6" />
                        {claim == "false" && currentStep===3  ? query.get("address") == "null" ? <button onClick={() => { FiToken.postMessage(JSON.stringify({ type: "setup_wallet" })) }} className="w-full bg-[#500EC1] h-[44px] rounded-3xl text-white font-medium text-center items-center justify-center flex">
                            <span>Claim  <img className="inline" src="/assets/fi-logo.svg" alt="logo-fi" /> 10 FiCafe tokens</span>
                        </button> : <Link to={`/captcha?accountName=${query.get("accountName")}&address=${query.get("address")}`} className="w-full bg-[#500EC1] h-[44px] rounded-3xl text-white font-medium text-center items-center justify-center flex">
                            <span>Claim  <img className="inline" src="/assets/fi-logo.svg" alt="logo-fi" /> 10 FiCafe tokens</span>
                        </Link> : <button className="w-full bg-[#8089A9] h-[44px] rounded-3xl text-white font-medium text-center items-center justify-center flex">
                            <span>Claim  <img className="inline" src="/assets/fi-logo.svg" alt="logo-fi" /> 10 FiCafe tokens</span>
                        </button>}
                        <div className="h-10" />
                        <div className="flex w-full items-center justify-center">
                            <img className="w-[216px] h-[204px] " src="/assets/coffee.png" alt="Coffee" />
                        </div>
                        <div className="h-9" />
                        <p className="text-xs text-[#8089A9]">Terms & Conditions Apply</p>
                        <div className="h-[2px]" />
                        <p className="text-base font-medium">Here’s How you can enjoy this Coffee deal:</p>
                        <div className="h-3" />
                        <div className="flex flex-row">
                            <div className="px-2">•</div>
                            <span> <span className="font-bold">Step 1: </span>
                                <span>Create/Import a wallet</span></span>
                        </div>
                        <div className="h-3" />
                        <div className="flex flex-row">
                            <div className="px-2">•</div>
                            <span> <span className="font-bold">Step 2: </span>
                                <span>Click FiCafe Token to claim. Users can start to claim their token at <span class="text-[#FF8C24]">2:00 AM <span className="font-normal text-black"> and </span>2:00 PM UTC time</span>. Each person can only claim the token once during the program. </span></span>
                        </div>
                        <div className="h-3" />
                        <div className="flex flex-row">
                            <div className="px-2">•</div>
                            <span>
                                <span className="font-bold">Step 3: </span>
                                <span>Go to the Giftcard section in the app and use the claimed FiCafe tokens to purchase gift cards from <span className="font-medium">Starbucks</span> or <span className="font-medium">Costa Coffee</span>.</span>
                            </span>
                        </div>
                        <div className="h-3" />
                        <div className="flex flex-row">
                            <div className="px-2">•</div>
                            <span>
                                <span className="font-bold">Step 4: </span>
                                <span>Use your gift card to place orders at any <span className="font-medium">Starbucks</span> or <span className="font-medium">Costa Coffee stores</span>. To redeem the eGift Card in UAE, its mandate is to download the YoUGotaGift App from Play Store or App Store and add the eGift Card to the app wallet to use In-App Redemption with a secure PIN</span>
                            </span>
                        </div>
                        <div className="h-3" />
                        <div className="flex flex-row">
                            <div className="px-2">•</div>
                            <span>
                                <span className="font-bold">Step 5: </span>
                                <span>Take a selfie with your coffee or a picture of your phone showing the Fizen wallet in the coffee shop, post it on social and tag us with the hashtag <span className="text-[#FF8C24]">#FizenCoffeeWeek #Fizen #CryptoCoffee</span> to stand a chance of winning a <span className="text-[#FF8C24]">$1,100</span> prize at our Social Campaign! </span>
                                <div className="h-3" />
                                <div onClick={() => { window.open("https://t.me/fizen_io"); }} className="flex flex-row justify-between cursor-pointer px-3 py-[10px] bg-[#26A5E4]/[0.1] rounded-[4px]">
                                    <div className="flex flex-row">
                                        <img src="/assets/telegram.svg" alt="Telegram" />
                                        <div className="w-3" />
                                        <p>fizen_io</p>
                                    </div>
                                    <img src="/assets/forward.svg" alt="Forward" />
                                </div>
                            </span>
                        </div>
                        <div className="h-6" />
                        <div className="h-[1px] w-full bg-[#EDECF3]" />
                        <div className="h-6" />
                        <div className="flex flex-row items-start gap-[6px]">
                            <img src="/assets/star.svg" />
                            <span>
                                <span className="font-semibold"> 01 Lucky Post: </span>
                                <span>300 USDT + 500 Fi Token (worth $125) + IDO Whitelist slot</span>
                            </span>
                        </div>
                        <div className="flex flex-row items-start gap-[6px]">
                            <img src="/assets/star.svg" />
                            <span>
                                <span className="font-semibold"> 03 Most Liked Posts:</span>
                                <span>100 USDT + 500 Fi Tokens (worth $125) + IDO Whitelist slot</span>
                            </span>
                        </div>

                        <div className="h-3" />
                        <p>Entities must be received by <span className="font-semibold">11:59 PM UTC</span> on <span className="font-semibold">July 19</span>. The lucky winner will be chosen at random. Post entries must be public.</p>
                        <div className="h-6" />
                        <div className="h-[1px] w-full bg-[#EDECF3]" />
                        <div className="h-6" />
                        <span>
                            <span className="font-bold">Fizen Coffee Week Promo Period: </span>
                            <span>12 Jul – 19 Jul</span>
                        </span>
                        <div className="h-2" />
                        <span>
                            <span className="font-bold">Promo Value: </span>
                            <span>10 FiCafe tokens (1 FiCafe token = $1.00) </span>
                        </span>
                        <div className="h-2" />
                        <p className="font-bold">Terms & Conditions: </p>
                        <div className="h-1" />
                        <div className="flex flex-col pl-5">
                            <div className="flex flex-row">
                                <div className="pl-1 pr-2">•</div>
                                <span>Valid for <span className="font-semibold">Starbucks</span> and  <span className="font-semibold">Costa Coffee ONLY.</span></span>
                            </div>
                            <div className="h-3" />
                            <div className="flex flex-row">
                                <div className="pl-1 pr-2">•</div>
                                <p>Currently available in all Starbucks or Costa Coffee stores within Vietnam, US and UAE.</p>
                            </div>
                            <div className="h-3" />
                            <div className="flex flex-row">
                                <div className="pl-1 pr-2">•</div>
                                <p>Each person can only claim the token once during the program. <span className="font-semibold">Limited to 500 token claims per day.</span></p>
                            </div>
                            <div className="h-3" />
                            <div className="flex flex-row">
                                <div className="pl-1 pr-2">•</div>
                                <p>Limited quantity ONLY. The deal may end sooner than expected. When the deal ends, unused FiCafe tokens will expire and can not be used to purchase gift cards.</p>
                            </div>
                            <div className="h-3" />
                            <div className="flex flex-row">
                                <div className="pl-1 pr-2">•</div>
                                <p>Fizen reserves the right to alter, extend or terminate the deal, or amend the terms and conditions at its sole discretion at any time without prior notice. In case of any disputes directly or indirectly arising from the deal, the decision of Fizen shall be final.</p>
                            </div>
                        </div>
                        <div className="h-10" />
                        <p className="font-semibold">Share</p>
                        <div className="h-[6px]" />
                        <div className="flex flex-col py-[18px] px-4 bg-[#F6F7FB] rounded-[6px]">
                            <div onClick={() => { window.open("https://twitter.com/Fizen_CryptoApp"); }} className="flex flex-row justify-between cursor-pointer">
                                <div className="flex flex-row">
                                    <img src="/assets/twitter.svg" alt="Twitter" />
                                    <div className="w-3" />
                                    <p className="text-[#5D5FEF] text-[13px] underline">@Fizen_CryptoApp</p>
                                </div>
                                <img src="/assets/forward.svg" alt="Forward" />
                            </div>
                            <div className="h-[1px] bg-[#EDECF3] ml-9 my-3" />
                            <div onClick={() => { window.open("https://t.me/fizen_io"); }} className="flex flex-row justify-between cursor-pointer">
                                <div className="flex flex-row">
                                    <img src="/assets/telegram.svg" alt="Telegram" />
                                    <div className="w-3" />
                                    <p className="text-[#5D5FEF] text-[13px] underline">t.me/fizen_io</p>
                                </div>
                                <img src="/assets/forward.svg" alt="Forward" />
                            </div>
                            <div className="h-[1px] bg-[#EDECF3] ml-9 my-3" />
                            <div onClick={() => { window.open("https://www.linkedin.com/company/fizen-io/mycompany/"); }} className="flex flex-row justify-between cursor-pointer">
                                <div className="flex flex-row">
                                    <img src="/assets/linkedin.svg" alt="Linked In" />
                                    <div className="w-3" />
                                    <p className="text-[#5D5FEF] text-[13px] underline">linkedin/Fizen</p>
                                </div>
                                <img src="/assets/forward.svg" alt="Forward" />
                            </div>
                            <div className="h-[1px] bg-[#EDECF3] ml-9 my-3" />
                            <div onClick={() => { window.open("https://www.facebook.com/fizenio"); }} className="flex flex-row justify-between cursor-pointer">
                                <div className="flex flex-row">
                                    <img src="/assets/fb.svg" alt="Linked In" />
                                    <div className="w-3" />
                                    <p className="text-[#5D5FEF] text-[13px] underline">facebook.com/fizenio</p>
                                </div>
                                <img src="/assets/forward.svg" alt="Forward" />
                            </div>
                            <div className="h-[1px] bg-[#EDECF3] ml-9 my-3" />
                            <div onClick={() => { window.open("https://www.instagram.com/fizen.io/"); }} className="flex flex-row justify-between cursor-pointer">
                                <div className="flex flex-row">
                                    <img src="/assets/insta.svg" alt="Linked In" />
                                    <div className="w-3" />
                                    <p className="text-[#5D5FEF] text-[13px] underline">Instagram/fizen.io/</p>
                                </div>
                                <img src="/assets/forward.svg" alt="Forward" />
                            </div>
                        </div>
                        <div className="h-10" />
                    </div>
                </div>
            </div> : null}
            {currentStep === 4 ? <EventEnd /> : null}
        </div>
    );
}

export default Home;


