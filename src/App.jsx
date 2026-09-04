import './App.css'
import sportWebImage from './assets/sportweb.png'

const projects = [
  {
    name: 'FridgeChef',
    description: 'A full-stack recipe finder that helps people cook with ingredients they already have.',
    tools: 'Laravel / PHP / Tailwind',
    url: 'https://github.com/DavisGalla/fridge-chef',
    image: null,
  },
  {
    name: 'SportWeb',
    description: 'A sports-focused web application built with Laravel and designed around a clear browsing experience.',
    tools: 'Laravel / PHP / Blade',
    url: 'https://github.com/DavisGalla/sportWeb',
    image: sportWebImage,
  },
]

function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="logo" href="#top">Davis<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a></nav>
        <a className="github-link" href="https://github.com/DavisGalla" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
      </header>

      <section className="intro" id="top">
        <p className="kicker">Computer science student · Latvia</p>
        <h1>Hi, I&apos;m Davis.<br /><span>I build for the web.</span></h1>
        <p className="intro-text">I&apos;m learning by making useful things. I enjoy working with Laravel, PHP, JavaScript, and thoughtful interfaces.</p>
        <a className="contact-link" href="mailto:hello@example.com">Get in touch <span>→</span></a>
      </section>

      <section className="content-section about" id="about">
        <div className="section-label">01 / About me</div>
        <div className="section-content"><h2>Curious, practical,<br />always learning.</h2><p>I&apos;m a developer focused on turning ideas into working products. My projects have taught me how to build full-stack applications, work with databases, connect APIs, and improve an interface one detail at a time.</p><p>I&apos;m currently looking for an internship where I can contribute, learn from experienced developers, and grow as part of a team.</p></div>
      </section>

      <section className="content-section skills-section" id="skills">
        <div className="section-label">02 / Skills</div>
        <div className="section-content skills-list"><div><strong>Frontend</strong><span>HTML · CSS · JavaScript</span><span>React · Blade · Tailwind</span></div><div><strong>Backend</strong><span>PHP · Laravel</span><span>MySQL · REST APIs</span></div><div><strong>Tools</strong><span>Git · GitHub · Vite</span><span>Figma · Responsive design</span></div></div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-label">03 / Selected projects</div>
        <div className="section-content project-list">{projects.map((project, index) => <article className="project" key={project.name}><div className="project-number">0{index + 1}</div><div className="project-details"><div className="project-photo" role="img" aria-label={`${project.name} screenshot`}>{project.image ? <img src={project.image} alt={`${project.name} screenshot`} /> : <span>Add {project.name} screenshot</span>}</div><h2>{project.name}</h2><p>{project.description}</p><small>{project.tools}</small></div><a href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`} className="project-arrow">↗</a></article>)}</div>
      </section>
    </main>
  )
}

export default App
