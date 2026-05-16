// All site data lives here. Edit content in one place.

export const SITE = {
  name: "Kyrylo Rozbeiko",
  initial: "K",
  role: "Head of Delivery",
  current: "Head of Delivery at Triangu",
  location: "Kyiv, Ukraine",
  handle: "rozbeyko.github.io",
  email: "rozbeyko@gmail.com",
  linkedin: "linkedin.com/in/rozbeiko",
  github: "github.com/rozbeyko",
  tagline: "Turning messy ideas into predictable delivery.",
  status: "Not looking for full-time roles. Open to short engagements / advisory on an hourly basis.",
};

export const NAV = [
  { path: "home",     label: "Home" },
  { path: "about",    label: "About" },
  { path: "work",     label: "CV" },
  { path: "cases",    label: "Cases" },
  { path: "maintra",  label: "Maintra" },
  { path: "creator",  label: "Creator" },
  { path: "now",      label: "Now" },
  { path: "writing",  label: "Writing", draft: true },
  { path: "speaking", label: "Civic" },
  { path: "reading",  label: "Reading", draft: true },
  { path: "kind",     label: "Recs" },
  { path: "contact",  label: "Contact" },
];

export const DRAFT_PATHS = new Set(
  NAV.filter((n) => n.draft).map((n) => n.path).concat(["post"])
);

export const STATS = [
  { n: "6", u: "yrs", l: "Leading delivery" },
  { n: "$2M", u: "+",  l: "Largest budget owned" },
  { n: "50", u: "+",  l: "People in distributed teams" },
  { n: "2,000", u: "/mo", l: "Manual hours saved by AI workflows" },
];

