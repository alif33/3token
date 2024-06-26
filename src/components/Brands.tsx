import React from "react"
import Image from "next/image"

const Brands: React.FC = () => {
 
    return (
       <div className="flex mr-20 md:mr-0 items-center pt-6">
            <Image
                height={300}
                width={580}
                src="/3Tokens/brands.png"
                alt="Divider between sections"
            />
       </div>
    );
}

export default Brands

