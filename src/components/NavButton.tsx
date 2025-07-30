'use client'
import React from 'react'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const icons = [
  { link: "https://github.com/sambatawa", label: "Github", icon: Github, newTab: true },
  { link: "https://www.instagram.com/sambatawa_/profilecard/?igsh=MTdzdmlpZmtsa3BrbQ==", label: "Instagram", icon: Instagram, newTab: true },
  { link: "https://www.linkedin.com/in/inas-samara-taqia", label: "Linkedin", icon: Linkedin },
  { link: "mailto:inassamarataqia@gmail.com", label: "Email", icon: Mail },
];

const NavButton = () => {
  const radius = 270;

  return (
    <div className="absolute inset-0 z-10 overflow-hidden cursor-pointer">
      <div className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 spin">
        {icons.map((item, index) => {
          const angle = (index / icons.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const IconComponent = item.icon;

          return (
            <Link
              key={index}
              href={item.link}
              target={item.newTab ? "_blank" : "_self"}
              className="absolute group"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                left: '50%',
                top: '50%',
              }}
            >
              <div className="relative w-20 h-20 rounded-full border border-white/40 text-white flex items-center justify-center transition-all backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,0,0.8)] spin-reverse">
                <IconComponent size={32} />
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white/30 backdrop-blur-sm text-black text-sm px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavButton;
