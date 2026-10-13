import { useState } from "react";
import "./styles.css";


/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */
const SPEEDS = {
  low:  { label: "Low",    name: "Low.",    text: "Gentlest airflow and the quietest of the three settings.", flow: "2.6s", op: 0.4,  spin: "2s" },
  med:  { label: "Medium", name: "Medium.", text: "A balance of airflow and added noise.",                    flow: "1.4s", op: 0.65, spin: "1s" },
  high: { label: "High",   name: "High.",   text: "The most airflow, with the most added fan noise.",        flow: "0.75s", op: 0.95, spin: "0.45s" },
};

const ANGLES = [
  { tick: "Flat", name: "Flat.",      text: "Lowest profile on the desk.",                           deg: 0 },
  { tick: "Low",  name: "Low tilt.",  text: "A slight lift that opens the space under the laptop.",  deg: 6 },
  { tick: "Mid",  name: "Mid tilt.",  text: "A steeper slope for typing and viewing.",               deg: 12 },
  { tick: "High", name: "High tilt.", text: "The steepest lift. Check that it suits your wrists.",   deg: 18 },
];

const PROBLEMS = [
  ["A hot chassis", "Demanding CPU and GPU work generates heat, and it shows up under your wrists and on your lap."],
  ["Louder fans", "The laptop's own fans spin harder as temperatures climb."],
  ["Reduced performance", "When thermal limits are reached, some laptops slow themselves down."],
  ["An awkward position", "Flat on a desk, a laptop can feel uncomfortable to type on for hours."],
];

const MODEL_ROWS = [
  ["Cooling fans", "Included", "Included", null],
  ["Fan-speed control", "Low, medium, high", "Improved fan control", "opt"],
  ["Adjustable stand", "Included", "Included", null],
  ["Materials", "Durable, stable construction", "Enhanced materials", "opt"],
  ["Temperature monitoring", "Not included", "Optional", "mixed"],
];

const PHASES = [
  ["Customer discovery", "We interview 15 to 25 gaming laptop owners about heat, noise, comfort, and what they've already tried. We avoid leading questions."],
  ["Competitor and price research", "We compare existing pads on price, fan layout, noise, adjustability, warranty, reviews, and return policies, and study the most common complaints."],
  ["Prototype validation", "The same laptop, with and without CoolPlay, under the same conditions. We repeat the tests and record room temperature, power settings, workload, and test length."],
  ["Small pilot launch", "A limited batch, only after safety, quality, and performance testing. We collect returns, complaints, and ratings before making more."],
];

const CLAIMS = ["A specific temperature drop", "Higher FPS", "Quieter laptop fans", "Longer laptop life"];

const FAQS = [
  ["Will it lower my laptop's temperature?", "Extra airflow may help manage temperatures, but the result depends on your laptop's design and conditions. We'll publish measured results from our test bench once we have them."],
  ["Will it fit my laptop?", "We'll publish dimensions, supported laptop sizes, and notes on airflow layout with the pilot, so you can check before you buy."],
  ["How loud will it be?", "The three fan speeds let you trade airflow for noise. We'll measure noise at each setting and report it on the product page."],
  ["How much will it cost?", "Our planning range is ₹1,499 to ₹2,499. It's an assumption, and we'll finalize it after cost analysis and price testing with customers."],
  ["When can I buy one?", "CoolPlay is a concept. A limited pilot batch comes only after safety, quality, and performance testing. Join the list below to hear when it opens."],
  ["Do creators get paid to review it?", "We plan to work with small creators whose audiences match our customers. Any paid partnership will be disclosed."],
];

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */
function Logo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
      <g fill="var(--cool)">
        <path d="M16 16 C16 8, 22 6, 24 9 C25 12, 20 16, 16 16Z" />
        <path d="M16 16 C22 16, 26 21, 23.5 24 C20.5 25.5, 16 20.5, 16 16Z" />
        <path d="M16 16 C12 20, 6 20, 6 16.5 C6.5 12.5, 12 12, 16 16Z" />
      </g>
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="CoolPlay home"><Logo /> CoolPlay</a>
        <nav aria-label="Primary">
          <ul>
            <li><a href="#product">Product</a></li>
            <li><a href="#models">Models</a></li>
            <li><a href="#proof">Testing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <span className="pill">Concept preview</span>
          <a className="btn btn-primary btn-sm" href="#join">Join the pilot list</a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero with interactive airflow stage                                */
