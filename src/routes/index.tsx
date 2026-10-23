import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Mail, Phone, Github, Linkedin, ArrowUpRight, GraduationCap, Award, MapPin } from "lucide-react";

import momentStudy from "@/assets/moment-study.jpg";
import momentTeam from "@/assets/moment-team.jpg";
import momentConvocation from "@/assets/moment-convocation.jpg";
import momentChai from "@/assets/moment-chai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gowri Nandyala — Python Full Stack Developer" },
      { name: "description", content: "Portfolio of Nandyala Lakshmi Satya Siva Gowri — aspiring Python Full Stack Developer and AI/ML student, with projects, skills, education and moments." },
      { property: "og:title", content: "Gowri Nandyala — Python Full Stack Developer" },
      { property: "og:description", content: "Projects, skills, education, certifications and moments from the journey of Gowri Nandyala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LINKEDIN = "https://www.linkedin.com/in/gowri-nandyala-197834322";
const GITHUB = "https://github.com/gowrinandyala";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#moments", label: "Moments" },
];

const ticker = ["Python", "Pandas", "JavaScript", "Core Java", "SQL", "HTML", "CSS", "GitHub", "MS Excel", "Google Sheets", "AI / ML"];

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

const moments = [
  {
    src: momentStudy,
    w: 1024,
    h: 1280,
    title: "Where it started",
    note: "A sunlit classroom, a laptop, and notes that never stopped filling up.",
    when: "2023",
    tilt: "-rotate-2",
    shift: "lg:translate-y-0",
    ratio: "aspect-[4/5]",
  },
  {
    src: momentTeam,
    w: 1280,
    h: 1024,
    title: "The whiteboard years",
    note: "Sticky notes, half-finished diagrams, and a team that kept showing up.",
    when: "2025",
    tilt: "rotate-2",
    shift: "lg:translate-y-10",
    ratio: "aspect-[5/4]",
  },
  {
    src: momentChai,
    w: 1024,
    h: 1280,
    title: "Chai & code",
    note: "Most lines were written at this table, one cup at a time.",
    when: "Every day",
    tilt: "rotate-1",
    shift: "lg:translate-y-4",
    ratio: "aspect-[4/5]",
  },
  {
    src: momentConvocation,
    w: 1280,
    h: 1024,
    title: "Caps in the air",
    note: "The kind of evening that makes the late nights make sense.",
    when: "2026",
    tilt: "-rotate-1",
    shift: "lg:translate-y-14",
    ratio: "aspect-[5/4]",
  },
];

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-shown={shown} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Section({ n, title, id, blurb, children }: { n: string; title: string; id?: string; blurb?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 grid gap-10 border-t border-border py-20 md:grid-cols-[220px_1fr] md:gap-16">
      <div className="md:sticky md:top-24 md:self-start">
        <span className="font-display text-sm text-primary">{n}</span>
        <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
        {blurb && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{blurb}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <div className="grain" aria-hidden="true" />

      <nav className="sticky top-0 z-40 -mx-6 border-b border-border/70 bg-background/85 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between text-sm">
          <a href="#top" className="font-display text-lg tracking-tight">Gowri<span className="text-primary">.</span></a>
          <div className="hidden items-center gap-8 text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
            ))}
          </div>
          <a href="mailto:nandyalagowri@gmail.com" className="rounded-full border border-foreground px-4 py-1.5 transition hover:bg-foreground hover:text-background">
            Get in touch
          </a>
        </div>
      </nav>

      <header id="top" className="py-20 md:py-28">
        <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Open to internships &amp; entry-level roles
        </span>

        <h1 className="animate-rise mt-7 text-5xl leading-[1.03] tracking-tight md:text-8xl" style={{ animationDelay: "0.1s" }}>
          Nandyala Lakshmi <br />
          <em className="text-primary">Satya Siva Gowri</em>
        </h1>

        <div className="animate-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground" style={{ animationDelay: "0.18s" }}>
          <span className="uppercase tracking-[0.2em]">Python Full Stack Developer</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span>AI &amp; Machine Learning student</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> India</span>
        </div>

        <p className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "0.24s" }}>
          I build responsive, user-friendly web applications — and I learn fastest by contributing to real projects, breaking things, and fixing them properly.
        </p>

        <div className="animate-rise mt-10 flex flex-wrap gap-3 text-sm" style={{ animationDelay: "0.3s" }}>
          <a href="mailto:nandyalagowri@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90">
            <Mail className="h-4 w-4" /> nandyalagowri@gmail.com
          </a>
          <a href="tel:8688650155" className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 transition hover:-translate-y-0.5">
            <Phone className="h-4 w-4" /> 8688650155
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 transition hover:-translate-y-0.5">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 transition hover:-translate-y-0.5">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </header>

      <div className="marquee overflow-hidden border-y border-border py-3" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center gap-7 pr-7 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {ticker.map((t) => (
                <span key={t} className="flex items-center gap-7">
                  {t}
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Section n="01" id="work" title="Featured project" blurb="A lead-to-enrollment system I designed, built and analysed end to end.">
        <Reveal>
          <article className="group rounded-2xl bg-card p-8 ring-1 ring-border transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_var(--foreground)] md:p-10">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl leading-tight md:text-3xl">Student Lead &amp; Course Management System</h3>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              A Python system to manage student leads, course interests, follow-ups and enrollment — with interest-based course recommendations and conversion analytics in Pandas, exported to Excel reports.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {stages.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs transition-colors ${i === stages.length - 1 ? "bg-accent text-accent-foreground" : "bg-muted"}`}>{s}</span>
                  {i < stages.length - 1 && <span className="text-muted-foreground">→</span>}
                </div>
              ))}
            </div>

            <div className="mt-7 flex gap-2 text-xs text-primary">
              {["Python", "Pandas", "Excel"].map((t) => (
                <span key={t} className="rounded border border-primary/40 px-2 py-0.5">{t}</span>
              ))}
            </div>
          </article>
        </Reveal>
      </Section>

      <Section n="02" id="skills" title="Skills" blurb="The tools I reach for, grouped by what they help me build.">
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 80}>
              <div className="rounded-xl border border-transparent p-4 transition duration-500 hover:border-border hover:bg-card/70">
                <p className="text-sm text-muted-foreground">{s.group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-full bg-secondary px-4 py-1.5 text-sm transition duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section n="03" id="education" title="Education" blurb="Where the fundamentals come from.">
        <div className="space-y-8">
          {[
            { d: "B.Tech in Artificial Intelligence & Machine Learning", s: "Srinivasa Institute of Engineering and Technology", y: "2023 – 2027", g: "8.4" },
            { d: "Higher Secondary Education", s: "Siddartha Junior College", y: "2020 – 2022", g: "8.0" },
          ].map((e, i) => (
            <Reveal key={e.d} delay={i * 90}>
              <div className="flex gap-4">
                <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div className="flex-1 border-b border-border pb-6">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="text-xl leading-snug">{e.d}</h3>
                    <span className="text-sm text-muted-foreground">{e.y}</span>
                  </div>
                  <p className="mt-1 text-muted-foreground">
                    {e.s} · CGPA <span className="font-semibold text-foreground">{e.g}</span>/10
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section n="04" title="Certifications" blurb="Courses and simulations I finished outside the classroom.">
        <ul className="divide-y divide-border">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <li className="group flex items-start gap-4 py-5 transition-colors hover:bg-card/60">
                <Award className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="flex-1">
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.by}</p>
                </div>
                <span className="text-sm text-muted-foreground">{c.date}</span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section n="05" id="moments" title="Moments" blurb="A few frames from the journey so far — the studying, the teamwork, and the small rituals in between.">
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map((m, i) => (
            <Reveal key={m.title} delay={i * 90}>
              <figure className={`polaroid group ${m.tilt} ${m.shift} transition-transform duration-500 hover:rotate-0 hover:-translate-y-2`}>
                <div className={`overflow-hidden bg-muted ${m.ratio}`}>
                  <img
                    src={m.src}
                    alt={m.title}
                    loading="lazy"
                    width={m.w}
                    height={m.h}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <figcaption className="px-1 pb-4 pt-3">
                  <p className="font-display text-lg leading-tight">{m.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{m.note}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-primary">{m.when}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section n="06" title="Languages">
        <p className="font-display text-3xl md:text-4xl">Telugu · English · Hindi</p>
      </Section>

      <footer id="contact" className="scroll-mt-24 border-t border-border py-20 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Available for the next opportunity</p>
          <h2 className="mt-5 text-4xl leading-[1.05] md:text-6xl">
            Let&apos;s build something <em className="text-primary">together.</em>
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:nandyalagowri@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background transition hover:-translate-y-0.5">
              Say hello <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 transition hover:-translate-y-0.5 hover:border-foreground">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 transition hover:-translate-y-0.5 hover:border-foreground">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
