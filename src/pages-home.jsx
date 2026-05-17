import React from 'react';
import { SITE, NOW, CASES, RECS, SKILLS, OPERATING_NOW, NOW_TIMELINE, MATURITY } from './data.js';
import { Portrait, Reveal, StatStrip, PageTitle, LiveSignal, asset } from './ui.jsx';

export function HomePage() {
  return (
    <main className="page">
      <div className="container">
        {/* Hero */}
        <section className="hero">
          <div>
            <div className="crumb">
              <span className="mono">001 — Home</span>
              <span className="dot"></span>
              <span>{SITE.location}</span>
            </div>
            <h1>
              Kyrylo<br />
              Rozbeiko<span className="it">.</span>
            </h1>
            <p className="tagline">
              Head of Delivery. I turn messy ideas into predictable delivery — for AI, SaaS, and digital products.
            </p>
            <div className="meta">
              <span className="pulse"><span className="dot-live"></span>Open to short engagements (hourly)</span>
              <span>·</span>
              <span>Kyiv · Remote / EU / UK</span>
              <span>·</span>
              <span>6+ yrs</span>
            </div>
          </div>
          <Portrait caption="Kyrylo Rozbeiko · Kyiv" />
        </section>

        {/* Stats */}
        <section style={{ margin: '56px 0' }}>
          <Reveal><StatStrip /></Reveal>
        </section>

        {/* Currently */}
        <section style={{ margin: '80px 0' }}>
          <div className="two-col">
            <div>
              <div className="up muted" style={{ marginBottom: 16 }}>Currently</div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 24, lineHeight: 1.4, margin: 0, color: 'var(--ink)' }}>
                <strong style={{ fontWeight: 500 }}>Head of Delivery at <a className="link" href="#/work">Triangu</a></strong> — building the delivery practice for a fast-growing consultancy.
                On the side, I ship <a className="link" href="#/maintra">Maintra</a>, an AI-powered service book for car owners, and run a <a className="link" href="#/creator">gaming creator account</a> in English (2.6M views in the last 90 days).
              </p>
              <p style={{ marginTop: 24, color: 'var(--ink-2)', maxWidth: '52ch' }}>
                Before Triangu I spent four years at EPAM running multi-stream delivery — most recently a $2M+ AI underwriting programme for a global insurer. Before that, Ubisoft, MHP, EF Education First, LastPass.
              </p>
              <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="link" href="#/about">Read the long version →</a>
                <a className="link" href="#/cases">See the case studies →</a>
              </div>
            </div>
            <div className="side-meta">
              <div className="row"><div className="k">Now at</div><div className="v">Triangu · Head of Delivery</div></div>
              <div className="row"><div className="k">Stack of choice</div><div className="v">Jira · Azure DevOps · Confluence · Salesforce</div></div>
              <div className="row"><div className="k">Methods</div><div className="v">Scrum · Kanban · SAFe · Waterfall (when it earns it)</div></div>
              <div className="row"><div className="k">Languages</div><div className="v">Ukrainian (native) · English (C1) · Russian</div></div>
              <div className="row"><div className="k">Education</div><div className="v">MA Innovative Management, Taras Shevchenko Nat'l University of Kyiv</div></div>
            </div>
          </div>
        </section>

        {/* Operating now — command-center signal */}
        <section className="op-now">
          <div className="op-now-head">Operating now</div>
          {OPERATING_NOW.map((s, i) => (
            <LiveSignal key={i} status={s.status} label={s.label} />
          ))}
        </section>

        {/* Featured work */}
        <section style={{ margin: '80px 0 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>Selected work</h2>
            <a className="link mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }} href="#/cases">All case studies →</a>
          </div>
          <div className="cards cards-3">
            {CASES.slice(0, 3).map((c, i) => (
              <a key={c.slug} href={'#/case/' + c.slug} className="card card-link">
                <div className="kicker">
                  <span>{String(i + 1).padStart(2, '0')} · {c.period}</span>
                  <span>{c.company.split(' via ')[0]}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <div className="arrow">Read →</div>
              </a>
            ))}
          </div>
          <div className="cards cards-3" style={{ marginTop: 1, borderTop: 0 }}>
            {CASES.slice(3, 6).map((c, i) => (
              <a key={c.slug} href={'#/case/' + c.slug} className="card card-link">
                <div className="kicker">
                  <span>{String(i + 4).padStart(2, '0')} · {c.period}</span>
                  <span>{c.company.split(' via ')[0]}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <div className="arrow">Read →</div>
              </a>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section style={{ margin: '96px 0' }}>
          <Reveal>
            <div className="two-col">
              <div className="quote-card">
                <p className="body">{RECS[1].body}</p>
                <div className="who">
                  <div className="avatar">OR</div>
                  <div>
                    <div className="name">{RECS[1].name}</div>
                    <div className="role">{RECS[1].role}</div>
                  </div>
                </div>
              </div>
              <div className="quote-card">
                <p className="body">{RECS[0].body}</p>
                <div className="who">
                  <div className="avatar">MD</div>
                  <div>
                    <div className="name">{RECS[0].name}</div>
                    <div className="role">{RECS[0].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <a className="link mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }} href="#/kind">More kind words →</a>
          </div>
        </section>

        {/* Side project teaser */}
        <section style={{ margin: '96px 0' }}>
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <div className="up muted" style={{ marginBottom: 16 }}>Side project · 2026</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 400, margin: '0 0 16px', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
                Maintra — an AI service book for your garage.
              </h2>
              <p style={{ color: 'var(--ink-2)', maxWidth: '48ch' }}>
                My first solo product launch — not on behalf of an employer. Type "changed oil and brakes for 200 bucks" and Andrew (the AI) files it into structured records. Plans, reminders, service history, the lot.
              </p>
              <div style={{ marginTop: 20, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a className="link" href="#/maintra">Project page →</a>
                <a className="link" href="https://rozbeyko.github.io/maintra.public/index.html" target="_blank" rel="noreferrer">Open the app ↗</a>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
              <div className="phone-shot" style={{ maxWidth: 240 }}>
                <img src={asset('assets/maintra-garage.png')} alt="Maintra garage view" />
                <div className="label">Maintra · garage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Now snippet */}
        <section style={{ margin: '80px 0 0' }}>
          <hr className="rule-thin" />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16, marginTop: 32 }}>
            <div className="mono up muted">Now · {NOW.updated}</div>
            <a className="link mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }} href="#/now">Full /now page →</a>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 24 }}>
            {NOW.bullets.slice(0, 3).map((b, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                <div className="mono small muted up">{b.k}</div>
                <div>{b.v}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export function AboutPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '002 — About' }]}
          title='I make <em>delivery</em> boring &mdash; on purpose.'
          lede="Head of Delivery with 6+ years leading complex, multi-team initiatives across insurance, SaaS, and gaming. I specialise in turning messy ideas into predictable delivery: clear scope, realistic plans, transparent risks, and steady outcomes for the business."
        />

        {/* Delivery maturity rail — where I operate today */}
        <div className="maturity-rail">
          <div className="mr-head">Delivery maturity model · where I operate today</div>
          <div className="mr-stages">
            {MATURITY.stages.map((s) => (
              <div key={s} className={'mr-stage' + (s === MATURITY.current ? ' current' : '')}>
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="two-col">
          <div className="prose">
            <h2>How I got here</h2>
            <p>
              I started in QA at Ubisoft Kyiv, coordinating testers across four studios on AAA titles. That's where I learned that the technical part of any delivery problem is almost never the hard part — alignment is. A bug that one team thinks is a blocker and another thinks is "by design" can hold up a release for weeks. Most of my job since has been clearing that kind of fog.
            </p>
            <p>
              At Ubisoft I shifted from QA into delivering internal tools — Agile transformation, CI/CD, a 25-person tools team whose product happened to be the rest of the studio. From there to EPAM, where I ran multi-stream programmes for EF Education First, LastPass, and most recently a global insurer (SOMPO) running four AI products in parallel.
            </p>
            <p>
              In May 2026 I joined Triangu as Head of Delivery to build the delivery practice from the inside. Same job, smaller building.
            </p>

            <h2>What I'm good at</h2>
            <ul>
              <li>Owning <b>end-to-end delivery</b> for several streams at once — discovery → launch → stabilisation.</li>
              <li>Translating business goals into roadmaps, backlogs, and measurable KPIs.</li>
              <li>Building healthy teams: clear communication, 1:1s, expectations, feedback, and growth plans.</li>
              <li>Bringing order into chaos: fixing broken processes, aligning stakeholders, de-risking releases.</li>
              <li>Working with data &amp; AI engineers, developers, and QA without being a developer myself — speaking both "business" and "tech".</li>
            </ul>

            <h2>What I'm not</h2>
            <p>
              I'm not the PM who writes the longest plan. I'm not going to argue process for its own sake. I'm allergic to ceremonies that exist to make managers feel productive. If a meeting can be a written update, it's a written update.
            </p>

            <h2>On the personal side</h2>
            <p>
              I'm a gamer (Ubisoft heritage — yes, I still play). I run a small <a className="link" href="#/creator">gaming creator account</a> on the side in English across TikTok, Instagram Reels and YouTube Shorts; the last 90 days passed 4M total views. Based in Kyiv.
            </p>
            <p>
              Since the start of the full-scale invasion in 2022 I've been part of fundraising efforts for Ukrainian Armed Forces units. Collectively we've channelled over ₴10 M UAH into vehicles, hard-to-source night-vision optics, drones, and consumables. The letters of appreciation I've received — from the 72nd Mechanised Brigade (Black Zaporozhians), the Special Operations Forces, the 67th Brigade, and the 131st Reconnaissance Battalion, among others — sit on a shelf at home next to my SAFe certificate, which I think is the right order.
            </p>
            <p>
              I believe good leadership is mostly about <em>clarity, empathy, and responsibility</em> — in that order.
            </p>

            <h2>What I'm looking for</h2>
            <p>
              I'm <b>not</b> currently looking for full-time roles — Triangu and Maintra have my full attention. I'm open to <b>short engagements and advisory work on an hourly basis</b>: delivery turnarounds, AI programme reviews, portfolio audits, pre-sales coaching, or sitting in on steering committees for a few cycles to right the ship.
            </p>
          </div>

          <aside style={{ position: 'sticky', top: 90, alignSelf: 'start' }}>
            <Portrait caption="Kyrylo Rozbeiko · Kyiv" />
            <div className="side-meta" style={{ marginTop: 24 }}>
              <div className="row"><div className="k">Born</div><div className="v">Kyiv, Ukraine</div></div>
              <div className="row"><div className="k">Lives</div><div className="v">Kyiv, Ukraine</div></div>
              <div className="row"><div className="k">Education</div><div className="v">MA Innovative Management · Taras Shevchenko Nat'l University of Kyiv (2018–20)</div></div>
              <div className="row"><div className="k">Speaks</div><div className="v">Ukrainian · English (C1) · Russian</div></div>
              <div className="row"><div className="k">Likes</div><div className="v">AAA gamedev · pragmatic Agile · the quiet kind of weekend</div></div>
              <div className="row"><div className="k">Avoids</div><div className="v">Theatre meetings · vibes-based estimates · AI-written LinkedIn posts</div></div>
            </div>
          </aside>
        </div>

        <hr className="rule" />

        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 32, letterSpacing: '-0.02em', margin: '0 0 32px' }}>
          What I can do for a team
        </h2>
        <div className="cards cards-2">
          {SKILLS.map((s, i) => (
            <div className="card" key={i}>
              <div className="kicker"><span>{String(i + 1).padStart(2, '0')}</span><span>{s.group}</span></div>
              <ul style={{ paddingLeft: 18, margin: 0, color: 'var(--ink-2)' }}>
                {s.items.map((it, j) => <li key={j} style={{ marginBottom: 6 }}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export function NowPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '007 — Now' }, { label: NOW.updated }]}
          title='What I&rsquo;m <em>actually</em> doing right now.'
          lede="An operating journal, not a marketing page. What's shipped this quarter, what's in build, what's next. Updated whenever something material changes."
        />

        {/* Operating timeline — what shipped, what's live, what's in build, what's next */}
        <div className="op-now-head" style={{ marginTop: 16 }}>Operating timeline</div>
        <div className="op-timeline">
          {NOW_TIMELINE.map((row, i) => (
            <div key={i} className={'op-tl-row ' + row.status}>
              <span className="op-tl-quarter">{row.quarter}</span>
              <span className="op-tl-label">{row.label}</span>
              <span className="op-tl-status">{row.status}</span>
            </div>
          ))}
        </div>

        {/* Working-state notes — the older /now bullets, kept as supporting context */}
        <div className="op-now-head" style={{ marginTop: 64 }}>Working state · {NOW.updated}</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--line)' }}>
          {NOW.bullets.map((b, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, padding: '28px 0', borderBottom: '1px solid var(--line)' }}>
              <div className="mono up muted" style={{ paddingTop: 4 }}>{b.k}</div>
              <div style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--ink)' }}>{b.v}</div>
            </li>
          ))}
        </ul>
        <p className="mono small muted" style={{ marginTop: 32 }}>
          Last updated · {NOW.updated}
        </p>
      </div>
    </main>
  );
}

export function ContactPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '012 — Contact' }]}
          title='Get in <em>touch.</em>'
          lede="The fastest path is a short email with what you're working on and what's stuck. I read everything. I respond to most things within a working day."
        />

        <div className="contact-grid">
          <div className="contact-cell">
            <div className="k">Email</div>
            <div className="v"><a href={'mailto:' + SITE.email}>{SITE.email}</a></div>
          </div>
          <div className="contact-cell">
            <div className="k">LinkedIn</div>
            <div className="v"><a href="https://www.linkedin.com/in/rozbeiko" target="_blank" rel="noreferrer">linkedin.com/in/rozbeiko</a></div>
          </div>
          <div className="contact-cell">
            <div className="k">GitHub</div>
            <div className="v"><a href="https://rozbeyko.github.io" target="_blank" rel="noreferrer">rozbeyko.github.io</a></div>
          </div>
          <div className="contact-cell">
            <div className="k">Maintra (side project)</div>
            <div className="v"><a href="https://rozbeyko.github.io/maintra.public/index.html" target="_blank" rel="noreferrer">maintra app ↗</a></div>
          </div>
          <div className="contact-cell">
            <div className="k">Location</div>
            <div className="v">Kyiv, Ukraine · UTC+2/+3</div>
          </div>
          <div className="contact-cell">
            <div className="k">Working hours</div>
            <div className="v">Mon–Fri · 09:00 — 19:00 EET</div>
          </div>
        </div>

        <hr className="rule" />

        <div className="two-col">
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px', letterSpacing: '-0.015em' }}>What I'm a good fit for</h2>
            <ul style={{ paddingLeft: 18, margin: 0, color: 'var(--ink-2)', lineHeight: 1.7 }}>
              <li>Short engagements / advisory work on an <b>hourly basis</b>.</li>
              <li>Delivery turnarounds and AI programme reviews for founders / heads of delivery.</li>
              <li>Portfolio audits, pre-sales coaching, sitting in on steering committees for a few cycles.</li>
              <li>Conversations with founders running AI-heavy delivery orgs.</li>
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px', letterSpacing: '-0.015em' }}>What I'm not</h2>
            <ul style={{ paddingLeft: 18, margin: 0, color: 'var(--ink-2)', lineHeight: 1.7 }}>
              <li>Available for full-time roles — Triangu and Maintra have my full attention.</li>
              <li>The right person for a pure-engineering IC role; I lead delivery, I don't write production code.</li>
              <li>Looking for relocation immediately — happy to travel.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