export const EXPERIENCE = [
  {
    company: "Triangu",
    mark: "lm-triangu",
    glyph: "△",
    type: "Full-time · 6 mos",
    roles: [
      {
        title: "Head of Delivery",
        when: "May 2026 — Present",
        where: "Kyiv · Hybrid",
        bullets: [
          "Own **portfolio management of 40+ projects** with **50+ people** allocated across them.",
          "Building **new departments and practices** for the company portfolio — most notably an internal **AI practice** (pilots, AI-architect interviews, packaged offers, Rovo use cases).",
          "Designing and building an internal SaaS — a **\"Delivery Cockpit\" / Delivery HQ** — to answer the questions every leadership team should be able to answer: *what are we delivering, where are margins leaking, what's the strategy on each client, who's allocated where, how happy is everyone, how healthy is the company*.",
          "Operating cadence: weekly portfolio review, executive-alignment log, capacity forecasting, exception-based escalation. Leadership stays out of micro-details; delivery keeps the room.",
        ],
      },
      {
        title: "Delivery Manager",
        when: "Dec 2025 — May 2026 · 6 mos",
        where: "Kyiv · Remote",
        bullets: [
          "First delivery hire. Inherited a turbulent environment, brought it back to operating order.",
          "Built the commercial backbone: **role/seniority-based rate cards**, discount governance, proposal math, **T&M phased estimation** approach. Replaced average-rate guessing with defensible pricing.",
          "Defined **delivery models & engagement types**, **portfolio registry and tiering**, **PVR registration operating model**, and the **sales-to-delivery intake** RACI with a Jira front door.",
          "Stood up the **Delivery HQ Confluence space**, the **DI Kanban board** for non-billable work, and a sales-to-delivery questions channel so engineers stopped getting tapped on the shoulder.",
          "Wrote the **2026–2028 strategic direction** (portfolio-led business model) and ran executive-alignment discipline as a weekly cadence.",
          "Outcomes: **100% accuracy on invoicing and deadlines met**, **6 new contracts won or renewed**, and the room calmed down.",
          "Promoted to Head of Delivery after 6 months.",
        ],
      },
    ],
  },
  {
    company: "EPAM Systems",
    mark: "lm-epam",
    glyph: "E",
    type: "Full-time · 4 yrs 1 mo",
    roles: [
      {
        title: "Senior Project & Delivery Manager",
        when: "Jul 2024 — Dec 2025 · 1 yr 6 mos",
        where: "Kyiv · Remote",
        bullets: [
          "Led AI-driven transformation for a **global insurer (SOMPO)**: 4 AI products in parallel for underwriters.",
          "Managed a **40-person hybrid team** (engineers, data scientists, QA/AQA, BAs, PMs) and a **$2M+ budget**.",
          "Delivered automation saving **2,000+ manual hours / month**, cutting manual data entry **−80%** and improving accuracy **+50%**.",
          "Introduced Agile ceremonies, CI/CD and test automation: production defects **−50%**, rollbacks **−30%**, tech debt held at **~10%**.",
          "Ran steering committees and roadmap reviews with SOMPO executives.",
        ],
      },
      {
        title: "Project Manager",
        when: "Dec 2021 — Jun 2024 · 2 yrs 7 mos",
        where: "Kyiv · Remote",
        bullets: [
          "Delivered large-scale projects across education, cybersecurity, and collaboration — P&L ownership + pre-sales + hands-on Agile.",
          "Led distributed delivery of **50+ specialists** (Salesforce, data engineering, .NET, mobile, DevOps, QA) across **EF Education First**, **LastPass**, **GoTo Group**, and **EBSCO**.",
          "Drove Agile transformation for EF engineering teams: **+25% sprint velocity**, **+7 pts client CSAT**.",
          "Led **EF's Salesforce unification** — migrated several legacy orgs into a single instance for **10+ business units with zero downtime**, coordinating BAs, architects, and engineering teams.",
          "Maintained **<3% attrition** while consistently meeting delivery commitments.",
          "3 successful pre-sales cycles (up to 16 ppl) → new multi-stream contracts.",
        ],
      },
    ],
  },
  {
    company: "Ubisoft",
    mark: "lm-ubisoft",
    glyph: "U",
    type: "Full-time · 3 yrs · On-site",
    roles: [
      {
        title: "Project Coordinator / Delivery Manager, R&D Tools",
        when: "Feb 2021 — Jan 2022 · 1 yr",
        where: "Kyiv",
        bullets: [
          "Led Agile transformation and tools delivery for QC, Production and HR teams.",
          "Managed a **25-person tools team** (1 Tech Lead · 7 devs · 12 automation scripters · 1 QA · 1 UI/UX · 2 PCs · 1 PO) building automation and reporting used across Ubisoft Ukraine.",
          "Adopted by **50%+ of Ubisoft Ukraine** employees.",
          "Built a stable **SDLC + CI/CD pipeline** with the Tech Lead and QA: release defects **−40%**, shorter delivery cycles.",
          "Coached developers on **OKRs, growth plans, and technical excellence**; partnered with studio leadership on department strategy and KPIs.",
          "Represented Kyiv on Ubisoft's **worldwide tools development committee**.",
        ],
      },
      {
        title: "Game Tester / QA Team Coordinator",
        when: "Feb 2019 — Feb 2021 · 2 yrs 1 mo",
        where: "Kyiv",
        bullets: [
          "QA operations for AAA titles (Alpha → post-release): **The Division 2** (5 intermediate testers) and **Far Cry 6** (7 juniors + 3 intermediates).",
          "Coordinated **25+ testers** across Kyiv, Odesa, Malmö, Montreal and Quebec studios.",
          "Built functional testing, defect-tracking, and onboarding workflows — shorter ramp-up for new QA.",
          "Drove team motivation through **1:1s, feedback, and workload balancing** during intensive release periods.",
        ],
      },
    ],
  },
  {
    company: "MHP SE",
    mark: "lm-mhp",
    glyph: "M",
    type: "Full-time · 1 yr 1 mo",
    roles: [
      {
        title: "Product / Project Manager & Business Analyst",
        when: "Dec 2017 — Dec 2018",
        where: "Kyiv · On-site",
        bullets: [
          "Managed IT initiatives and internal startups for a major agricultural holding.",
          "Led end-to-end delivery in finance, payroll and production — idea validation → roll-out.",
          "Kicked off a **UAV field-scanning** initiative and several web apps coordinating outstaffed teams.",
        ],
      },
    ],
  },
];

