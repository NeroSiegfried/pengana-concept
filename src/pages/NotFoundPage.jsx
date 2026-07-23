import PageFrame from "../components/chrome/PageFrame.jsx";
import ActionLink from "../components/ui/ActionLink.jsx";

export default function NotFoundPage() {
  return (
    <PageFrame site="concept" title="Page not found">
      <section className="not-found">
        <p>404</p>
        <h1>This page is no longer part of the site.</h1>
        <span>
          The project was simplified around verified business information.
        </span>
        <ActionLink to="/" variant="solid">
          Return home
        </ActionLink>
      </section>
    </PageFrame>
  );
}
