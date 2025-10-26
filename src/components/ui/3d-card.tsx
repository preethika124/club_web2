import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

export function CardContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={className} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
}

export function CardItem({ 
  children, 
  className = '',
  translateZ = '0px',
  as: Component = 'div',
  ...rest
}: { 
  children: ReactNode; 
  className?: string;
  translateZ?: string;
  as?: React.ElementType;
  [key: string]: any;
}) {
  return (
    <Component 
      className={className}
      style={{ 
        transform: `translateZ(${translateZ})`,
        transformStyle: 'preserve-3d' 
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
