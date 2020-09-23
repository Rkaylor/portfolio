import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{
  constructor(props){
super(props); 
this.state = {
  title: 'Robert Kaylor',
  headerLinks: [
    { title:"Home", path: "/"},
    { title:"About", path: "/about"},
    { title:"Contact", path: "/contact"},
  ],
  home: {
    title:"I'm Robert a Web Designer",
    subtitle:"Projects",
    subtext:"Visit my Projects"
  },
  about: {
    title:"About Me"
    
  },
  contact: {
    title:"Send me a Message!"
    
  }
    
    }
  }

render() {
  return (
    
    <Router>
    <Container className="p-0"fluid={true} >
    <p>hello</p>
    </Container>

    </Router>
    
    );
  }
}
export default App;
