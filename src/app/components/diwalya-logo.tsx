import React from 'react';

interface DiwalyaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  className?: string;
}

export function DiwalyaLogo({ size = 'md', variant = 'full', className = '' }: DiwalyaLogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14'
  };

  const iconSize = {
    sm: 32,
    md: 40,
    lg: 56
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon - Gear + Helmet in circular form */}
      <svg 
        width={iconSize[size]} 
        height={iconSize[size]} 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer circle - reliability & continuity */}
        <circle cx="24" cy="24" r="22" fill="#1e3a8a" stroke="#f97316" strokeWidth="2"/>
        
        {/* Gear teeth - industry & systems */}
        <path d="M24 4L26 8L24 12L22 8L24 4Z" fill="#f97316"/>
        <path d="M44 24L40 26L36 24L40 22L44 24Z" fill="#f97316"/>
        <path d="M24 44L22 40L24 36L26 40L24 44Z" fill="#f97316"/>
        <path d="M4 24L8 22L12 24L8 26L4 24Z" fill="#f97316"/>
        <path d="M37 11L35 15L31 13L33 9L37 11Z" fill="#f97316"/>
        <path d="M37 37L33 39L31 35L35 33L37 37Z" fill="#f97316"/>
        <path d="M11 37L13 33L17 35L15 39L11 37Z" fill="#f97316"/>
        <path d="M11 11L15 9L17 13L13 15L11 11Z" fill="#f97316"/>
        
        {/* Helmet shape - skilled labor & safety */}
        <path 
          d="M24 14C18 14 14 18 14 24V28C14 28 16 32 24 32C32 32 34 28 34 28V24C34 18 30 14 24 14Z" 
          fill="white"
        />
        <path 
          d="M16 28H32V30C32 31 30 32 24 32C18 32 16 31 16 30V28Z" 
          fill="#f97316"
        />
        <circle cx="24" cy="23" r="3" fill="#1e3a8a"/>
      </svg>
      
      {variant === 'full' && (
        <span 
          className={`font-heading font-bold text-primary ${
            size === 'sm' ? 'text-xl' : size === 'md' ? 'text-2xl' : 'text-4xl'
          }`}
        >
          Diwalya
        </span>
      )}
    </div>
  );
}
