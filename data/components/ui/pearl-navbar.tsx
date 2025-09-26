import React from 'react'
import { motion } from 'framer-motion'

const menuItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

interface PearlNavbarProps {
    currentPage?: string;
    onPageChange?: (pageId: string) => void;
}

export const PearlNavbar = ({ currentPage, onPageChange }: PearlNavbarProps) => {
    return (
        <header className="w-full">
            <nav className="w-full h-[89.2px] max-w-[1990px] mx-auto flex items-center justify-between" style={{padding: '24px 80px'}}>
                {/* Left Section - Logo */}
                <div className="flex-shrink-0">
                    <a 
                        href="/" 
                        className="block w-[81px] h-[31px]"
                        aria-label="Logo"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=81&h=31&fit=crop&crop=center" 
                            alt="Logo" 
                            className="w-full h-full object-cover rounded"
                        />
                    </a>
                </div>

                {/* Center Section - Navigation Links */}
                <div style={{opacity: 1, display: 'flex', alignItems: 'center', gap: '32px'}}>
                    {menuItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            tabIndex={0}
                            style={{
                                opacity: 1,
                                position: 'relative',
                                display: 'block',
                                height: '25.2px',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            whileHover="hover"
                            initial="initial"
                        >
                            {/* Main text */}
                            <motion.div 
                                variants={{
                                    initial: { y: 0, opacity: 1 },
                                    hover: { y: -25.2, opacity: 0 }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{
                                    outline: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    flexShrink: 0,
                                    transformOrigin: '50% 50% 0px',
                                    color: 'rgb(0, 0, 0)'
                                }}
                            >
                                <h4 
                                    style={{
                                        color: 'rgb(0, 0, 0)',
                                        margin: 0,
                                        padding: 0,
                                        fontSize: '18px',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: '500',
                                        lineHeight: '25.2px',
                                        textAlign: 'left',
                                        textDecoration: 'none',
                                        textTransform: 'none',
                                        WebkitFontSmoothing: 'antialiased'
                                    }}
                                >
                                    {item.name}
                                </h4>
                            </motion.div>
                            {/* Hover text (same text but gray) */}
                            <motion.div 
                                variants={{
                                    initial: { y: 25.2, opacity: 0.6 },
                                    hover: { y: 0, opacity: 0.6 }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{
                                    outline: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    flexShrink: 0,
                                    transformOrigin: '50% 50% 0px',
                                    color: 'rgb(107, 114, 128)', // gray-500
                                    position: 'absolute',
                                    top: 0,
                                    left: 0
                                }}
                            >
                                <h4 
                                    style={{
                                        color: 'rgb(107, 114, 128)',
                                        margin: 0,
                                        padding: 0,
                                        fontSize: '18px',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: '500',
                                        lineHeight: '25.2px',
                                        textAlign: 'left',
                                        textDecoration: 'none',
                                        textTransform: 'none',
                                        WebkitFontSmoothing: 'antialiased'
                                    }}
                                >
                                    {item.name}
                                </h4>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>

                {/* Right Section - Remix Button */}
                <div className="flex-shrink-0">
                    <motion.a 
                        href="https://framer.com/projects/new?duplicate=Z7D4Y2ypAczRKN1T3YSt&via=dpietrasiak"
                        rel="noopener"
                        tabIndex={0}
                        className="inline-block"
                        whileHover="hover"
                        initial="initial"
                        style={{
                            borderRadius: '64px',
                            opacity: 1,
                            willChange: 'auto',
                            cursor: 'pointer'
                        }}
                    >
                        <motion.div 
                            variants={{
                                initial: { 
                                    backgroundColor: 'rgb(0, 0, 0)',
                                    borderColor: 'rgba(0, 0, 0, 0)',
                                    borderWidth: '1px'
                                },
                                hover: { 
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    borderColor: 'rgb(0, 0, 0)',
                                    borderWidth: '1px'
                                }
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{
                                borderStyle: 'solid',
                                borderRadius: '64px',
                                outline: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                flexShrink: 0,
                                transform: 'none',
                                opacity: 1,
                                willChange: 'auto'
                            }}
                        >
                            <motion.h4 
                                variants={{
                                    initial: { color: 'rgb(255, 255, 255)' },
                                    hover: { color: 'rgb(0, 0, 0)' }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{
                                    margin: 0,
                                    padding: '8px 16px',
                                    fontSize: '18px',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: '500',
                                    lineHeight: '25.2px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    textTransform: 'none',
                                    WebkitFontSmoothing: 'antialiased'
                                }}
                            >
                                Remix
                            </motion.h4>
                        </motion.div>
                    </motion.a>
                </div>

                {/* Page Navigation Buttons (for development) */}
                {onPageChange && (
                    <div className="hidden md:flex items-center space-x-3 ml-8">
                        <button 
                            onClick={() => onPageChange('landing-morphic')}
                            className={`px-4 py-2 rounded text-sm font-normal tracking-normal lowercase transition-colors duration-200 ${
                                currentPage === 'landing-morphic' 
                                    ? 'bg-gray-200 text-black' 
                                    : 'text-gray-600 hover:text-black'
                            }`}
                        >
                            Morphic
                        </button>
                        <button 
                            onClick={() => onPageChange('shuffle-template')}
                            className={`px-4 py-2 rounded text-sm font-normal tracking-normal lowercase transition-colors duration-200 ${
                                currentPage === 'shuffle-template' 
                                    ? 'bg-gray-200 text-black' 
                                    : 'text-gray-600 hover:text-black'
                            }`}
                        >
                            Shuffle
                        </button>
                        <button 
                            onClick={() => onPageChange('orbai-demo')}
                            className={`px-4 py-2 rounded text-sm font-normal tracking-normal lowercase transition-colors duration-200 ${
                                currentPage === 'orbai-demo' 
                                    ? 'bg-gray-200 text-black' 
                                    : 'text-gray-600 hover:text-black'
                            }`}
                        >
                            Orbai
                        </button>
                    </div>
                )}
            </nav>
        </header>
    )
}
