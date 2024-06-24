import React from 'react';
import Navbar from './componet/navbar';
import MainPage from './componet/MainPage';
import CardMen from './componet/CardMen';
import Cardgirl from './componet/Cardgirl';
import Footer from './componet/Footer';
import Fullpage from './componet/Fullpage';
import Contact from './componet/Contact';
import Ustate from './componet/Ustate';
import Input from './componet/Input';
import Form from './componet/Form';

// import Box from './componet/box';

// import './App.css';

function App() {
  return (
   <>
   {/* <Form></Form> */}
   {/* <Input></Input> */}
   {/* <Ustate></Ustate> */}
   <Navbar></Navbar>
   <MainPage></MainPage>
   <CardMen></CardMen>
   <Cardgirl></Cardgirl>
   <Fullpage></Fullpage>
   <Contact></Contact>
  <Footer></Footer>
  {/* <Box></Box> */}
  
 
   </>
  );
}

export default App;
