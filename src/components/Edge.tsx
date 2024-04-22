import React from "react"
import Image from "next/image"
import Link from "next/link"

const Edge: React.FC = () => {
 
    return (
       <div id="About" className="relative flex flex-col md:flex-row items-center justify-between  text-white px-5 md:px-0 md:pl-20">
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
                    <h2 className="ClashDisplay text-[48px] leading-[52px] my-[6px]">Ai-Agents</h2>
                    {/* <h2 className="ClashDisplay text-[48px] leading-[52px] my-[6px]">Agent &nbsp;trading &nbsp;for <br /> named &nbsp;digital &nbsp;assets</h2> */}
                {/* </div> */}
               
                <h5 className="fira-mono text-lg opacity-60">Backed by Polkadot Web3 Foundation</h5>

                <div className="text-base DM-mono pt-6">
                    <p className="font-light">3NS.AI provisions a paradigm shift in how AI agents are designed, deployed and monetized.</p>
                    <p className="py-5 font-light">3NS provides a curated selection of smart agents for specific requirements, ranging from DeFi high-frequency trading (HFT) to social sentiment tracking.</p>
                    <p className="font-light">We're the first Substrate for decentralized machine learning (DecentralML) agents to be backed by Polkadot and funded by their <a className="underline" href="https://github.com/w3f/Grant-Milestone-Delivery/pull/1079" target="_blank">Web3 Foundation</a>, along with Worldcoin (OpenAI) and Stacks (Bitcoin’s leading L2).</p>
                </div>
            </div>
           <div className="hidden md:block min-w-[500px] edge-right">
           </div>
       </div>
    );
}

export default Edge