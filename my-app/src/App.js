import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "./components/Row";
import Col from "./components/Col";
import Section from "./components/Section";
import Container from "./components/Container";
import Box from "./components/Box";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      {/* Desktop Layout */}
      <section id="top-bar">
        <Row className="12">
          <Col className="top-bar"></Col>
        </Row>
      </section>
      <section id="About-Me" className="About-Me">
        <Row className="row d-none d-md-flex min-vh-100">
            <Col className="4" >
              <Header className="header">About<br />Me</Header>
            </Col>
            <Col className="8">
              <Box className="about-me-box">
                <p>Blah Blah Blah</p>
              </Box>
            </Col>
        </Row>
        <Row className="row d-none d-md-flex min-vh-100">
            <Col className="12">
              <Box className="about-me-box">
                <p>Blah Blah Blah</p>
              </Box>
            </Col>
        </Row>
      </section>
      {/* Mobile Layout */}
      <section id="About-Me" className="About-Me">
        <div className="d-md-none">
          <div className="text-center p-4">
            <Header>About Me</Header>
          </div>
          <div className="p-4">
            <Box></Box>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
