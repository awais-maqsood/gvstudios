/**
 * DESIGN PHILOSOPHY: Modern Tech Minimalism
 * Geometric dividers with diagonal cuts and cyan accents
 * Creates visual hierarchy and flow between sections
 */

interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'zigzag';
  className?: string;
}

export default function SectionDivider({ variant = 'diagonal', className = '' }: SectionDividerProps) {
  if (variant === 'wave') {
    return (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-20 md:h-32 ${className}`}
        style={{ fill: 'currentColor' }}
      >
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" />
      </svg>
    );
  }

  if (variant === 'zigzag') {
    return (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-20 md:h-32 ${className}`}
        style={{ fill: 'currentColor' }}
      >
        <polyline points="0,60 100,20 200,60 300,20 400,60 500,20 600,60 700,20 800,60 900,20 1000,60 1100,20 1200,60 1200,120 0,120" />
      </svg>
    );
  }

  // Default diagonal
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`w-full h-20 md:h-32 ${className}`}
      style={{ fill: 'currentColor' }}
    >
      <polygon points="0,0 1200,40 1200,120 0,120" />
    </svg>
  );
}
