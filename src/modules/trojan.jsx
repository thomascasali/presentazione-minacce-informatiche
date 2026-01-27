import { motion } from 'framer-motion'
import { FiAlertTriangle, FiDownload, FiMail, FiServer, FiUsers, FiShield } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

const slides = [
  // Slide 1 - Cover Trojan
  () => (
    <div className="slide slide-cover">
      <motion.div className="cover-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', duration: 0.8 }}>
        🐴
      </motion.div>
      <motion.h1 className="slide-title gradient-blue" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        Trojan
      </motion.h1>
      <motion.p className="slide-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        Il cavallo di Troia digitale: come funzionano i trojan, il caso Emotet e le botnet che controllano milioni di computer.
      </motion.p>
    </div>
  ),

  // Slide 2 - Cos'è un Trojan
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge trojan" variants={fadeUp} initial="hidden" animate="visible">Trojan</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Cos'è un Trojan?
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Un <strong>Trojan</strong> (o Trojan Horse, Cavallo di Troia) è un tipo di malware che si presenta come un software legittimo e utile, ma che in realtà nasconde funzionalità malevole. A differenza dei virus, <strong>non si auto-replica</strong>: è l'utente stesso a installarlo, ingannato dal suo aspetto innocuo.
        </motion.p>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box info">
            <div className="info-box-title">📖 L'origine del nome</div>
            <div className="info-box-content">
              Come il cavallo di legno usato dai Greci per entrare nella città di Troia, il Trojan digitale inganna l'utente per "entrare" nel sistema mascherandosi da programma innocuo.
            </div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">⚠️ La differenza chiave</div>
            <div className="info-box-content">
              Il Trojan non si replica da solo. Si affida all'inganno: l'utente lo scarica e lo esegue volontariamente, pensando che sia un software utile.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 3 - Tipi di Trojan
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge trojan" variants={fadeUp} initial="hidden" animate="visible">Trojan</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Tipi di Trojan
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Cosa fa</th>
                <th>Pericolo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Backdoor</strong></td>
                <td>Apre un accesso remoto nascosto al sistema</td>
                <td>Controllo totale del PC da remoto</td>
              </tr>
              <tr>
                <td><strong>Banker</strong></td>
                <td>Ruba credenziali bancarie e dati finanziari</td>
                <td>Furto di denaro dal conto</td>
              </tr>
              <tr>
                <td><strong>Downloader</strong></td>
                <td>Scarica e installa altri malware sul sistema</td>
                <td>Porta altri virus/ransomware</td>
              </tr>
              <tr>
                <td><strong>RAT (Remote Access)</strong></td>
                <td>Permette il controllo remoto completo del dispositivo</td>
                <td>Spia webcam, tastiera, schermo</td>
              </tr>
              <tr>
                <td><strong>Rootkit</strong></td>
                <td>Si nasconde nel sistema operativo per evitare la rilevazione</td>
                <td>Invisibile agli antivirus</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 4 - Come si diffondono i Trojan
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge trojan" variants={fadeUp} initial="hidden" animate="visible">Trojan</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Come si Diffondono i Trojan
        </motion.h2>
        <motion.div className="attack-flow" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          {[
            { n: '1', title: 'Email con allegati', desc: 'Documenti Word/Excel con macro malevole, PDF infetti, file ZIP con eseguibili nascosti' },
            { n: '2', title: 'Download ingannevoli', desc: 'Software pirata, crack di giochi, "aggiornamenti Flash" falsi, app da store non ufficiali' },
            { n: '3', title: 'Siti web compromessi', desc: 'Drive-by download: il malware si scarica visitando un sito infetto, senza nessun click' },
            { n: '4', title: 'Social engineering', desc: 'Messaggi su social media con link a "foto" o "video" che in realtà sono eseguibili' },
            { n: '5', title: 'Aggiornamenti falsi', desc: '"Il tuo browser/Java/Flash è obsoleto. Clicca qui per aggiornare" - ma scarica il Trojan' },
          ].map((step) => (
            <motion.div key={step.n} className="attack-step" whileHover={{ x: 8 }} transition={{ duration: 0.2 }}>
              <div className="step-number">{step.n}</div>
              <div className="step-content">
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  ),

  // Slide 5 - Emotet introduzione
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge trojan" variants={fadeUp} initial="hidden" animate="visible">Caso Reale</motion.span>
        <motion.h2 className="slide-title gradient-blue" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Emotet: Il Trojan più Pericoloso del Mondo
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <strong>Emotet</strong> è stato definito da Europol come <em>"il malware più pericoloso al mondo"</em>. Nato nel 2014 come trojan bancario, si è evoluto in una piattaforma di distribuzione malware globale, controllando una botnet di centinaia di migliaia di computer.
        </motion.p>
        <motion.div className="stat-grid" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="stat-card">
            <div className="stat-number">2014</div>
            <div className="stat-label">Anno di prima comparsa</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1,6M$</div>
            <div className="stat-label">Costo medio per un'azienda colpita</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100K+</div>
            <div className="stat-label">Computer nella botnet al picco</div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 6 - Come funzionava Emotet
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge trojan" variants={fadeUp} initial="hidden" animate="visible">Caso Reale</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Emotet: La Catena di Infezione
        </motion.h2>
        <motion.div className="attack-flow" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          {[
            { n: '1', title: 'Email di phishing', desc: 'L\'utente riceve un\'email che sembra provenire da un collega o contatto noto (thread hijacking)' },
            { n: '2', title: 'Allegato Word/Excel', desc: 'L\'email contiene un documento con macro. "Abilita contenuto" per visualizzarlo.' },
            { n: '3', title: 'Esecuzione macro', desc: 'La macro scarica Emotet da un server remoto e lo installa silenziosamente' },
            { n: '4', title: 'Furto credenziali', desc: 'Emotet ruba email, password, cookie del browser e contatti della rubrica' },
            { n: '5', title: 'Propagazione laterale', desc: 'Usa le credenziali rubate per diffondersi nella rete aziendale (lateral movement)' },
            { n: '6', title: 'Payload secondario', desc: 'Scarica altri malware: TrickBot (furto dati bancari) e Ryuk (ransomware)' },
          ].map((step) => (
            <motion.div key={step.n} className="attack-step" whileHover={{ x: 8 }} transition={{ duration: 0.2 }}>
              <div className="step-number">{step.n}</div>
              <div className="step-content">
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  ),

  // Slide 7 - Cos'è una Botnet
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge trojan" variants={fadeUp} initial="hidden" animate="visible">Trojan</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Cos'è una Botnet?
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Una <strong>botnet</strong> è una rete di computer infetti (chiamati "bot" o "zombie") controllati da remoto da un attaccante (botmaster). Emotet controllava una delle più grandi botnet al mondo.
        </motion.p>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box info">
            <div className="info-box-title"><FiServer /> Come funziona</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li>Il Trojan infetta il computer</li>
                <li>Il PC diventa un "bot" controllato da remoto</li>
                <li>Il botmaster invia comandi a tutta la rete</li>
                <li>I bot eseguono gli ordini simultaneamente</li>
              </ul>
            </div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title"><FiUsers /> A cosa serve</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li>Inviare spam e email di phishing</li>
                <li>Attacchi DDoS (Distributed Denial of Service)</li>
                <li>Minare criptovalute</li>
                <li>Distribuire altri malware (MaaS)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 8 - Emotet timeline
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge trojan" variants={fadeUp} initial="hidden" animate="visible">Caso Reale</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Emotet: La Timeline
        </motion.h2>
        <motion.div className="timeline" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="timeline-item">
            <div className="timeline-date">2014</div>
            <div className="timeline-text">Prima comparsa come trojan bancario, colpisce clienti di banche tedesche e austriache.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2016-2017</div>
            <div className="timeline-text">Si evolve in piattaforma di distribuzione malware. Inizia a vendere accesso ai sistemi infetti (MaaS).</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2018-2019</div>
            <div className="timeline-text">Picco di attività. Colpisce aziende, ospedali, enti pubblici in tutto il mondo. Introduce il thread hijacking.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Gennaio 2021</div>
            <div className="timeline-text">Operazione congiunta di Europol, FBI e 8 paesi: la botnet viene smantellata e i server sequestrati.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Novembre 2021</div>
            <div className="timeline-text">Emotet ricompare: TrickBot viene usato per scaricare una nuova versione di Emotet sui sistemi ancora infetti.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2022-2023</div>
            <div className="timeline-text">Emotet continua ad evolversi con nuove tecniche di evasione e metodi di distribuzione.</div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 9 - Thread Hijacking
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge trojan" variants={fadeUp} initial="hidden" animate="visible">Caso Reale</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Thread Hijacking: La Tecnica di Emotet
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Una delle tecniche più insidiose di Emotet è il <strong>thread hijacking</strong> (dirottamento delle conversazioni):
        </motion.p>
        <motion.div className="info-box danger" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box-title"><FiMail /> Come funziona il Thread Hijacking</div>
          <div className="info-box-content">
            <ol style={{ paddingLeft: '1rem', lineHeight: '2' }}>
              <li>Emotet ruba le email dal PC infetto della vittima A</li>
              <li>Analizza le conversazioni recenti con la vittima B</li>
              <li>Risponde a una conversazione reale esistente</li>
              <li>Aggiunge un allegato infetto alla risposta</li>
              <li>La vittima B riceve una risposta "dal collega" con un file allegato</li>
              <li>Fidandosi della conversazione nota, B apre l'allegato e si infetta</li>
            </ol>
          </div>
        </motion.div>
        <motion.div className="info-box warning" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
          <div className="info-box-title"><FiAlertTriangle /> Perché è così efficace</div>
          <div className="info-box-content">
            L'email arriva nel contesto di una conversazione reale, da un mittente conosciuto. È molto più credibile di un'email di phishing generica.
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 10 - Riepilogo Trojan
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge trojan" variants={fadeUp} initial="hidden" animate="visible">Trojan</motion.span>
        <motion.h2 className="slide-title gradient-blue" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Riepilogo: Trojan
        </motion.h2>
        <motion.div className="info-box danger" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="info-box-title">🐴 Punti chiave da ricordare</div>
          <div className="info-box-content">
            <ul style={{ paddingLeft: '1rem', lineHeight: '2' }}>
              <li>I Trojan si <strong>mascherano da software legittimo</strong> per ingannare l'utente</li>
              <li>A differenza dei virus, <strong>non si auto-replicano</strong>: serve l'azione dell'utente</li>
              <li>Possono rubare dati, aprire backdoor, scaricare altri malware</li>
              <li><strong>Emotet</strong> era il trojan più pericoloso al mondo, smantellato nel 2021 ma poi riapparso</li>
              <li>Le <strong>botnet</strong> trasformano i PC infetti in strumenti controllati da remoto</li>
              <li><strong>Non abilitare mai le macro</strong> in documenti ricevuti via email</li>
              <li>Scaricare software <strong>solo da fonti ufficiali</strong></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  ),
]

export default slides
