import React from "react"
import Image from "next/image"

const RevenueModel: React.FC = () => {
    return (
        <div className="bg-cards bg-[url('/3Tokens/white-circle.png')] bg-no-repeat inset-0 px-14 text-white">
            <div className="text-center">
                <h5 className="DM-mono font-medium uppercase text-lg opacity-60">CRAFTED FOR SUSTAINBLE TOKEN VALUE CREATION</h5>
                <h2 className="ClashDisplay text-[48px] leading-[52px] mt-[6px]">Token Revenue Model</h2>
            </div>
            <div className="w-[80%] mt-6 text-center mx-auto">
                <h6 className="DM-mono text-base font-light">Users control their data and earn through agent facilitated transactions, while businesses access high-quality, user-consented information. The staked data and commission-based model generates revenue and drives consistent buy pressure for the 3Token (3NS).</h6>
            </div>
            <div className="flex justify-center gap-7 pt-20">
                {/* Card 1 */}
                <div className="flex revenue-card flex-col justify-between w-[348px] bg-[#171717] py-7 px-11 rounded-xl gap-9">
                    <h5 className="DM-mono text-lg font-medium uppercase opacity-50">Staked</h5>
                    <div>
                        <h3 className="text-2xl font-bold pb-3">Secure Staking</h3>
                        <h4 className="DM-mono text-base font-light leading-[26px]">Staked 3Tokens facilitate agent intelligence trading pools, data storage, and model execution</h4>
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
                    <h5 className="DM-mono text-lg font-medium uppercase opacity-50">REWARD</h5>
                    <div>
                        <h3 className="text-2xl font-bold pb-3">Agent Incentivization</h3>
                        <h4 className="DM-mono text-base font-light leading-[26px]">3Token incentivizes agent training, rewarding  developers, AI-model providers and compute resources.</h4>
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
                    <h5 className="DM-mono text-lg font-medium uppercase opacity-50">EARN</h5>
                    <div>
                        <h3 className="text-2xl font-bold pb-3">Digital Asset Trading</h3>
                        <h4 className="DM-mono text-base font-light leading-[26px]">3Token facilitates fee payments for AI models, leasing agent capabilities,  and agent tooling.</h4>
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

export default RevenueModel