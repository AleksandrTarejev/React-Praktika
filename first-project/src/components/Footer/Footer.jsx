import "./Footer.css";
import Nav from "react-bootstrap/Nav";
import FooterComponent from "../FooterComponent/FooterComponent.jsx";
const Footer = (props) => {
  return (
    <>
      <footer>
        <FooterComponent />
        <FooterComponent />
        <FooterComponent />
        <FooterComponent />

        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">{props.home}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">{props.link1}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">{props.link2}</Nav.Link>
          </Nav.Item>
        </Nav>
      </footer>
    </>
  );
};

export default Footer;
