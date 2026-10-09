import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  id?: string;
  title: string;
  description: string;
  children: ReactNode;
  variant?: "default" | "highlighted";
  className?: string;
}

const FeatureSection = ({
  id,
  title,
  description,
  children,
  variant = "default",
  className,
}: FeatureSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20",
        variant === "highlighted" && "bg-gradient-to-b from-primary/5 to-transparent",
        className
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-raleway text-primary mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground font-lato max-w-3xl mx-auto">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default FeatureSection;
