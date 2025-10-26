import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ChatArea from './components/ChatArea';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#E8E8E8] antialiased">
      <NavBar />
      <main className="flex flex-col gap-6 md:gap-10 max-w-5xl mx-auto px-4 md:px-6">
        <Hero />
        <ChatArea />
      </main>
    </div>
  );
}
