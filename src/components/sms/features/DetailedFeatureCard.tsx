import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DetailedFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  variant?: "compact" | "detailed";
  className?: string;
}

const DetailedFeatureCard = ({
  icon: Icon,
  title,
  description,
  children,
  variant = "compact",
  className,
}: DetailedFeatureCardProps) => {
  return (
    <div
      className={cn(
        "group bg-card rounded-2xl p-8 border border-border/50 shadow-elegant hover:shadow-strong transition-all duration-300 hover:-translate-y-1",
        variant === "detailed" && "p-10",
        className
      )}
    >
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl rounded-full group-hover:blur-2xl transition-all" />
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold font-raleway text-primary">{title}</h3>
        <p className="text-muted-foreground font-lato leading-relaxed">{description}</p>
        {children && <div className="pt-4 border-t border-border/30">{children}</div>}
      </div>
    </div>
  );
};

export default DetailedFeatureCard;
