import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row border border-gray-300 rounded-xl my-4 py-2 px-3">
      <Link to="/" className="text-xl underline text-red-400">
        E-Commerce
      </Link>
      <div className="flex-1 flex items-center justify-end">
        <Link to="/product" className="text-gray-500">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
