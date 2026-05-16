import React, { Fragment } from 'react';
import { EXPERIENCE, EDUCATION, VOLUNTEER } from './data.js';
import { PageTitle, StatStrip, LogoMark } from './ui.jsx';

export function WorkPage() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '003 — Experience' }]}
          title='Six years of <em>delivery</em>, four companies.'
          lede="A working CV. The chronology is honest, the metrics are real, and every project on this page is one I personally led or co-led. PDF available on request."
        />

        {/* Snapshot stats */}
        <section style={{ margin: '24px 0 56px' }}>
          <StatStrip items={[
            { n: '6', u: 'yrs', l: 'Project / Delivery management' },
            { n: '10', u: '+',  l: 'Major programmes shipped' },
            { n: '150', u: '+', l: 'People led across teams' },
            { n: '4', u: '',  l: 'Industries (Insurance · SaaS · Gaming · AgriTech)' },
          ]} />
        </section>

        {/* Timeline */}
        <section className="timeline">
          {EXPERIENCE.map((exp, ei) => (
            <Fragment key={ei}>
              {exp.roles.map((role, ri) => (
                <div className="tl-row" key={ri}>
                  <div className="tl-meta">
                    <span className="when mono">{role.when}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
                      <LogoMark mark={exp.mark} glyph={exp.glyph} size={32} />
                      <div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--ink)', fontWeight: 500 }}>{exp.company}</div>
                        <div style={{ fontSize: 11, color: 'var(--muted)' }}>{exp.type}</div>
                      </div>
                    </div>
                    <div style={{ marginTop: 10 }}>{role.where}</div>
                  </div>
                  <div className="tl-body">
                    <h3>{role.title}</h3>
                    <ul>
                      {role.bullets.map((b, bi) => (
                        <li key={bi} dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>') }} />
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </section>

        {/* Education */}
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 32, letterSpacing: '-0.02em', margin: '64px 0 24px' }}>
          Education
        </h2>
        <div className="timeline">
          {EDUCATION.map((e, i) => (
            <div className="tl-row" key={i}>
              <div className="tl-meta">
                <span className="when mono">{e.years}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
                  <LogoMark mark="lm-uni" glyph="T" size={32} />
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--ink)' }}>Taras Shevchenko Nat'l University of Kyiv</div>
                </div>
              </div>
              <div className="tl-body">
                <h3>{e.name}</h3>
                <div className="sub">{e.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer / civic */}
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 32, letterSpacing: '-0.02em', margin: '64px 0 16px' }}>
          Volunteer & civic
        </h2>
        <p style={{ color: 'var(--ink-2)', maxWidth: '62ch', marginTop: 0 }}>
          Letters of appreciation received for civic engagement and support of the Ukrainian Armed Forces during the full-scale invasion.
        </p>
        <table className="table" style={{ marginTop: 24 }}>
          <tbody>
            {VOLUNTEER.map((v, i) => (
              <tr key={i}><td className="year" style={{ width: 80 }}>{v.year}</td><td>{v.item}</td></tr>
            ))}
          </tbody>
        </table>

        <hr className="rule" />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div className="mono small muted">Looking for case-study depth instead of bullets?</div>
          <a className="link" href="#/cases">Read the case studies →</a>
        </div>
      </div>
    </main>
  );
}
