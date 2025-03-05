import { Link } from "react-router-dom";
import './styles.css'
const Navbar = () => {

  return (
    <nav className="navbar">
        <h1>Gondya's Machanical Industries</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="AboutUs">AboutUs</Link>
          <Link to="/Project">Projects</Link>

          <Link to="Product">Product</Link>
          <Link to="/Industries served ">Industries Served</Link>
          <Link to="service">Service</Link>
 
        </div>
      </nav>
  );
};

export default Navbar;
