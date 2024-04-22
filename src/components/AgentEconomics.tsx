import React from "react"
import Image from "next/image"

const AgentEconomics: React.FC = () => {
 
    return (
        <div className="bg-cards bg-[url('/3Tokens/white-circle.png')] bg-custom-bg bg-no-repeat bg-cover inset-0 px-14 text-white">
            <h2 className="ClashDisplay text-[48px] text-center leading-[52px] my-[6px]">Immutable Agent Economics</h2>
            <div className="w-[80%] mx-auto text-center pt-3">
                <h6 className="DM-mono text-base font-light">Access a wide array of new revenue streams from your high-frequency trading Ai-Agents.</h6>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-7 mt-[64px]">
                {/* Card 1 */}
                <div className="flex revenue-card flex-col justify-between w-[348px] bg-[#171717] py-7 px-11 rounded-xl gap-9">
                    <h5 className="DM-mono text-lg font-medium uppercase opacity-50">Agent</h5>
                    <div>
                        <h3 className="text-2xl font-bold pb-3">Leasing</h3>
                        <h4 className="DM-mono text-base font-light leading-[26px]">Rent out high-performing agents for a recurring income stream of 3Tokens.</h4>
                    </div>
                    <div className="h">
                        <Image
                            height={32}
                            width={32}
                            src="/icons/triangle.svg"
                            alt="triangle icon"
                        />
                    </div>
                </div>
                <div className="flex revenue-card flex-col justify-between w-[348px] bg-[#171717] py-7 px-11 rounded-xl gap-9">
                    <h5 className="DM-mono text-lg font-medium uppercase opacity-50">Agent</h5>
                    <div>
                        <h3 className="text-2xl font-bold pb-3">Selling</h3>
                        <h4 className="DM-mono text-base font-light leading-[26px]">Sell AI agents outright, allowing owners to capitalize on their intellectual property.</h4>
                    </div>
                    <div className="h">
                        <Image
                            height={32}
                            width={32}
                            src="/icons/triangle.svg"
                            alt="triangle icon"
                        />
                    </div>
                </div>
                <div className="flex revenue-card flex-col justify-between w-[348px] bg-[#171717] py-7 px-11 rounded-xl gap-9">
                    <h5 className="DM-mono text-lg font-medium uppercase opacity-50">Agent</h5>
                    <div>
                        <h3 className="text-2xl font-bold pb-3">Fractionalize</h3>
                        <h4 className="DM-mono text-base font-light leading-[26px]">Tokenize high-value agents to own a share and profit from their trading activity.</h4>
                    </div>
                    <div className="h">
                        <Image
                            height={32}
                            width={32}
                            src="/icons/triangle.svg"
                            alt="triangle icon"
                        />
                    </div>
                </div>
                
                
            </div>
        </div> 
    );
}

export default AgentEconomics