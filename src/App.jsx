import { Routes, Route } from 'react-router-dom';
import './App.css';



function App() {


  return (
    <>

   
      <Navbar />
      <div>
      

          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inam" element={<Inam />} />



          </Routes> */}

            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inam" element={<Inam />} />
            <Route path= "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
          </Routes>


    
      </div>
    </>

  );



}

export default App;
