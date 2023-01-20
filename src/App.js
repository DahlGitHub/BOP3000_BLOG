import { Routes, Route, Router } from "react-router-dom";

import Home from "./pages/home/Home";
import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App (){
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
