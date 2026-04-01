interface Props {
  title: string
  description: string
  tech: string[]
  github: string
  image?: string
}

export default function ProjectCard({ title, description, tech, github, image }: Props) {
  return (
    <div className="border border-slate-800 p-6 rounded-xl hover:border-accent transition hover:border-sky-400 transition">
      
      {image && (
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-80 object-cover"
        />
      )}
      
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

// export default function ProjectCard({ title, description, tech, github, image }: Props) {
//   return (
//     <div className="border border-slate-800 rounded-xl hover:border-sky-400 transition overflow-hidden">
//       <div className="flex items-center gap-4 p-6">

//         {/* Text — grows to fill available space */}
//         <div className="flex-1">
//           <h3 className="text-xl font-semibold mb-2">
//             {title}
//           </h3>

//           <p className="text-slate-400 mb-4">
//             {description}
//           </p>

//           <div className="flex flex-wrap gap-2 mb-4">
//             {tech.map((t) => (
//               <span key={t} className="text-xs bg-slate-800 px-2 py-1 rounded">
//                 {t}
//               </span>
//             ))}
//           </div>

//           <a href={github} className="text-accent text-sm">
//             View Repository →
//           </a>
//         </div>

//         {/* Image — fixed size on the right */}
//         {image && (
//           <img
//             src={image}
//             alt={`${title} preview`}
//             className="w-60 h-80 object-contain rounded-lg shrink-0"
//           />
//         )}

//       </div>
//     </div>
//   )
// }