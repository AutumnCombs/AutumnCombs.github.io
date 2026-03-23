import profile from "/avi.jpg"

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Autumn Combs"
            className="w-72 h-72 object-cover rounded-2xl border border-slate-800 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-slate-400 mb-4">
            I'm a Full Stack Developer with a strong focus on building
            secure, scalable applications and cloud-based systems.
          </p>

          <p className="text-slate-400 mb-4">
            I enjoy working across the entire stack — from designing intuitive
            user interfaces to building backend services and deploying them in
            cloud environments.
          </p>

          <p className="text-slate-400">
            My background in cybersecurity allows me to approach development
            with a security-first mindset, ensuring the systems I build are both
            reliable and resilient.
          </p>

          <div className="flex gap-4 mt-6">
            <a
            href="https://github.com/AutumnCombs"
            className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm text-sky-400 hover:bg-slate-700 transition"
            target="_blank"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    >
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-1.03-.02-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.88 1.55 2.3 1.1 2.86.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.67.95.67 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                </svg>
            GitHub
            </a>
            <a
            href="https://linkedin.com/in/autumncombs/"
            className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm text-sky-400 hover:bg-slate-700 transition"
            target="_blank"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    >
                    <path d="M6.94 6.5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.5 8.5h3v12h-3v-12zM9.5 8.5h2.88v1.64h.04c.4-.75 1.37-1.64 2.82-1.64 3.01 0 3.56 2.06 3.56 4.74v7.26h-3v-6.44c0-1.54-.03-3.52-2.06-3.52-2.06 0-2.38 1.64-2.38 3.41v6.55h-3v-12z"/>
                </svg>
            LinkedIn
            </a>
            </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-8">
          What I Focus On
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-slate-800 p-6 rounded-xl hover:border-sky-400 transition">
            <h3 className="font-semibold mb-2">Full Stack Development</h3>
            <p className="text-slate-400 text-sm">
              Building responsive frontends and scalable backend systems using
              modern frameworks.
            </p>
          </div>

          <div className="border border-slate-800 p-6 rounded-xl hover:border-sky-400 transition">
            <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
            <p className="text-slate-400 text-sm">
              Designing and deploying applications using Docker, Kubernetes,
              and CI/CD pipelines.
            </p>
          </div>

          <div className="border border-slate-800 p-6 rounded-xl hover:border-sky-400 transition">
            <h3 className="font-semibold mb-2">Security Engineering</h3>
            <p className="text-slate-400 text-sm">
              Applying secure coding practices and testing systems using tools
              like OWASP ZAP and vulnerability analysis.
            </p>
          </div>
        {/* <h2 className="text-2xl font-semibold mb-8">
          Currently Learning
        </h2>

        <p className="text-slate-400 mt-4">
        Currently exploring low level programming to control satellites.
        </p> */}

        </div>
      </div>

      {/* Technologies / Interests */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">
          Technologies & Interests
        </h2>

        <div className="flex flex-wrap gap-3">

          {[
            "React",
            "Angular",
            "TypeScript",
            "C#",
            "Ruby",
            "Python",
            "Docker",
            "Kubernetes",
            "Helm",
            "AWS",
            "Azure",
            "PostgreSQL",
            "Sqlite",
            "Strudel",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-slate-800 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>
      </div>

    </section>
  )
}