import { Link } from 'react-router-dom';
import profileImageAvif from '../assets/profile-image.avif';
import profileImage from '../assets/profile-image.png';
import profileImageWebp from '../assets/profile-image.webp';
import resumePdf from '../../resume.pdf';
import { expertise, experience, projects, strengths } from '../data/portfolioData';
import { useRevealElements } from '../hooks/useRevealElements';
import { getSectionHref } from '../lib/routing';
import { ArrowIcon } from './Icons';

const technologyRibbon = ['React', 'Next.js', 'LangGraph', 'FastAPI', 'AWS', 'Kubernetes', 'OpenAI', 'PostgreSQL'];

function PortfolioHome({ activeExperience, onExperienceChange, setProjectRef }) {
  useRevealElements();

  return (
    <>
      <HeroSection />
      <TechnologyRibbon />
      <AboutSection />
      <ExpertiseSection />
      <ExperienceSection activeExperience={activeExperience} onExperienceChange={onExperienceChange} />
      <WorkSection setProjectRef={setProjectRef} />
      <LeadershipSection />
      <ContactSection />
    </>
  );
}

export default PortfolioHome;

function HeroSection() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy reveal">
        <div className="availability">
          <i /> Available for selected opportunities
        </div>
        <p className="overline">Senior AI Full-Stack Engineer · Stockholm</p>
        <h1>
          I engineer <span>intelligent systems</span> that scale.
        </h1>
        <p className="hero-intro">
          I design and lead AI, cloud, web, and mobile products—from first architecture decisions to dependable systems serving people at
          scale.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={getSectionHref('work')}>
            Explore my work <ArrowIcon />
          </a>
          <a className="button button-ghost" href={resumePdf} download>
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-tech">
          <span>TypeScript</span>
          <i />
          <span>Python</span>
          <i />
          <span>AWS</span>
          <i />
          <span>AI</span>
          <i />
          <span>Kubernetes</span>
        </div>
      </div>

      <div className="hero-visual reveal" style={{ '--delay': '120ms' }}>
        <div className="orbit orbit-one" aria-hidden="true">
          <i />
        </div>
        <div className="orbit orbit-two" aria-hidden="true">
          <i />
        </div>
        <div className="portrait-shell">
          <div className="portrait-topline">
            <span>PROFILE / 01</span>
            <span>STOCKHOLM · SE</span>
          </div>
          <picture>
            <source srcSet={profileImageAvif} type="image/avif" />
            <source srcSet={profileImageWebp} type="image/webp" />
            <img src={profileImage} alt="Nat Atana" width="960" height="1084" decoding="async" fetchPriority="high" />
          </picture>
          <div className="portrait-gradient" />
          <div className="portrait-copy">
            <span>Architecture · Intelligence · Scale</span>
            <strong>Building what comes next.</strong>
          </div>
        </div>
        <div className="floating-chip chip-ai">
          <b>AI</b>
          <span>Production systems</span>
        </div>
        <div className="floating-chip chip-cloud">
          <b>☁</b>
          <span>Cloud native</span>
        </div>
      </div>

      <div className="metric-grid reveal" style={{ '--delay': '180ms' }}>
        <article>
          <strong>
            12<span>+</span>
          </strong>
          <p>Years engineering products</p>
        </article>
        <article>
          <strong>
            70<span>%</span>
          </strong>
          <p>Operational workload reduced</p>
        </article>
        <article>
          <strong>
            45<span>%</span>
          </strong>
          <p>Retrieval accuracy improved</p>
        </article>
        <article>
          <strong>
            100<span>M+</span>
          </strong>
          <p>Monthly requests supported</p>
        </article>
      </div>
    </section>
  );
}

