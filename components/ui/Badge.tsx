import { cn } from "@/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "accent";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-indigo-500/10 text-indigo-400",
        variant === "outline" &&
          "border border-white/20 bg-transparent text-muted-foreground",
        variant === "accent" && "bg-white/10 text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
