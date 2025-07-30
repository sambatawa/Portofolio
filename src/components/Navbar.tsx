"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = [
    { id: "About", label: "About Me" },
    { id: "Projects", label: "Projects" },
    { id: "Experiences", label: "Experiences" },
    { id: "Contact", label: "Contact Me" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("Beranda");
    useEffect(() => {
        const handleScroll = () => {
            let tempat = "Beranda";
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        tempat = section.id;
                    }
                }
            }
            setActive(tempat);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed m-5 md:ml-0 mt-8 md:left-1/2 md:-translate-x-1/2 shadow-amber-50 px-4 md:px-10 py-2 rounded-full flex items-center justify-end md:justify-center backdrop-blur-lg z-50">
            <div className="hidden md:flex gap-7 justify-center items-center">
                {sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className={`relative font-medium text-[16px] md:text-[25px] text-white flex flex-row whitespace-nowrap items-center justify-center rounded-[50px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 transition-all duration-200 ${active === section.id ? "font-bold bg-[#D9D9D9]/10 border border-[#D9D9D9]/30" : ""}`}>
                        {section.label} <div className={`w-40 h-1 absolute -bottom-2 left-[50%] -translate-x-[50%] rounded-full transition ${active === section.id? "opacity-100" : "opacity-0"}`}></div>
                    </a>
                ))}
            </div>
            <div className="md:hidden flex items-center p-5">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-[30px] focus:outline-none">
                    {menuOpen ? <FaTimes /> : <FaBars />} 
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-30 w-[300px] bg-gradient-to-br from-[#2f5b5e] to-[#3c2143]/95 backdrop-blur-2xl bg-opacity-95 flex flex-col items-center justify-end gap-2 py-10 pl-5 rounded-br-[70px] rounded-bl-[70px] rounded-tl-[70px] shadow-lg md:hidden animate-fade-in">
                    {sections.map((section) => (
                        <a onClick={() => setMenuOpen(false)} key={section.id} href={`#${section.id}`} className={`font-medium text-[18px] text-[#FFFFFF] py-2 px-6 w-full text-left ${active === section.id ? "font-bold bg-[#D9D9D9]/10 border border-[#D9D9D9]/30 rounded-l-[50px]" : ""}`}>
                            {section.label} <span className={`ml-2 rounded-full transition ${active === section.id ? "opacity-100" : "opacity-0"}`}></span>
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;