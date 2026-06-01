import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center bg-[#0a0a0a] rounded-full shrink-0 ${className} w-16 h-16`}>
      <div className="flex flex-col items-center justify-center font-serif text-white -space-y-[3px]">
        <span className="text-[20px] leading-none tracking-wide text-white">dip</span>
        <span className="text-[20px] leading-none tracking-wide text-white">iugi</span>
      </div>
    </div>
  );
};
