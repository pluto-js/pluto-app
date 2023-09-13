import { cva, type VariantProps } from "class-variance-authority";
import { cn, Components, addComponent } from "@/lib";

const userNameVariants = cva("text-base font-medium p-0 h-auto");

export interface User {
  _id: string;
  displayName: string;
  slug: string;
}

export interface UserNameProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof userNameVariants> {
  user: User;
}

const UsersName = ({ user, className }: UserNameProps) => (
  <Components.Button
    href={`/user/${user.slug}`}
    variant="link"
    className={cn(userNameVariants(), className)}
  >
    {user.displayName}
  </Components.Button>
);

addComponent("UsersName", UsersName);
