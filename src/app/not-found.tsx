import { Components } from "@/lib";

export default function NotFound() {
  return (
    <Components.Layout>
      <Components.Hero
        title="404"
        description="Sorry, we couldn't find what you were looking for."
      />
    </Components.Layout>
  );
}
