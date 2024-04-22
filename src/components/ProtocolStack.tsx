import React from "react"
import Image from "next/image"

const ProtocolStack: React.FC = () => {
 
    return (
        <div id="NameStack" className="text-white">
            <div className="text-center">
                <h2 className="ClashDisplay text-[48px] leading-[52px] my-[6px]">3Token Protocol Stack</h2>
                <h5 className="DM-mono text-base font-light">NOTE: Layer 3 is expect in Q1 2025</h5>
            </div>
            <div className="flex justify-center mt-6">
                <Image
                    width={430}
                    height={787}
                    src="/3Tokens/protocol-stack.png"
                    alt="protocol stack"
                />
            </div>
        </div>
    );
}

export default ProtocolStack