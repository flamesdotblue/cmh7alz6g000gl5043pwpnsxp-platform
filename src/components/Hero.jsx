import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[220px] md:h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
      </div>
      <div className="mt-3 text-center text-sm text-[#E8E8E8]/70">
        AI voice aura animation — minimal, futuristic, and ambient
      </div>
    </section>
  );
}
