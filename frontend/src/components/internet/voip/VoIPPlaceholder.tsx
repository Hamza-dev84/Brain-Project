import { ImageIcon } from "lucide-react";

interface VoIPPlaceholderProps {
  label: string;
  hint?: string;
  className?: string;
  aspect?: string;
}

export const VoIPPlaceholder = ({
  label,
  hint,
  className = "",
  aspect = "aspect-[16/9]",
}: VoIPPlaceholderProps) => (
  <div
    role="img"
    aria-label={`Placeholder – ${label}`}
    className={`relative ${aspect} w-full rounded-2xl border-2 border-dashed border-[hsl(var(--bn-violet)/0.45)] bg-[hsl(var(--bn-violet)/0.07)] overflow-hidden flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}
  >
    <div className="absolute inset-0 bn-grid-bg opacity-30 pointer-events-none" />
    <div className="relative w-12 h-12 rounded-xl bg-[hsl(var(--bn-violet)/0.18)] border border-[hsl(var(--bn-violet)/0.4)] flex items-center justify-center">
      <ImageIcon className="w-6 h-6 text-[hsl(var(--bn-violet-soft))]" />
    </div>
    <p className="relative font-display font-semibold text-sm md:text-base text-[hsl(var(--bn-ink))]">
      [Placeholder – {label}]
    </p>
    {hint && (
      <p className="relative font-dm text-xs text-[hsl(var(--bn-ink-soft))] max-w-xs">{hint}</p>
    )}
  </div>
);

export default VoIPPlaceholder;
