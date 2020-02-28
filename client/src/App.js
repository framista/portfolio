import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import Skills from './components/skills'
import Header from './components/header'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <br></br>
        <div>

          jakikolwiek tekst

          </div>
        <Route path="/" exact component={About}></Route>
        <Route path="/skills" exact component={Skills}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
