import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
      <h1 className="text-xl font-bold">Autumn Combs</h1>

      <div className="flex gap-6 text-sm">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Writeups</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}