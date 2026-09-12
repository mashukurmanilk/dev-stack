import Logo from '../assets/logo-text.png'
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
  return (
    <div className="w-full border-b border-gray-200 px-6 sm:px-12 py-3">
        <nav className="max-w-7xl mx-auto flex items-center justify-between relative">
            
            {/*Hamburger menu (mobile) or Logo (desktop) */}
            <div className="flex items-center">
                <button className="md:hidden">
                    <RxHamburgerMenu
                        size="1.75rem"
                    />
                </button>
                <img className="hidden md:block w-[98.4px] h-7 zoom-120" src={Logo} alt="logo"/>
            </div>

            {/*Logo (mobile) or Links (desktop) */}
            <div className="absolute max-w-full h-auto left-1/2 -translate-x-10/12 translate-y-1/12 md:static md:translate-x-0">
                <img className="md:hidden w-[98.4px] h-7" src={Logo} alt="logo"/>
                <ul className="hidden md:flex gap-6 items-center">
                    <li className="text-[#DB2777] text-sm font-medium cursor-pointer">Home</li>
                    <li className="text-neutral-500 text-sm font-medium cursor-pointer">Technologies</li>
                    <li className="text-neutral-500 text-sm font-medium cursor-pointer">Projects</li>
                    <li className="text-neutral-500 text-sm font-medium cursor-pointer">About</li>
                    <li className="text-neutral-500 text-sm font-medium cursor-pointer">Contact</li>
                </ul>
            </div>

            {/*Buttons */}
            <div className="flex items-center gap-1 sm:gap-3">
                <button className="btn btn-ghost btn-sm md:btn-md rounded-full text-xs sm:text-sm">Sign In</button>
                <button className="btn btn-secondary btn-sm md:btn-md rounded-full text-xs sm:text-sm">Sign Up</button>
            </div>
        </nav>
    </div>
  )
}
