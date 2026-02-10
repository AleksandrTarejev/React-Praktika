import "./Article.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Article = (props) => {
  return (
    <>
      <Container>

        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={props.img} style={{ height: "16rem" }} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Article;
