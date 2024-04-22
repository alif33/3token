import React from "react"
import Image from "next/image"

const Team: React.FC = () => {
 
    return (
        <div id="Team" className="relative text-white px-14">
            <div className="absolute top-2 right-0">
                <Image
                    width={995}
                    height={142}
                    src="/3Tokens/our-team.png"
                    alt="Our team text"
                />
            </div>
            {/* className="bg-[url('/3Tokens/our-team.png')] bg-custom-bg bg-no-repeat bg-cover inset-0" */}
            <div>
                <h1 className="ClashDisplay text-[48px] leading-[52px]">Our Team</h1>
                <div className="w-full md:w-[35%] py-7">
                    <h5 className="DM-mono text-base font-light">We have been working on the solution since late 2022 and are led by Ashley Turing (lead AI/Web3 engineer), Dr. Jamie Ward, (distinguished Machine Learning lecturer from University of London, UK) and Ismail Malik, (Web3/AI thought leader) and team of 75+ researchers</h5>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="w-[296px] h-[386px] border border-[#282828] rounded-xl">
                    <Image
                        height={287}
                        width={309}
                        src="/3Tokens/team/first.png"
                        className="rounded-tl-xl rounded-tr-xl"
                        alt="Team member"
                    />
                    <div className="p-3">
                        <h2 className="font-actor text-[25px]">Ismail Malik</h2>
                        <h3 className="DM-mono text-[17px] text-[#9D9FA1] font-medium">Web3 and Operation</h3>
                    </div>
                </div>
                <div className="w-[296px] h-[386px] border border-[#282828] rounded-xl">
                    <Image
                        height={287}
                        width={309}
                        src="/3Tokens/team/second.png"
                        className="rounded-tl-xl rounded-tr-xl"
                        alt="Team member"
                    />
                    <div className="p-3">
                        <h2 className="font-actor text-[25px]">Ashley Turing</h2>
                        <h3 className="DM-mono text-[17px] text-[#9D9FA1] font-medium">Lead Engineer and Tech</h3>
                    </div>
                </div>
                <div className="w-[296px] h-[386px] border border-[#282828] rounded-xl">
                    <Image
                        height={287}
                        width={309}
                        src="/3Tokens/team/third.png"
                        className="rounded-tl-xl rounded-tr-xl"
                        alt="Team member"
                    />
                    <div className="p-3">
                        <h2 className="font-actor text-[25px]">Dr. Jamie Ward</h2>
                        <h3 className="DM-mono text-[17px] text-[#9D9FA1] font-medium">Machine Learning Lecturer at Goldsmith University</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team