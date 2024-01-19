import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Button from "./layout/Button";
import About from "./components/About";
import Courses from "./components/Courses";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ActiveSlider from "./components/ActiveSlider";
import Price from "./components/Price";
import Counter from "./components/Counter";


const App = () => {
  return ( 
    
    <div>
      
      <Navbar/>
      
      
      <main>
        <div id="hero">
            <Hero/>
        </div>
        <div id="courses">
          <ActiveSlider/>
        </div>
        <div>
          <Price/>
        </div>
        <div>
        <Counter />
        </div>
        <div id="home">
          <Home/>
        </div>
        
        
        <div id="about">
          <About/>
        </div>
        <div id="Reviews">
          
        </div>
        <div>
        </div>
        <div id="Contact">
          <Contact/>
        </div>
      </main>

      <Footer/>
    </div>
    
  );
}

export default App;
