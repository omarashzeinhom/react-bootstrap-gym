import './App.css';

//Components 
import { NavigationBar, Footer } from './Components/index';
//Sections
import { About, Services, Contact, Home } from './Sections/index';
//bootstrap css styles
import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';


function App() {
  return (
    <div className="App">
      <NavigationBar  fixed="top"/>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
