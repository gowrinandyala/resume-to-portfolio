import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Github, Linkedin, ArrowUpRight, GraduationCap, Award } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gowri Nandyala — Python Full Stack Developer" },
      { name: "description", content: "Portfolio of Nandyala Lakshmi Satya Siva Gowri, aspiring Python Full Stack Developer and AI/ML student." },
      { property: "og:title", content: "Gowri Nandyala — Python Full Stack Developer" },
      { property: "og:description", content: "Projects, skills, education and certifications of Gowri Nandyala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { group: "Frontend", items: ["HTML", "CSS"] },
  { group: "Languages", items: ["JavaScript", "Python", "Core Java", "SQL"] },
  { group: "Data", items: ["Pandas"] },
  { group: "Tools", items: ["GitHub", "VS Code", "MS Excel", "Google Sheets"] },
];

const certs = [
  { name: "Python Course", by: "Infosys Springboard", date: "Nov 2024" },
  { name: "AI Skills Passport", by: "EY & Microsoft", date: "" },
  { name: "GenAI Powered Data Analytics Job Simulation", by: "Tata & Forage", date: "Jun 2025" },
  { name: "Python Full Stack Developer Virtual Internship", by: "AICTE & EduSkills Academy", date: "Jan–Mar 2026" },
];

const stages = ["New", "Contacted", "Interested", "Follow-up", "Enrolled"];

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-8 border-t border-border py-16 md:grid-cols-[220px_1fr]">
      <div>
        <span className="text-sm text-primary">{n}</span>
        <h2 className="mt-1 text-3xl">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <nav className="flex items-center justify-between py-6 text-sm">
        <span className="font-display text-lg">Gowri.</span>
        <a href="mailto:nandyalagowri@gmail.com" className="rounded-full border border-foreground px-4 py-1.5 transition hover:bg-foreground hover:text-background">
          Get in touch
        </a>
      </nav>

      <header className="py-20 md:py-28">
        <p className="animate-rise text-sm uppercase tracking-[0.2em] text-muted-foreground">Python Full Stack Developer · AI/ML Student</p>
        <h1 className="animate-rise mt-6 text-5xl leading-[1.05] md:text-8xl" style={{ animationDelay: "0.1s" }}>
          Nandyala Lakshmi <br />
          <em className="text-primary">Satya Siva Gowri</em>
        </h1>
        <p className="animate-rise mt-8 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: "0.2s" }}>
          Passionate about building responsive, user-friendly web applications — and always learning by contributing to real-world projects.
        </p>
        <div className="animate-rise mt-10 flex flex-wrap gap-3 text-sm" style={{ animationDelay: "0.3s" }}>
          <a href="mailto:nandyalagowri@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition hover:opacity-90"><Mail className="h-4 w-4" /> nandyalagowri@gmail.com</a>
          <a href="tel:8688650155" className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5"><Phone className="h-4 w-4" /> 8688650155</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5"><Github className="h-4 w-4" /> GitHub</a>
        </div>
      </header>

      <Section n="01" title="Featured project">
        <article className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl md:text-3xl">Student Lead & Course Management System</h3>
            <ArrowUpRight className="h-6 w-6 shrink-0 text-primary" />
          </div>
          <p className="mt-4 text-muted-foreground">
            A Python system to manage student leads, course interests, follow-ups and enrollment — with interest-based course recommendations and conversion analytics in Pandas, exported to Excel reports.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {stages.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs ${i === stages.length - 1 ? "bg-accent text-accent-foreground" : "bg-muted"}`}>{s}</span>
                {i < stages.length - 1 && <span className="text-muted-foreground">→</span>}
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-2 text-xs text-primary">
            {["Python", "Pandas", "Excel"].map((t) => <span key={t} className="rounded border border-primary/40 px-2 py-0.5">{t}</span>)}
          </div>
        </article>
      </Section>

      <Section n="02" title="Skills">
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group}>
              <p className="text-sm text-muted-foreground">{s.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => <span key={i} className="rounded-full bg-secondary px-4 py-1.5 text-sm">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section n="03" title="Education">
        <div className="space-y-6">
          {[
            { d: "B.Tech in Artificial Intelligence & Machine Learning", s: "Srinivasa Institute of Engineering and Technology", y: "2023 – 2027", g: "8.4" },
            { d: "Higher Secondary Education", s: "Siddartha Junior College", y: "2020 – 2022", g: "8.0" },
          ].map((e) => (
            <div key={e.d} className="flex gap-4">
              <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div className="flex-1">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="text-xl">{e.d}</h3>
                  <span className="text-sm text-muted-foreground">{e.y}</span>
                </div>
                <p className="text-muted-foreground">{e.s} · CGPA <span className="font-semibold text-foreground">{e.g}</span>/10</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section n="04" title="Certifications">
        <ul className="divide-y divide-border">
          {certs.map((c) => (
            <li key={c.name} className="flex items-start gap-4 py-4">
              <Award className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div className="flex-1">
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-muted-foreground">{c.by}</p>
              </div>
              <span className="text-sm text-muted-foreground">{c.date}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section n="05" title="Languages">
        <p className="font-display text-3xl">Telugu · English · Hindi</p>
      </Section>

      <footer className="border-t border-border py-16 text-center">
        <h2 className="text-4xl md:text-6xl">Let's build something <em className="text-primary">together.</em></h2>
        <a href="mailto:nandyalagowri@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background">
          Say hello <ArrowUpRight className="h-4 w-4" />
        </a>
      </footer>
    </main>
  );
}
