import React,{useState} from 'react';
import { Provider } from 'react-redux'
// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Gallery from './components/Gallery/Gallery';
import store from './components/redux/store';


const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });


  return (
    <div className='overflow-hidden py-10'>
      {/* <Header/> */}
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Gallery/>} /> 
          </Routes>
        </BrowserRouter>
      {/* <Footer /> */}
      </Provider>
    </div>
  );
};

export default App;
