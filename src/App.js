import Topbar from './topbar/Topbar.js';
import Footer from './Footer.js'
import Home from './pages/Home.js';
import Single from './Single.js';
import Write from './Write.js';
import About from './About.js';
import Contact from './Contact.js';
import Thanks from './Thanks.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
     <Topbar/>
    <Routes> 
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/> 
      <Route exact path='/write' element={<Write/>}/>  
      <Route exact path='/contact' element={<Contact/>}/> 
      <Route exact path='/single' element={<Single/>}/> 
      <Route exact path='/thanks' element={<Thanks/>}/>
  </Routes>
  <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
