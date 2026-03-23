// import { ArrowRightIcon } from "@heroicons/react/24/outline"
// import { Link } from "react-router-dom"

// export default function Home() {
//   return (
//     <section className="max-w-5xl mx-auto py-24 px-6">

//       <h1 className="text-5xl font-bold mb-6">
//         Full Stack Developer
//       </h1>

//       <p className="text-slate-400 text-lg mb-10">
//         I build secure full stack web applications, developer tools,
//         and cloud infrastructure with a focus on scalable systems
//         and modern development practices.
//       </p>

//       <div className="flex gap-4">

//         <Link
//           to="/projects"
//           className="bg-accent text-black px-6 py-3 rounded-lg flex items-center gap-2"
//         >
//           View Projects
//           <ArrowRightIcon className="w-4"/>
//         </Link>

//         <a
//           href="/resume.pdf"
//           className="border border-slate-700 px-6 py-3 rounded-lg"
//         >
//           Resume
//         </a>

//       </div>

//     </section>
//   )
// }

import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">

      {/* Main Content */}
      <div className="max-w-3xl">

        <p className="text-sm text-sky-400 mb-4">
          Autumn Combs - Full Stack Developer
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Building secure, scalable{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            full stack applications
          </span>
        </h1>

        <p className="text-slate-400 text-lg mb-10">
          I design and build modern web applications, developer tools,
          and cloud infrastructure with a focus on security, performance,
          and clean architecture.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <Link
            to="/projects"
            className="group bg-sky-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-sky-400 transition shadow-lg shadow-sky-500/20"
          >
            View Projects
            <ArrowRightIcon className="w-4 transition group-hover:translate-x-1" />
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition"
          >
            Resume
          </a>

        </div>

      </div>

      {/* Optional bottom section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div className="border border-slate-800 rounded-xl p-4">
          <p className="text-xl font-semibold">Full Stack</p>
          <p className="text-xs text-slate-400">React • APIs • Databases</p>
        </div>

        <div className="border border-slate-800 rounded-xl p-4">
          <p className="text-xl font-semibold">Cloud</p>
          <p className="text-xs text-slate-400">AWS • Docker • Kubernetes</p>
        </div>

        <div className="border border-slate-800 rounded-xl p-4">
          <p className="text-xl font-semibold">Security</p>
          <p className="text-xs text-slate-400">OWASP • CI/CD • Testing</p>
        </div>

        <div className="border border-slate-800 rounded-xl p-4">
          <p className="text-xl font-semibold">DevOps</p>
          <p className="text-xs text-slate-400">Pipelines • Automation</p>
        </div>

      </div>

    </section>
  )
}