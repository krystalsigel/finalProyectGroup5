import React, { useContext } from "react";
import MyContext from "../MyContext";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const EnVenta = () => {
  const {
    infoUnificada,
    setInfoUnificada,
    filtroUnificada,
    setFiltroUnificada,
  } = useContext(MyContext);
  const { id } = useParams();

  return (
    <div>
      <Container>
        <Row sm={3} md={3} lg={3}>
          {infoUnificada.map((info) => (
            <main>
              <Card className="m-3" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={info.img} />
                <Card.Body>
                  <Card.Title>{info.name}</Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text className="text-center fs-2 fw-normal">
                    ${info.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </main>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EnVenta;
