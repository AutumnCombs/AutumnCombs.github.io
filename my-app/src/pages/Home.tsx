import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-6">

      <h1 className="text-5xl font-bold mb-6">
        Full Stack Software Engineer
      </h1>

      <p className="text-slate-400 text-lg mb-10">
        I build secure full stack web applications, developer tools,
        and cloud infrastructure with a focus on scalable systems
        and modern development practices.
      </p>

      <div className="flex gap-4">

        <Link
          to="/projects"
          className="bg-accent text-black px-6 py-3 rounded-lg flex items-center gap-2"
        >
          View Projects
          <ArrowRightIcon className="w-4"/>
        </Link>

        <a
          href="/resume.pdf"
          className="border border-slate-700 px-6 py-3 rounded-lg"
        >
          Resume
        </a>

      </div>

    </section>
  )
}