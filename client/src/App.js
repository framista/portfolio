import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import Skills from './components/skills'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>Header</div>
        <Route path="/about" component={About}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
