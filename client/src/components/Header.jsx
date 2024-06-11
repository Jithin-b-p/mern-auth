import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between px-24 py-2 bg-red-300">
      <span className="block text-xl font-bold">Mern Auth</span>
      <ul className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="signin">Signin</NavLink>
      </ul>
    </header>
  );
}

export default Header;
