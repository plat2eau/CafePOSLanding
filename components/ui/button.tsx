import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-orange bg-orange text-navy shadow-sm hover:border-[#d97706] hover:bg-[#d97706]",
  secondary:
    "border-border bg-white text-navy shadow-sm hover:border-navy hover:bg-surface",
  ghost: "border-transparent bg-transparent text-navy hover:bg-white/70",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonClassName = cn(
    "inline-flex min-h-11 items-center justify-center rounded-button border px-5 py-3 text-sm font-semibold leading-none transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };

    return (
      <a className={buttonClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
}
