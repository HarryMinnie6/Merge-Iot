import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ComingSoon from "./Pages/ComingSoonPage/ComingSoon";
import About from "./Pages/AboutPage/About";
import Home from "./Pages/HomePage/Home";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Pages/ServicesPage/Services";
import Solutions from "./Pages/Solutions/Solutions";
import Contact from "./Pages/ContactPage/Contact";
import Partners from "./Pages/PartnersPage/Partners";
import Blog from "./Pages/Blog&NewsPage/Blog";

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path='/contact'>
          <Navbar/>
            <Contact />
          </Route>
          <Route path='/partners'>
          <Navbar/>
            <Partners />
          </Route>
          <Route path='/blog'>
          <Navbar/>
            <Blog />
          </Route>
          <Route path='/solutions'>
          <Navbar/>
            <Solutions />
          </Route>
          <Route path='/services'>
          <Navbar/>
            <Services />
          </Route>
          <Route path='/about'>
          <Navbar/>
            <About />
          </Route>

          <Route path='/'>
          <ComingSoon />
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
