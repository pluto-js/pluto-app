import React, { forwardRef } from "react";
import { Components, addComponent } from "@/lib";

type CardDescriptionProps = {
  title: string;
  slug: string;
};

const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(
  ({ title, slug }, ref) => {
    return (
      <Components.Text variant="h6" ref={ref}>
        <Components.Button
          href={`/blog/${slug}`}
          variant="link"
          className="p-0 h-auto text-xl"
        >
          {title}
        </Components.Button>
      </Components.Text>
    );
  },
);

CardDescription.displayName = "CardDescription";
addComponent("CardDescription", CardDescription);
