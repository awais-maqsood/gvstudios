/**
 * DESIGN PHILOSOPHY: Modern Tech Minimalism
 * Displays key metrics with large cyan numbers and minimal styling
 * Used throughout the site for statistics and key performance indicators
 */

interface StatCardProps {
  number: string | number;
  label: string;
  description?: string;
  animated?: boolean;
}

export default function StatCard({ number, label, description, animated = false }: StatCardProps) {
  return (
    <div className={`text-center py-8 md:py-12 ${animated ? 'animate-fade-in' : ''}`}>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent font-mono mb-2">
        {number}
      </div>
      <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-semibold mb-2">
        {label}
      </div>
      {description && (
        <p className="text-xs md:text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
