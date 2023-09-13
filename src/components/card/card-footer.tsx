import React, { forwardRef } from "react";
import { Components, addComponent } from "@/lib";

type User = {
  displayName: string;
  photoURL: string;
};

type CardFooterProps = {
  user: User;
  slug: string;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ user, slug, className }, ref) => {
    return (
      <Components.SpaceBetween className={className} ref={ref}>
        <Components.Avatar user={user} link />
        <Components.UsersName user={user} />
      </Components.SpaceBetween>
    );
  },
);

CardFooter.displayName = "CardFooter";
addComponent("CardFooter", CardFooter);
