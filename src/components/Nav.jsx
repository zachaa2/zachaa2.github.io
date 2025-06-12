import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Nav() {
    return (
      <nav className="fixed top-0 w-full backdrop-blur-md py-4">
        <ul className="container mx-auto flex justify-center space-x-6">
          <li>
            <HashLink smooth to="/#about" className="hover:text-blue-600 capitalize">
              About 
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#skills" className="hover:text-blue-600 capitalize">
              Skills 
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects" className="hover:text-blue-600 capitalize">
              Projects 
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" className="hover:text-blue-600 capitalize">
              Contact 
            </HashLink>
          </li>
          <li>
            <Link to="/resume" className="hover:text-blue-600 capitalize">
              Resume 
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  