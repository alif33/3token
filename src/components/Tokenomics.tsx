import React from "react"
import Image from "next/image"

const Tokenomics: React.FC = () => {

    return (
        <div id="Tokenomics" className="text-white px-14">
            <div className="bg-[url('/3Tokens/tokenomics.png')] bg-custom-bg bg-no-repeat bg-cover inset-0">
                <h2 className="ClashDisplay text-[48px] text-center leading-[52px] py-14">Tokenomics</h2>
            </div>
            <div className="flex justify-center mt-7">
                <Image
                    height={1093}
                    width={802}
                    src="/3Tokens/bg-tokenomics.png"
                    alt="Tokenomics image"
                />
            </div>
        </div>
    );
}

export default Tokenomics