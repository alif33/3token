import React from "react"
import Image from "next/image"

const Divider: React.FC = () => {
 
    return (
       <div className="flex justify-center py-[64px]">
         <Image
            height={202}
            width={1248}
            src="/3Tokens/divider.png"
            alt="Divider between sections"
         />
       </div>
    );
}

export default Divider