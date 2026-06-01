import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
  fallbackSrc?: string;
}

export const Image = ({ src, alt, className, fallbackSrc = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop', ...props }: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      <motion.img
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setImgSrc(fallbackSrc)}
        {...(props as any)}
      />
    </div>
  );
};
⅙