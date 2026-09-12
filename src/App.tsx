import { useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Box,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDashed,
  Code2,
  Lightbulb,
  Network,
  Plus,
  RotateCcw,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  X,
  Menu,
} from 'lucide-react';
import {
  capabilities,
  engineSteps,
  opportunities,
  outcomes,
  parent,
  partners,
  pathway,
  phases,
  teamExamples,
} from './data';
import type { Detail, View } from './data';
import { DetailPanel, icons, Mark, OpenButton } from './components';

const outcomeOrder = [outcomes[0], outcomes[2], outcomes[4], outcomes[1], outcomes[3]];
const sourceIcons = [
  Lightbulb,
  Users,
  Search,
  TrendingUp,
  Workflow,
  Code2,
  AudioLines,
  Sparkles,
  Plus,
];
const engineGroups = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7, 8],
  [9, 10, 11],
  [12, 13],
];

function OutcomeArtwork({ id }: { id: string }) {
  if (id === 'improvements')
    return (
      <div className="outcome-art client-art" aria-hidden="true">
        <span className="art-caption">A BUSINESS, WORKING BETTER.</span>
        <div className="mini-dashboard">
          <div className="mini-dashboard-top">
            <span className="mini-logo">
              <Mark />
            </span>
            <span>A little more connected.</span>
            <span>•••</span>
          </div>
          <div className="mini-dashboard-body">
            <div className="mini-rail">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="mini-main">
              <span className="mini-heading">From interest to customer.</span>
              <div className="mini-columns">
                {['New lead', 'In conversation', 'On board'].map((label, i) => (
                  <div key={label}>
                    <span>{label}</span>
                    <div className={`mini-task task-${i}`}>
                      <i />
                      <b />
                      <b />
                      <small>{i === 2 ? <Check size={13} /> : <Users size={13} />}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="art-sticker">
          <TrendingUp size={14} /> Make room for growth
        </span>
      </div>
    );
  if (id === 'products')
    return (
      <div className="outcome-art products-art" aria-hidden="true">
        <span className="art-caption">DIGITAL. PHYSICAL. YOUR NEXT IDEA.</span>
        <div className="product-browser">
          <div className="browser-dots">
            <i />
            <i />
            <i />
          </div>
          <span>
            Something useful.
            <br />
            <b>Made real.</b>
          </span>
          <div className="browser-shapes">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="product-box">
          <Mark />
          <span>
            GOOD
            <br />
            THINGS
            <br />
            INSIDE.
          </span>
        </div>
        <div className="product-bottle">
          <i />
          <span />
        </div>
        <span className="product-tag">Ideas take shape ↗</span>
      </div>
    );
  return (
    <div className="outcome-art ventures-art" aria-hidden="true">
      <span className="art-caption">ONE PARENT. ROOM TO GROW.</span>
      <div className="venture-orbit orbit-one" />
      <div className="venture-orbit orbit-two" />
      <div className="venture-parent">
        <Mark />
        DSLabs
      </div>
      <span className="venture-satellite satellite-one">
        <Box size={21} />
      </span>
      <span className="venture-satellite satellite-two">
        <Code2 size={23} />
      </span>
      <span className="venture-satellite satellite-three">
        <TrendingUp size={22} />
      </span>
      <span className="venture-satellite satellite-four">
        <Plus size={24} />
      </span>
      <span className="venture-caption">The next venture could start here.</span>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState<Detail | null>(null);
  const [view, setView] = useState<View>('ecosystem');
  const [combination, setCombination] = useState<string>('all');
  const [stage, setStage] = useState(0);
  const [team, setTeam] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const returnFocus = useRef<HTMLElement | null>(null);
  const chosenTeam = teamExamples[team];
  const activeCombination = teamExamples.find((item) => item.id === combination);
  const visibleOutcomes = outcomeOrder.filter(
    (outcome) => view === 'ecosystem' || outcome.views.includes(view),
  );
  const activePhase = phases[stage];

  function select(detail: Detail) {
    if (!selected) returnFocus.current = document.activeElement as HTMLElement;
    setSelected(detail);
  }
  function close() {
    setSelected(null);
    requestAnimationFrame(() => returnFocus.current?.focus());
  }

  return (
    <>
      <a href="#universe" className="skip-link">
        Skip to the ecosystem
      </a>
      <header className="site-header">
        <a className="brand" href="#" aria-label="DSLabs home">
          <Mark />
          <span>
            DSLabs<span className="brand-dot">.</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className={menuOpen ? 'nav-open' : ''}>
          <a href="#universe" onClick={() => setMenuOpen(false)}>
            Our universe
          </a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>
            What we bring
          </a>
          <a href="#engine" onClick={() => setMenuOpen(false)}>
            How we build
          </a>
          <a href="#teams" onClick={() => setMenuOpen(false)}>
            Built to evolve
          </a>
        </nav>
        <a href="#universe" className="header-cta">
          Explore the possibilities <ArrowUpRight size={16} />
        </a>
        <button
          className="mobile-menu-button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>
      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="live-dot" /> ONE PARENT COMPANY. OPEN POSSIBILITIES.
            </p>
            <h1 id="page-title">
              One company.
              <br />
              Many ways to
              <br />
              <span>
                create value.
                <svg viewBox="0 0 470 24" aria-hidden="true">
                  <path d="M5 13Q210-3 465 9M20 21Q255 7 422 18" />
                </svg>
              </span>
            </h1>
            <p className="hero-description">
              We find opportunities, build solutions, create products, help businesses grow, and
              turn promising ideas into entirely new ventures.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#universe">
                Step into our universe <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#engine">
                See how it works <ArrowRight size={17} />
              </a>
            </div>
            <span className="hero-footnote">
              <span /> Opportunity-driven. Never industry-limited.
            </span>
          </div>
          <div className="hero-art">
            <img
              src="/images/dslabs-possibilities.png"
              width="1448"
              height="1086"
              alt="An original still life bringing digital products, physical packaging, and sculptural forms together."
              fetchPriority="high"
            />
            <span className="hero-art-label label-build">
              Build.
              <ArrowUpRight size={19} />
            </span>
            <span className="hero-art-label label-grow">
              Grow.
              <TrendingUp size={18} />
            </span>
            <span className="hero-art-label label-connect">
              <Network size={15} /> CONNECT THE POSSIBILITIES
            </span>
            <span className="art-annotation">A few possibilities. One connected company.</span>
            <span className="hero-scribble" aria-hidden="true">
              ↗
            </span>
          </div>
        </section>
        <div className="manifesto-strip" aria-label="What drives DSLabs">
          <span>Problems worth solving</span>
          <Mark />
          <span>Products worth building</span>
          <Mark />
          <span>Businesses worth growing</span>
          <Mark />
        </div>

        <section
          className="opportunities-section page-section"
          aria-labelledby="opportunities-title"
        >
          <div className="opportunity-heading">
            <p className="eyebrow section-kicker">01 / CURIOSITY IS THE STARTING POINT</p>
            <h2 id="opportunities-title">
              A good opportunity
              <br />
              can come from <span className="serif-word">anywhere.</span>
            </h2>
            <p>
              A customer need. A market gap. An idea nobody has tried.
              <br />
              We follow the opportunity, then figure out what it needs.
            </p>
            <span className="handwritten">
              It starts with “what if?”{' '}
              <svg viewBox="0 0 100 35" aria-hidden="true">
                <path d="M3 9Q53 44 91 8m-15-3 17 1-2 15" />
              </svg>
            </span>
          </div>
          <div className="opportunity-cloud" aria-label="Opportunity sources">
            {opportunities.map((opportunity, index) => {
              const Icon = sourceIcons[index];
              return (
                <OpenButton
                  key={opportunity.id}
                  detail={opportunity}
                  onSelect={select}
                  className={`opportunity-chip chip-${index}`}
                >
                  <Icon size={17} />
                  <span>{opportunity.label}</span>
                  <ArrowUpRight size={12} />
                </OpenButton>
              );
            })}
          </div>
        </section>

        <section
          className="universe-section page-section"
          id="universe"
          aria-labelledby="universe-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-kicker">02 / THE DSLABS UNIVERSE</p>
              <h2 id="universe-title">
                One starting point.
                <br />
                <span className="serif-word">Many things it can become.</span>
              </h2>
            </div>
            <p>
              Sometimes it’s a better way to run a business.
              <br />
              Sometimes it’s a product. Sometimes it’s
              <br />
              the beginning of a whole new company.
            </p>
          </div>
          <div className="universe-toolbar">
            <div className="view-switch" role="group" aria-label="Outcome perspective">
              {(
                [
                  { id: 'ecosystem', label: 'All possibilities' },
                  { id: 'services', label: 'For clients' },
                  { id: 'ventures', label: 'Built by DSLabs' },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  aria-pressed={view === item.id}
                  onClick={() => setView(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <span className="possibility-note">
              <CircleDashed size={13} /> POSSIBLE OUTCOMES, NOT A PORTFOLIO
            </span>
          </div>
          <div className="outcome-grid" aria-live="polite">
            {visibleOutcomes.map((outcome) => {
              const isFeature = ['improvements', 'products', 'ventures'].includes(outcome.id);
              return (
                <OpenButton
                  key={outcome.id}
                  detail={outcome}
                  onSelect={select}
                  aria-label={`Explore ${outcome.label}`}
                  className={`outcome-card ${isFeature ? 'feature-outcome' : 'compact-outcome'} outcome-${outcome.id}`}
                >
                  {isFeature ? (
                    <OutcomeArtwork id={outcome.id} />
                  ) : (
                    <span className="compact-art">
                      {outcome.id === 'solutions' ? (
                        <Workflow size={39} strokeWidth={1.2} />
                      ) : (
                        <Network size={39} strokeWidth={1.2} />
                      )}
                    </span>
                  )}
                  <span className="outcome-copy">
                    <span className="outcome-kicker">
                      {outcome.id === 'improvements'
                        ? 'SOLVE & GROW'
                        : outcome.id === 'products'
                          ? 'CREATE & OWN'
                          : outcome.id === 'ventures'
                            ? 'BUILD & EXPAND'
                            : outcome.id === 'solutions'
                              ? 'LEARN & REUSE'
                              : 'VALIDATE & OPERATE'}
                    </span>
                    <strong>{outcome.label}</strong>
                    <span className="outcome-description">
                      {outcome.id === 'improvements'
                        ? 'The right mix of capabilities to solve a real problem and help an existing business grow.'
                        : outcome.id === 'products'
                          ? 'Software, platforms, physical products, or brands. Built from a need worth solving.'
                          : outcome.id === 'ventures'
                            ? 'Entirely new companies and ventures, created from opportunities we discover.'
                            : outcome.id === 'solutions'
                              ? 'One problem solved well can become useful to many businesses.'
                              : 'A validated opportunity can become a business under the DSLabs umbrella.'}
                    </span>
                  </span>
                  <span className="circle-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </OpenButton>
              );
            })}
          </div>
        </section>

        <section
          className="capabilities-section"
          id="capabilities"
          aria-labelledby="capabilities-title"
        >
          <div className="page-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-kicker">03 / WHAT WE BRING TO THE TABLE</p>
                <h2 id="capabilities-title">
                  Different capabilities.
                  <br />
                  <span className="serif-word">Better together.</span>
                </h2>
              </div>
              <p>
                Technology, creativity, and business thinking.
                <br />
                Shared capabilities we combine around
                <br />
                what the opportunity actually needs.
              </p>
            </div>
            <div
              className="capability-combinations"
              role="group"
              aria-label="Illustrative capability combinations"
            >
              <span>TRY A COMBINATION</span>
              {[
                { id: 'all', label: 'The whole toolkit' },
                { id: 'software', label: 'Build a product' },
                { id: 'business', label: 'Grow a business' },
                { id: 'physical-team', label: 'Make something physical' },
              ].map((item) => (
                <button
                  key={item.id}
                  aria-pressed={combination === item.id}
                  onClick={() => setCombination(item.id)}
                >
                  {item.label}
                  {combination === item.id ? <Check size={13} /> : <Plus size={13} />}
                </button>
              ))}
            </div>
            <div className="capability-workspace">
              <div className="core-panel">
                <div className="core-caption">THE CONSTANT AT THE CENTER</div>
                <div className="core-illustration">
                  <svg className="core-lines" viewBox="0 0 400 340" aria-hidden="true">
                    <ellipse cx="200" cy="170" rx="151" ry="116" />
                    <ellipse cx="200" cy="170" rx="104" ry="152" transform="rotate(42 200 170)" />
                    {capabilities.map((_, i) => {
                      const a = (i * Math.PI * 2) / 9;
                      return (
                        <path
                          key={i}
                          d={`M200 170L${200 + 149 * Math.cos(a)} ${170 + 118 * Math.sin(a)}`}
                        />
                      );
                    })}
                  </svg>
                  <OpenButton
                    detail={parent}
                    onSelect={select}
                    className="core-company"
                    aria-label="Explore DSLabs, the parent company"
                  >
                    <Mark />
                    <strong>DSLabs</strong>
                    <span>ONE CONNECTED CORE</span>
                  </OpenButton>
                  {capabilities.map((capability, i) => {
                    const Icon = icons[capability.id];
                    const a = (i * Math.PI * 2) / 9;
                    return (
                      <span
                        key={capability.id}
                        className={`core-dot ${activeCombination?.capabilities.includes(capability.id) ? 'core-dot-active' : ''}`}
                        style={{
                          left: `${50 + 37.25 * Math.cos(a)}%`,
                          top: `${50 + 34.7 * Math.sin(a)}%`,
                        }}
                        aria-hidden="true"
                      >
                        <Icon size={17} />
                      </span>
                    );
                  })}
                </div>
                <p>
                  {activeCombination
                    ? activeCombination.description
                    : 'One parent company. A shared toolkit. Teams and capabilities assembled around the opportunity.'}
                </p>
                <OpenButton detail={partners} onSelect={select} className="extended-link">
                  <Network size={15} /> Plus the right external specialists{' '}
                  <ArrowUpRight size={15} />
                </OpenButton>
              </div>
              <div className="capability-grid">
                {capabilities.map((capability) => {
                  const Icon = icons[capability.id];
                  const active = activeCombination?.capabilities.includes(capability.id);
                  return (
                    <OpenButton
                      key={capability.id}
                      detail={capability}
                      onSelect={select}
                      aria-label={`Explore ${capability.label}`}
                      className={`capability-item tone-${capability.tone} ${active ? 'combination-active' : ''}`}
                    >
                      <span className="capability-item-top">
                        <Icon size={23} strokeWidth={1.6} />
                        <span>{capability.number}</span>
                      </span>
                      <strong>{capability.shortLabel}</strong>
                      <span className="capability-description">{capability.summary}</span>
                      <span className="capability-explore">
                        {active
                          ? 'In this combination'
                          : `${capability.items.length} ways to put it to work`}
                        <ArrowUpRight size={14} />
                      </span>
                    </OpenButton>
                  );
                })}
              </div>
            </div>
            <p className="combination-note" aria-live="polite">
              {activeCombination
                ? 'An illustrative combination. Every opportunity can call for a different mix.'
                : 'Capabilities, not departments. Explore any area to see what it can include.'}
            </p>
          </div>
        </section>

        <section className="engine-section page-section" id="engine" aria-labelledby="engine-title">
          <div className="engine-story">
            <p className="eyebrow section-kicker">04 / THE DSLABS ENGINE</p>
            <h2 id="engine-title">
              From “what if”
              <br />
              to <span className="serif-word">out in the world.</span>
            </h2>
            <p>
              We can take an opportunity all the way from the first question to a functioning,
              growing business.
            </p>
            <p>
              Research informs the build. Real-world feedback informs what comes next. The process
              keeps moving.
            </p>
            <div className="engine-stamp">
              <RotateCcw size={23} />
              <span>
                BUILD. LEARN.
                <br />
                <strong>MAKE IT BETTER.</strong>
              </span>
            </div>
          </div>
          <div className="engine-console">
            <div className="engine-console-header">
              <span>EXPLORE THE PROCESS</span>
              <span>{String(stage + 1).padStart(2, '0')} / 06</span>
            </div>
            <div className="phase-tabs" role="group" aria-label="Business creation stages">
              {phases.map((phase, i) => (
                <button key={phase.id} aria-pressed={stage === i} onClick={() => setStage(i)}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {phase.shortLabel}
                </button>
              ))}
            </div>
            <div className="phase-preview" aria-live="polite">
              <span className="phase-large-number" aria-hidden="true">
                0{stage + 1}
              </span>
              <div>
                <h3>{activePhase.label}</h3>
                <p>{activePhase.description}</p>
                <OpenButton detail={activePhase} onSelect={select} className="text-link">
                  Explore this stage <ArrowUpRight size={16} />
                </OpenButton>
              </div>
            </div>
            <div className="engine-navigation">
              <span>Each stage connects to the next.</span>
              <button
                aria-label="Previous stage"
                disabled={stage === 0}
                onClick={() => setStage((s) => s - 1)}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next stage"
                disabled={stage === 5}
                onClick={() => setStage((s) => s + 1)}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="full-engine" aria-label="Complete opportunity-to-scale engine">
            {engineSteps.map((step, i) => (
              <button
                key={step}
                onClick={() => setStage(engineGroups.findIndex((group) => group.includes(i)))}
                aria-pressed={engineGroups[stage].includes(i)}
              >
                {step}
                {i < engineSteps.length - 1 && <ArrowRight size={11} />}
              </button>
            ))}
            <span className="engine-feedback">
              <RotateCcw size={12} /> Feedback returns to research
            </span>
          </div>
        </section>

        <section className="pathway-section" aria-labelledby="pathway-title">
          <div className="page-section pathway-inner">
            <div>
              <p className="eyebrow section-kicker">THE CONNECTION THAT COMPOUNDS</p>
              <h2 id="pathway-title">
                Today’s service.
                <br />
                <span className="serif-word">Tomorrow’s venture.</span>
              </h2>
              <p>
                A client project can reveal a recurring problem.
                <br />
                Solve it well, and it could become something bigger.
              </p>
            </div>
            <div className="pathway-track">
              {pathway.map((step, i) => (
                <OpenButton key={step.id} detail={step} onSelect={select} className="pathway-step">
                  <span className="pathway-step-top">
                    <span>{i === 5 ? <Mark /> : `0${i + 1}`}</span>
                    {i < 5 && <ArrowRight size={16} />}
                  </span>
                  <strong>{step.label}</strong>
                  <span>{step.summary}</span>
                </OpenButton>
              ))}
            </div>
            <span className="pathway-note">
              A possible progression. Each next step needs its own validation.
            </span>
          </div>
        </section>

        <section className="teams-section page-section" id="teams" aria-labelledby="teams-title">
          <figure className="team-photo">
            <img
              src="/images/dslabs-making.png"
              width="1536"
              height="1024"
              alt="Illustrative workshop scene: hands sketching and assembling a physical packaging prototype alongside a laptop."
              loading="lazy"
            />
            <figcaption>
              <span>THINKING. MAKING. TESTING.</span>
              <span>Illustrative scene</span>
            </figcaption>
            <span className="photo-sticker">
              Built around
              <br />
              <b>the opportunity.</b>
              <Mark />
            </span>
          </figure>
          <div className="teams-copy">
            <p className="eyebrow section-kicker">05 / A COMPANY THAT CAN KEEP EVOLVING</p>
            <h2 id="teams-title">
              New opportunities.
              <br />
              New combinations.
              <br />
              <span className="serif-word">Always DSLabs.</span>
            </h2>
            <p>
              As the company grows, different teams can pursue completely different opportunities at
              the same time. The parent company stays constant.
            </p>
            <div className="team-options" role="group" aria-label="Illustrative opportunity teams">
              {teamExamples.map((example, i) => (
                <button key={example.id} aria-pressed={team === i} onClick={() => setTeam(i)}>
                  {example.label}
                  {team === i ? <Check size={12} /> : <Plus size={12} />}
                </button>
              ))}
            </div>
            <div className="team-detail" aria-live="polite">
              <span className="team-example-label">
                <CircleDashed size={12} /> AN ILLUSTRATIVE OPPORTUNITY TEAM
              </span>
              <p>{chosenTeam.description}</p>
              <div className="team-capabilities">
                {chosenTeam.capabilities.map((id) => {
                  const cap = capabilities.find((c) => c.id === id)!;
                  return (
                    <OpenButton detail={cap} onSelect={select} key={id}>
                      {cap.shortLabel}
                      <ArrowUpRight size={12} />
                    </OpenButton>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="principles-section page-section" aria-label="How DSLabs works">
          <div>
            <span>01 / FOLLOW THE OPPORTUNITY</span>
            <h3>
              The problem sets
              <br />
              the direction.
            </h3>
            <p>
              Customer, context, and objective first. The right industry, channel, and capabilities
              follow.
            </p>
          </div>
          <div>
            <span>02 / UNDERSTAND BEFORE AUTOMATING</span>
            <h3>
              Make sense of it.
              <br />
              Then make it work.
            </h3>
            <p>
              Understand the manual process. Turn data into insight, decisions, and useful action.
            </p>
          </div>
          <div>
            <span>03 / BRING THE RIGHT PEOPLE</span>
            <h3>
              Build the capability
              <br />
              the work needs.
            </h3>
            <p>
              Internal teams plus specialists, vendors, manufacturers, and partners. Implementation
              or recommendations to fit the need.
            </p>
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-top">
            <p className="eyebrow">ONE COMPANY. MANY WAYS TO CREATE VALUE.</p>
            <a className="closing-link" href="#universe">
              There’s more to
              <br />
              <span className="serif-word">explore.</span>
              <ArrowUpRight />
            </a>
            <p>
              The shape of the opportunity can change.
              <br />
              The drive to make something useful stays.
            </p>
          </div>
          <div className="footer-wordmark" aria-hidden="true">
            DSLabs
            <Mark />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span>An opportunity-driven parent company.</span>
        <span>Potential outcomes and teams are illustrative.</span>
        <a href="#">
          Back to top <ArrowUpRight size={13} />
        </a>
      </footer>
      <DetailPanel detail={selected} onClose={close} onSelect={select} />
    </>
  );
}
