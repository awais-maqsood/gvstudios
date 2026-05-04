/**
 * DESIGN PHILOSOPHY: Modern Tech Minimalism
 * Portfolio cards showcasing client projects with category tags
 * Maintains visual consistency with service card styling
 */

interface PortfolioCardProps {
  category: string;
  client: string;
  description: string;
  onClick?: () => void;
}

export default function PortfolioCard({ category, client, description, onClick }: PortfolioCardProps) {
  return (
    <div onClick={onClick} className="service-card cursor-pointer group">
      <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-3 group-hover:text-accent/80 transition-colors">
        {category}
      </p>
      <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{client}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
