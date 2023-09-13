import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { Orbit } from "lucide-react";
import { cn, addComponent } from "@/lib";

const logoVariants = cva(
  "flex items-center overflow-hidden relative tracking-wider font-bold",
);

export interface LogoProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof logoVariants> {}

const Logo = ({ className }: LogoProps) => (
  <Link
    href="/"
    aria-label="Go to home page"
    className={cn(logoVariants(), className)}
  >
    <Orbit className="mr-2" />
    Pluto.js
  </Link>
);

addComponent("Logo", Logo);
