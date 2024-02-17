import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export default class Footer extends Component {
  render() {
    return (
        <footer className="mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <h5>À propos</h5>
              <p>Dans Le temps est un projet visant à raconter des histoires de la culture africaine</p>
            </Col>
            <Col md={4}>
              <h5>Contacts</h5>
              <p>Email: dansletempsstories@gmail.com</p>
              <p>Téléphone: +33 6 56 89 93 52</p>
            </Col>
            <Col md={4}>
              <h5>Suivez-Nous</h5>
              <p>Contactez-nous sur nos réseaux sociaux:</p>
              <div>
                <a href="#facebook">Facebook</a>{' '}
                <a href="#twitter">Twitter</a>{' '}
                <a href="#linkedin">LinkedIn</a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center py-3">
          <p>&copy; 2024 Dans Le Temps Tous droits reservés.</p>
        </div>
      </footer>
    )
  }
}
