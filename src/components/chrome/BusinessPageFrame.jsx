import BusinessNav from "./BusinessNav.jsx";
import PageFrame from "./PageFrame.jsx";

export default function BusinessPageFrame({
  business,
  title,
  children,
  className = "",
}) {
  return (
    <PageFrame site={business} title={title} className={className}>
      <BusinessNav business={business} />
      {children}
    </PageFrame>
  );
}
