/**
 * DESIGN PHILOSOPHY: Modern Tech Minimalism
 * Advantage cards displaying key metrics and descriptions
 * Creates visual rhythm with consistent spacing and typography
 */

interface AdvantageCardProps {
  metric: string;
  label: string;
  description: string;
}

export default function AdvantageCard({ metric, label, description }: AdvantageCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-mono">
        {metric}
      </div>
      <h4 className="text-lg font-bold mb-3">{label}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
