import { NumberedListIcon } from "@heroicons/react/24/outline";
import NUTRON from "../assets/NUTRON.png"

export const projects = [
  {
    title: "DeepLynx Nexus",
    description:
      "Building full stack applications for deep learning and data analysis.",
    tech: ["React", "C#", ".Net", "Postgres", "DuckDB", "Figma", "LucidCharts", "Rust"],
    github: "#",
    image: NUTRON,
  },
  {
    title: "Nuclear Material Tracking Application - NUTRON",
    description:
      "Building full stack applications for nuclear material tracking.",
    tech: ["Angular", "Ruby", "Sqlite", "Postgres", "Whimsical"],
    github: "#",
    image: NUTRON,
  },
  {
    title: "CI/CD Security Pipeline",
    description:
      "Secure Jenkins pipeline running OWASP ZAP scans inside Kubernetes pods.",
    tech: ["Jenkins", "Kubernetes", "OWASP ZAP", "Docker", "Helm Charts"],
    github: "#"
  },
  {
    title: "Linux Kernel Rootkit Analysis",
    description:
      "Research and analysis of the Suterusu kernel rootkit.",
    tech: ["C", "Linux", "Kernel Modules"],
    github: "#"
  },
  {
    title: "React Portfolio Web App",
    description:
      "Full stack portfolio built with React, TypeScript and Tailwind.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "#"
  },
  {
    title: "Strudel Dynamic Music",
    description:
      "Live coding EDM and house music on Strudel using JavaScript and Haskell.",
    tech: ["JavaScript", "Haskell", "Tidalcycles"],
    github: "#"
  }
]