/**
 * DESIGN PHILOSOPHY: Modern Tech Minimalism
 * Process steps with numeric labels and clear descriptions
 * Creates visual flow and guides users through the service journey
 */

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ step, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative">
      {/* Step number */}
      <div className="text-5xl md:text-6xl font-bold text-muted mb-4 font-mono">
        {step}
      </div>

      {/* Content */}
      <h4 className="text-xl md:text-2xl font-bold mb-3">{title}</h4>
      <p className="text-muted-foreground text-sm md:text-base">{description}</p>

      {/* Connector line for non-last items */}
      {!isLast && (
        <div className="hidden md:block absolute top-16 right-0 w-0.5 h-32 bg-gradient-to-b from-accent to-transparent opacity-30"></div>
      )}
    </div>
  );
}
