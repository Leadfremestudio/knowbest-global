import { Link } from "react-router-dom";

const CountryDropdown = ({ isOpen, items }) => {
  return (
    <div
      className={`absolute top-full left-0 w-64 bg-secondary shadow-lg overflow-hidden transition-all duration-300 ease-in-out origin-top z-50 rounded-b-lg ${
        isOpen
          ? "scale-y-100 opacity-100"
          : "scale-y-0 opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col py-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              to={`/study-abroad/${item.id}`}
              className="flex items-center gap-3 px-4 py-3 text-light/80 hover:text-accent hover:bg-primary transition-colors"
            >
              {item.flag && (
                <img
                  src={item.flag}
                  alt={`${item.name} flag`}
                  className="w-6 h-4 object-cover rounded-sm"
                />
              )}
              <span className="font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDropdown;
