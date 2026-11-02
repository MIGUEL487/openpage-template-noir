import React from 'react';
import { cn } from '@/lib/utils';

interface DoubleBezelCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: 'default' | 'carmine' | 'glass';
}

export function DoubleBezelCard({
  children,
  className,
  innerClassName,
  variant = 'default',
}: DoubleBezelCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'carmine':
        return {
          outer: 'bg-noir-carmine-dark/30 ring-1 ring-noir-carmine/30 hover:ring-noir-carmine/60 transition-all duration-500',
          inner: 'bg-noir-900/90 shadow-[inset_0_1px_1px_rgba(155,36,40,0.3)]',
        };
      case 'glass':
        return {
          outer: 'bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 backdrop-blur-xl',
          inner: 'bg-noir-950/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]',
        };
      case 'default':
      default:
        return {
          outer: 'bg-white/[0.02] ring-1 ring-white/[0.08] hover:ring-white/[0.18] transition-all duration-500',
          inner: 'bg-noir-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      className={cn(
        'p-1.5 sm:p-2 rounded-bezel-outer transition-transform duration-500',
        styles.outer,
        className
      )}
    >
      <div
        className={cn(
          'rounded-bezel-inner p-6 sm:p-8 h-full flex flex-col justify-between overflow-hidden',
          styles.inner,
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
