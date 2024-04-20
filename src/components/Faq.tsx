"use client"
import React, { useState } from "react"
import Image from "next/image"

interface FaqItem {
    index: number
    size: number
    title: string
    description: string,
    handleOpen: (e: number)=> void,
    isOpen: number
}

const Faq:React.FC<FaqItem> = ({ index, size, title, description, isOpen, handleOpen })=>{
    // const [isOpen, setIsOpen] = useState<number>(size)

    // const handleOpen = (ind: number)=>{        
    //     ind!==isOpen? setIsOpen(ind):  setIsOpen(size)
    // }

    return(
        <li className="pt-14" key={index}>
            <div className="flex justify-between">
                <h1 className="DM-mono text-base font-light">{title}</h1>
                <span onClick={()=>handleOpen(index)} className="cursor-pointer">
                    <Image
                        height={48}
                        width={48}
                        src="/icons/arrow-down.svg"
                        alt="arrow down"
                    />
                </span>
            </div>
            <hr className="border border-[#ACABAB]" />
            {index===isOpen && <div className="DM-mono text-base font-light" dangerouslySetInnerHTML={{ __html: description }}></div>}
        </li>
    )
}

export default Faq