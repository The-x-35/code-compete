import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, isOpen: true }));
	};
	return (
		<div className='flex items-center justify-between sm:px-12 px-2 md:px-24 bg-black'>
			<Link href='/' className='flex items-center justify-center h-20'>
				<Image src='/logo.png' alt='logo' height={100} width={100} />
				<span className="text-white text-lg ml-2 mt-2 font-semibold">Code Compete by Arpit</span>
			</Link>
			<div className='flex items-center'>
			<div className="relative hidden md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
             
				<button
					className= "relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
					onClick={handleClick}
				>
					Sign In
				</button>
				</div>
			
			</div>
		</div>
	);
};
export default Navbar;
