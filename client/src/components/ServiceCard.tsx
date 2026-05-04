/**
 * DESIGN PHILOSOPHY: Modern Tech Minimalism
 * Service cards with left accent bar, icon, and clear information hierarchy
 * Hover effects provide subtle feedback without being distracting
 */

import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  actionLabel?: string;
  onAction?: () => void;
}

export default function ServiceCard({
  icon,
  title,
  subtitle,
  description,
  features,
  actionLabel = 'Explore',
  onAction
}: ServiceCardProps) {
  return (
    <div className="service-card group">
      <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 text-sm font-semibold">{subtitle}</p>
      <p className="text-sm text-muted-foreground mb-6">
        {description}
      </p>
      <ul className="space-y-2 text-sm mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-accent mt-1 font-bold">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="w-full cta-button-secondary"
        onClick={onAction}
      >
        {actionLabel}
      </Button>
    </div>
  );
}