export const CASES = [
  {
    slug: "sompo",
    company: "SOMPO via EPAM",
    title: "AI underwriting, four products in parallel",
    period: "2024 — 2025",
    summary: "Owned end-to-end delivery of 4 AI products for a global insurer — Outlook & web submission intake, slip-intake, Guidewire PC enhancements, and Appian workflow optimisation.",
    kpis: [
      { n: "4", l: "AI products shipped" },
      { n: "40", l: "ppl across streams" },
      { n: "$2M+", l: "budget owned" },
      { n: "−80%", l: "manual data entry" },
      { n: "+50%", l: "data accuracy" },
      { n: "2,000h", l: "saved / month" },
      { n: "−50%", l: "production defects" },
      { n: "~10%", l: "tech debt held" },
    ],
    tags: ["AI", "Insurance", "Multi-stream", "Pre-sales", "Steering"],
    body: [
      { h: "The situation" },
      { p: "SOMPO was running underwriting workflows that leaned heavily on manual data entry, with submissions arriving over email, web forms, and broker slips. Quality and turnaround time were both inconsistent. EPAM was asked to build automation, but the scope kept expanding: four products, four backlogs, one delivery manager." },
      { h: "What I owned" },
      { p: "End-to-end delivery for all four streams — discovery, plan, staffing, ceremonies, executive comms, and the steering committee with SOMPO leadership. I ran a 40-person hybrid org broken down as **20 engineers, 10 data scientists, 5 QA/AQA, 3 BAs, and 2 PMs** across all streams." },
      { h: "What changed" },
      { p: "Submission intake went model-driven — Outlook plugin + web app routing through **GPT-4, LLaMA, and Gemini** depending on the document type. We hardened the **Guidewire PC** integrations and reshaped the **Appian** workflows so claims hand-offs stopped stalling. Azure DevOps boards were wired into commits and releases so traceability stopped being a guess; CI/CD and automated tests went in across the org so defects didn't bleed into production." },
      { h: "What I'd carry forward" },
      { p: "The win wasn't the model — it was the operating system around it: weekly steering, predictable releases, and a roadmap the client could defend internally. AI delivery is mostly delivery." },
    ],
  },
  {
    slug: "ef",
    company: "EF Education First via EPAM",
    title: "Agile transformation that actually moved velocity",
    period: "2022 — 2024",
    summary: "Drove Agile transformation for EF engineering teams while running multi-stream delivery across 50+ specialists. Improved velocity, retention, and client trust at the same time.",
    kpis: [
      { n: "+25%", l: "sprint velocity" },
      { n: "+7", l: "client CSAT pts" },
      { n: "<3%", l: "team attrition" },
      { n: "50+", l: "specialists" },
      { n: "10+", l: "BUs unified on Salesforce" },
      { n: "0", l: "downtime on migration" },
    ],
    tags: ["Agile", "Education", "Salesforce", "Multi-stream"],
    body: [
      { h: "Why transformations fail" },
      { p: "Most Agile rollouts are theatre — new rituals, same outcomes. EF didn't need ceremonies; they needed predictable releases and a way for product, engineering, and operations to argue about priorities without it taking three weeks." },
      { h: "What we changed" },
      { p: "Reset the planning cadence, made the backlog readable to non-engineers, introduced DoR/DoD that mattered, and tied every sprint to a measurable business question. Velocity went up 25%, but more importantly, CSAT went up 7 points — because the work people cared about actually shipped." },
      { h: "Retention as a delivery KPI" },
      { p: "<3% attrition over two years on a 50-person distributed team isn't an HR metric; it's the reason delivery dates held. Stable teams ship. Churning teams re-onboard." },
      { h: "Salesforce unification" },
      { p: "Ran the migration of several legacy Salesforce orgs into a single instance for **10+ business units with zero downtime** — coordinating BAs, architects, and engineering teams across regions. The technical part was real; the harder part was sequencing 10 different stakeholder groups so nobody's quarter got disrupted." },
    ],
  },
  {
    slug: "lastpass",
    company: "LastPass + GoTo Group via EPAM",
    title: "Scrum from scratch + pre-sales that closed",
    period: "2022 — 2023",
    summary: "Acted as Scrum Master for GoTo and LastPass, built communication and backlog practices from zero, and participated in 3 pre-sales cycles (up to 16 ppl) that converted to multi-stream contracts.",
    kpis: [
      { n: "3", l: "pre-sales won" },
      { n: "16", l: "max bid team size" },
      { n: "0 → 1", l: "Scrum practice" },
    ],
    tags: ["Scrum", "Pre-sales", "Cybersecurity"],
    body: [
      { h: "Two halves of the same job" },
      { p: "I sat between the bid team and the delivery team. On Monday I'd be sketching a 16-person delivery approach for a new pursuit; on Friday I'd be running Scrum for the team that had won the last one. Treating those as one job — not two — is what made the estimates credible." },
      { h: "Team composition" },
      { p: "On the **LastPass mobile** side: 4 iOS, 4 Android, 2 automation testers, plus a staff-aug bench of 3 automation, 1 performance tester, 3 DevOps, and 4 developers. On the **GoTo** side I ran Scrum for a modernisation team of 5 backend devs + a performance + manual tester, plus a separate DevOps team of 4 — coaching both into self-sufficient Scrum from a cold start." },
      { h: "Performance testing as a deliverable" },
      { p: "Kicked off performance-testing discovery to define a real testing strategy and team composition for LastPass. The output wasn't a document; it was a team that could keep doing the work after I rolled off." },
    ],
  },
  {
    slug: "ubisoft-tools",
    company: "Ubisoft Kyiv",
    title: "Internal tools ecosystem, adopted by half the studio",
    period: "2021 — 2022",
    summary: "Led Agile transformation and internal tools delivery for QC, Production, and HR. Managed 25 people. Built an ecosystem adopted by 50%+ of Ubisoft Ukraine.",
    kpis: [
      { n: "25", l: "ppl on the tools team" },
      { n: "50%+", l: "studio adoption" },
      { n: "−40%", l: "release defects" },
    ],
    tags: ["Gamedev", "Internal tooling", "CI/CD"],
    body: [
      { h: "Internal tools are a product" },
      { p: "Most studios treat internal tools as scripts maintained by whoever has time. We treated them as a product line — backlog, releases, feedback loops, the works. That's why adoption hit 50% instead of decaying after launch." },
      { h: "Where CI/CD pays for itself" },
      { p: "We co-built the CI/CD + automated test pipeline with the Tech Lead and QA. Release defects fell ~40% and cycle times shortened. The cost was a quarter of upfront engineering effort; the payoff was every release after that." },
    ],
  },
  {
    slug: "ubisoft-qa",
    company: "Ubisoft Kyiv",
    title: "AAA QA coordination across four studios",
    period: "2019 — 2021",
    summary: "Led QA operations for AAA titles from Alpha to post-release: The Division 2 and Far Cry 6. Coordinated 25+ testers across Kyiv, Odesa, Malmö, Montreal and Quebec.",
    kpis: [
      { n: "2", l: "AAA titles" },
      { n: "25+", l: "testers coordinated" },
      { n: "4", l: "studios, 3 time zones" },
    ],
    tags: ["QA", "AAA", "Distributed teams"],
    body: [
      { h: "AAA QA is logistics" },
      { p: "The technical part of QA is the easy part. The hard part is keeping 25 people across Kyiv, Odesa, Malmö, Montreal and Quebec aligned on what's a blocker, what's noise, and what the build state looks like at 2am someone else's time." },
      { h: "Onboarding as a multiplier" },
      { p: "Built the onboarding pack and ran the induction sessions. Ramp-up time for new QA engineers dropped enough that we stopped treating new hires as a delivery risk." },
    ],
  },
  {
    slug: "mhp",
    company: "MHP SE",
    title: "Drones, ERPs, and the realities of agri-tech",
    period: "2017 — 2018",
    summary: "Managed IT initiatives and internal startups for a major agricultural holding: finance, payroll, production. Kicked off a UAV field-scanning initiative and coordinated outstaffed dev teams on 1C / SAP-based systems.",
    kpis: [
      { n: "1", l: "UAV scanning programme" },
      { n: "1C+SAP", l: "stack" },
      { n: "0→1", l: "internal startups" },
    ],
    tags: ["AgriTech", "ERP", "UAV"],
    body: [
      { h: "First time delivering 'real-world' software" },
      { p: "Fields don't care about your roadmap. This was the job that taught me to write specs that survived a tractor, a satellite outage, and a 1C consultant who only worked Tuesdays. Idea validation → roll-out on every initiative, no exceptions." },
    ],
  },
  {
    slug: "maintra",
    company: "Solo · 2026",
    title: "Maintra — shipping my own product",
    period: "2026",
    summary: "First fully personal product launch — an AI-powered service book for car owners. Born from a real, boring problem: I could never keep track of what had been done to my car and what was due next.",
    kpis: [
      { n: "1", l: "solo founder" },
      { n: "v1", l: "shipped public" },
      { n: "AI", l: "service-entry parser" },
    ],
    tags: ["Side project", "AI", "Product"],
    body: [
      { h: "Why" },
      { p: "I run delivery for a living, but I'd never owned a thing end-to-end from idea to public URL by myself. The problem I picked was personal: I could never keep on top of what had been done to my car and what was due next. Receipts in a glovebox, notes in three apps, half-remembered conversations with the service-shop guys. There had to be one place that knew everything." },
      { h: "What I learned" },
      { p: "When you're the PM, the engineer, the QA and the customer all at once, you find out very quickly which of your delivery instincts are real and which are habits. I'm keeping the ones that survived contact with the keyboard." },
    ],
    link: "maintra",
  },
];

