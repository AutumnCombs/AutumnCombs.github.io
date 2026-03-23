import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
// import Blog from "./pages/Blog"
// import Skills from "./pages/Skills"
import About from "./pages/About"
// import Resume from "./pages/Resume"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 text-white min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/skills" element={<Skills />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
