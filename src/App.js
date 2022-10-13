import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogMore from './components/BlogMore';
import About from './pages/AboutUs/About';
import Blog from './pages/Blog/Blog';
import ContactUs from './pages/ContactUs/ContactUs';
import HomePage from './pages/Home/HomePage';
import OurWork from './pages/OurWork/OurWork';
import Nav from './components/Sample';
import SNavbar from './components/SNavbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<About />} path='/about-us' />
          <Route element={<OurWork />} path='/our-work' />
          <Route element={<Blog />} path='/blog' />
          <Route element={<BlogMore />} path='/view-more' />
          <Route element={<ContactUs />} path='/contact-us' />
          <Route element={<Nav />} path='/header' />
          <Route element={<SNavbar />} path='/sample' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
