import React, { useState, useContext } from 'react';

import MyContext from '../MyContext';

import { useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
  const { users, setExitoLogin } = useContext(MyContext);
  const { id_us } = useParams();

  const [ correoIngresado, setCorreoIngresado ] = useState("");
  const [ contrasenaIngresada, setContrasenaIngresada ] = useState("");
  const [ mapLog, setMapLog ] = useState([]);
  const [ err, setErr ] = useState(false);
  const [ incorrecto, setIncorrecto ] = useState(false);

  console.log(mapLog)

  const HandleLoginSesion = (e) => {
    e.preventDefault()
    if(correoIngresado === "" || contrasenaIngresada === "" ) {
      setErr(true)
    };

    const mapToLogin = users.map(us => {
            return{
              idUser: us.id_usuario,
              emailUser: us.correo,
              passUser: us.contrasena
            }
          }
    )
      setMapLog(mapToLogin)
    
    
    mapLog.map(m => {
      if(m.idUser === id_us && m.emailUser === correoIngresado && m.passUser === contrasenaIngresada) {
        // setExitoLogin(true)
          console.log("Credenciales válidas")}
        if ( incorrecto === false) {
          setIncorrecto(true)
        }
    })  
  };
    
  return (
    <Form className='login' onSubmit={HandleLoginSesion}>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Control type="hidden"
                      name="idusuario"
                      value={id_us}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email"
                      name="correo"
                      placeholder="Correo electrónico"
                      onChange ={(e) => setCorreoIngresado(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password"
                      name="contraseña"
                      placeholder="Contraseña"
                      onChange ={(e) => setContrasenaIngresada(e.target.value)}
                      />
        </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar Sesión 
      </Button>
      { err ? <p>Debes ingresar todos los datos</p> : null}
      { incorrecto ? <p>Los datos ingresados son incorrectos</p> : null}
    </Form>
  );
};

export default Login;