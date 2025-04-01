import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from "./components/Row";
import Col from "./components/Col";
import Section from "./components/Section";
import Container from "./components/Container";
import Box from "./components/Box";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Row>
        <Col className="col">This is a test</Col>
      </Row>
    </>
  );
}

export default App;
