import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="maths-navbar">
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/calculator">Calculator</NavLink>
    <NavLink to="/quotes">Quote</NavLink>
  </nav>
);

export default Navbar;
