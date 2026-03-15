import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <h2 className="text-3xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

    </section>
  )
}