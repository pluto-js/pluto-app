import React, { forwardRef } from "react";
import { Components, addComponent } from "@/lib";

type Categories = {
  _id: string;
  name: string;
  slug: string;
};

type CardHeaderProps = {
  categories: Categories[];
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, categories, ...props }, ref) => {
    return (
      <Components.SpaceBetween ref={ref} className={className} {...props}>
        {categories &&
          categories.map((category: Categories) => (
            <Components.Button
              href={`/category/${category.slug}`}
              key={`${category._id}CardHeaderButton`}
              variant="link"
              className="p-0 h-auto"
            >
              <Components.Text variant="overline" key={category._id}>
                {category.name}
              </Components.Text>
            </Components.Button>
          ))}
      </Components.SpaceBetween>
    );
  },
);

CardHeader.displayName = "CardHeader";
addComponent("CardHeader", CardHeader);
