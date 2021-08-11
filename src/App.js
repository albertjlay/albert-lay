import './App.scss';
import Nav from './components/nav/Nav';
import Home from './components/Home';
import About from './components/About';
import SkillList from './components/Skills/SkillList';
import ProjectList from './components/Projects/ProjectList';
import Footer from './components/Footer';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-204749576-2');
    ReactGA.pageview('/');
  }, []);

  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <SkillList></SkillList>
      <ProjectList></ProjectList>
      <Footer></Footer>
    </div>
  );
}

export default App;