export const POSTS = [
  {
    slug: "ai-delivery-is-mostly-delivery",
    date: "2026-04-12",
    title: "AI delivery is mostly delivery",
    excerpt: "Most of what makes an AI programme succeed has nothing to do with the model. It's roadmap hygiene, executive comms, and getting four parallel teams to release on the same day.",
    body: [
      "I've spent the last 18 months running AI-driven transformation for a global insurer — four products in parallel, 40 people, multimillion-dollar budget. Here's the part nobody puts in the case study: the model was the easy part.",
      "What was hard: deciding which model output the underwriter would actually look at. Defining what 'correct' meant when there were three plausible answers. Convincing four stream leads to release together. Telling a C-level sponsor that 'AI accuracy is 92%' is not a metric anyone can do anything with.",
      "If your AI programme is in trouble, the fix is almost certainly not better prompts.",
    ],
  },
  {
    slug: "scope-clarity-risk",
    date: "2026-02-28",
    title: "Scope, clarity, risk — pick three",
    excerpt: "The triangle that gets quoted at you in PM school — scope, time, cost — describes the trade. It doesn't describe the job. The actual job is clarity, scope, risk.",
    body: [
      "The classical triangle is a procurement tool, not a delivery one. By the time you're trading scope against time against cost, the contract is signed and you're already losing.",
      "What you can actually move week-to-week is clarity. Clarity buys you scope you didn't think you had, and it makes risks small enough to write down. Most 'scope creep' is actually clarity debt that compounded for six weeks.",
      "When a project I'm running starts to wobble, I don't reach for the burn-down. I reach for the latest written explanation of what we're doing and ask three engineers to read it back to me.",
    ],
  },
  {
    slug: "stable-teams-ship",
    date: "2026-01-14",
    title: "Stable teams ship. Churning teams re-onboard.",
    excerpt: "<3% attrition over two years on a 50-person distributed team wasn't an HR win. It was the reason every delivery date held.",
    body: [
      "I keep getting asked how we kept attrition under 3% on a distributed team of 50+ for two years at EF. The answer is unromantic: 1:1s, written expectations, growth plans that mention specific projects by name, and not bullshitting people about the work.",
      "The reason this matters for delivery isn't morale. It's that every leaver costs you about a quarter of bandwidth somewhere on the team — a backfill, an onboard, a knowledge gap. Three leavers in a year and you've spent a person's worth of capacity on continuity.",
      "If your delivery org's attrition is in the double digits and you can't tell me why each person left, you don't have a delivery problem yet. You will.",
    ],
  },
  {
    slug: "ai-posts-feed",
    date: "2025-12-03",
    title: "Of course I am real",
    excerpt: "LinkedIn is slowly turning into a feed of unedited AI-generated posts. I used to think 'dead internet theory' was dramatic. It surely isn't.",
    body: [
      "There's a particular shape that AI posts take on LinkedIn now — the bullet-list inspirational format, the 'here are 5 lessons from leading a team' opener, the em-dashes nobody ever typed with their thumbs. You start to see it everywhere.",
      "I'm not anti-AI. I run AI delivery programmes for a living. But I'd rather read 100 imperfect human posts than 10,000 polished ones written by something that has never sat through a Tuesday standup.",
      "Of course I am real.",
    ],
  },
];

