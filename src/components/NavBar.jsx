import React from 'react';

export default function NavBar() {
  const links = [
    { label: 'AI Goals', href: '#' },
    { label: 'Images', href: '#' },
    { label: 'Videos', href: '#' },
    { label: 'Short Videos', href: '#' },
    { label: 'Tools', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#121212]/60 bg-[#121212]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <nav className="flex items-center gap-4 text-sm md:text-[15px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#E8E8E8]/80 hover:text-[#E8E8E8] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 border border-white/10 grid place-items-center select-none">
            <span className="text-sm md:text-base font-medium">S</span>
          </div>
        </div>
      </div>
    </header>
  );
}
