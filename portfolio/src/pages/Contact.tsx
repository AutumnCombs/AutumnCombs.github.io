import { EnvelopeIcon } from "@heroicons/react/24/outline"

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">

      {/* Header */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Get in Touch
        </h1>

        <p className="text-slate-400">
          I'm always open to discussing new opportunities, collaborations,
          or interesting projects. Feel free to reach out.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">

        <a
          href="mailto:your@email.com"
          className="border border-slate-800 rounded-xl p-6 hover:border-sky-400 transition"
        >
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5, h-5"
        >
            <EnvelopeIcon/>
        </svg>
          <h3 className="font-semibold mb-2">Email</h3>
          <p className="text-slate-400 text-sm">combsau@mail.uc.edu</p>
        </a>

        <a
          href="https://github.com/AutumnCombs"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-800 rounded-xl p-6 hover:border-sky-400 transition"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-1.03-.02-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.88 1.55 2.3 1.1 2.86.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.67.95.67 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
            </svg>
          <h3 className="font-semibold mb-2">GitHub</h3>
          <p className="text-slate-400 text-sm">github.com/AutumnCombs</p>
        </a>

        <a
          href="https://linkedin.com/in/autumncombs/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-800 rounded-xl p-6 hover:border-sky-400 transition"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            >
            <path d="M6.94 6.5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.5 8.5h3v12h-3v-12zM9.5 8.5h2.88v1.64h.04c.4-.75 1.37-1.64 2.82-1.64 3.01 0 3.56 2.06 3.56 4.74v7.26h-3v-6.44c0-1.54-.03-3.52-2.06-3.52-2.06 0-2.38 1.64-2.38 3.41v6.55h-3v-12z"/>
        </svg>
          <h3 className="font-semibold mb-2">LinkedIn</h3>
          <p className="text-slate-400 text-sm">linkedin.com/in/autumncombs</p>
        </a>

      </div>

      {/* Form */}
      <div className="border border-slate-800 rounded-2xl p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Send a Message
        </h2>

        <form
          action="https://formspree.io/f/mwvrdrpa"
          method="POST"
          className="space-y-6"
        >

          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-400 transition shadow-lg shadow-sky-500/20"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}