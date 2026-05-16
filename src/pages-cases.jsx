import React from 'react';
import { CASES, RECS } from './data.js';
import { PageTitle, KpiRow } from './ui.jsx';

export function CasesPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '004 — Case studies' }]}
          title='Six programmes, <em>told properly.</em>'
          lede="One-paragraph summaries rarely survive the second meeting. These are slower writeups — what the situation was, what I actually did, what changed. Read whichever one matches the role you're hiring for."
        />

        <div className="cards cards-2">
          {CASES.map((c, i) => (
            <a key={c.slug} href={'#/case/' + c.slug} className="card card-link">
              <div className="kicker">
                <span>{String(i + 1).padStart(2, '0')} · {c.period}</span>
                <span>{c.company.split(' via ')[0]}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.summary}</p>
              <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap' }}>
                {c.tags.slice(0, 4).map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="arrow">Read case →</div>
            </a>
          ))}
        </div>

        <hr className="rule" />

        <div className="two-col">
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px' }}>Common thread</h2>
            <p style={{ color: 'var(--ink-2)', margin: 0 }}>
              Across every one of these — insurance, gaming, edtech, agritech, my own product — the work is the same shape: turn a fuzzy commitment into a backlog that ships on a date, with a team that's still standing afterwards. The industry just changes the vocabulary.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 28, margin: '0 0 16px' }}>What I look for in metrics</h2>
            <ul style={{ paddingLeft: 18, margin: 0, color: 'var(--ink-2)', lineHeight: 1.7 }}>
              <li>Numbers that a business owner can act on (not 92% model accuracy).</li>
              <li>Numbers that survive scrutiny three meetings later.</li>
              <li>Numbers attached to <em>before</em> and <em>after</em>, not just "after".</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export function CaseDetail({ slug }) {
  const c = CASES.find((x) => x.slug === slug) || CASES[0];
  const idx = CASES.findIndex((x) => x.slug === c.slug);
  const prev = CASES[(idx - 1 + CASES.length) % CASES.length];
  const next = CASES[(idx + 1) % CASES.length];

  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[
            { label: '004 — Case studies', to: 'cases' },
            { label: String(idx + 1).padStart(2, '0') + ' · ' + c.company },
          ]}
          title={c.title}
          lede={c.summary}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginBottom: 32 }}>
          <span className="mono small muted up">{c.period}</span>
          <span style={{ color: 'var(--line-2)' }}>·</span>
          <span className="mono small muted up">{c.company}</span>
          <div style={{ marginLeft: 'auto', display: 'flex', flexWrap: 'wrap' }}>
            {c.tags.map((t) => <span className="tag accent" key={t}>{t}</span>)}
          </div>
        </div>

        <KpiRow items={c.kpis} />

        <div className="two-col" style={{ marginTop: 48 }}>
          <article className="prose">
            {c.body.map((seg, i) => (
              seg.h
                ? <h2 key={i}>{seg.h}</h2>
                : <p key={i} dangerouslySetInnerHTML={{ __html: seg.p.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>') }} />
            ))}

            {c.slug === 'maintra' && (
              <p style={{ marginTop: 24 }}>
                <a className="link" href="#/maintra">Full Maintra project page →</a>
              </p>
            )}
          </article>

          <aside style={{ position: 'sticky', top: 90, alignSelf: 'start' }}>
            <div className="side-meta">
              <div className="row"><div className="k">Client / Company</div><div className="v">{c.company}</div></div>
              <div className="row"><div className="k">Period</div><div className="v">{c.period}</div></div>
              <div className="row"><div className="k">My role</div><div className="v">{idx === 0 ? 'Senior Project & Delivery Manager' : idx === 1 || idx === 2 ? 'Project Manager / Delivery Lead' : idx === 3 ? 'Delivery Manager, R&D Tools' : idx === 4 ? 'QA Team Coordinator' : idx === 5 ? 'Product / Project Manager' : 'Solo founder'}</div></div>
              <div className="row"><div className="k">Stack & methods</div><div className="v">{c.tags.join(' · ')}</div></div>
            </div>

            <div style={{ marginTop: 32 }}>
              <div className="up muted" style={{ marginBottom: 12 }}>References for this work</div>
              <div className="quote-card" style={{ padding: 20 }}>
                <p className="body" style={{ fontSize: 15 }}>{RECS[idx % RECS.length].body.slice(0, 200)}…</p>
                <div className="who">
                  <div className="avatar">{RECS[idx % RECS.length].name.split(' ').map((p) => p[0]).join('')}</div>
                  <div>
                    <div className="name">{RECS[idx % RECS.length].name}</div>
                    <div className="role">{RECS[idx % RECS.length].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <hr className="rule" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <a href={'#/case/' + prev.slug} className="card card-link" style={{ padding: 24, border: '1px solid var(--line)' }}>
            <div className="kicker"><span>← Previous</span><span>{prev.period}</span></div>
            <h3 style={{ fontSize: 20 }}>{prev.title}</h3>
          </a>
          <a href={'#/case/' + next.slug} className="card card-link" style={{ padding: 24, border: '1px solid var(--line)', textAlign: 'right' }}>
            <div className="kicker"><span>{next.period}</span><span>Next →</span></div>
            <h3 style={{ fontSize: 20 }}>{next.title}</h3>
          </a>
        </div>
      </div>
    </main>
  );
}
