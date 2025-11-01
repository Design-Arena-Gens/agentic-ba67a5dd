"use client";

import { useEffect } from "react";

const features = [
  {
    title: "Ärztliche Expertise",
    description:
      "Fachärzt*innen mit langjähriger Erfahrung in Cannabinoid-Therapien begleiten dich von der Diagnose bis zur Dosierung.",
    tag: "Kassenärztlich",
    gradient: "linear-gradient(135deg, #c7d2fe 0%, #dbeafe 100%)"
  },
  {
    title: "Digitale Sprechstunden",
    description:
      "Video-Sprechstunden, digitale Rezepte und Nachsorge – sicher über unsere verschlüsselte Plattform.",
    tag: "100% Online",
    gradient: "linear-gradient(135deg, #bbf7d0 0%, #dcfce7 100%)"
  },
  {
    title: "Individuelle Versorgung",
    description:
      "Wir analysieren deinen Alltag, medizinische Historie und Ziele, um die optimale cannabinoidbasierte Therapie zu erstellen.",
    tag: "Personalisierte Therapie",
    gradient: "linear-gradient(135deg, #fde68a 0%, #fef3c7 100%)"
  }
];

const steps = [
  {
    title: "Digitaler Gesundheitscheck",
    description:
      "Sichere Uploads deiner Befunde, Medikationshistorie und konkreten Beschwerden – in weniger als zehn Minuten abgeschlossen."
  },
  {
    title: "Video-Konsultation",
    description:
      "Persönliche telemedizinische Sitzung mit einem unserer deutschen Ärzt*innen. Diagnostik, Erwartungen und Therapieplan werden gemeinsam abgestimmt."
  },
  {
    title: "Rezept & Begleitung",
    description:
      "Elektronisches Rezept, Versand an deine Wunsch-Apotheke und kontinuierliche Nachsorge mit Dosisanpassungen bei Bedarf."
  }
];

const testimonials = [
  {
    name: "Lena, 32",
    role: "Chronische Migräne",
    statement:
      "„Ich habe innerhalb von zwei Wochen deutlich weniger Attacken. Die Ärztin hat sich viel Zeit genommen, alles war super professionell.“"
  },
  {
    name: "Michael, 45",
    role: "Neuropathische Schmerzen",
    statement:
      "„Diskret, schnell und endlich ein Team, das meine Situation versteht. Die App erinnert mich an Termine und Dosierungen.“"
  },
  {
    name: "Fatima, 54",
    role: "Schlafstörungen",
    statement:
      "„Ich war skeptisch, aber die Betreuung ist herausragend. Dank der Nachsorge haben wir die perfekte Dosis gefunden.“"
  }
];

