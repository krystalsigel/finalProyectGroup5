import React, { useContext, useState } from 'react';

import MyContext from '../MyContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Importacion de componentes
import RegistroExitosoModal from '../components/ModalRegistro';

const Registro = () => {
  const { setExitoRegistro } = useContext(MyContext);
  
  const [ nombre, setNombre ] = useState("");
  const [ edad, setEdad ] = useState("");
  const [ direccion, setDireccion ] = useState("");
  const [ correo, setCorreo ] = useState("");
  const [ contrasena, setContrasena ] = useState("");
  const [ celular, setCelular ] = useState("");
  const [ error, setError ] = useState(false);
  
  
  const preventRegistro = (e) => {
    e.preventDefault()
    if(nombre === "" || edad === "" || direccion === ""
        || correo === "" || contrasena === "" || celular === "" ) 
      { setError(true)}
    if ( error === false) {
        setExitoRegistro(true)}
 };


      
  return (
    <div className='registroEdit'>
      <Form onSubmit={preventRegistro}>
      <Form.Group className="mb-3">          
          <Form.Control type="hidden"
                        name="id_usuario"
          />
        </Form.Group>

        <Form.Group className="mb-3">          
          <Form.Control type="text"
                        name="nombre"
                        placeholder="Nombre y apellido (*)"
                        onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text"
                        name="edad"
                        placeholder="Edad (*)"
                        onChange={(e) => setEdad(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text"
                        name="direccion"
                        placeholder="Dirección (*)"
                        onChange={(e) => setDireccion(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="email"
                        name="correo"
                        placeholder="Correo electrónico (*)"
                        onChange={(e) => setCorreo(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password"
                        name="contraseña"
                        placeholder="Contraseña (*)" 
                        onChange={(e) => setContrasena(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text"
                        name="telefono"
                        placeholder="Número Celular(*)"
                        onChange={(e) => setCelular(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="file"
                        name="imagen"
                        placeholder="Imagen (opcional)" />
        </Form.Group>
        
        {error ? <p>Debes completar los datos obligatorios</p> : null}
        
        <Button variant="primary" type="submit"> Registrarse </Button>

        < RegistroExitosoModal />
        
      <h6> (*) Campos obligatorios </h6> 
      </Form>
    </div>
  )
  };

export default Registro;