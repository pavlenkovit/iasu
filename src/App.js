import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';
import Fixes from './scenes/Fixes';
import Works from './scenes/Works';
import Structure from './scenes/Structure';

function App() {
  return (
    <HashRouter>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand as="strong">
            <Link to="/">MacBook</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Устранение неисправностей</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/works">Регламентные работы</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/structure">Структура ИЭТР</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col lg="10">
            <Switch>
              <Route path="/" component={Fixes} exact />
              <Route path="/works" component={Works} exact />
              <Route path="/structure" component={Structure} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
