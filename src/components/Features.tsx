import React from "react"
import Image from "next/image"

const Features: React.FC = () => {

    return (
        <div className="text-white py-5">
            <div className="bg-[url('/3Tokens/unique.png')] bg-custom-bg bg-no-repeat bg-cover inset-0 mb-14">
                <h1 className="ClashDisplay text-[48px] text-center leading-[52px] my-[6px]">Features</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                {/* Card 1 */}
                <div className="relative w-[324px] h-[284px]">
                    <Image
                        height={64}
                        width={64}
                        className="absolute -top-3 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                        src="/3Tokens/api.png"
                        alt="figure icon"
                    />
                    <h2 className="DM-mono text-center text-[24px] pb-[6px] pt-[6px]">Agent Intelligence Pools (AIPs)</h2>
                    <h5 className="DM-mono text-center opacity-80 leading-6"> 3Tokens are used to access specialized pools of resources and intelligence, known as Agent Intelligence Pools. These pools allow for the sharing and leveraging of AI models and trading strategies.</h5>
                </div>
                {/* Card 2 */}
                <div className="relative w-[324px] h-[284px]">
                    <Image
                        height={64}
                        width={64}
                        className="absolute -top-3 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                        src="/3Tokens/dynamic.png"
                        alt="figure icon"
                    />
                    <h2 className="DM-mono text-center text-[24px] pb-[6px] pt-[6px]">Dynamic Fee Arbitrage</h2>
                    <h5 className="DM-mono text-center opacity-80 leading-6">3Token employs a dynamic fee structure tailored to high-frequency trading environments, arbitraging cross-chain demand and congestion to ensure efficient and cost-effective transactions.</h5>
                </div>
                {/* Card 3 */}
                <div className="relative w-[324px] h-[284px]">
                    <Image
                        height={64}
                        width={64}
                        className="absolute -top-3 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                        src="/3Tokens/fuel.png"
                        alt="figure icon"
                    />
                    <h2 className="DM-mono text-center text-[24px] pb-[6px] pt-[6px]">Agent fuel</h2>
                    <h5 className="DM-mono text-center opacity-80 leading-6">3Tokens are vital for advancing AI-Agent intelligence, providing access to curated datasets and computational resources essential for training.</h5>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                
                {/* Card 4 */}
                <div className="relative w-[324px] h-[284px]">
                    <Image
                        height={64}
                        width={64}
                        className="absolute -top-3 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                        src="/3Tokens/tools.png"
                        alt="figure icon"
                    />
                    <h2 className="DM-mono text-center text-[24px] pb-[6px] pt-[6px]">Agent Tools marketplace</h2>
                    <h5 className="DM-mono text-center opacity-80 leading-6">3Token facilitates access to a model tools marketplace, accelerating AI-agent development and enhancing capabilities.</h5>
                </div>
                {/* Card 5 */}
                <div className="relative w-[324px] h-[284px]">
                    <Image
                        height={64}
                        width={64}
                        className="absolute -top-6 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                        src="/3Tokens/tasking.png"
                        alt="figure icon"
                    />
                    <h2 className="DM-mono text-center text-[24px] pb-[6px] pt-[6px]">Agent Tasking</h2>
                    <h5 className="DM-mono text-center opacity-80 leading-6">3Tokens are awarded as bounties for specific tasks such as Reinforcement Learning with Human Feedback (RLHF), bug bounties, to boost an agent's reputation and trust in the high-frequency trading environment.</h5>
                </div>
            </div>
        </div>
    );
}

export default Features