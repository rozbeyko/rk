import React from 'react';
import { SITE, CREATOR, CERTS, BOOKS, RECS, POSTS, CIVIC_GALLERY } from './data.js';
import { PageTitle, StatStrip, KpiRow, LogoMark, Reveal, asset } from './ui.jsx';

export function MaintraPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="crumb">
          <span className="mono">005 — Maintra</span>
          <span className="dot"></span>
          <span>Side project · 2026</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'center', marginBottom: 24 }}>
          <img src={asset('assets/maintra-logo.png')} alt="Maintra logo" style={{ width: 80, height: 80, display: 'block' }} />
          <div>
            <h1 className="page-title" style={{ margin: 0 }}>Maintra<span className="it" style={{ color: 'var(--accent)', fontStyle: 'italic' }}>.</span></h1>
            <p className="mono small muted" style={{ marginTop: 8 }}>maintra.public · v1.0 · 2026</p>
          </div>
        </div>

        <p className="lede">
          An AI-powered service book for car owners. My first fully personal product launch — not on behalf of an employer. Built to solve a real, boring problem I had myself: never being able to keep on top of what had been done to my car and what was due next.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 40 }}>
          <span className="tag solid">● Live</span>
          <span className="tag">v1.0</span>
          <span className="tag">AI service-entry parser</span>
          <span className="tag">5 modules</span>
          <a className="link mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginLeft: 'auto' }} href="https://rozbeyko.github.io/maintra.public/index.html" target="_blank" rel="noreferrer">Open the app ↗</a>
        </div>

        {/* Real screenshots */}
        <div className="phone-shots">
          <div className="phone-shot">
            <img src={asset('assets/maintra-garage.png')} alt="Maintra garage view" />
            <div className="label">01 · Garage</div>
          </div>
          <div className="phone-shot">
            <img src={asset('assets/maintra-services.png')} alt="Maintra services tab" />
            <div className="label">02 · Services</div>
          </div>
          <div className="phone-shot">
            <img src={asset('assets/maintra-plan.png')} alt="Maintra AI plan" />
            <div className="label">03 · AI Plan</div>
          </div>
          <div className="phone-shot">
            <img src={asset('assets/maintra-ai.png')} alt="Maintra AI service entry" />
            <div className="label">04 · Andrew (AI)</div>
          </div>
        </div>

        <KpiRow items={[
          { n: '1', l: 'solo founder' },
          { n: 'v1.0', l: 'shipped public' },
          { n: '5', l: 'modules · services · plan · fuel · finance · chat' },
          { n: 'AI', l: 'Andrew, the service-entry parser' },
        ]} />

        <div className="two-col" style={{ marginTop: 56 }}>
          <article className="prose">
            <h2>Why I built it</h2>
            <p>
              I run delivery for a living, but I'd never owned a product end-to-end from idea to public URL by myself. Every PM I respect has, at some point, shipped something with their name and nobody else's on it. This is mine.
            </p>
            <p>
              The "what" was personal. Every car I've owned has accumulated a paper trail in three different notebooks, my phone's notes app, and at least two service shops' SMS history. I never knew what had been done, what was due, or what the next big bill was going to be. There had to be one place that knew everything.
            </p>

            <h2>What it does</h2>
            <ul>
              <li><b>Service book</b> — every record, structured. Brake fluid changed? It's a row, not a memory.</li>
              <li><b>Plan</b> — AI-generated maintenance plan with urgency tiers (urgent · soon · ok), pegged to mileage and time.</li>
              <li><b>Andrew (AI)</b> — paste a free-text description ("fixed brakes 800 UAH, oil + filters 250, painted bumper 200, balanced tyres 50, all done 750 km ago") and Andrew files it as structured records.</li>
              <li><b>Fuel & financials</b> — running totals, cost per km, mileage tracking.</li>
              <li><b>Chat</b> — ask questions about the car ("when did I last change the timing belt?").</li>
            </ul>

            <h2>What I learned shipping it</h2>
            <p>
              Mostly: I was right about most of what I'd been doing for years with teams. Plans hold up. Scope cuts win. Writing things down beats remembering them. None of that changed.
            </p>
            <p>
              What <em>did</em> change is what one person can ship. With AI in the loop, the <b>MVP I shipped solo today is roughly the working product I'd have planned five engineers for five years ago</b>. That isn't a future prediction — that's what I felt building Maintra in evenings.
            </p>
            <p>
              The other thing: a growing backlog is okay. You can't see the whole picture from the beach. The right move is to ship the next useful thing and let the next-next become visible on its own.
            </p>

            <h2>What's next</h2>
            <ul>
              <li>Multi-vehicle service plan templates.</li>
              <li>Recurring service reminders pegged to mileage AND time.</li>
              <li>Export-to-PDF service book (the actual stapled thing dealerships ask for).</li>
              <li>Public garage profile for collectors who want to show their service history when they sell.</li>
            </ul>
          </article>

          <aside style={{ position: 'sticky', top: 90, alignSelf: 'start' }}>
            <div className="side-meta">
              <div className="row"><div className="k">Status</div><div className="v" style={{ color: 'var(--good)' }}>● Live</div></div>
              <div className="row"><div className="k">Role</div><div className="v">Solo — concept, design, build, launch</div></div>
              <div className="row"><div className="k">Stack</div><div className="v">Web app · LLM API · static-hosted</div></div>
              <div className="row"><div className="k">Launched</div><div className="v">2026</div></div>
              <div className="row"><div className="k">Try it</div><div className="v"><a className="link" href="https://rozbeyko.github.io/maintra.public/index.html" target="_blank" rel="noreferrer">maintra app ↗</a></div></div>
              <div className="row"><div className="k">Source</div><div className="v"><a className="link" href="https://rozbeyko.github.io" target="_blank" rel="noreferrer">github</a></div></div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export function CreatorPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '006 — Creator' }, { label: 'Side hustle · 2025–26' }]}
          title='Short-form <em>gaming clips</em>, in English.'
          lede="A small creator account I run on the side. Started as a way to talk about AAA titles I actually play. Ended up with an audience and a useful lesson in shipping content on a cadence that nobody is paying me to keep."
        />

        <div className="mono small muted" style={{ marginBottom: 32 }}>{CREATOR.windowLabel} · ref. <a className="link" href="https://rozbeyko.github.io/rok.ops/" target="_blank" rel="noreferrer">rozbeyko.github.io/rok.ops</a></div>

        <StatStrip items={CREATOR.headlineStats} />

        {/* Platform breakdown cards */}
        <div className="cards cards-3" style={{ marginTop: 40 }}>
          {CREATOR.platformStats.map((p, i) => (
            <div className="card" key={i} style={{ background: '#0f0f12', color: '#f4f2ec' }}>
              <div className="kicker" style={{ color: '#7a7670' }}>
                <span>{String(i + 1).padStart(2, '0')} · Platform</span>
                <span style={{ color: p.color }}>● {p.name}</span>
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em', margin: '8px 0 4px' }}>{p.views}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: p.color, letterSpacing: '0.05em' }}>{p.growth !== '—' ? p.growth + ' growth' : 'stable'}</div>
              <div style={{ marginTop: 16, fontSize: 14, color: '#a8a39a' }}>{p.note}</div>
            </div>
          ))}
        </div>

        <div className="two-col" style={{ marginTop: 56 }}>
          <article className="prose">
            <h2>What it is</h2>
            <p>{CREATOR.bio}</p>
            <p>
              The format is short clips: tip videos for hard fights, "easiest way to" walkthroughs, gameplay reels. Almost all of it is around <b>Crimson Desert</b> right now — the boss-fight tip videos are the breakout hit.
            </p>

            <h2>How I got here — three pivots, two restarts</h2>
            <p>
              I started trying short-form content back in <b>2020</b>. The format clicked in <b>2021</b>: my first TikTok account, <b>@ki_rich</b> ("Кирич"), built up to <b>106.4K followers and 2.8M likes</b> talking about games. In Russian — which is what I'd grown up speaking.
            </p>

            <figure style={{
              maxWidth: 300,
              margin: '20px auto 28px',
              background: '#0a0a0c',
              border: '2px solid #1a1a1d',
              borderRadius: 18,
              overflow: 'hidden',
            }}>
              <img
                src={asset('assets/creator/ki_rich-tiktok.jpg')}
                alt="@ki_rich TikTok profile — 106.4K followers, 2.8M likes"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <figcaption style={{
                padding: '10px 14px 12px',
                fontFamily: 'var(--mono)',
                fontSize: 10,
                color: '#ffd400',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                @ki_rich · 106.4K · 2.8M likes · left behind in 2022
              </figcaption>
            </figure>

            <p>
              Then <b>February 2022</b> happened. Continuing to make content in Russian wasn't something I wanted to do anymore. I walked away from the account and started over from zero, in Ukrainian.
            </p>
            <p>
              The Ukrainian account found an audience — but the Ukrainian-speaking gaming market is small, and most of the audience I wanted to reach simply isn't on it. So in <b>2025</b> I made the call to start over <em>again</em>, this time in English. New account, new platform mix, back to zero followers.
            </p>
            <p>
              The numbers up top (4.3M views in 90 days; finally <b>monetised on TikTok</b>) are from that third account. The point of telling the long version isn't the metrics — it's that I quietly burnt down two working accounts and rebuilt twice. Once because the values asked for it, once because the ambition did. The day-job version of me makes a living telling teams that scope cuts win. This is what scope cuts cost when it's your own work.
            </p>

            <h2>What the last 90 days looked like</h2>
            <p>
              The last 90 days, across all three platforms, total around <b>4.3M views</b>: <b>2.6M on TikTok</b>, <b>934K on Instagram Reels</b>, and <b>805K on YouTube Shorts</b> — with YouTube Shorts growing <b>+2,718%</b> versus the previous 90 days. On Instagram, <b>98.9%</b> of reach came from non-followers, which is the right shape for short-form: this format rewards virality, not subscribers.
            </p>
            <p className="mono small muted">
              Receipts on this page are stitched together from native creator dashboards. Same content, three platforms, three audiences. Full list of accounts on <a className="link" href="https://rozbeyko.github.io/rok.ops/" target="_blank" rel="noreferrer">rozbeyko.github.io/rok.ops</a>.
            </p>

            <h2>Why I'm proud of it</h2>
            <p>
              It is the part of my life where nobody is reviewing my work and nobody is paying me to ship. The PM in me wanted to know: when I have full autonomy over scope, cadence, and quality bar, what do I actually do? Turns out: I ship.
            </p>

            <h2>What it taught me about delivery</h2>
            <ul>
              {CREATOR.takeaways.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </article>

          <aside style={{ position: 'sticky', top: 90, alignSelf: 'start' }}>
            <div className="side-meta">
              <div className="row"><div className="k">Hub</div><div className="v"><a className="link" href="https://rozbeyko.github.io/rok.ops/" target="_blank" rel="noreferrer">{CREATOR.handle}</a></div></div>
              <div className="row"><div className="k">Language</div><div className="v">English</div></div>
              <div className="row"><div className="k">Platforms</div><div className="v">TikTok · Instagram Reels · YouTube Shorts</div></div>
              <div className="row"><div className="k">Format</div><div className="v">Short-form, mostly 9 : 16, 15–60s</div></div>
              <div className="row"><div className="k">Niche</div><div className="v">AAA gaming · tip videos · boss fights</div></div>
              <div className="row"><div className="k">Started</div><div className="v">2025</div></div>
            </div>
          </aside>
        </div>

        <hr className="rule" />

        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 32, letterSpacing: '-0.02em', margin: '0 0 24px' }}>
          Detail metrics
        </h2>
        <div className="stats" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {CREATOR.detailStats.slice(0, 4).map((s, i) => (
            <div className="stat" key={i}>
              <div className="n mono"><span className="tab">{s.n}</span></div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="stats" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: -1 }}>
          {CREATOR.detailStats.slice(4).map((s, i) => (
            <div className="stat" key={i}>
              <div className="n mono"><span className="tab">{s.n}</span></div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>

        <hr className="rule" />

        {/* Top content */}
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 32, letterSpacing: '-0.02em', margin: '0 0 24px' }}>
          Top content · last 90 days
        </h2>
        <table className="table">
          <thead><tr><th style={{ width: 32 }}>#</th><th>Title</th><th style={{ textAlign: 'right', width: 100 }}>Views</th></tr></thead>
          <tbody>
            {CREATOR.topContent.map((c, i) => (
              <tr key={i}>
                <td className="year">{String(i + 1).padStart(2, '0')}</td>
                <td style={{ fontFamily: 'var(--serif)', fontSize: 16 }}>{c.title}</td>
                <td style={{ textAlign: 'right' }}>{c.views}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Real screenshots */}
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 32, letterSpacing: '-0.02em', margin: '64px 0 24px' }}>
          Receipts
        </h2>
        <div className="phone-shots" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="phone-shot">
            <img src={asset('assets/creator-analytics.png')} alt="TikTok analytics screenshot" />
            <div className="label" style={{ color: '#00f5e0' }}>TikTok · 2.6M post views (90d)</div>
          </div>
          <div className="phone-shot">
            <img src={asset('assets/creator-views.png')} alt="Instagram views screenshot" />
            <div className="label" style={{ color: '#c084fc' }}>Instagram Reels · 934K views (90d)</div>
          </div>
          <div className="phone-shot">
            <img src={asset('assets/creator-90d.png')} alt="YouTube Shorts 90-day view screenshot" />
            <div className="label" style={{ color: '#ff7a7a' }}>YouTube Shorts · 805K · +2,718%</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function SpeakingPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '009 — Speaking & civic' }]}
          title='Certificates, <em>credentials</em>, and the occasional plaque.'
          lede="Formal credentials matter mostly because they get past procurement filters. The plaques on the wall are the ones I'm more proud of."
        />

        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 24px', letterSpacing: '-0.015em' }}>Licenses & certifications</h2>
        <div className="certs">
          {CERTS.map((cert, i) => (
            <div className="cert" key={i}>
              <LogoMark mark={cert.mark} glyph={cert.glyph} size={44} />
              <div style={{ flex: 1 }}>
                <div className="name">{cert.name}</div>
                <div className="org">{cert.org}</div>
                <div className="meta">Issued {cert.issued}{cert.expires ? ` · Expires ${cert.expires}` : ''}</div>
                <div className="meta">ID · {cert.id}</div>
              </div>
            </div>
          ))}
        </div>

        <hr className="rule" />

        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px', letterSpacing: '-0.015em' }}>Civic recognitions & volunteering</h2>
        <p style={{ color: 'var(--ink-2)', maxWidth: '62ch', marginTop: 0 }}>
          Since the start of the full-scale invasion in 2022 I've been part of fundraising efforts for units of the Ukrainian Armed Forces. <strong>Collectively, over ₴10 M UAH raised</strong>, channelled into vehicles, hard-to-source night-vision optics, drones, and consumables for combat units. Below are some of the letters of appreciation I've received in return. They're not credentials I list on a CV — they sit on a shelf.
        </p>

        <StatStrip items={[
          { n: '₴10M', u: '+', l: 'UAH raised collectively' },
          { n: '4+', u: '',   l: 'Units supported' },
          { n: 'Multiple', u: '', l: 'Vehicles + NVGs delivered' },
          { n: '2022', u: '—',  l: 'Ongoing' },
        ]} />

        {CIVIC_GALLERY.length > 0 && (
          <>
            <div className="up muted" style={{ marginTop: 48, marginBottom: 16 }}>Receipts · on the wall and in the field</div>
            <div className="civic-photos">
              {CIVIC_GALLERY.map((p, i) => (
                <figure className="civic-photo" key={i}>
                  <div className="frame">
                    <img src={asset(p.src)} alt={p.title} loading="lazy" />
                  </div>
                  <figcaption className="meta">
                    <span className="year mono">{p.year}</span>
                    <span className="title">{p.title}</span>
                    {p.caption && <span className="caption">{p.caption}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        )}

        <div className="cards cards-2" style={{ marginTop: 40 }}>
          <div className="card">
            <div className="kicker"><span>2022—23</span><span>72nd Separate Mechanised Brigade</span></div>
            <h3>Letter of appreciation — Black Zaporozhians</h3>
            <p>Issued by the brigade commander for substantive contribution toward defending state sovereignty and territorial integrity.</p>
          </div>
          <div className="card">
            <div className="kicker"><span>2022—now</span><span>Special Operations Forces (SOF)</span></div>
            <h3>Letter of appreciation — combat capability</h3>
            <p>For active civic stance and significant personal contribution to strengthening the combat capability of Ukraine's Special Operations Forces.</p>
          </div>
          <div className="card">
            <div className="kicker"><span>2023</span><span>67th Separate Mechanised Brigade</span></div>
            <h3>Letter of appreciation — military unit A4123</h3>
            <p>For support of the defence of Ukraine's territorial integrity, sovereignty, and independence.</p>
          </div>
          <div className="card">
            <div className="kicker"><span>2025</span><span>131st Reconnaissance Battalion</span></div>
            <h3>Plaque — named after Yevhen Konovalets</h3>
            <p>Awarded with a personal inscription. Includes the battalion crest and the line «у вогні перетоплюється залізо у сталь, у боротьбі перетворюється народ у націю».</p>
          </div>
          <div className="card">
            <div className="kicker"><span>2022—26</span><span>Fundraising</span></div>
            <h3>Vehicles, NVGs, drones, consumables</h3>
            <p>Coordinated fundraising and procurement of cars, expensive and hard-to-source night-vision optics, drones, and consumables for active combat units. Happy to share details privately.</p>
          </div>
          <div className="card">
            <div className="kicker"><span>2025—26</span><span>Other units · off-list</span></div>
            <h3>Additional letters, kept private</h3>
            <p>Multiple further letters of appreciation from individual units, kept off the public list at the units' preference.</p>
          </div>
        </div>

        <hr className="rule" />

        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px', letterSpacing: '-0.015em' }}>Speaking</h2>
        <p style={{ color: 'var(--ink-2)', maxWidth: '62ch', marginTop: 0 }}>
          Available for talks on practical AI delivery, multi-stream programme management, Agile rollouts that don't become theatre, and the realities of running 40–50 person distributed teams. Email <a className="link" href={'mailto:' + SITE.email}>{SITE.email}</a> if you're organising something.
        </p>
      </div>
    </main>
  );
}

export function ReadingPage() {
  const groups = {
    Now: BOOKS.filter((b) => b.status === 'Now'),
    Reading: BOOKS.filter((b) => b.status === 'Reading'),
    Read: BOOKS.filter((b) => b.status === 'Read' || b.status === 'Re-read'),
  };
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '010 — Reading' }]}
          title='Books that shaped how I <em>think about delivery.</em>'
          lede="A working bookshelf. Not a curated 'best of'. I'd rather you read one of these all the way through than skim a list of forty."
        />

        {Object.entries(groups).map(([k, items]) => items.length === 0 ? null : (
          <section key={k} style={{ marginBottom: 56 }}>
            <div className="up muted" style={{ marginBottom: 16 }}>{k} · {items.length}</div>
            <div className="books">
              {items.map((b, i) => (
                <div className="book" key={i}>
                  <div className="cover" style={{ background: i % 3 === 0 ? '#e8c4a8' : i % 3 === 1 ? '#d9d0bd' : '#c7bda7' }}>
                    {b.title}
                  </div>
                  <div>
                    <div className="title">{b.title}</div>
                    <div className="author">{b.author}</div>
                  </div>
                  <div className={'status' + (b.status === 'Now' ? ' now' : '')}>{b.status}</div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="quote-card" style={{ marginTop: 32 }}>
          <p className="body" style={{ marginBottom: 0 }}>
            Read fewer books, more carefully. Most management books say the same three things — find the three, then go read fiction.
          </p>
        </div>
      </div>
    </main>
  );
}

export function KindPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '011 — Kind words' }]}
          title='What <em>people I worked with</em> say.'
          lede="Unsolicited LinkedIn recommendations. I lightly edited for line breaks, nothing else."
        />
        <div style={{ display: 'grid', gap: 32 }}>
          {RECS.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="quote-card">
                <p className="body">{r.body}</p>
                <div className="who">
                  <div className="avatar">{r.name.split(' ').map((p) => p[0]).join('')}</div>
                  <div>
                    <div className="name">{r.name}</div>
                    <div className="role">{r.role}</div>
                    <div className="role" style={{ color: 'var(--muted-2)' }}>{r.relation}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <hr className="rule" />

        <div className="two-col">
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px' }}>Want to add one?</h2>
            <p style={{ color: 'var(--ink-2)' }}>
              If we've worked together and you'd like to leave a recommendation, the easiest route is LinkedIn — they show up here automatically the next time I update the site.
            </p>
            <a className="link" href="https://www.linkedin.com/in/rozbeiko" target="_blank" rel="noreferrer">Leave one on LinkedIn →</a>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px' }}>Cited in case studies</h2>
            <p style={{ color: 'var(--ink-2)' }}>
              Each of these recommendations is also referenced inside the case study they relate to, so context stays attached to the work.
            </p>
            <a className="link" href="#/cases">Case studies →</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export function WritingPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '008 — Writing' }]}
          title='Notes on <em>delivery</em>, AI, and the slow craft of leading teams.'
          lede="Short essays. I publish when I have something to say, not on a schedule. Most of what I write here comes out of a conversation with someone I'm working with."
        />
        <div className="posts">
          {POSTS.map((p) => (
            <a key={p.slug} href={'#/post/' + p.slug} className="post" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="date">{p.date}</div>
              <div>
                <h3>{p.title}</h3>
                <p className="excerpt">{p.excerpt}</p>
                <div style={{ marginTop: 12 }} className="mono small">
                  <span style={{ color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Read →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export function PostDetail({ slug }) {
  const p = POSTS.find((x) => x.slug === slug) || POSTS[0];
  const idx = POSTS.findIndex((x) => x.slug === p.slug);
  const next = POSTS[(idx + 1) % POSTS.length];
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '008 — Writing', to: 'writing' }, { label: p.date }]}
          title={p.title}
          lede={p.excerpt}
        />
        <article className="prose" style={{ marginTop: 24 }}>
          {p.body.map((para, i) => <p key={i}>{para}</p>)}
          <hr className="rule-thin" />
          <p className="mono small muted">— K · {p.date}</p>
        </article>

        <hr className="rule" />

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <a className="link" href="#/writing">← All writing</a>
          <a className="link" href={'#/post/' + next.slug}>Next: {next.title} →</a>
        </div>
      </div>
    </main>
  );
}
