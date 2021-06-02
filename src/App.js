import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/Home';
import About from './components/About';
import SkillList from './components/Skills/SkillList';
import ProjectList from './components/Projects/ProjectList';
import Footer from './components/Footer';

function App() {
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
