import { Link } from "react-router-dom";

export default function Button({ children, color, link, id, onDelete, type }) {
  return (
    <button
      className={`bg-${color}-600 hover:bg-${color}-700 text-white py-2 px-4 rounded-lg m-2`}
      onClick={() => {onDelete ? onDelete(id) : ""}}
      type={type}
    >
      <Link to={link} className="nav-link">
        {children}
      </Link>
    </button>
  );
}
