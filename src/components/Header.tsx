import React from "react"
import Image from "next/image"
import Link from "next/link";

const Header: React.FC = () => {
 
    return (
       <div className="flex items-center justify-between px-14 pt-7 text-white">
            <div>
                <Image
                 height={67}
                 width={55}
                 src="/logo.png"
                 alt="site logo"
                />
            </div>
            <div className="hidden md:block">
                <ul className="fira-mono font-medium flex items-center gap-9">
                    <li><a className="px-5" href="#About">About</a></li>
                    <li><a className="px-5" href="#3Token">3Token</a></li>
                    <li><a className="px-5" href="#NameStack">Name Stack</a></li>
                    <li><a className="px-5" href="#Tokenomics">Tokenomics</a></li>
                    <li><a className="px-5" href="#Team">Team</a></li>
                    <li><a className="px-5" href="#Roadmap">Roadmap</a></li>
                </ul>
            </div>
       </div>
    );
}

export default Header