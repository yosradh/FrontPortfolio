import { useEffect } from "react"
import Hero from "./Components/2-hero/Hero"
import DetailsCard from "./Components/3-content/DetailsCard"
import Content from "./Components/3-content/content"
import Contact from "./Components/4-contact/contact"
import Footer from "./Components/5-footer/footer"
import Competances from "./Components/6-Comptences/Competances"
import About from "./Components/About/about"
import NoPage from "./Components/NoPage"
import Tools from "./Components/Tools/Tools"
import './index.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/1-header/Header"

function App() {


  return (
    <div className="containerApp">
        <Header />

          <Routes>
              <Route index path="/" element={<Hero />} />
              <Route index path="/about" element={<About />} />
              <Route index path="/competances" element={<Competances />} />
              <Route path="/project" element={<Content />} />
              <Route path="/project/:id" element={<DetailsCard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/*" element={<NoPage />} />
          </Routes>

        <div className="divider" />
        <Footer />

    </div>
  )
}

export default App
