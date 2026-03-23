interface Props {
  title: string
  description: string
  tech: string[]
  github: string
}

export default function ProjectCard({ title, description, tech, github }: Props) {
  return (
    <div className="border border-slate-800 p-6 rounded-xl hover:border-accent transition hover:border-sky-400 transition">

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-slate-400 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-slate-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <a
        href={github}
        className="text-accent text-sm"
      >
        View Repository →
      </a>

    </div>
  )
}