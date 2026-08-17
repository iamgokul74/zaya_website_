import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  showMarkers?: boolean;
}

export function Container({
  as: Component = "div",
  className,
  showMarkers = false,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {showMarkers && (
        <>
          {/* Subtle Technical Corner Markers */}
          <span
            aria-hidden="true"
            className="absolute top-0 left-4 h-2 w-2 border-t border-l border-signal-lime/40 pointer-events-none"
          />
          <span
            aria-hidden="true"
            className="absolute top-0 right-4 h-2 w-2 border-t border-r border-signal-lime/40 pointer-events-none"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-4 h-2 w-2 border-b border-l border-signal-lime/40 pointer-events-none"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 right-4 h-2 w-2 border-b border-r border-signal-lime/40 pointer-events-none"
          />
        </>
      )}
      {children}
    </Component>
  );
}
