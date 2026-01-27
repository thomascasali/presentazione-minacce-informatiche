import { motion } from 'framer-motion'
import { FiShield, FiAlertTriangle, FiTrendingUp, FiUsers, FiGlobe, FiLock } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

const slides = [
  // Slide 1 - Cover
  () => (
    <div className="slide slide-cover">
      <motion.div className="cover-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', duration: 0.8 }}>
        🌐
      </motion.div>
      <motion.h1 className="slide-title gradient-blue" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        Minacce Informatiche
      </motion.h1>
      <motion.p className="slide-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        Panoramica del panorama delle minacce informatiche moderne: cosa sono, perché sono importanti e come ci riguardano ogni giorno.
      </motion.p>
    </div>
  ),

  // Slide 2 - Cos'è la sicurezza informatica
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge introduzione" variants={fadeUp} initial="hidden" animate="visible">
          Introduzione
        </motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Cos'è la Cybersecurity?
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          La <strong>sicurezza informatica</strong> (cybersecurity) è l'insieme delle tecnologie, processi e pratiche progettate per proteggere reti, dispositivi, programmi e dati da attacchi, danni o accessi non autorizzati.
        </motion.p>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box info">
            <div className="info-box-title"><FiShield /> Protezione</div>
            <div className="info-box-content">Difendere i sistemi informatici da accessi non autorizzati e attacchi malevoli.</div>
          </div>
          <div className="info-box warning">
            <div className="info-box-title"><FiAlertTriangle /> Prevenzione</div>
            <div className="info-box-content">Anticipare le minacce prima che si verifichino, attraverso formazione e strumenti adeguati.</div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 3 - Perché è importante
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge introduzione" variants={fadeUp} initial="hidden" animate="visible">
          Introduzione
        </motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Perché è Importante?
        </motion.h2>
        <motion.div className="stat-grid" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="stat-card">
            <div className="stat-number">2.200+</div>
            <div className="stat-label">Attacchi informatici al giorno nel mondo</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4,45M$</div>
            <div className="stat-label">Costo medio di un data breach (IBM, 2023)</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">74%</div>
            <div className="stat-label">Degli attacchi sfruttano il fattore umano</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">+38%</div>
            <div className="stat-label">Aumento attacchi nel 2023 vs 2022</div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 4 - Panorama delle minacce
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge introduzione" variants={fadeUp} initial="hidden" animate="visible">
          Introduzione
        </motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Il Panorama delle Minacce
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Le minacce informatiche si evolvono costantemente. Ecco le principali categorie che analizzeremo:
        </motion.p>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box danger">
            <div className="info-box-title">🎣 Phishing</div>
            <div className="info-box-content">Attacchi basati sull'inganno che mirano a rubare credenziali e dati sensibili attraverso email e siti falsi.</div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">🦠 Malware</div>
            <div className="info-box-content">Software malevolo progettato per danneggiare, disrumpere o ottenere accesso non autorizzato ai sistemi.</div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">🐴 Trojan</div>
            <div className="info-box-content">Programmi apparentemente legittimi che nascondono funzionalità malevole, aprendo backdoor nei sistemi.</div>
          </div>
          <div className="info-box success">
            <div className="info-box-title">🛡️ Difesa</div>
            <div className="info-box-content">Tecniche e strumenti per proteggersi: 2FA, aggiornamenti, backup e consapevolezza digitale.</div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 5 - Chi sono gli attaccanti
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge introduzione" variants={fadeUp} initial="hidden" animate="visible">
          Introduzione
        </motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Chi Sono gli Attaccanti?
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Motivazione</th>
                <th>Esempio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cybercriminali</strong></td>
                <td>Guadagno economico</td>
                <td>Ransomware, furto dati carte di credito</td>
              </tr>
              <tr>
                <td><strong>Hacktivisti</strong></td>
                <td>Motivazione politica/sociale</td>
                <td>Defacement di siti, DDoS di protesta</td>
              </tr>
              <tr>
                <td><strong>State-sponsored</strong></td>
                <td>Spionaggio, sabotaggio</td>
                <td>APT (Advanced Persistent Threats)</td>
              </tr>
              <tr>
                <td><strong>Insider</strong></td>
                <td>Vendetta, profitto</td>
                <td>Dipendenti che rubano dati aziendali</td>
              </tr>
              <tr>
                <td><strong>Script Kiddie</strong></td>
                <td>Sfida personale, vandalismo</td>
                <td>Uso di tool automatici già pronti</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 6 - La triade CIA
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge introduzione" variants={fadeUp} initial="hidden" animate="visible">
          Introduzione
        </motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          La Triade CIA
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          I tre pilastri fondamentali della sicurezza informatica:
        </motion.p>
        <motion.div className="stat-grid" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="stat-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔒</div>
            <div className="stat-number" style={{ fontSize: '1.5rem' }}>Confidenzialità</div>
            <div className="stat-label">Solo le persone autorizzate possono accedere ai dati. Esempio: crittografia delle email.</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✅</div>
            <div className="stat-number" style={{ fontSize: '1.5rem' }}>Integrità</div>
            <div className="stat-label">I dati non vengono modificati in modo non autorizzato. Esempio: checksum dei file.</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌐</div>
            <div className="stat-number" style={{ fontSize: '1.5rem' }}>Disponibilità</div>
            <div className="stat-label">I sistemi e i dati sono accessibili quando servono. Esempio: protezione da DDoS.</div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 7 - Evoluzione delle minacce
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge introduzione" variants={fadeUp} initial="hidden" animate="visible">
          Introduzione
        </motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Evoluzione delle Minacce
        </motion.h2>
        <motion.div className="timeline" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="timeline-item">
            <div className="timeline-date">Anni '80-'90</div>
            <div className="timeline-text">Virus su floppy disk, worm come Morris (1988). Attacchi per curiosità e sfida.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Anni 2000</div>
            <div className="timeline-text">ILOVEYOU, Code Red, SQL Slammer. Nascita dello spam e del phishing di massa.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Anni 2010</div>
            <div className="timeline-text">Stuxnet, ransomware (CryptoLocker), attacchi state-sponsored, APT.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2017</div>
            <div className="timeline-text">WannaCry paralizza 300.000 computer in 150 paesi in un solo giorno.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2020-oggi</div>
            <div className="timeline-text">Ransomware-as-a-Service, attacchi supply chain (SolarWinds), AI-powered attacks.</div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 8 - Impatto nel quotidiano
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge introduzione" variants={fadeUp} initial="hidden" animate="visible">
          Introduzione
        </motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          L'Impatto nel Quotidiano
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Le minacce informatiche non colpiscono solo le grandi aziende. Ecco come ci riguardano ogni giorno:
        </motion.p>
        <motion.ul className="slide-list" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <li>
            <span className="list-icon"><FiUsers /></span>
            <span><strong>Social media:</strong> Furti di identità, account compromessi, truffe sui marketplace</span>
          </li>
          <li>
            <span className="list-icon"><FiGlobe /></span>
            <span><strong>E-commerce:</strong> Siti falsi, clonazione carte di credito, phishing bancario</span>
          </li>
          <li>
            <span className="list-icon"><FiLock /></span>
            <span><strong>Smartphone:</strong> App malevole, SMS truffa (smishing), spyware</span>
          </li>
          <li>
            <span className="list-icon"><FiTrendingUp /></span>
            <span><strong>Scuola e lavoro:</strong> Ransomware su reti scolastiche, furto di credenziali, data breach</span>
          </li>
        </motion.ul>
        <motion.div className="info-box warning" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
          <div className="info-box-title"><FiAlertTriangle /> Ricorda</div>
          <div className="info-box-content">
            La sicurezza informatica riguarda tutti. Ogni dispositivo connesso è un potenziale bersaglio. La consapevolezza è la prima linea di difesa.
          </div>
        </motion.div>
      </div>
    </div>
  ),
]

export default slides
