import "./Aside.css";
import Accordion from 'react-bootstrap/Accordion';

const Aside = (props) => {
  return (
    <>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.header}</Accordion.Header>
        <Accordion.Body>
          {props.body}
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
};

export default Aside;