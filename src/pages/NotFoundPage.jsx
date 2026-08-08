import PageFrame from "../components/chrome/PageFrame.jsx";
import ActionLink from "../components/ui/ActionLink.jsx";

export default function NotFoundPage() {
  return (
    <PageFrame site="concept" title="Page not found">
      <section className="not-found">
        <p>404</p>
        <h1>We couldn’t find that page.</h1>
        <span>The address may be incorrect, or the page may not exist.</span>
        <ActionLink to="/" variant="solid">
          Return home
        </ActionLink>
      </section>
    </PageFrame>
  );
}
