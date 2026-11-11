function App() {
  const stats = [
    { value: '4.9/5', label: 'Client satisfaction' },
    { value: '120+', label: 'Experiences launched' },
    { value: '8 wk', label: 'Avg. product sprint' },
  ]

  const process = [
    {
      title: 'Product strategy',
      description:
        'We align UX with business goals so every screen, interaction, and decision has a clear purpose.',
    },
    {
      title: 'Design systems',
      description:
        'Reusable patterns, polished components, and scalable design rules built to accelerate product teams.',
    },
    {
      title: 'Research & testing',
      description:
        'Insight-driven design backed by user interviews, usability testing, and rapid iteration cycles.',
    },
  ]

  const highlights = [
    'Conversion-focused landing pages',
    'SaaS dashboard design systems',
    'High-fidelity prototyping',
    'UX audits + optimization',
  ]

  const projects = [
    {
      name: 'Northstar CRM',
      type: 'B2B SaaS redesign',
      summary: 'Simplified onboarding and renewed conversion across enterprise sales flows.',
      accent: 'from-emerald-400/30 to-cyan-400/10',
    },
    {
      name: 'Aster Labs',
      type: 'Startup launch',
      summary: 'Introduced a trust-first brand and product story that accelerated demo requests.',
      accent: 'from-violet-500/25 to-slate-900',
    },
    {
      name: 'Luma Health',
      type: 'Healthcare UX',
      summary: 'Reduced clinical friction with accessible and clear workflows for care teams.',
      accent: 'from-sky-400/20 to-slate-900',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-12 rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 shadow-lg shadow-slate-950/20 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 text-sm font-black text-slate-950">
                U
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-slate-300">
                  UX DESIGN
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#process" className="transition hover:text-white">Process</a>
              <a href="#about" className="transition hover:text-white">About</a>
            </nav>

            <button className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              Book a call
            </button>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),transparent_35%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(2,6,23,1))] p-6 sm:p-8 lg:p-10">
          <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-300">
                Design that moves people
              </span>

              <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turn ideas into experiences people remember.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                We design intuitive digital experiences for startups and growing brands that need
                clarity, confidence, and momentum.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                  Start a project
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10">
                  View portfolio
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-400/30 via-transparent to-sky-400/20 blur-3xl" />
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-emerald-950/50 backdrop-blur-md sm:p-5">
                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-4 sm:p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-400" />
                      <span className="h-3 w-3 rounded-full bg-amber-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                      Live concept
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                          Growth dashboard
                        </p>
                        <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] font-medium text-emerald-200">
                          +12.4%
                        </span>
                      </div>

                      <div className="mt-4 flex items-end gap-3">
                        {[32, 48, 64, 72, 82, 96].map((height, index) => (
                          <div
                            key={height}
                            className="flex-1 rounded-t-xl bg-gradient-to-t from-emerald-400 to-emerald-200"
                            style={{ height: `${height}px`, opacity: 0.52 + index * 0.08 }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-emerald-400/10 p-4">
                        <p className="text-sm text-emerald-200">Conversion</p>
                        <p className="mt-3 text-3xl font-semibold text-white">+38%</p>
                      </div>
                      <div className="rounded-2xl bg-white/5 p-4">
                        <p className="text-sm text-slate-300">Avg. session</p>
                        <p className="mt-3 text-3xl font-semibold text-white">5.4m</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>Opportunity score</span>
                        <span className="font-semibold text-white">89/100</span>
                      </div>
                      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-700">
                        <div className="h-full w-[89%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mt-24">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Design systems built to move teams forward.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className={`rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.accent} p-5`}
              >
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    {project.type}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{project.summary}</p>
                  <div className="mt-6 flex items-center justify-between text-sm text-emerald-200">
                    <span>Read case study</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mt-24">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">How we work</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Design systems that scale with your product.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {process.map((feature, index) => (
              <article key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/15 text-lg font-semibold text-emerald-300">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">What we deliver</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Built for clarity, momentum, and growth.</h3>
              <ul className="mt-6 space-y-4 text-slate-200">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Research</p>
                <h4 className="mt-6 text-2xl font-semibold text-white">Understanding the user.</h4>
                <p className="mt-3 text-slate-300">
                  We map habits, friction, and opportunities to create better decisions and smoother journeys.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-emerald-500/20 to-slate-900 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Prototype</p>
                <h4 className="mt-6 text-2xl font-semibold text-white">Testing the experience.</h4>
                <p className="mt-3 text-slate-200">
                  Rapid turns and high-fidelity prototypes make feedback clear before build and launch.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:col-span-2">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Outcome</p>
                <h4 className="mt-6 text-2xl font-semibold text-white">
                  A product users trust and teams can ship with confidence.
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-24">
          <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-r from-emerald-400/15 via-slate-900 to-sky-400/10 p-8 text-center sm:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Let’s build something remarkable</p>
            <h3 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Your next great experience starts here.
            </h3>
            <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
              Schedule a discovery call
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
