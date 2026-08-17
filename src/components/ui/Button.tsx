import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    children,
    className,
    href,
    ...restProps
  } = props;

  const baseStyles =
    "inline-flex items-center justify-center font-mono font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-2 focus-visible:outline-signal-lime focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer group";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-signal-lime text-signal-bg border border-signal-lime hover:bg-signal-lime/90 hover:shadow-[0_0_15px_rgba(184,255,61,0.35)] active:scale-[0.98]",
    secondary:
      "bg-signal-surface text-signal-text border border-signal-border hover:bg-signal-elevated hover:border-signal-lime/50 hover:text-signal-lime active:scale-[0.98]",
    outline:
      "bg-transparent text-signal-text border border-signal-border hover:border-signal-lime/60 hover:text-signal-lime hover:bg-signal-surface/50 active:scale-[0.98]",
    ghost:
      "bg-transparent text-signal-muted hover:text-signal-text hover:bg-signal-surface/40 active:scale-[0.98]",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-3.5 text-[11px] rounded-md gap-1.5",
    md: "h-11 px-5 text-xs rounded-lg gap-2",
    lg: "h-13 px-6 text-xs rounded-lg gap-2.5",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...(restProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";