export const RECS = [
  {
    name: "Maksym Demchenko",
    role: "Project & Delivery Manager",
    relation: "Worked together at EPAM, same PMO · Dec 2025",
    body: "I had the pleasure of working with Kyrylo in the same PMO, and he consistently stood out as one of the most reliable and effective Project Managers I've worked alongside. He brings clarity to complex situations, communicates openly, and stays calm under pressure. Solution-oriented, professional, and truly great to collaborate with.",
  },
  {
    name: "Oleksandr Raskosov",
    role: "Director, Delivery Management at EPAM",
    relation: "Managed Kyrylo directly · Dec 2025",
    body: "Kyrylo is a great specialist. Very professional, polite and result-oriented. Always does his best to bring the best quality value for the client and grow relationships. Trusted partner with the client. Much recommended for managerial roles.",
  },
  {
    name: "Andrii Koshel",
    role: "Senior Software Quality Engineer",
    relation: "Reported to Kyrylo directly · Dec 2025",
    body: "Kyrylo is a highly responsible, experienced, professional, and reliable person. We worked together on an insurance-related project. He's always polite, attentive, and ready to help and support his colleagues. Thanks to his support, my onboarding was quick and smooth. Exceptionally strong professional as well as personal qualities — truly comfortable and pleasant to work with.",
  },
];

