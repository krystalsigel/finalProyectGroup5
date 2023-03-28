import React, { useContext, useState } from "react";
import MyContext from "../MyContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Importacion de componentes
import RegistroExitosoModal from "../components/ModalRegistro";

const EdicionUsuario = () => {
  const { setExito, editarUsuario, setEditarUsuario } = useContext(MyContext);

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [celular, setCelular] = useState("");
  const [error, setError] = useState(false);

  const validarRegistro = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      edad === "" ||
      direccion === "" ||
      correo === "" ||
      contrasena === "" ||
      celular === ""
    ) {
      setError(true);
    }
    if (error === false) {
      setExito(true);
    }
  };

  return (
    <div className="m-4 p-2">
      {editarUsuario.map((usuario) => (
        <Form onSubmit={validarRegistro}>
          <Form.Group className="mb-3">
            <Form.Control
              type="hidden"
              name="id_usuario"
              value={usuario.id_usuario}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Nombre y apellido (*)"
              value={usuario.nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="edad"
              placeholder="Edad (*)"
              value={usuario.edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="direccion"
              placeholder="Dirección (*)"
              value={usuario.direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="correo"
              placeholder="Correo electrónico (*)"
              value={usuario.correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="contraseña"
              placeholder="Contraseña (*)"
              value={usuario.contraseña}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="celular"
              placeholder="Número Celular(*)"
              value={usuario.celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="file"
              name="imagen"
              placeholder="Imagen (opcional)"
            />
          </Form.Group>

          {error ? <p>Debes completar los datos obligatorios</p> : null}

          <Button variant="primary" type="submit">
            {" "}
            Guardar cambios{" "}
          </Button>

          <RegistroExitosoModal />

          <h6> (*) Campos obligatorios </h6>
        </Form>
      ))}
    </div>
  );
};

export default EdicionUsuario;
