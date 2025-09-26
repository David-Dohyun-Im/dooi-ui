import { Link } from 'react-router-dom'
import { Equal, X } from 'lucide-react'
import React from 'react' 

const menuItems = [
    { name: 'Features', href: './#features' },
    { name: 'Pricing', href: './#pricing' },
    { name: 'Services', href: './#services' },
    { name: 'Updates', href: './changelog' },
    { name: 'Contact', href: './contact' },
]


export const Header = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed left-0 w-full z-20 px-2 bg-white/10 backdrop-blur-sm border-b-2 border-white/20">
                <div className="mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 lg:px-16">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-2">
                        {/* Logo and Menu Button */}
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                to="./#hero"
                                aria-label="home"
                                className="flex items-center">
                                <div className="relative">
                                    <img 
                                        src="https://framerusercontent.com/images/XKwmcGuSwjRsqQwiRhSr6MyK7A.svg" 
                                        alt="logo" 
                                        width="240" 
                                        height="81"
                                        className="h-8 w-auto object-contain"
                                    />
                                </div>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden md:hidden">
                                <Equal className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <nav className="hidden lg:flex gap-8">
                            {menuItems.map((item, index) => (
                                <div key={index} className="relative group">
                                    <Link
                                        to={item.href}
                                        className="relative block rounded-[10px] px-3 py-2 text-sm font-medium text-black transition-all duration-300 hover:scale-105">
                                        {/* Transparent glass effect overlay */}
                                        <div className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                            bg-white/10 backdrop-blur-sm border border-white/20 
                                            shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]" />
                                        
                                        {/* Text content */}
                                        <p className="relative z-10">{item.name}</p>
                                    </Link>
                                </div>
                            ))}
                        </nav>

                        {/* Get Started Button - Desktop */}
                        <div className="hidden lg:block">
                            <Link
                                to="https://framebase.lemonsqueezy.com/buy/ed1b4c3d-925c-4434-8a7f-de7f9cd40560"
                                className="inline-flex items-center justify-center rounded-[10px] bg-black px-6 py-3 text-sm font-medium text-white shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px] transition-all hover:bg-gray-800">
                                <p>Get Started</p>
                            </Link>
                        </div>

                        {/* Mobile Menu */}
                        <div className="bg-background in-data-[state=active]:block lg:hidden mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="w-full">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index} className="relative group">
                                            <Link
                                                to={item.href}
                                                className="relative block text-black duration-300 transition-all rounded-[10px] px-3 py-2 hover:scale-105">
                                                {/* Transparent glass effect overlay */}
                                                <div className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                                    bg-white/10 backdrop-blur-sm border border-white/20 
                                                    shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]" />
                                                
                                                {/* Text content */}
                                                <span className="relative z-10">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit">
                                <Link
                                    to="https://framebase.lemonsqueezy.com/buy/ed1b4c3d-925c-4434-8a7f-de7f9cd40560"
                                    className="inline-flex items-center justify-center rounded-[10px] bg-black px-6 py-3 text-sm font-medium text-white shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px] transition-all hover:bg-gray-800">
                                    <p>Get Started</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}