function TechnologyRibbon() {
  return (
    <div className="technology-ribbon" aria-label="Technology expertise">
      <div>
        {[...technologyRibbon, ...technologyRibbon].map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="about section-shell" id="about">
      <div className="section-heading reveal">
        <p className="overline">01 / About</p>
        <h2>
          Technical depth.
          <br />
          <span>Product perspective.</span>
        </h2>
      </div>
      <div className="about-layout">
        <div className="about-statement reveal">
          <p className="lead">
            For more than a decade, I’ve turned ambitious ideas and difficult constraints into software that performs in the real world.
          </p>
          <p>
            My work spans production AI, distributed cloud infrastructure, enterprise platforms, mobile applications, and engineering
            leadership. I move comfortably between architecture and implementation—connecting technical decisions to user needs and business
            outcomes.
          </p>
          <p>
            I’ve delivered across healthcare, fintech, logistics, e-commerce, geospatial intelligence, and SaaS while helping teams raise
            their standards and ship with confidence.
          </p>
          <a className="text-link" href={getSectionHref('experience')}>
            Follow the journey <ArrowIcon />
          </a>
        </div>
        <div className="impact-bento reveal" style={{ '--delay': '100ms' }}>
          <article className="bento-large">
            <span className="bento-icon">⌁</span>
            <strong>40–60%</strong>
            <p>Performance gains from enterprise modernization</p>
          </article>
          <article>
            <span className="bento-icon">◇</span>
            <strong>35%</strong>
            <p>Lower AI processing costs</p>
          </article>
          <article>
            <span className="bento-icon">↗</span>
            <strong>50%+</strong>
            <p>Fewer processing bottlenecks</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="expertise section-shell" id="expertise">
      <div className="section-heading split-heading reveal">
        <div>
          <p className="overline">02 / Expertise</p>
          <h2>
            A full-stack view of <span>modern products.</span>
          </h2>
        </div>
        <p>From model orchestration to mobile interfaces, I work across the system to make every layer stronger.</p>
      </div>
      <div className="expertise-grid">
        {expertise.map((item, index) => (
          <article className="expertise-card reveal" style={{ '--delay': `${(index % 3) * 70}ms` }} key={item.title}>
            <div className="card-number">{item.number}</div>
            <div className="expertise-symbol" aria-hidden="true">
              {['✦', '⌘', '⬡', '☁', '◫', '◎'][index]}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tag-list">
              {item.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection({ activeExperience, onExperienceChange }) {
  const activeItem = experience[activeExperience];

  return (
    <section className="experience section-shell" id="experience">
      <div className="section-heading reveal">
        <p className="overline">03 / Experience</p>
        <h2>
          Built through <span>real complexity.</span>
        </h2>
      </div>
      <div className="experience-layout reveal">
        <div className="experience-tabs" role="tablist" aria-label="Professional experience">
          {experience.map((item, index) => (
            <button
              className={activeExperience === index ? 'active' : ''}
              type="button"
              role="tab"
              aria-selected={activeExperience === index}
              onClick={() => onExperienceChange(index)}
              key={item.role}
            >
              <span>{item.period}</span>
              <strong>{item.role}</strong>
              <small>{item.company}</small>
            </button>
          ))}
        </div>
        <article className="experience-detail" role="tabpanel" key={activeExperience}>
          <div className="experience-meta">
            <span>{activeItem.period}</span>
            <span>{activeItem.location}</span>
          </div>
          <h3>{activeItem.role}</h3>
          <p className="company">{activeItem.company}</p>
          <p className="experience-summary">{activeItem.summary}</p>
          <ul>
            {activeItem.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="tag-list">
            {activeItem.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function WorkSection({ setProjectRef }) {
  return (
    <section className="work section-shell" id="work">
      <div className="section-heading split-heading reveal">
        <div>
          <p className="overline">04 / Selected work</p>
          <h2>
            Systems with <span>measurable impact.</span>
          </h2>
        </div>
        <p>Representative product work spanning AI, financial infrastructure, and operational automation.</p>
      </div>
      <div className="project-stack">
        {projects.map((project) => (
          <article
            className={`project-card project-${project.tone} reveal`}
            ref={(node) => setProjectRef(project.path, node)}
            key={project.title}
          >
            <Link className="project-card-link" to={project.path} aria-label={`Read ${project.title} case study`} />
            <div className="project-index">{project.index}</div>
            <div className="project-copy">
              <div className="project-kicker">
                <p className="overline">{project.category}</p>
                <span>Case study</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-impact">
              {project.impacts.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="project-art" aria-hidden="true">
              <div className="art-ring" />
              <div className="art-grid" />
              <span>✦</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="leadership section-shell">
      <div className="leadership-panel reveal">
        <div>
          <p className="overline">Beyond the code</p>
          <h2>
            Architecture is also <span>about people.</span>
          </h2>
          <p>
            I lead through clarity: aligning teams, establishing durable engineering practices, mentoring developers, and translating
            strategy into systems people can confidently build and operate.
          </p>
        </div>
        <div className="strength-cloud">
          {strengths.map((strength, index) => (
            <span style={{ '--i': index }} key={strength}>
              {strength}
            </span>
          ))}
        </div>
        <div className="education-card">
          <span>Education</span>
          <strong>Bachelor of Computer Science</strong>
          <p>Texas Tech University · 2010–2014</p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact section-shell" id="contact">
      <div className="contact-panel reveal">
        <div className="contact-orb" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <p className="overline">05 / Let’s collaborate</p>
        <h2>Have a difficult system to build?</h2>
        <p>Let’s turn it into something clear, scalable, and genuinely useful.</p>
        <div className="contact-actions">
          <a className="contact-method" href="mailto:natatana1213@gmail.com">
            <span>Email</span>
            <strong>natatana1213@gmail.com</strong>
            <ArrowIcon />
          </a>
          <a className="contact-method contact-phone" href="tel:+19177225381">
            <span>Phone</span>
            <strong>+1 917 722 5381</strong>
            <ArrowIcon />
          </a>
        </div>
        <div className="contact-links">
          <a
            className="contact-brand-link linkedin"
            href="https://www.linkedin.com/in/nat-atana-964071418/"
            target="_blank"
            rel="noreferrer"
          >
            <span>in</span>LinkedIn ↗
          </a>
          <a className="contact-brand-link telegram" href="https://t.me/natatana1213" target="_blank" rel="noreferrer">
            <span>Tg</span>Telegram ↗
          </a>
          <a className="contact-brand-link phone" href="tel:+19177225381">
            <span>☎</span>Phone ↗
          </a>
          <a className="contact-brand-link resume" href={resumePdf} download>
            <span>CV</span>Résumé ↓
          </a>
        </div>
      </div>
    </section>
  );
}
