import { ReactNode } from "react";

interface LinkButtonProps {
  icon: ReactNode;
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

const LinkButton = ({ icon, label, href, variant = "secondary" }: LinkButtonProps) => {
  const baseClasses = "group flex items-center w-full rounded-xl transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-gradient-orange text-primary-foreground shadow-orange hover:scale-[1.02] hover:shadow-[0_0_40px_hsla(27,100%,50%,0.5)] px-6 py-4",
    secondary: "bg-secondary border border-border hover:border-primary hover:bg-muted px-5 py-4 hover:scale-[1.01]"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]}`}
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-background/50 mr-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span className="flex-1 text-center font-medium text-base tracking-wide pr-12">
        {label}
      </span>
    </a>
  );
};

export default LinkButton;
