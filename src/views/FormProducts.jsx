import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = () => {
  
  return (
    <Form className='formulario'>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Título de la publicación" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="file" placeholder="Adjunte imagen" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Indique un precio" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Descripción" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Número de contacto" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="Email" placeholder="Correo de contacto" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Publicar
      </Button>
    </Form>
  );
};

export default Formulario;