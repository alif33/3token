import React from "react"
import Image from "next/image"
import Link from "next/link"

const Edge: React.FC = () => {
 
    return (
       <div id="About" className="relative flex flex-col md:flex-row items-center justify-between  text-white px-20 md:px-0 md:pl-20">
            <div className="absolute top-1 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                    height={500}
                    width={800}
                    src="/3Tokens/about.svg"
                    alt=""
                />
            </div>
            <div className="w-full md:w-[60%] pt-28">
                {/* [length:505px_184px] */}
                {/* <div className="bg-[url('/3Tokens/about.svg')] bg-cover bg-no-repeat inset-0"> */}
                    <h3 className="DM-mono font-medium uppercase text-lg opacity-60">OUR EDGE: </h3>
                    <h2 className="ClashDisplay text-[48px] leading-[52px] my-[6px]">Agent &nbsp;trading &nbsp;for <br /> named &nbsp;digital &nbsp;assets</h2>
                {/* </div> */}
               
                <h5 className="fira-mono text-lg opacity-60">Backed by Polkadot Web3 Foundation</h5>

                <div className="text-base DM-mono pt-6">
                    <p className="font-light">3NS.AI is a paradigm shift in how AI agents can be developed, deployed, and monetized within the context of high-frequency trading (HFT) of digital assets.</p>
                    <p className="py-5 font-light">We’re redefining how individuals and smaller institutions gain access to HFT for digital assets.</p>
                    <p className="font-light">We're the first Substrate for decentralized agents to be backed by Polkadot and funded by their <a className="underline" href="https://github.com/w3f/Grant-Milestone-Delivery/pull/1079#issuecomment-1874291680" target="_blank">Web3 Foundation</a>, along with Worldcoin (OpenAI) and Stacks (Bitcoin’s leading L2).</p>
                </div>
            </div>
           <div className="hidden md:block min-w-[500px] edge-right">
           </div>
       </div>
    );
}

export default Edge