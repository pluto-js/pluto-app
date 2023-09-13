import { cva, type VariantProps } from "class-variance-authority";
import { cn, addComponent } from "@/lib";

const spaceBetweenVariants = cva(["flex items-center"], {
  variants: {
    size: {
      xs: "space-x-4",
      sm: "space-x-8",
      md: "space-x-16",
      lg: "space-x-32",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

export interface SpaceBetweenProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spaceBetweenVariants> {}

const SpaceBetween = ({ className, size, ...props }: SpaceBetweenProps) => (
  <div className={cn(spaceBetweenVariants({ size, className }))} {...props} />
);

SpaceBetween.displayName = "SpaceBetween";
addComponent("SpaceBetween", SpaceBetween);
