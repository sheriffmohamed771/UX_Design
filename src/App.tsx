import { useMemo, useState } from 'react'

const projectAsset = (fileName: string) => `${import.meta.env.BASE_URL}projects/${fileName}`

const metrics = [
  { value: '5', label: 'Portfolio case studies' },
  { value: '4', label: 'Interactive product concepts' },
  { value: '100%', label: 'Built around passion and creativity' },
]

const projects = [
  {
    id: 'dc-hero-app',
    name: 'DC Hero App',
    category: 'Mobile prototype / UX concept',
    summary: 'A clickable prototype of a mobile app where DC Universe citizens can request help from heroes. Users choose a category of assistance, browse hero profiles, and book a service based on ratings and quick navigation.',
    detail:
      'A clickable prototype of a mobile app where DC Universe citizens can request help from heroes. I designed a highly navigable experience where users can browse profiles, choose a category of assistance, and book a service. Ratings, hero cards, and quick actions make the experience feel direct, friendly, and easy to trust.',
    image: projectAsset('Heroes.png'),
    video: projectAsset('Hereos.MP4'),
    accent: 'peach',
  },
  {
    id: 'dog-sitting',
    name: 'Dog Sitting',
    category: 'App wireframe / service matching',
    summary: 'A wireframe for a dog-sitting app where dog owners can find sitters, review profiles, schedule appointments, and message them about experience and availability.',
    detail:
      'This app concept focuses on helping dog owners find trusted sitters with minimal friction. The design supports profile review, scheduling, messaging, and availability checks so the whole booking flow feels practical, trustworthy, and easy for busy pet owners to use.',
    image: projectAsset('Dog_App.png'),
    video: null,
    accent: 'sunset',
  },
  {
    id: 'flash-fidget',
    name: 'Flash Fidget',
    category: 'Game / micro-interaction',
    summary: 'A fidget app for killing time where users test their speed by trying to catch The Flash as he moves around the screen, with a catch counter for comparing scores with friends.',
    detail:
      'In this playful interaction, users try to catch The Flash as he moves rapidly across the screen. The concept creates a fast, satisfying loop through reaction-based gameplay and a score comparison system, designed for casual entertainment and strong visual energy.',
    image: projectAsset('Flash.png'),
    video: projectAsset('Flash.mp4'),
    accent: 'forest',
  },
  {
    id: 'world-streaming-map',
    name: '2020 World Streaming Map',
    category: 'Interactive data visualization',
    summary: 'An interactive globe showing the most-streamed Spotify song in each country in 2020. Users rotate, zoom, and click a country to see its name and top song during the pandemic.',
    detail:
      'This interactive globe tells a story about how music reflected the global mood during 2020. I designed the experience so users can spin, zoom, and click countries to reveal which song dominated each region, turning data into a visually engaging narrative about culture and connection.',
    image: projectAsset('World_Music.png'),
    video: projectAsset('Music_world.mp4'),
    accent: 'peach',
  },
  {
    id: 'x-men-models',
    name: 'X-Men Models',
    category: 'Character experience / interactive site',
    summary: 'An interactive site for newcomers to the X-Men where users pick a character to see their powers, trigger abilities, and explore a 3D model with simple navigation and audio controls.',
    detail:
      'This concept was designed as an accessible, welcoming intro to the X-Men for new fans. Users can choose a character, examine their powers, trigger abilities, and explore a 3D model in a clean interface that balances clarity, motion, and audio controls without feeling overwhelming.',
    image: projectAsset('Xmen_Image.png'),
    video: projectAsset('Xmen (1).mp4'),
    accent: 'sunset',
  },
]

const services = [
  'Product strategy',
  'UX/UI design',
  'Design systems',
  'Creative direction',
]

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id)

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? projects[0],
    [selectedProjectId],
  )

  return (
    <div className="portfolio-page">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">MS</span>
          <div>
            <p className="brand-name">Mohamed Sheriff</p>
            <p className="brand-role">Portfolio</p>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let’s talk
        </a>
      </header>

      <main className="page-shell">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Designer • Strategist • Creative problem solver</p>
            <h1 className="lede">
              I’m Mohamed Sheriff, a designer focused on product creativity, user friendly navigation, and business innovation
            </h1>

            <div className="hero-actions">
              <a className="primary-btn" href="#work">View work</a>
              <a className="secondary-btn" href="#about">About me</a>
            </div>

          </div>

          <div className="hero-visual" aria-label="Portfolio preview card">
            <div className="preview-card large-card">
              <div className="card-header">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>

              <img
                className="hero-project-image"
                src={projectAsset('World_Music.png')}
                alt="Most streamed songs of 2020 world map"
              />
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Key stats">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-item">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section id="work" className="portfolio-section">
          <div className="section-heading">
            <p className="eyebrow">Featured work</p>
            <h2>Selected projects.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className={`project-card ${project.accent}`}
                onClick={() => setSelectedProjectId(project.id)}
              >
                <div className="project-visual project-visual--thumb">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={`${project.name} project preview`}
                    loading="lazy"
                  />
                  <span className="project-tag">{project.category}</span>
                </div>
                <div className="project-copy">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>
              </a>
            ))}
          </div>

          <article id={selectedProject.id} className="case-study">
            <div className="case-study__visual">
              <div className={`case-preview ${selectedProject.accent}`}>
                {selectedProject.video ? (
                  <video
                    className="case-preview__video"
                    src={selectedProject.video}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    className="case-preview__video"
                    src={selectedProject.image}
                    alt={`${selectedProject.name} project preview`}
                  />
                )}
              </div>
            </div>

            <div className="case-study__content">
              <p className="eyebrow">Case study</p>
              <h3>{selectedProject.name}</h3>
              <p>{selectedProject.detail}</p>
              <div className="case-study__meta">
                <span>Role</span>
                <strong>UX / Interaction / Visual Design</strong>
              </div>
              <a href="#work" className="primary-btn case-return">
                Back to projects
              </a>
            </div>
          </article>
        </section>

        <section id="about" className="about-section">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2>I create design systems and digital experiences that turn ideas into trust.</h2>
            <p>A look at some of my created work made for easy navigation</p>
          </div>

          <div className="about-panel">
            <div className="panel-portrait" aria-hidden="true" />
            <div className="panel-list">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="process-section">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>How I work.</h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <span>01</span>
              <h3>Plan</h3>
              <p>Taking my ideas and planning what platforms I can use to execute my visions</p>
            </div>
            <div className="process-card">
              <span>02</span>
              <h3>Act</h3>
              <p>Looking at various platforms that cooperate with my creative insights</p>
            </div>
            <div className="process-card">
              <span>03</span>
              <h3>Refine</h3>
              <p>Finalize and test my work then add any components that can benefit users or elements to bring users back</p>
            </div>
          </div>
        </section>

        <section id="contact" className="cta-section">
          <div>
            <p className="eyebrow">Let’s build something memorable</p>
            <h2>Let’s create something distinctive for your next project.</h2>
          </div>
          <a href="mailto:sheriffmohamed771@gmail.com" className="primary-btn">
            sheriffmohamed771@gmail.com
          </a>
        </section>
      </main>
    </div>
  )
}

export default App