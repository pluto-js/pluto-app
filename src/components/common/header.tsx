import { Components, addComponent } from "@/lib";
import { SunDim } from "lucide-react";

interface User {
  id?: number;
  username?: string;
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  currentUser: User | null;
}

const NavLinks = () => (
  <nav className="ml-8 gap-6 md:flex">
    <Components.Button
      variant="link"
      size="sm"
      href="/"
      className="text-muted-foreground"
    >
      Documentation
    </Components.Button>
  </nav>
);

const UserNavLinks = ({ currentUser }: HeaderProps) => (
  <>
    {currentUser && currentUser.id ? (
      <Components.Button size="sm" href="/dashboard">
        My account
      </Components.Button>
    ) : (
      <>
        <Components.Button size="sm" variant={"outline"} href="/login">
          Login
        </Components.Button>
        <Components.Button size="sm" href="/register">
          Register
        </Components.Button>
      </>
    )}
  </>
);

const Header = ({ currentUser }: HeaderProps) => {
  return (
    <header className="py-5 w-full z-10 sticky top-0 backdrop-blur-sm">
      <Components.Row>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <Components.Logo />
            <NavLinks />
          </div>
          <div className="space-x-8"></div>
          <Components.SpaceBetween>
            <Components.Button variant="ghost" size="icon">
              <SunDim className="h-7 w-7" />
            </Components.Button>
            <UserNavLinks currentUser={currentUser} />
          </Components.SpaceBetween>
        </div>
      </Components.Row>
    </header>
  );
};

addComponent("Header", Header);
