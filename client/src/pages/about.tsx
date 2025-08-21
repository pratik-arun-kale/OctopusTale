import { Users, Code, Gamepad2, DollarSign, Brain, Cloud, Zap, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" data-testid="about-page">
      {/* Unified Background matching homepage */}
      <div className="fixed inset-0" style={{ backgroundColor: '#040404' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent"></div>
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16" data-testid="about-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8" data-testid="about-title">
            About Us
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-200 mb-6">
            We build the future of Sport Tech
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We design and deliver software and strategy that merge sports, technology, and AI into powerful digital products. 
            From live fan experiences to regulated betting platforms, we help leagues, teams, and sports businesses 
            modernize operations, activate audiences, and make smarter, faster decisions—end to end.
          </p>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="py-16" data-testid="our-edge">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12" style={{ backgroundColor: '#17161A' }}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Edge</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="w-8 h-8 text-blue-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Deep Domain + Full Stack</h4>
                <p className="text-gray-300">Product strategy, UX, data, AI/ML, cloud, and SRE—under one roof.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-emerald-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Real-time by Default</h4>
                <p className="text-gray-300">Event-driven architectures built for live sports latency, scale, and resilience.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="w-8 h-8 text-purple-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Secure & Compliant</h4>
                <p className="text-gray-300">Privacy, KYC/AML, and responsible-gaming controls baked in from day one.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section id="fan-engagement" className="py-16" data-testid="fan-engagement-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12" style={{ backgroundColor: '#17161A' }}>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-6">
                <Users className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">Fan Engagement</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">What it is</h4>
                <p className="text-gray-300 mb-6">Tools and experiences that turn casual viewers into loyal fans across web, mobile, and venues.</p>
                
                <h4 className="text-xl font-semibold text-white mb-4">Tech we use</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Real-time APIs & websockets, push notifications, CDP integrations, GraphQL, Next.js/React Native, in-app wallets, gamification engines, analytics pipelines (Kafka/Stream processing), A/B testing frameworks.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">How we help</h4>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-blue-300 mr-2 mt-1 flex-shrink-0" />Build interactive match centers (live stats, heatmaps, xG, win-probability, player trackers).</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-blue-300 mr-2 mt-1 flex-shrink-0" />Personalization engines: tailor content, offers, and rewards to each fan's profile and behavior.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-blue-300 mr-2 mt-1 flex-shrink-0" />Social layers: polls, UGC contests, leaderboards, watch-parties, and referral loops.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-blue-300 mr-2 mt-1 flex-shrink-0" />Ticketing, merch, and membership integrations for measurable revenue lift.</li>
                </ul>
                
                <h4 className="text-xl font-semibold text-white mb-4">Outcomes</h4>
                <p className="text-gray-300">Higher DAU/MAU, longer session times, improved CAC:LTV, and incremental commerce conversion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="full-stack-development" className="py-16" data-testid="full-stack-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12" style={{ backgroundColor: '#17161A' }}>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-6">
                <Code className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">Full-Stack Development</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">What it is</h4>
                <p className="text-gray-300 mb-6">Product design, frontend, backend, and data systems—shipped as reliable, maintainable software.</p>
                
                <h4 className="text-xl font-semibold text-white mb-4">Tech we use</h4>
                <p className="text-gray-300 text-sm leading-relaxed">TypeScript/Node.js, Python/Go, React/Next.js, React Native/Flutter, PostgreSQL/Redis, Elastic, event buses (Kafka), microservices on Kubernetes/Serverless, CI/CD, IaC (Terraform), OpenAPI/GraphQL.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">How we help</h4>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-emerald-300 mr-2 mt-1 flex-shrink-0" />Design sprints → clickable prototypes → production-grade MVPs in weeks.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-emerald-300 mr-2 mt-1 flex-shrink-0" />API platforms for schedules, rosters, stats, media, commerce, and identity.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-emerald-300 mr-2 mt-1 flex-shrink-0" />Observability (logs/metrics/traces), feature flags, and canary releases for safe iteration.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-emerald-300 mr-2 mt-1 flex-shrink-0" />Performance budgets and accessibility baked into every build.</li>
                </ul>
                
                <h4 className="text-xl font-semibold text-white mb-4">Outcomes</h4>
                <p className="text-gray-300">Faster time-to-market, lower total cost of ownership, and fewer production incidents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gaming" className="py-16" data-testid="gaming-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12" style={{ backgroundColor: '#17161A' }}>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mr-6">
                <Gamepad2 className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">Gaming</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">What it is</h4>
                <p className="text-gray-300 mb-6">Fantasy, predictor games, trivia, arcade mini-games, and skill experiences that grow daily engagement.</p>
                
                <h4 className="text-xl font-semibold text-white mb-4">Tech we use</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Authoring engines, state sync via websockets, matchmaking, physics libraries, anti-cheat, real-time leaderboards, scalable lobbies, rewards/points systems, and fraud detection.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">How we help</h4>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-purple-300 mr-2 mt-1 flex-shrink-0" />Fantasy & predictor frameworks with custom scoring and live data feeds.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-purple-300 mr-2 mt-1 flex-shrink-0" />Seasonal campaigns, quests, and loyalty economies tied to CRM/marketing tools.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-purple-300 mr-2 mt-1 flex-shrink-0" />Cross-platform builds (web/mobile) with low-latency play and offline tolerance.</li>
                </ul>
                
                <h4 className="text-xl font-semibold text-white mb-4">Outcomes</h4>
                <p className="text-gray-300">Stickier sessions, shareable moments, and sponsorship inventory with clear ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="betting-solutions" className="py-16" data-testid="betting-solutions-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12" style={{ backgroundColor: '#17161A' }}>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-6">
                <DollarSign className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">Betting Solutions</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">What it is</h4>
                <p className="text-gray-300 mb-6">Regulated sports betting and trading systems built for speed, integrity, and compliance.</p>
                
                <h4 className="text-xl font-semibold text-white mb-4">Tech we use</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Odds/feed integrations, pricing/risk engines, market making, low-latency streaming, CQRS + event sourcing, geofencing, KYC/AML, payments, anti-fraud, audit logging, and responsible-gaming controls.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">How we help</h4>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-yellow-300 mr-2 mt-1 flex-shrink-0" />Integrate multiple odds providers; reconcile markets and manage exposure in real time.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-yellow-300 mr-2 mt-1 flex-shrink-0" />Build betslip, cash-out, and in-play experiences targeting sub-second updates.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-yellow-300 mr-2 mt-1 flex-shrink-0" />Trading tools: hedging dashboards, limits, anomaly alerts, and settlement workflows.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-yellow-300 mr-2 mt-1 flex-shrink-0" />Compliance by design: identity verification, age checks, self-exclusion, and audit trails.</li>
                </ul>
                
                <h4 className="text-xl font-semibold text-white mb-4">Outcomes</h4>
                <p className="text-gray-300 mb-2">Higher handle with controlled risk, faster settlement, and regulator-ready reporting.</p>
                <p className="text-gray-400 text-sm italic">Note: We partner with licensed operators and build to applicable regulatory requirements in your jurisdictions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-solutions" className="py-16" data-testid="ai-solutions-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12" style={{ backgroundColor: '#17161A' }}>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-6">
                <Brain className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">AI Solutions</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">What it is</h4>
                <p className="text-gray-300 mb-6">Machine learning and LLMs that power predictions, personalization, automation, and insight.</p>
                
                <h4 className="text-xl font-semibold text-white mb-4">Tech we use</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Model ops (feature stores, CI/CD for ML), recommender systems, gradient boosting/NNs, computer vision (player/ball tracking, highlight detection), LLMs with RAG, moderation classifiers, forecasting, experimentation.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">How we help</h4>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-blue-300 mr-2 mt-1 flex-shrink-0" />Predictive models: demand/attendance, churn, injury risk signals, dynamic pricing.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-blue-300 mr-2 mt-1 flex-shrink-0" />Personalization: content and offer ranking, smart notifications, and journey orchestration.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-blue-300 mr-2 mt-1 flex-shrink-0" />AI copilots: fan support chat, team ops assistants, and internal knowledge search.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-blue-300 mr-2 mt-1 flex-shrink-0" />CV for highlights and moments: auto-clip, tag, and publish near real time.</li>
                </ul>
                
                <h4 className="text-xl font-semibold text-white mb-4">Outcomes</h4>
                <p className="text-gray-300">Sharper decisions, happier users, and measurable revenue and cost improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cloud-solutions" className="py-16" data-testid="cloud-solutions-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12" style={{ backgroundColor: '#17161A' }}>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-6">
                <Cloud className="w-8 h-8 text-indigo-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">Cloud Solutions</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">What it is</h4>
                <p className="text-gray-300 mb-6">Secure, scalable infrastructure tailored to the bursty, real-time nature of sports.</p>
                
                <h4 className="text-xl font-semibold text-white mb-4">Tech we use</h4>
                <p className="text-gray-300 text-sm leading-relaxed">AWS/Azure/GCP, serverless (Lambda/Functions), Kubernetes, CDNs, global edge, object storage, caching layers, data lakes/warehouses (BigQuery/Snowflake), SSO/Identity, SRE practices (SLOs/error budgets).</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">How we help</h4>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-indigo-300 mr-2 mt-1 flex-shrink-0" />Architect for peak loads (derbies, finals) without over-provisioning on quiet days.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-indigo-300 mr-2 mt-1 flex-shrink-0" />Multi-region deployments, blue-green rollouts, and disaster recovery.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-indigo-300 mr-2 mt-1 flex-shrink-0" />Cost optimization with autoscaling, right-sizing, and observability-driven tuning.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-indigo-300 mr-2 mt-1 flex-shrink-0" />Zero-trust networking, secrets management, and compliance (e.g., SOC 2/ISO-aligned).</li>
                </ul>
                
                <h4 className="text-xl font-semibold text-white mb-4">Outcomes</h4>
                <p className="text-gray-300">High availability under pressure, predictable costs, and strong security posture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="automation" className="py-16" data-testid="automation-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12" style={{ backgroundColor: '#17161A' }}>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mr-6">
                <Zap className="w-8 h-8 text-orange-300" />
              </div>
              <h3 className="text-3xl font-bold text-white">Automation</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">What it is</h4>
                <p className="text-gray-300 mb-6">DevOps, data, and business workflow automation that removes manual toil.</p>
                
                <h4 className="text-xl font-semibold text-white mb-4">Tech we use</h4>
                <p className="text-gray-300 text-sm leading-relaxed">CI/CD (GitHub Actions/GitLab), Infrastructure as Code, test automation, Airflow/Pipelines, dbt, ELT/ETL, message queues, RPA where appropriate, alerting/on-call automation.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">How we help</h4>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-orange-300 mr-2 mt-1 flex-shrink-0" />One-click deploys, automated rollbacks, and quality gates across environments.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-orange-300 mr-2 mt-1 flex-shrink-0" />Data ingestion from stats providers, wearables, POS, and apps into clean models.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-orange-300 mr-2 mt-1 flex-shrink-0" />Back-office automations: content publishing, inventory sync, ticketing and CRM updates.</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 text-orange-300 mr-2 mt-1 flex-shrink-0" />Executive dashboards with live KPIs (engagement, revenue, uptime, risk).</li>
                </ul>
                
                <h4 className="text-xl font-semibold text-white mb-4">Outcomes</h4>
                <p className="text-gray-300">Fewer errors, faster releases, lower ops burden, and teams focused on impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16" data-testid="how-we-work">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">How We Work</h3>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Discover</h4>
                <p className="text-gray-300 text-sm">Align on goals, KPIs, and constraints; audit current stack.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Architect</h4>
                <p className="text-gray-300 text-sm">Design target state, data flows, and compliance plan.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500/30 to-red-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Build</h4>
                <p className="text-gray-300 text-sm">Ship an MVP quickly; iterate with user feedback and A/B tests.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Scale</h4>
                <p className="text-gray-300 text-sm">Harden for peak traffic, observability, and SRE runbooks.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Operate</h4>
                <p className="text-gray-300 text-sm">Ongoing support, model monitoring, and roadmap co-ownership.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;