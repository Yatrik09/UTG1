import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar.jsx";
import About from "./component/About/About.jsx";
import Blog from "./component/Blog/Blog.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Home from "./component/Home1/Home.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Team from "./component/About/Team/Team.jsx";
import City from "./component/City/City.jsx";

import { ToastContainer } from "react-toastify";
import Guide from "./component/guide/guide.jsx";

function Layout() {
  const location = useLocation();
  const hideNavbarFooter = ["/login", "/sign"].includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/city" element={<City />} />
       
      </Routes>
      <ToastContainer />
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