/* ------------------------------------------------------------------ */
function AirflowStage() {
  const [speed, setSpeed] = useState("med");
  const [angle, setAngle] = useState(0);
  const s = SPEEDS[speed];
  const a = ANGLES[angle];

  return (
    <div className="stage" style={{ "--flow": s.flow, "--flow-o": s.op, "--spin": s.spin }}>
      <div className="stage-title">
        <strong>Try the controls</strong>
        <span>Side view of a laptop on CoolPlay</span>
      </div>

      <svg viewBox="0 0 640 420" role="img" aria-label="Side view of a laptop resting on a cooling pad. Dashed lines show air moving from the pad fans into the gap under the laptop.">
        <rect x="0" y="360" width="640" height="60" fill="var(--surface-2)" />
        <rect x="0" y="358" width="640" height="4" fill="var(--line)" />

        <g className="tilt" style={{ transform: `rotate(${-a.deg}deg)` }}>
          {/* pad */}
          <rect x="120" y="338" width="400" height="22" rx="9" fill="var(--ink)" />
          <rect x="195" y="338" width="70" height="5" rx="2.5" fill="var(--cool)" />
          <rect x="375" y="338" width="70" height="5" rx="2.5" fill="var(--cool)" />
          <rect x="120" y="330" width="10" height="30" rx="4" fill="var(--ink)" />
          {/* laptop */}
          <rect x="150" y="322" width="18" height="16" rx="3" fill="var(--muted)" />
          <rect x="472" y="322" width="18" height="16" rx="3" fill="var(--muted)" />
          <rect x="135" y="306" width="385" height="16" rx="7" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="3" />
          <rect x="506" y="170" width="14" height="140" rx="5" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="3" transform="rotate(10 513 310)" />
          {/* airflow */}
          <g className="airflow">
            <path d="M215 340 C215 332 200 330 150 330" />
            <path d="M245 340 C245 332 262 330 300 330" />
            <path d="M395 340 C395 332 380 330 340 330" />
            <path d="M425 340 C425 332 440 330 490 330" />
            <path d="M230 340 L230 324" />
            <path d="M410 340 L410 324" />
          </g>
          {/* warm exhaust */}
          <g className="heat">
            <path d="M532 310 c10 -6 -10 -14 0 -20 c10 -6 -10 -14 0 -20" />
            <path d="M552 312 c10 -6 -10 -14 0 -20 c10 -6 -10 -14 0 -20" />
            <path d="M572 314 c10 -6 -10 -14 0 -20 c10 -6 -10 -14 0 -20" />
          </g>
        </g>
      </svg>

      <div className="legend" aria-hidden="true">
        <span><i />Air from the pad fans</span>
        <span><i className="h" />Warm air leaving the laptop</span>
      </div>

      <div className="controls">
        <fieldset>
          <legend>Fan speed</legend>
          <div className="seg">
            {Object.entries(SPEEDS).map(([key, val]) => (
              <span key={key} style={{ display: "contents" }}>
                <input type="radio" name="speed" id={`s-${key}`} value={key} checked={speed === key} onChange={() => setSpeed(key)} />
                <label htmlFor={`s-${key}`}>{val.label}</label>
              </span>
            ))}
          </div>
        </fieldset>
        <div>
          <label className="ctl-label" htmlFor="angle">Angle</label>
          <input
            type="range" id="angle" min="0" max="3" step="1" value={angle}
            aria-valuetext={a.name.replace(".", "")}
            onChange={(e) => setAngle(parseInt(e.target.value, 10))}
          />
          <div className="ticks" aria-hidden="true">
            {ANGLES.map((x) => <span key={x.tick}>{x.tick}</span>)}
          </div>
        </div>
      </div>

      <div className="readout" aria-live="polite">
        <svg viewBox="0 0 52 52" aria-hidden="true">
          <circle cx="26" cy="26" r="24" fill="none" stroke="var(--ink)" strokeWidth="2" />
          <g className="fan-spin" fill="var(--cool)">
            <path d="M26 26 C24 14, 33 10, 36 14 C38 19, 31 25, 26 26Z" />
            <path d="M26 26 C37 22, 44 29, 41 34 C37 38, 29 31, 26 26Z" />
            <path d="M26 26 C32 36, 26 44, 21 42 C16 39, 20 31, 26 26Z" />
            <path d="M26 26 C16 31, 8 26, 9 21 C11 16, 20 19, 26 26Z" />
          </g>
          <circle cx="26" cy="26" r="4" fill="var(--ink)" />
        </svg>
        <p>
          <strong>{s.name}</strong> {s.text}<br />
          <strong>{a.name}</strong> {a.text}
        </p>
      </div>
      <p className="fineprint">An illustration of the airflow path, not measured data. Real temperature and noise results come from our test bench.</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <h1 id="hero-title">Stay Cool. Play Longer.</h1>
          <p className="lead">A laptop cooling pad for gaming laptops, with adjustable fans, adjustable angles, and simple controls, at a price students can consider.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#join">Join the pilot list</a>
            <a className="btn btn-ghost" href="#proof">See how we'll test it</a>
          </div>
          <p className="hero-note">CoolPlay is at concept stage. Nothing here is for sale yet, and every performance claim waits for real test results.</p>
        </div>
        <AirflowStage />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sections                                                           */
/* ------------------------------------------------------------------ */
function Problem() {
  return (
    <section aria-labelledby="problem-title">
      <div className="wrap split">
        <div>
          <h2 id="problem-title">Long sessions are hard on a gaming laptop, and on you.</h2>
          <div className="gap-note">
            <p><strong>Cooling pads already exist.</strong> They vary a lot in airflow, noise, build quality, and ease of use. CoolPlay aims at one gap: reasonable cooling support, comfortable positioning, simple controls, and performance information you can trust, without paying for features you don't need.</p>
          </div>
        </div>
        <ul className="problem-list">
          {PROBLEMS.map(([title, body]) => (
            <li key={title}><b>{title}</b><span className="muted">{body}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const iconProps = { className: "ico", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 2.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

function Features() {
  return (
    <section className="features" id="product" aria-labelledby="product-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="product-title">Five things CoolPlay is designed to do</h2>
          <p>The concept combines cooling, comfort, and control in one pad. Specifications are still being finalized through testing.</p>
        </div>

        <div className="bento">
          <article className="tile big">
            <svg {...iconProps} strokeWidth={2.4}>
              <circle cx="24" cy="24" r="20" />
              <path d="M24 24 C22 12, 31 8, 34 12 C36 17, 29 23, 24 24Z" />
              <path d="M24 24 C35 20, 42 27, 39 32 C35 36, 27 29, 24 24Z" />
              <path d="M24 24 C30 34, 24 42, 19 40 C14 37, 18 29, 24 24Z" />
              <path d="M24 24 C14 29, 6 24, 7 19 C9 14, 18 17, 24 24Z" />
              <circle cx="24" cy="24" r="2.5" />
            </svg>
            <div>
              <h3>Adjustable cooling fans</h3>
              <p style={{ marginTop: ".6rem" }}>Fans sit below the laptop to push air across its underside and support the laptop's own cooling system. How much they help depends on your laptop's design and your room.</p>
            </div>
          </article>

          <article className="tile">
            <svg {...iconProps}><path d="M8 34h6M8 26h14M8 18h22" /><path d="M34 40V10" /><circle cx="34" cy="24" r="5" fill="var(--bg)" /></svg>
            <h3>Three fan speeds</h3>
            <p>Low, medium, and high. Pick the balance of airflow and added noise that suits the game, the room, and the time of night.</p>
          </article>

          <article className="tile">
            <svg {...iconProps}><path d="M6 38h36" /><path d="M8 38 40 26" /><path d="M8 38 40 14" opacity=".45" /></svg>
            <h3>Adjustable angles</h3>
            <p>Several height settings improve how the laptop sits on your desk and help keep its air intakes from being blocked.</p>
          </article>

          <article className="tile">
            <span className="tag">Optional, premium model</span>
            <svg {...iconProps}><rect x="6" y="10" width="36" height="24" rx="4" /><path d="M14 26l6-7 5 5 9-10" /><path d="M18 40h12" /></svg>
            <h3>Temperature monitoring</h3>
            <p>A display or compatible software could show CPU and GPU readings. Accurate internal readings need suitable sensors or software, so we're testing what works.</p>
          </article>

          <article className="tile">
            <svg {...iconProps}><rect x="8" y="22" width="32" height="14" rx="4" /><path d="M16 22v-6a8 8 0 0 1 16 0v6" opacity=".45" /><path d="M14 30h4M22 30h4M30 30h4" /></svg>
            <h3>Practical build</h3>
            <p>USB power, a stable non-slip surface, durable materials, and cable management, so it stays put and stays tidy.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Models() {
  return (
    <section id="models" aria-labelledby="models-title">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <h2 id="models-title">Two models, one planning range</h2>
          <p>Price is still a planning assumption. It isn't based on a finished competitor or cost analysis.</p>
        </div>
        <p className="price-line">₹1,499 to ₹2,499</p>
        <p className="price-sub">Indicative range across both models. Final prices come after cost work and customer price testing.</p>

        <div className="table-scroll">
          <table>
            <thead>
              <tr><th scope="col">What you get</th><th scope="col">Entry</th><th scope="col">Premium</th></tr>
            </thead>
            <tbody>
              {MODEL_ROWS.map(([label, entry, premium, kind]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td className={kind === "mixed" ? "no" : undefined}>{entry}</td>
                  <td className={kind ? "opt" : undefined}>{premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="costs">
          <div>
            <h3>How we'll set the final price</h3>
            <p className="muted" style={{ marginTop: ".5rem" }}>We compare at least 8 to 10 competing pads, then test more than one price with real customers. The price has to cover:</p>
          </div>
          <ul>
            <li>Parts and manufacturing</li>
            <li>Packaging and shipping</li>
            <li>Marketplace fees and taxes</li>
            <li>Returns and warranty</li>
            <li>The cost of reaching customers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof" id="proof" aria-labelledby="proof-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="proof-title">We test it before we say it</h2>
          <p>A cooling pad should earn its claims. Here is the path from idea to a product page you can believe.</p>
        </div>

        <div className="proof-grid">
          <ol className="phases">
            {PHASES.map(([title, body]) => (
              <li key={title}><h3>{title}</h3><p>{body}</p></li>
            ))}
          </ol>

          <div className="claims">
            <h3>Claims we haven't earned yet</h3>
            <p>We won't promise any of these until controlled testing backs them up.</p>
            <ul>
              {CLAIMS.map((c) => (
                <li key={c}><span>{c}</span><span className="status">Not yet tested</span></li>
              ))}
            </ul>
            <dl className="measure-list">
              <div><dt>What we measure</dt><dd>CPU and GPU temperatures, FPS and frame-time consistency, noise at each fan setting, stability.</dd></div>
              <div><dt>What we publish</dt><dd>The method and the real results, including when the improvement is modest.</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section aria-labelledby="who-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="who-title">Who we're building it for first</h2>
          <p>This is a starting hypothesis. The interviews will tell us whether it's the right one.</p>
        </div>
        <div className="audience-grid">
          <div className="box">
            <h3>Students and budget-conscious gamers</h3>
            <p>People who own a gaming laptop and play for long stretches, roughly ages 15 to 30. They want useful cooling, manageable noise, a comfortable desk setup, durability, and good value.</p>
          </div>
          <div className="box alt">
            <h3>Heavy creative and productivity users</h3>
            <p>A secondary group running demanding apps that push the laptop just as hard.</p>
            <ul>
              <li>Direct online sales</li>
              <li>E-commerce marketplaces</li>
              <li>Selected gaming-accessory retailers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-wrap">
        <h2 id="faq-title" style={{ marginBottom: "2.25rem" }}>Questions, answered plainly</h2>
        {FAQS.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Join() {
  const [email, setEmail] = useState("");
  const [size, setSize] = useState("15 to 16 inches");
  const [issue, setIssue] = useState("Heat");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  // Front-end only: wire this to your backend or a form service to collect sign-ups.
  const submit = () => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError("Enter a valid email address, like you@example.com.");
      setDone(false);
      return;
    }
    setError("");
    setDone(true);
    setEmail("");
  };

  return (
    <section id="join" aria-labelledby="join-title">
      <div className="wrap join-grid">
        <div>
          <h2 id="join-title">Help shape the pilot</h2>
          <p className="muted measure" style={{ marginTop: "1rem" }}>Tell us about your laptop and what bothers you most. Early answers decide which problem CoolPlay solves first.</p>
        </div>

        <div className="join-card" role="group" aria-label="Pilot list sign-up" onKeyDown={(e) => { if (e.key === "Enter" && e.target.tagName === "INPUT") submit(); }}>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              type="email" id="email" autoComplete="email" placeholder="you@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              aria-invalid={error ? "true" : undefined} aria-describedby="email-err"
            />
            <div className="err" id="email-err" role="alert">{error}</div>
          </div>
          <div className="field">
            <label htmlFor="size">Your laptop screen size</label>
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
              <option>13 to 14 inches</option>
              <option>15 to 16 inches</option>
              <option>17 inches or larger</option>
              <option>Not sure</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="issue">What bothers you most?</label>
            <select id="issue" value={issue} onChange={(e) => setIssue(e.target.value)}>
              <option>Heat</option>
              <option>Fan noise</option>
              <option>Comfort and posture</option>
              <option>Price of cooling pads</option>
              <option>Something else</option>
            </select>
          </div>
          <button className="btn btn-primary" type="button" onClick={submit}>Join the pilot list</button>
          {done && <div className="success" role="status">You're on the pilot list. We'll write to you when CoolPlay testing opens.</div>}
          <p className="form-note">We'll only use your email to tell you about the CoolPlay pilot.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <a className="brand" href="#top" aria-label="Back to top"><Logo /> CoolPlay</a>
        <p>Preliminary concept. Product specifications, pricing, market demand, and performance claims all require validation.</p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <div className="cp">
      <Header />
      <main id="top">
        <Hero />
        <Problem />
        <Features />
        <Models />
        <Proof />
        <Audience />
        <Faq />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
