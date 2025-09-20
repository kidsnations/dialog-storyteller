import { useEffect, useState } from 'react';

interface DiagramDisplayProps {
  delay: number;
  imageUrl: string;
}

export const DiagramDisplay = ({ delay, imageUrl }: DiagramDisplayProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`diagram-container ${isVisible ? 'fade-in' : 'opacity-0'} mx-4 max-w-5xl`}>
      <img 
        src={imageUrl} 
        alt="DevOps Project Architecture Diagram" 
        className="w-full h-auto"
        loading="lazy"
      />
    </div>
  );
};