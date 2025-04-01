import logo from './logo.svg';
import './App.css';
import Section from "./components/Section";
import Container from "./components/Container";
import Box from "./components/Box";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Section id="About-Me" className="sections">
        <div id="top" />
        <Header className="header">About<br />Me</Header>
        <Box className=""></Box>
        <Box className=""></Box>
        <Box className=""></Box>
      </Section>
      <Section id="Certifications" className="sections"></Section>
      <Section id="Projects" className="sections"></Section>
      <Section id="Contact" className="sections"></Section>
      
    </>
  );
}

export default App;
