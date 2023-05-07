import { NavLink } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.body}>
      {/* <h1>Contacts App</h1>
      <button>All Contacts</button>
      <button>Add New Contact</button> */}
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            All Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Add New Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
