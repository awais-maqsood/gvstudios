/**
 * DESIGN PHILOSOPHY: Modern Tech Minimalism
 * Testimonial cards with quote styling and client attribution
 * Maintains consistent visual hierarchy with other card components
 */

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company?: string;
}

export default function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <div className="service-card">
      <div className="mb-4">
        <svg className="w-6 h-6 text-accent opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.25-2-7-2s-7 .75-7 2v10c0 1 0 7 7 8z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.25-2-7-2s-7 .75-7 2v10c0 1 0 7 7 8z" />
        </svg>
      </div>
      <p className="text-muted-foreground mb-6 italic text-sm md:text-base">
        "{quote}"
      </p>
      <div className="pt-4 border-t border-border">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{title}</p>
        {company && (
          <p className="text-xs text-accent mt-1">{company}</p>
        )}
      </div>
    </div>
  );
}
