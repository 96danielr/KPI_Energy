import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Columns from "../components/Columns";
import app from "../App.css"



const Home = () => {
  return (
    <div>
        <div className="title_container" style={{textAlign: "center"}} >
        <h1>Gestion Energética</h1>
        </div>
        <div className="subtitle_container" style={{textAlign: "left"}} >
        <h2>Producción Molinos</h2>
        </div>

        
    <Container fluid="md">
      <Row>
        <Col><Columns /></Col>
      </Row>
      <Row>
        <Col><Columns /></Col>
      </Row>
      <Row>
        <Col><Columns /></Col>
      </Row>
    </Container>
    
    </div>
  );
};

export default Home;
