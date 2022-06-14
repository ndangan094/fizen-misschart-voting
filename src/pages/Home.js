import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);


    const [claim, setClaim] = useState(query.get("claim"));
    return (
        <div className="flex flex-col relative max-w-[500px] select-none  mx-auto">
            <div className="flex flex-row fixed top-0 max-w-[500px] w-full bg-white justify-between py-5 px-4">
                <img onClick={() => navigate(-1)} className="cursor-pointer" src="/assets/back.svg" alt="Back" />
                <p className="font-medium text-lg">FiCafe Event</p>
                <img onClick={()=>{FiToken.postMessage({type:"close"})}} className="cursor-pointer" src="/assets/cancel.svg" alt="Cancel" />
            </div>
            <div className="flex flex-col pt-[68px]">
                <img src="/assets/fi-food-banner.png" alt="Banner" />
                <div className="flex flex-col px-4">
                    <div className="text-2xl font-semibold py-5">
                        <p>FREE COFFEE</p>
                        <p>FOR CRYPTO LOVERS!</p>
                    </div>
                    <p>Fizen envisioned the future of cryptocurrency as a medium of payment and everyone can use their crypto for daily purchasing. We are bringing this future one step closer by building Fizen Wallet - a  crypto super wallet application that allows users to use crypto in a diverse ecosystem of E-Commerce, GameFi, and DeFi. </p>
                    <p className="pt-3">Would you like to join us for a coffee and talk about this vision?</p>
                    <span className="pt-3">
                        {"Claim your free  "}
                        <span className="text-[#fd8031]">
                            <img className="inline" src="/assets/fi-logo.svg" alt="logo-fi" />
                            {" FiCafe Token "}
                        </span>
                        to buy coffee at <span className="text-[#fd8031]">Starbucks</span> or <span className="text-[#fd8031]">{"The Coffee Bean & Tea Leaf "}</span>
                        NOW! Coffee and gas fees are on us!
                    </span>
                    <div className="h-6" />
                    {claim == "true" ? <button className="w-full bg-[#8089A9] h-[44px] rounded-3xl text-white font-medium text-center items-center justify-center flex">
                        <span>Claim  <img className="inline" src="/assets/fi-logo.svg" alt="logo-fi" /> 10 FiCafe tokens</span>
                    </button> : <Link to={`/captcha?accountName=${ query.get("accountName")}&address=${ query.get("address")}`} className="w-full bg-[#500EC1] h-[44px] rounded-3xl text-white font-medium text-center items-center justify-center flex">
                        <span>Claim  <img className="inline" src="/assets/fi-logo.svg" alt="logo-fi" /> 10 FiCafe tokens</span>
                    </Link>}
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
                        <div className="px-1">•</div>
                        <span> <span className="font-bold">Step 1: </span>
                            <span>Create/Import a wallet</span></span>
                    </div>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-1">•</div>
                        <span><span className="font-bold">Step 2: </span>
                            <span>Click FiCafe Token to claim</span></span>
                    </div>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-1">•</div>
                        <span>
                            <span className="font-bold">Step 3: </span>
                            <span>Go to the Giftcard section in the app and use the claimed FiCafe tokens to purchase gift cards from Starbucks or The Coffee Bean & Tea Leaf</span>
                        </span>
                    </div>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-1">•</div>
                        <span>
                            <span className="font-bold">Step 4: </span>
                            <span>Use your gift card to place orders at any stores of Starbucks or The Coffee Bean & Tea Leaf</span>
                        </span>
                    </div>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-1">•</div>
                        <span>
                            <span className="font-bold">Step 5: </span>
                            <span>Sit back, enjoy your coffee and ping us on Telegram to talk more</span>
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
                    <span>
                        <span className="font-bold">Promotion Period: </span>
                        <span>4 Jul – 10 Jul</span>
                    </span>
                    <div className="h-2" />
                    <span>
                        <span className="font-bold">Promo Value: </span>
                        <span>10 FiCafe Token (1 FiCafe Token = $1)</span>
                    </span>
                    <div className="h-2" />
                    <p className="font-bold">Terms & Conditions: </p>
                    <div className="h-1" />
                    <div className="flex flex-col pl-5">
                        <div className="flex flex-row">
                            <div className="pl-1 pr-2">•</div>
                            <span>Valid for Starbucks and The Coffee Bean & Tea Leaf <span className="font-semibold">ONLY.</span></span>
                        </div>
                        <div className="h-3" />
                        <div className="flex flex-row">
                            <div className="pl-1 pr-2">•</div>
                            <p>Currently available in all Starbucks or The Coffee Bean & Tea Leaf stores within Philippines, Vietnam, UK and US</p>
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
                    </div>
                    <div className="h-10" />
                </div>
            </div>
        </div>
    );
}

export default Home;
