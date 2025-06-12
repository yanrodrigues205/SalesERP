import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };
  return (<>
    <Container className="py-5">
      <Row className="justify-content-md-center">  
        <Col md={3}>
          <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit" className="w-100">
                    Entrar
                </Button>
            </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default LoginPage;
