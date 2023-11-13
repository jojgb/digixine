import { Navbar, Nav } from "react-bootstrap";
import useFitSize, { SIZE_MD } from "../../utils/useFitSize";
import Container from "react-bootstrap/Container";
import logoImage from "../../assets/iconHeadbar.png";
import messageImage from "../../assets/iconMessage.png";
import bellImage from "../../assets/iconBell.png";
import "./Headbar.css";
const Headbar = () => {
  const fitSize = useFitSize();
  return (
    <>
      <div className="app-container">
        <Navbar bg="light" expand={fitSize >= SIZE_MD ? "md" : "sm"}>
          <Container>
            <Nav className={fitSize >= SIZE_MD ? "mr-auto" : ""}>
              <img src={logoImage} alt="Logo" className="logo-img" />
              <Navbar.Brand className="nav-link-digixine">
                DigiXine
              </Navbar.Brand>
              <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link href="/services" className="nav-link">
                Services
              </Nav.Link>
              <Nav.Link href="/portofolio" className="nav-link">
                Portofolio
              </Nav.Link>
              <Nav.Link href="/blog" className="nav-link">
                Blog
              </Nav.Link>
              <Nav.Link href="/support" className="nav-link">
                Support
              </Nav.Link>
              <img src={messageImage} alt="Logo" className="logo-img-right" />
              {/* <hr className="divider"/> */}
              <img src={bellImage} alt="Logo" className="logo-img" />
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Headbar;
