import PageFrame from "./PageFrame.jsx";

// Business pages share the group page shell; their local navigation now lives in
// the site header's context row (see SiteHeader), so this is a thin theme wrapper.
export default function BusinessPageFrame({
  business,
  title,
  children,
  className = "",
}) {
  return (
    <PageFrame site={business} title={title} className={className}>
      {children}
    </PageFrame>
  );
}
