import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, Components, addComponent } from "@/lib";

const cardVariants = cva("space-y-2 border-b border-input py-6");

type User = {
  displayName: string;
  photoURL: string;
};

type Categories = {
  _id: string;
  name: string;
  slug: string;
};

type CardProps = VariantProps<typeof cardVariants> & {
  title: string;
  slug: string;
  user?: User;
  categories?: Categories[];
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, slug, user, categories }, ref) => {
    return (
      <article
        ref={ref}
        aria-label={title}
        className={cn(cardVariants(), className)}
      >
        <Components.CardHeader categories={categories} />
        <Components.CardDescription title={title} slug={slug} />
        {user && <Components.CardFooter user={user} />}
      </article>
    );
  },
);

Card.displayName = "Card";
addComponent("Card", Card);
