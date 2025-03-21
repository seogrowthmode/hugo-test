import React, { useId } from 'react';

interface FlagImageProps {
  imageSrc: string;
  alt: string;
  strokeColor?: string;
  width?: number;
  height?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * FlagImage component - Creates a flag-shaped container with an image inside
 * and a customizable stroke color using SVG.
 */
export const FlagImage: React.FC<FlagImageProps> = ({
  imageSrc,
  alt,
  strokeColor = '#0070f3', // Default brand color, can be overridden
  width = 400,
  height = 300,
  className = '',
  strokeWidth = 8,
}) => {
  // Generate a unique ID for the clipPath to avoid conflicts
  const clipPathId = useId().replace(/:/g, '');
  
  // Calculate the path coordinates based on width and height
  const leftPointX = width * 0.125; // 12.5% from the left
  const middleY = height / 2;
  
  // The path for the flag shape (pointed on the left side)
  const pathD = `M${leftPointX},0 L${width},0 L${width},${height} L${leftPointX},${height} L0,${middleY} Z`;
  
  // Calculate inset for stroke (to make stroke appear inside)
  const inset = strokeWidth / 3;
  const strokeLeftPointX = leftPointX + inset;
  
  // Inset path for stroke (smaller than the clip path)
  const strokePathD = `
    M${strokeLeftPointX},${inset} 
    L${width - inset},${inset} 
    L${width - inset},${height - inset} 
    L${strokeLeftPointX},${height - inset} 
    L${inset},${middleY} 
    Z`;
  
  return (
    <div className={`relative ${className}`} aria-label={alt}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
        role="img"
        aria-label={alt}
      >
        {/* Define the clip path */}
        <defs>
          <clipPath id={clipPathId}>
            <path d={pathD} />
          </clipPath>
        </defs>
        
        {/* The image with clip path */}
        <image 
          href={imageSrc} 
          width={width} 
          height={height} 
          clipPath={`url(#${clipPathId})`} 
          preserveAspectRatio="xMidYMid slice"
        />
        
        {/* The stroke as a separate inset path */}
        <path 
          d={strokePathD} 
          fill="none" 
          stroke={strokeColor} 
          strokeWidth={strokeWidth} 
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

export default FlagImage;
