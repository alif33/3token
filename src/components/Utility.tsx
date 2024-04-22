import React from "react"
import Image from "next/image"

const Utility: React.FC = () => {
 
    return (
        <div id="3Token" className="text-white px-10">
            <div className="w-[60%] text-center mx-auto">
                <h5 className="DM-mono font-medium uppercase text-lg opacity-60">3NS.AI TASK-BASED DePIN tierED ARCHITECTURE</h5>
                <h2 className="ClashDisplay text-[48px] leading-[52px] my-[6px]">3Token Utility</h2>
                <h5 className="DM-mono text-base font-light">The 3Token provides agent-powered automated high-frequency trading by facilitating transactions, incentivizing AI model contributions, and ensuring governance across all tiers.</h5>
            </div>
            {/* Single one */}
            <div className="flex justify-center pt-12">
                {/* Card 1 */}
                <div className="bg-[#1E1E1E] bg-[url('/3Tokens/hexa.png')] bg-no-repeat bg-cover inset-0 z-50 w-[336px] h-[350px] text-white p-5 rounded-3xl">
                    <h1 className="fira-code text-[28px] text-2xl font-bold">Tier 1: Agent</h1>
                    <ol className="DM-mono flex flex-col text-base leading-6  list-decimal list-inside mt-7 gap-[6px]">
                        <li>Modularized Models (Lego Bricks): Equips agents with flexible choice of models.</li>
                        <li>Agent-Tools Marketplace: A central hub for exchanging and acquiring new agent capabilities.</li>
                        <li>Immutable Agents: Ensures integrity and consistency of agent prompts across operations.</li>
                    </ol>
                </div>
            </div>
            {/* Multiple */}

            <div className="flex flex-col lg:flex-row justify-center items-center pt-14 gap-7">
                {/* Card 2 */}
                <div className="bg-[#1E1E1E] bg-[url('/3Tokens/hexa.png')] bg-no-repeat bg-cover inset-0 z-50 w-[336px] h-[350px] text-white p-5 rounded-3xl">
                    <h1 className="fira-code text-[28px] text-2xl font-bold">Tier 0: Data</h1>
                    <ol className="DM-mono flex flex-col text-base leading-6  list-decimal list-inside mt-7 gap-[6px]">
                        <li>Decentralized Storage Choice: immutable storage (Ocean, Storj, IPFS)</li>
                        <li>ZK Privacy-Enabled Storage: Maintains user privacy with zero-knowledge proofs</li>
                        <li>Universal Compute: Enables scalable compute, adaptable to any hardware or GPU setup</li>
                    </ol>
                </div>
                <div className="relative min-w-[200px] min-h-[170px]">
                    <Image
                        width={200}
                        height={170}
                        className="absolute -top-8"
                        src="/3Tokens/navigator.png"
                        alt="Line navigator"
                    />
                </div>
                {/* Card 3 */}
                <div className="bg-[#1E1E1E] bg-[url('/3Tokens/hexa.png')] bg-no-repeat bg-cover inset-0 z-50 w-[336px] h-[350px] text-white p-5 rounded-3xl">
                    <h1 className="fira-code text-[28px] text-2xl font-bold">Tier 2: Interface</h1>
                    <ol className="DM-mono flex flex-col text-base leading-6  list-decimal list-inside mt-7 gap-[6px]">
                        <li>Domain Management (.eth, .btc, .farcaster): Combine all Web3 naming services.</li>
                        <li>Public/Private Key 3 Factor Protocol: prevents fake assets and trade signals.</li>
                        <li>Seamless Web2 to Web3 Migration: New .web3 top-level-domain (TLD) launching</li>
                    </ol>
                </div>
            </div>

        </div>
    );
}

export default Utility