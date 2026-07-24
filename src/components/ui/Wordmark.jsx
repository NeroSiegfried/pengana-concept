import { Link } from "react-router-dom";
import Logomark from "./Logomark.jsx";

export default function Wordmark({ inverted = false, onClick }) {
  return (
    <Link
      to="/"
      className={`wordmark ${inverted ? "wordmark--inverted" : ""}`}
      aria-label="Pengana Concept home"
      onClick={onClick}
    >
      <Logomark className="wordmark__mark" />
      <span className="wordmark__text">
        <span className="wordmark__primary">Pengana</span>
        <span className="wordmark__secondary">Concept</span>
      </span>
    </Link>
  );
}
