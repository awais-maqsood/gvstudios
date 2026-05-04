/**
 * DESIGN PHILOSOPHY: Modern Tech Minimalism
 * Industry cards with minimal styling and hover effects
 * Emphasizes the breadth of domain expertise
 */

interface IndustryCardProps {
  industry: string;
  onClick?: () => void;
}

export default function IndustryCard({ industry, onClick }: IndustryCardProps) {
  return (
    <div
      onClick={onClick}
      className="p-6 border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-pointer group"
    >
      <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
        {industry}
      </p>
    </div>
  );
}
