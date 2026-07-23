import { Link } from "react-router-dom";

export default function Wordmark({ inverted = false, onClick }) {
  return (
    <Link
      to="/"
      className={`wordmark ${inverted ? "wordmark--inverted" : ""}`}
      aria-label="Pengana Concept home"
      onClick={onClick}
    >
      <span className="wordmark__primary">Pengana</span>
      <span className="wordmark__secondary">Concept</span>
    </Link>
  );
}
