import { Components, addComponent } from "@/lib";

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const Hero = ({ title, description, leftContent, rightContent }: HeroProps) => {
  return (
    <Components.Row column={2} spacing="xlarge" className="items-center">
      <div className="w-5/6">
        <div className="mb-6">
          {title && <Components.Text variant="h1">{title}</Components.Text>}
          {description && (
            <Components.Text variant="lead">{description}</Components.Text>
          )}
        </div>
        {leftContent}
      </div>
      {rightContent}
    </Components.Row>
  );
};

addComponent("Hero", Hero);
