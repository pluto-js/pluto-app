import Link from "next/link";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, addComponent } from "@/lib";

const avatarVariants = cva(["inline-flex"], {
  variants: {
    size: {
      xs: "h-6 w-6 text-xl",
      sm: "h-8 w-8 text-2xl",
      md: "h-16 w-16 text-7xl",
      lg: "h-40 w-40 text-7xl",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export interface User {
  _id: string;
  avatarUrl: string;
  displayName: string;
  email: string;
  slug: string;
  username: string;
}

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  user: User;
  link?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}

const Avatar = ({
  user,
  className,
  link = false,
  size = "sm",
}: AvatarProps) => {
  const avatarUrl = user?.avatarUrl;

  const img = (
    <div className={cn("inline-flex rounded-full overflow-hidden", className)}>
      <Image
        width={200}
        height={200}
        className={cn(avatarVariants({ size }))}
        alt={user?.displayName}
        src={avatarUrl}
      />
    </div>
  );

  const initials = (
    <span
      className={cn(
        size,
        "inline-flex items-center justify-center font-medium rounded-full overflow-hidden shadow-xl bg-primary text-white dark:bg-gray-700",
      )}
    >
      {user?.displayName.slice(0, 2)}
    </span>
  );

  const avatar = avatarUrl ? img : initials;

  return (
    <>
      {link ? (
        <Link href="/" className="rounded-full overflow-hidden">
          {avatar}
        </Link>
      ) : (
        avatar
      )}
    </>
  );
};

addComponent("Avatar", Avatar);
