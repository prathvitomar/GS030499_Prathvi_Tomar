import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">GSynergy</div>
      <div>
        <Link to="/stores" className="mx-2">Stores</Link>
        <Link to="/skus" className="mx-2">SKUs</Link>
        <Link to="/planning" className="mx-2">Planning</Link>
        <Link to="/chart" className="mx-2">Chart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
