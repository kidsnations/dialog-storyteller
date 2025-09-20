import { useEffect, useState } from 'react';

interface DialogCardProps {
  children: React.ReactNode;
  delay: number;
  className?: string;
}

export const DialogCard = ({ children, delay, className = '' }: DialogCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`dialog-card ${isVisible ? 'fade-in' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
};