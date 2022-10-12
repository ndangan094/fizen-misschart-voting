import React from "react";
import { useNavigate, } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    // const [dateCountDown, setDateCountdown] = useState();
    // const STEP = { early: 1, startEarly: 2, start: 3, end: 4 };
    // const [currentStep, setCurrentStep] = useState();
    // const [data, setData] = useState();
    // const [currentTimeNow, setCurrentTimeNow] = useState(new Date().getTime())
    // const [eventTime, setEventTime] = useState()
    // const [diff, setDiff] = useState();

    // let interval;

    // const setStep = ({ step }) => {
    //     if (currentStep != step) {
    //         setCurrentStep(step);
    //     }
    // }

    // const getData = async () => {
    //    try{
    //        const res = await axios.post("https://dev-api-giftcard.fizen.io/api/reward-token/status", { eventID: "62b3e235b2a83f00076beda3" })
    //        console.log(res.data.data)
    //        setData(res.data.data);
    //        let currentTime = parseInt(new Date().getTime() / 1000);
    //        setCurrentTimeNow(currentTime);
    //        setEventTime(res.data.data.currentDistributeStartTime);
    //        console.log(currentTime);

    //        if (currentTime < res.data.data.eventStartDate ) {
    //            setStep({ step: 1 })
    //        } else if (res.data.data.eventStartDate < currentTime && currentTime < res.data.data.currentDistributeStartTime ) {
    //            console.log("adsad")
    //            setStep({ step: 2 })
    //            setDiff(res.data.data.currentDistributeStartTime - currentTime);
    //        } else if (res.data.data.currentDistributeStartTime < currentTime && currentTime < res.data.data.eventEndDate ) {
    //            if (res.data.data.rewardTokenCount.afterCurrentDistributeTime === res.data.data.rewardTokenCount.remainingEventSlots) {
    //                console.log("cvbj")
    //                setStep({ step: 2 })
    //                setDiff(res.data.data.nextDistributeStartTime - currentTime);
    //            }else{
    //                setStep({ step: 3 })
    //            }
    //        }
    //        else if (currentTime > res.data.data.eventEndDate ) {
    //            setStep({step:4});
    //        }else{
    //            setStep({step:1});

    //        }
    //    }catch (e) {
    //        setStep({step:1});

    //    }

    // }

    // useEffect(() => {
    //     getData();
    //     interval = setInterval(() => {
    //         getData();
    //     }, 5000)
    // }, [])

    // const [countdown] = useCountdown(
    //     diff,
    //     true,
    //     () => { },
    //     { isWaitingAfterCountDownEnd: false, waitingAfterCountDownEndSeconds: 0 },
    // );


    // console.log(diff);
    // console.log(currentStep);
    // console.log(countdown);
    // console.log("addres",query.get("address")); 


    {/* <span className="text-[#FF8C24]">FREE COFFEE</span> */ }

    const claim = query.get("claim");
    return (
        <div className="flex flex-col relative max-w-[500px] select-none mx-auto">
            <div className="flex flex-row fixed top-0 max-w-[500px] w-full bg-[#FBFBFD] justify-between py-4 px-4 z-10">
                <img onClick={() => { FiToken.postMessage(JSON.stringify({ type: "back" })) }} className="cursor-pointer" src="/assets/back.svg" alt="Back" />
                <p className="font-medium text-lg">Fizen.io x Thetan Arena Event</p>
                <img onClick={() => { FiToken.postMessage(JSON.stringify({ type: "close" })) }} className="cursor-pointer" src="/assets/cancel.svg" alt="Cancel" />
            </div>
            <div className="flex flex-col pt-[60px]">
                <div className="flex flex-col px-4">
                    <div className="text-xl font-semibold py-5 ">
                        <span> Fizen.io x Thetan Arena Amazing Check-in Race: Win <span className="text-[#FF8C24]">$5,000</span> Rewards Pool & An <span className="text-[#FF8C24]">iPhone 14</span> Lucky Draw</span>
                    </div>
                    <span className="font-semibold">In order to kick-off our strategic partnership with Thetan Arena, the two parties will work together to distribute a total prize pool of up to $7,000 for Thetan's gaming community.</span>

                </div>
                <div className="h-3" />
                <img src="/assets/fi-food-banner.png" alt="Banner" />
                <div className="h-3" />
                <div className="flex flex-col px-4">
                    <p className="pt-3">Fizen strives to become the leading super wallet app for GameFi by expanding its network with P2E projects and providing different services and experiences globally. A partner we work closely with is Thetan Arena, the world's first blockchain-based MOBA game. As part of this partnership, we will organize a Check-in campaign to distribute FiTan Tokens to Thetan gaming community.</p>
                    <span className="pt-3">
                        Note: FiTan Token is an event-only token that Fizen.io issues to enable users to experience shopping with crypto through the Fizen wallet (gasless transaction). Using our Fizen Super App, FiTan can now be used to shop for <span className="font-semibold">25,000+ products</span> and services at <span className="font-semibold">3,000+ brands</span>  worldwide.
                    </span>
                    <div className="h-6" />
                    <p className="font-medium text-lg">How to join Fizen x Thetan Arena Amazing Check-in Race?</p>
                    <div className="h-5" />
                    <span className=""><span className="font-semibold">Timeline:</span> 12/10 - 04/11</span>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-2">-</div>
                        <span>Event kick-off: 12/10</span>
                    </div>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-2">-</div>
                        <span>Claim FiTan Token: 14/10 - 26/10</span>
                    </div>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-2">-</div>
                        <span>Token Spending Deadline: 31/10</span>
                    </div>
                    <div className="h-3" />
                    <p className="text-base font-semibold">Rewards Structure:</p>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-2">•</div>
                        <span>All users who check in 3 days in a row will receive $2.5 in FiTan Tokens. Rewarded tokens will be distributed to users at 7:00 AM UTC daily.</span>
                    </div>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-2">•</div>
                        <span><span className="font-semibold">Till 23:59 on October 31,</span> users can use their FiTan tokens to purchase gift cards. The leftover FiTan tokens will then all be disabled.</span>
                    </div>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-2">-</div>
                        <span className="font-semibold">For iPhone 14 Pro Max Deep Purple:</span>
                    </div>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-2">•</div>
                        <span>To have a chance at winning an iPhone 14 on <span className="font-semibold">November 4</span>, join the lucky draw program.</span>
                    </div>
                    <div className="h-3" />
                    <div className="flex flex-row">
                        <div className="px-2">•</div>
                        <span>Get Order ID(s) and send order IDs to the official<span onClick={() => { window.open("https://t.me/fizen_io") }} className="text-[#5D5FEF] cursor-pointer"> Telegram of Fizen.io</span> </span>
                    </div>
                </div>
                <div className="h-8" />
                <img src="/assets/banner-step.png" alt="Banner Step" />
                <div className="flex flex-col px-4">
                    <div className="h-6" />
                    <div className="flex flex-row">
                        <div className="px-2"></div>
                        <div className="flex flex-col w-full">
                            <span>Join telegram</span>
                            <div className="flex flex-col py-[10px] mt-[10px] w-full px-4 bg-[#26A5E4]/[.1]  rounded-[6px]">
                                <div onClick={() => { window.open("https://t.me/fizen_io"); }} className="flex flex-row justify-between cursor-pointer">
                                    <div className="flex flex-row">
                                        <img src="/assets/telegram.svg" alt="Linked In" />
                                        <div className="w-3" />
                                        <p>fizen_io</p>
                                    </div>
                                    <img src="/assets/forward.svg" alt="Forward" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-6" />
                    <div className="h-[1px] w-full bg-[#EDECF3]" />
                    <div className="h-6" />
                    <p className="text-xl font-medium">How to use FiTan in Fizen Super App</p>
                    <div className="h-6" />
                    <p className="font-semibold">How to get Order ID</p>
                    <div className="h-3" />
                </div>
                <iframe className="h-[60vw]" src="https://www.youtube.com/embed/BkwYK0ti1FY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="flex flex-col px-4">
                    <div className="h-3" />
                    <p className="text-[#FF8C24]">It's time to push your luck! Jump in!</p>
                    <div className="h-3" />
                    <div className="h-6" />
                    <p className="font-semibold">About Thetan Arena</p>
                    <div className="h-3" />
                    <p>Thetan Arena is a free-to-play play-to-earn mobile game built on the BNB chain. The MOBA game aims not just to be considered an Esports game, but also to connect crypto owners with streamers and gamers. They have a free-to-earn model that allows players to earn Thetan Coins and Thetan Gems by investing time and effort using a free hero, Raidon, instead of investing money to purchase their own heroes</p>
                    <div className="h-3" />
                    <p>More about Thetan Arena: </p>
                    <div className="h-3" />
                    <div className="flex flex-col py-[18px] px-4 bg-[#F6F7FB] rounded-[6px]">
                        <div onClick={() => { window.open("https://twitter.com/ThetanArena"); }} className="flex flex-row justify-between cursor-pointer">
                            <div className="flex flex-row">
                                <img src="/assets/twitter.svg" alt="Twitter" />
                                <div className="w-3" />
                                <p className="text-[#5D5FEF] text-[13px] underline">@ThetanArena</p>
                            </div>
                            <img src="/assets/forward.svg" alt="Forward" />
                        </div>
                        <div className="h-[1px] bg-[#EDECF3] ml-9 my-3" />
                        <div onClick={() => { window.open("https://t.me/thetanarenagroups"); }} className="flex flex-row justify-between cursor-pointer">
                            <div className="flex flex-row">
                                <img src="/assets/telegram.svg" alt="Telegram" />
                                <div className="w-3" />
                                <p className="text-[#5D5FEF] text-[13px] underline">@thetanarenagroups</p>
                            </div>
                            <img src="/assets/forward.svg" alt="Forward" />
                        </div>
                        <div className="h-[1px] bg-[#EDECF3] ml-9 my-3" />
                        <div onClick={() => { window.open("https://discord.com/invite/thetanarena"); }} className="flex flex-row justify-between cursor-pointer">
                            <div className="flex flex-row">
                                <img src="/assets/discord.svg" alt="Linked In" />
                                <div className="w-3" />
                                <p className="text-[#5D5FEF] text-[13px]">Discord</p>
                            </div>
                            <img src="/assets/forward.svg" alt="Forward" />
                        </div>
                    </div>
                    <div className="h-6" />
                    <div className="h-[1px] w-full bg-[#EDECF3]" />
                    <div className="h-6" />
                    <p className="font-semibold">About Fizen</p>
                    <div className="h-3" />
                    <p>Fizen.io is an all-in-one crypto payment solution with an ambition to bridge the gap between traditional finance and complex, expanding decentralized finance by providing a user-friendly and seamless experience.</p>
                    <div className="h-3" />
                    <p>- Fizen Crypto Super App: A cryptocurrency super wallet application that allows users to use crypto in a diverse ecosystem of E-Commerce, NFTs, GameFi, and DeFi.</p>
                    <div className="h-3" />
                    <p>- Fizen Pay: A Payment Gateway is linked with many merchants globally, making it easy for users to make payments with crypto.</p>
                    <div className="h-3" />
                    <div className="h-[6px]" />
                    <div className="flex flex-col py-[18px] px-4 bg-[#F6F7FB] rounded-[6px]">
                        <div onClick={() => { window.open("https://twitter.com/fizenwallet"); }} className="flex flex-row justify-between cursor-pointer">
                            <div className="flex flex-row">
                                <img src="/assets/twitter.svg" alt="Twitter" />
                                <div className="w-3" />
                                <p className="text-[#5D5FEF] text-[13px] underline">@fizenwallet</p>
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
                        <div onClick={() => { window.open("https://www.youtube.com/channel/UCgW8WweY3KEuDkmXAHoA_OQ"); }} className="flex flex-row justify-between cursor-pointer">
                            <div className="flex flex-row">
                                <img className="w-6" src="/assets/youtube.svg" alt="Linked In" />
                                <div className="w-3" />
                                <p className="text-[#5D5FEF] text-[13px] underline">Fizen - Super App for Crypto Spending</p>
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
        </div>
    );
}

export default Home;


