import { Components, addComponent } from "@/lib";

export interface LayoutProps extends React.HTMLAttributes<HTMLElement> {}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Components.Header currentUser={{}} />
    <main className="flex-1">{children}</main>
    <Components.Footer />
  </>
);

addComponent("Layout", Layout);
