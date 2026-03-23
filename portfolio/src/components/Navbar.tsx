// import { Link } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800 backdrop-blur">
//       <h1 className="text-xl font-bold tracking-tight">Autumn Combs</h1>

//       <div className="flex gap-6 text-sm">
//         <Link to="/">Home</Link>
//         <Link to="/projects">Projects</Link>
//         <Link to="/blog">Writeups</Link>
//         <Link to="/skills">Skills</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//     </nav>
//   )
// }

import { Link, useLocation } from "react-router-dom"
// import LogoTrans from "../assets/LogoTrans.png"

export default function Navbar() {
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Writeups", path: "/blog" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800 backdrop-blur">

      <h1 className="text-xl font-bold tracking-tight">
        {/* <img src={LogoTrans} alt="Logo" className="h-8 w-8 mr-2" /> */}
        Autumn Combs
      </h1>

      <div className="flex gap-6 text-sm">

        {navItems.map((item) => {
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-full transition-all duration-200
                ${isActive
                  ? "bg-sky-500 text-white shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
            >
              {item.name}
            </Link>
          )
        })}

      </div>
    </nav>
  )
}