export const CERTS = [
  { name: "Claude Code in Action", org: "Anthropic Education", issued: "Apr 2026", id: "ex3f3kkydbni", mark: "lm-anthropic", glyph: "A" },
  { name: "Certified SAFe 6 Agilist", org: "SAFe by Scaled Agile, Inc.", issued: "Apr 2025", expires: "Aug 2025", id: "47138706-1729", mark: "lm-safe", glyph: "S" },
  { name: "Certified SAFe 5 Agilist", org: "SAFe by Scaled Agile, Inc.", issued: "Apr 2022", expires: "Apr 2023", id: "51663935-8796", mark: "lm-safe", glyph: "S" },
];

export const EDUCATION = [
  { name: "Master's, Innovative Management", org: "Taras Shevchenko National University of Kyiv · Faculty of Economics", years: "2018 — 2020", note: "Dept. of Innovation & Investment Management · Communication & Agile Methodologies" },
  { name: "Bachelor's, Management of Organizations", org: "Taras Shevchenko National University of Kyiv · Faculty of Economics", years: "2014 — 2018", note: "Dept. of Innovation & Investment Management · Communication & Agile Methodologies" },
];

export const VOLUNTEER = [
  { year: "2022—26", item: "Coordinated and contributed to fundraising for the Ukrainian Armed Forces — over ₴10 M UAH raised collectively, channelled into vehicles, hard-to-source night-vision optics, drones, and consumables for combat units." },
  { year: "2022—23", item: "Letter of appreciation — 72nd Separate Mechanised Brigade (Black Zaporozhians), for contribution toward defending state sovereignty and territorial integrity." },
  { year: "2022—now", item: "Letter of appreciation — Ukraine's Special Operations Forces (SOF), for active civic stance and significant personal contribution to strengthening combat capability." },
  { year: "2023", item: "Letter of appreciation — 67th Separate Mechanised Brigade (military unit A4123), for support of territorial integrity, sovereignty and independence of Ukraine." },
  { year: "2025", item: "Letter of appreciation — 131st Separate Reconnaissance Battalion (named after Colonel Yevhen Konovalets), with personal inscription." },
  { year: "2025—26", item: "Additional letters of appreciation from individual units; several kept off the public list at the units' preference." },
];

