import React, { useContext } from "react";
import MyContext from "../MyContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col } from "react-bootstrap";

const Perfil = () => {
  const { users } = useContext(MyContext);
  const { id_us } = useParams();
  const navigate = useNavigate();
  console.log(users);

  return (
    <div>
      {users
        .filter((user) => user.id_usuario === id_us)
        .map((us) => (
          <div className="contenedor m-5" key={us.id_usuario}>
            <ListGroup className="list">
              <ListGroup.Item>{us.nombre}</ListGroup.Item>
              <ListGroup.Item>{us.edad}</ListGroup.Item>
              <ListGroup.Item>{us.direccion}</ListGroup.Item>
              <ListGroup.Item>{us.correo}</ListGroup.Item>
              <ListGroup.Item>{us.contrasena}</ListGroup.Item>
              <ListGroup.Item>{us.telefono}</ListGroup.Item>
              <Row>
                <Col>
                  <img src={us.imagen} alt="imagen usuario" />
                </Col>
              </Row>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  navigate(`/enventa/${id_us}`);
                }}
              >
                Mis productos en venta
              </Button>

              <Button
                variant="secondary"
                type="submit"
                onClick={() => {
                  navigate(`/editarusuario/`);
                }}
              >
                Editar Perfil
              </Button>
            </ListGroup>
          </div>
        ))}
    </div>
  );
};

export default Perfil;
