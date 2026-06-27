import { getSectionHref } from '../lib/routing';
import { ArrowIcon } from './Icons';

function CaseStudyPage({ caseStudy, onBack }) {
  return (
    <article className="case-study section-shell">
      <a className="case-back-link" href={getSectionHref('work')} onClick={(event) => onBack(event, caseStudy.path)}>
        ← Back to selected work
      </a>

      <header className="case-hero">
        <p className="overline">{caseStudy.eyebrow}</p>
        <h1>{caseStudy.title}</h1>
        <p>{caseStudy.summary}</p>
        <div className="case-meta-grid">
          <div>
            <span>Role</span>
            <strong>{caseStudy.role}</strong>
          </div>
          <div>
            <span>Context</span>
            <strong>{caseStudy.context}</strong>
          </div>
          <div>
            <span>Timeline</span>
            <strong>{caseStudy.timeframe}</strong>
          </div>
        </div>
      </header>

      <section className="case-results" aria-label={`${caseStudy.title} outcomes`}>
        {caseStudy.results.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <div className="case-layout">
        <aside className="case-sidebar">
          <div className="case-sidebar-panel">
            <span>Tech stack</span>
            <div className="tag-list">
              {caseStudy.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="case-sidebar-panel">
            <span>Confidentiality note</span>
            <p>
              Company names, data shapes, and sensitive implementation details are generalized. The architecture decisions and outcomes
              reflect the real type of work delivered.
            </p>
          </div>
        </aside>

        <div className="case-content">
          <section>
            <h2>Overview</h2>
            <p>{caseStudy.overview}</p>
          </section>

          <section>
            <h2>What I owned</h2>
            <ul>
              {caseStudy.owned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Problem</h2>
            <ul>
              {caseStudy.challenge.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Solution</h2>
            <ul>
              {caseStudy.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Architecture</h2>
            <div className="case-flow" aria-label={`${caseStudy.title} architecture flow`}>
              {caseStudy.diagram.map((item, index) => (
                <div className="case-flow-step" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
            <ul>
              {caseStudy.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Tradeoffs</h2>
            <ul>
              {caseStudy.tradeoffs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Impact</h2>
            <p>{caseStudy.impact}</p>
          </section>

          <div className="case-cta">
            <p>Interested in the engineering behind this kind of system?</p>
            <a className="button button-primary" href="mailto:natatana1213@gmail.com?subject=Project%20conversation">
              Start a conversation <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CaseStudyPage;
