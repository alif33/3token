import React from "react"
import Image from "next/image"

const Hero: React.FC = () => {
 
    return (
        <div>
            <div className="flex justify-between py-0 md:py-9 pl-5 md:pl-20">
                <div className="text-white mt-28">
                    <h4 className="text-lg DM-mono opacity-60">Name Stack for Web3 Agents</h4>
                    <div className="py-6">
                        <h1 className="ClashDisplay text-[55px] leading-[58px]">Web3 Powered by <br className="hidden md:block"/> Smart Agents</h1>
                    </div>
                    <h5 className="text-lg fira-mono opacity-60">Powered by 3Token</h5>
                </div>
                <div className="hidden md:block">
                    <Image
                        height={457}
                        width={462}
                        src="/3Tokens/hero-circle.png"
                        alt="hero circle"
                    />
                </div>
            </div>
            <div>
                <Image
                    height={190}
                    width={1440}
                    src="/3Tokens/line.svg"
                    alt="line shape"
                />
            </div>
        </div>
    );
}

export default Hero