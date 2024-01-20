// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from '../src/Components/NavBar';
import Hero from '../src/Components/Hero';
import Features from '../src/Components/Features';
import Projects from '../src/Components/Projects';
import Contact from '../src/Components/Contact';
import TeamSection from './Components/Team';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className='App container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>

                <Element name="hero">
                  <Hero />
                </Element>
                <Element name="features">
                  <Features />
                </Element>
                <Element name="projects">
                  <Projects />
                </Element>
                <Element name="team">
                  <TeamSection />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
