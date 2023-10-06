import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import routes from "./../../routes/routes.json";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkStyles = ({ isActive }) =>
    isActive ? styles.activeStyle : styles.linkStyle;

  return (
    <>
      <header className={styles.headerContainer}>
        <Navbar bg="blue" variant="dark">
          {" "}
          {/* Set bg to "blue" */}
          <Container>
            <Navbar.Brand>
              <NavLink to={routes.HOME} className={linkStyles}>
                Home
              </NavLink>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to={routes.WEATHERDISPLAY} className={linkStyles}>
                  Current Weather
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={routes.CITYPAGE} className={linkStyles}>
                  City Weather Search
                </NavLink>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
