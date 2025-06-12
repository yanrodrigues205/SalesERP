import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function TwoFactorPage() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const [timeLeft, setTimeLeft] = useState(0);

  // Define o tempo final (agora + 3 minutos)
  useEffect(() => {
    const end = new Date(Date.now() + 3 * 60 * 1000); // 3 minutos
    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.max(0, Math.floor((end - now) / 1000));
      setTimeLeft(diff);
      if (diff === 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-md-center">
        <Col md={3} className="text-center">
          <h2>Verificação em duas etapas</h2>
          <p className="mb-4">Digite o código de 6 dígitos enviado para você:</p>
          <div className="mb-3"><strong>{formatTime()}</strong></div>
          <div className="d-flex justify-content-between mb-3">
            {code.map((value, index) => (
              <Form.Control
                key={index}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                className="text-center mx-1"
                style={{ width: "45px", fontSize: "24px" }}
              />
            ))}
          </div>
          <Button variant="primary" className="w-100">Verificar</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default TwoFactorPage;
