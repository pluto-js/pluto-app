import { cva, type VariantProps } from "class-variance-authority";
import { cn, addComponent } from "@/lib";

const rowVariants = cva(["container mx-auto px-6 grid gap-8"], {
  variants: {
    spacing: {
      default: "",
      xlarge: "py-48",
      large: "py-32",
      medium: "py-16",
      small: "py-8",
    },
    column: {
      1: "grid-cols-1",
      2: "grid-cols-1 lg:grid-cols-2",
      3: "grid-cols-1 lg:grid-cols-3",
      4: "grid-cols-1 lg:grid-cols-4",
    },
  },
  defaultVariants: {
    spacing: "default",
    column: 1,
  },
});

export interface RowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rowVariants> {}

const Row = ({ className, spacing, column, ...props }: RowProps) => (
  <div className={cn(rowVariants({ spacing, column, className }))} {...props} />
);

addComponent("Row", Row);