export const BOOKS = [
  { title: "The Phoenix Project", author: "Gene Kim, Kevin Behr, George Spafford", status: "Re-read" },
  { title: "Accelerate", author: "Nicole Forsgren, Jez Humble, Gene Kim", status: "Re-read" },
  { title: "Inspired", author: "Marty Cagan", status: "Read" },
  { title: "Empowered", author: "Marty Cagan, Chris Jones", status: "Reading" },
  { title: "An Elegant Puzzle", author: "Will Larson", status: "Read" },
  { title: "The Manager's Path", author: "Camille Fournier", status: "Read" },
  { title: "Staff Engineer", author: "Will Larson", status: "Read" },
  { title: "Team Topologies", author: "Matthew Skelton, Manuel Pais", status: "Read" },
  { title: "Thinking in Systems", author: "Donella Meadows", status: "Read" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", status: "Read" },
  { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", status: "Read" },
  { title: "Build", author: "Tony Fadell", status: "Reading" },
  { title: "Co-Intelligence", author: "Ethan Mollick", status: "Reading" },
  { title: "How Big Things Get Done", author: "Bent Flyvbjerg, Dan Gardner", status: "Now" },
];

export const NOW = {
  updated: "May 2026",
  bullets: [
    { k: "Working on", v: "Building delivery at Triangu — running a 40+ project portfolio, growing the team, and shipping an internal Delivery Cockpit." },
    { k: "Side project", v: "Maintra v1.1 — adding multi-vehicle plans, recurring service templates, and an export-to-PDF service book." },
    { k: "Side hustle", v: "Gaming creator account in English across TikTok, Instagram Reels and YouTube Shorts — 4M+ total views in the last 90 days." },
    { k: "Volunteering", v: "Continuing fundraising for Ukrainian Armed Forces units I've supported since 2022." },
    { k: "Learning", v: "Claude Code in production: where it earns its keep across PM workflows, where it doesn't." },
    { k: "Reading", v: "“How Big Things Get Done” (Flyvbjerg). Skimming Stripe's writing on internal tooling." },
    { k: "Open to", v: "Not looking for full-time roles. Open to short engagements and advisory work on an hourly basis — delivery turnarounds, AI programmes, portfolio reviews." },
    { k: "Not doing", v: "Full-time interviews; Triangu and Maintra have my full attention." },
  ],
};

export const SKILLS = [
  { group: "Delivery", items: ["End-to-end ownership (discovery → launch → stabilisation)", "Roadmaps, KPIs, executive comms", "Steering committees", "P&L, budgeting, staffing"] },
  { group: "People", items: ["1:1s, feedback, growth plans", "Hiring & retention (<3% attrition track record)", "Conflict resolution", "Stakeholder alignment"] },
  { group: "Practice", items: ["Scrum, Kanban, SAFe", "Waterfall where it still makes sense", "Pre-sales, scoping, estimation", "Risk & dependency management"] },
  { group: "Tools", items: [
    "Full Atlassian stack (Jira, Confluence, Jira Admin, Tempo)",
    "Azure DevOps, GitLab Projects",
    "Salesforce ecosystem",
    "Enterprise platforms: Appian · Guidewire PC · Snowflake · Power BI",
    "DevOps: Jenkins · Docker · Kubernetes",
    "AI: GPT-4 · LLaMA · Gemini · Anthropic Claude — workflow design end-to-end",
  ] },
];

export const CIVIC_GALLERY = [
  {
    src: "assets/civic/plaques-wall.jpg",
    year: "2022–2023",
    title: "Letters of appreciation",
    caption: "72nd Mech Brigade · Special Operations Forces · 67th Brigade — on the wall at home, next to a spent missile tube I turned into a lamp.",
  },
  {
    src: "assets/civic/plaque-131-konovalets.jpg",
    year: "2025",
    title: "131st Separate Reconnaissance Battalion",
    caption: "Named after Colonel Yevhen Konovalets. «у вогні перетоплюється залізо у сталь.»",
  },
  {
    src: "assets/civic/handover-nissan-2024.jpg",
    year: "2024",
    title: "Nissan Patrol handover",
    caption: "Vehicle handed over to a frontline crew — co-funded with Estonian volunteers (UA + EE flags on the rear glass).",
  },
  {
    src: "assets/civic/handover-soldier.png",
    year: "2023",
    title: "Field handover",
    caption: "Delivering a vehicle alongside a close friend serving in the unit.",
  },
];

export const CREATOR = {
  handle: "rozbeyko.github.io/rok.ops",
  bio: "Short-form gaming content. Currently in English across TikTok, Instagram Reels and YouTube Shorts — but it took five years, two language pivots and two restarts from zero to get here.",
  reference: "rozbeyko.github.io/rok.ops/",
  windowLabel: "Last 90 days · all platforms",
  platformStats: [
    { name: "TikTok",          views: "2.6M", growth: "—",     note: "Post views, last 90 days", color: "#00f5e0" },
    { name: "Instagram Reels", views: "934K", growth: "+66.1%",   note: "Reel views, last 90 days · 98.9% non-followers", color: "#c084fc" },
    { name: "YouTube Shorts",  views: "805K", growth: "+2,718%",  note: "Views, last 90 days",      color: "#ff4b4b" },
  ],
  headlineStats: [
    { n: "4.3M", u: "+", l: "Total views (90 days)" },
    { n: "2.6M", u: "",  l: "TikTok post views" },
    { n: "934K", u: "",  l: "IG Reels views" },
    { n: "805K", u: "",  l: "YouTube Shorts views" },
  ],
  detailStats: [
    { n: "156K",   l: "Likes (IG)" },
    { n: "16K",    l: "Shares (IG)" },
    { n: "1,300",  l: "Comments (IG)" },
    { n: "279K",   l: "Accounts reached" },
    { n: "11K",    l: "Profile views" },
    { n: "98.9%",  l: "Non-follower reach (IG)" },
    { n: "99.9%",  l: "Views from Reels" },
    { n: "+2,718%",l: "Growth vs prior 90d (YT)" },
  ],
  topContent: [
    { title: "Easiest way to kill some tough bosses in Crimson Desert", views: "419K", platform: "IG" },
    { title: "If you also struggled on Beloth boss fight", views: "123K", platform: "IG" },
    { title: "#crimsondesertgameplay clip", views: "59K", platform: "IG" },
    { title: "10k silver in a couple of minutes", views: "49K", platform: "IG" },
    { title: "#crimsondesert #gaming reel", views: "18K", platform: "IG" },
  ],
  takeaways: [
    "The audience is 98.9% non-followers on Instagram — virality, not subscribers, drives this format.",
    "One genuinely useful tip video about a hard boss did 419K views — utility content beats vibe content.",
    "Almost everything that worked came from the For-You / Reels feed (99.9%). Search is a distant second.",
    "Growing a creator account taught me what a release cadence actually means when nobody is paying you to ship.",
  ],
};