const faqs = [
  {
    question: "Wer darf bei AlpenCare behandelt werden?",
    answer:
      "Unsere Ärzt*innen behandeln volljährige Patient*innen mit bestätigten Diagnosen, bei denen Cannabinoid-basierte Therapie medizinisch sinnvoll ist. Wir führen eine individuelle Eignungsprüfung gemäß §31 Abs. 6 SGB V durch."
  },
  {
    question: "Wie funktioniert die Kostenübernahme?",
    answer:
      "Wir begleiten dich beim Antrag auf Kostenübernahme bei deiner Krankenkasse. Private Krankenkassen übernehmen in der Regel den Großteil der Kosten, gesetzliche übernehmen nach Genehmigung ebenfalls."
  },
  {
    question: "Sind meine Daten sicher?",
    answer:
      "Ja. Unsere Infrastruktur wird ausschließlich in Deutschland betrieben, ist DSGVO-konform und ISO-27001-zertifiziert. Sämtliche Daten werden Ende-zu-Ende verschlüsselt übertragen."
  },
  {
    question: "Welche Produkte werden verordnet?",
    answer:
      "Unsere Ärzt*innen verordnen ausschließlich zugelassene medizinische Cannabisblüten und Extrakte aus deutschen Apotheken. Dosierung und Produktwahl basieren auf medizinischen Leitlinien."
  }
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="noise-overlay">
      <main className="page">
        <div className="background-orbs">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orb orb-three" />
        </div>

        <header className="hero glass-card">
          <div className="nav">
            <span className="logo">AlpenCare</span>
            <nav className="nav-links">
              <a href="#angebot">Angebot</a>
              <a href="#prozess">Ablauf</a>
              <a href="#faq">FAQ</a>
              <a href="#kontakt" className="nav-cta">
                Termin buchen
              </a>
            </nav>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <span className="tagline fade-in">Telemedizinisches Cannabis Care</span>
              <h1 className="section-title fade-in fade-delay-1">
                Medizinische Cannabisversorgung made in Germany.
              </h1>
              <p className="hero-description fade-in fade-delay-2">
                Zertifizierte Fachärzt*innen unterstützen dich mit Therapie & Rezepten –
                vollständig digital, rechtssicher und datenschutzkonform. Von der
                Erstberatung bis zur laufenden Betreuung.
              </p>
              <div className="hero-actions fade-in fade-delay-3">
                <a className="cta-primary" href="#kontakt">
                  Jetzt Erstgespräch sichern
                </a>
                <a className="cta-secondary" href="#faq">
                  Mehr erfahren
                </a>
              </div>
              <div className="trust-badges fade-in fade-delay-4">
                <div className="badge">
                  <span>§31 Abs. 6 SGB V</span>
                </div>
                <div className="badge">
                  <span>ISO 27001 Hosting</span>
                </div>
                <div className="badge">
                  <span>In Deutschland lizenziert</span>
                </div>
              </div>
            </div>

            <div className="hero-visual fade-in fade-delay-4">
              <div className="visual-card">
                <div className="pulse" />
                <div className="stat-card glass-card">
                  <h3>98%</h3>
                  <p>Patient*innen berichten von besserem Schlaf nach 4 Wochen.</p>
                </div>
                <div className="stat-card glass-card alt">
                  <h3>24h</h3>
                  <p>Durchschnittliche Rezeptfreigabe nach Erstgespräch.</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="angebot" className="section">
          <div className="section-header fade-in">
            <span className="pre-title">Warum AlpenCare</span>
            <h2 className="section-title">Ganzheitliche Versorgung für dein Wohlbefinden.</h2>
            <p className="section-description">
              Wir kombinieren medizinische Exzellenz, digitale Technologie und menschliche
              Nähe – für eine verlässliche Therapie mit medizinischem Cannabis.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <article
                className="feature-card glass-card fade-in"
                style={{ animationDelay: `${0.15 * index}s` }}
                key={feature.title}
              >
                <span
                  className="feature-tag"
                  style={{
                    background: feature.gradient
                  }}
                >
                  {feature.tag}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="prozess" className="path-section glass-card fade-in">
          <div className="path-header">
            <span className="pre-title">So funktioniert es</span>
            <h2 className="section-title">Dein Weg zur personalisierten Therapie.</h2>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <div className="step" key={step.title}>
                <div className="step-number">{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat glass-card fade-in">
              <h3>12.000+</h3>
              <p>erfolgreiche telemedizinische Konsultationen seit 2019.</p>
            </div>
            <div className="stat glass-card fade-in fade-delay-1">
              <h3>4,9 ★</h3>
              <p>Durchschnittliche Bewertung unserer Patient*innen.</p>
            </div>
            <div className="stat glass-card fade-in fade-delay-2">
              <h3>72%</h3>
              <p>Zeitersparnis gegenüber klassischen Praxisbesuchen.</p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="section-header fade-in">
            <span className="pre-title">Patient Stories</span>
            <h2 className="section-title">Live-Veränderungen, echte Menschen.</h2>
            <p className="section-description">
              Transparente Erfahrungsberichte aus unserer Community, die die Wirkung und
              Sicherheit unserer Behandlung belegen.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <figure
                className="testimonial-card glass-card fade-in"
                style={{ animationDelay: `${0.12 * index}s` }}
                key={testimonial.name}
              >
                <blockquote>{testimonial.statement}</blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="cta-highlights glass-card fade-in">
          <div className="cta-text">
            <span className="pre-title">Medizin trifft Innovation</span>
            <h2>Begleitet von Ärzt*innen, unterstützt durch Daten.</h2>
            <p>
              Wir tracken Outcomes, Schlafqualität und Vitalwerte, um Therapieentscheidungen
              datenbasiert zu treffen. Alle Ergebnisse bleiben dein Eigentum.
            </p>
            <ul className="cta-list">
              <li>Digitale Wirkprotokolle & stufenlose Dosissteuerung</li>
              <li>Live-Chat mit medizinischem Team, auch am Wochenende</li>
              <li>Direkte Anbindung an deutsche Partnerapotheken</li>
            </ul>
          </div>
          <div className="cta-panel">
            <div className="cta-badge">NEU</div>
            <h3>Therapie-Check in 45 Sekunden</h3>
            <p>
              Beantworte sieben Fragen und erfahre sofort, ob eine Behandlung für dich
              geeignet ist.
            </p>
            <a className="cta-primary" href="#kontakt">
              Kostenfreien Check starten
            </a>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="section-header fade-in">
            <span className="pre-title">FAQ</span>
            <h2 className="section-title">Antworten auf häufige Fragen.</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <details
                className="faq-item glass-card fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
                key={faq.question}
              >
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="kontakt" className="contact-section glass-card fade-in">
          <div className="contact-content">
            <h2 className="section-title">
              Bereit für deinen nächsten Schritt in der Therapie?
            </h2>
            <p>
              Sichere dir dein Erstgespräch mit unseren telemedizinischen Expert*innen und
              erhalte innerhalb von 24 Stunden dein individuelles Therapiekonzept.
            </p>
            <form className="contact-form">
              <div className="form-grid">
                <label>
                  Vor- und Nachname
                  <input type="text" name="name" placeholder="Max Mustermann" required />
                </label>
                <label>
                  E-Mail
                  <input
                    type="email"
                    name="email"
                    placeholder="max.mustermann@email.de"
                    required
                  />
                </label>
                <label>
                  Wohnort
                  <input type="text" name="city" placeholder="Berlin" required />
                </label>
                <label>
                  Behandlungsgrund
                  <input
                    type="text"
                    name="reason"
                    placeholder="z. B. chronische Schmerzen"
                    required
                  />
                </label>
              </div>
              <label className="checkbox">
                <input type="checkbox" required /> Ich stimme der Verarbeitung meiner Daten gemäß
                DSGVO zu.
              </label>
              <button type="submit" className="cta-primary">
                Erstgespräch anfragen
              </button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner glass-card">
            <div>
              <span className="logo">AlpenCare</span>
              <p>
                Telemedizinische Cannabisplattform mit Sitz in München. Zulassung nach §31 Abs. 6
                SGB V, Datenschutz made in Germany.
              </p>
            </div>
            <div className="footer-links">
              <a href="#angebot">Angebot</a>
              <a href="#prozess">Ablauf</a>
              <a href="#faq">FAQ</a>
              <a href="#kontakt">Kontakt</a>
            </div>
            <div className="footer-meta">
              <span>© {new Date().getFullYear()} AlpenCare GmbH</span>
              <span>Impressum · Datenschutz</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

