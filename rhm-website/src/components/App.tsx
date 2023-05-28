import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import {Gallery} from './Gallery';
import Login from './Login';
import Room from './Room';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path='home' element={<Home/>}/>
          <Route path="gallery" element={<Gallery />} />
          <Route path="room" element={<Room />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
      {/* <Main></Main> */}
      <Footer></Footer>
    </div>
  );
}
export default App;
