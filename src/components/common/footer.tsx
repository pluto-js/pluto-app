import Link from "next/link";
import { Components, addComponent } from "@/lib";

const Footer = () => (
  <footer role="contentinfo" className="py-16">
    <Components.Row>
      <Components.Text variant="small">
        Built by{" "}
        <Link href="/" className="text-primary underline-offset-4 underline">
          The Super Coder
        </Link>
        . The code is available on{" "}
        <Link href="/" className="text-primary underline-offset-4 underline">
          Github
        </Link>
        .
      </Components.Text>
    </Components.Row>
  </footer>
);

addComponent("Footer", Footer);
