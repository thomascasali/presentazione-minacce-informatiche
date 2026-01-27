import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiLock, FiRefreshCw, FiMail, FiHardDrive, FiWifi, FiSmartphone, FiCheck } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

function SecurityChecklist() {
  const [checked, setChecked] = useState({})
  const items = [
    'Uso password diverse per ogni account',
    'Ho attivato l\'autenticazione a due fattori',
    'Aggiorno regolarmente sistema operativo e app',
    'Ho un antivirus attivo e aggiornato',
    'Faccio backup regolari dei miei dati',
    'Non apro allegati da mittenti sconosciuti',
    'Verifico i link prima di cliccare',
    'Non uso Wi-Fi pubbliche per operazioni sensibili',
    'Le mie password hanno almeno 12 caratteri',
    'Non scarico software da siti non ufficiali',
  ]

  const toggle = (i) => setChecked((prev) => ({ ...prev, [i]: !prev[i] }))
  const count = Object.values(checked).filter(Boolean).length

  return (
    <div>
      <div className="checklist">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={`checklist-item ${checked[i] ? 'checked' : ''}`}
            onClick={() => toggle(i)}
            whileTap={{ scale: 0.98 }}
          >
            <div className="checklist-checkbox">
              {checked[i] && <FiCheck />}
            </div>
            <span className="checklist-text">{item}</span>
          </motion.div>
        ))}
      </div>
      <div style={{ marginTop: '1rem', textAlign: 'center', padding: '1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: count >= 8 ? 'var(--accent-green)' : count >= 5 ? 'var(--accent-orange)' : 'var(--accent-red)' }}>
          {count}/10
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          {count >= 8 ? 'Ottimo! Sei ben protetto.' : count >= 5 ? 'Buono, ma puoi migliorare.' : 'Attenzione: il tuo livello di sicurezza è basso!'}
        </div>
      </div>
    </div>
  )
}

const slides = [
  // Slide 1 - Cover Protezione
  () => (
    <div className="slide slide-cover">
      <motion.div className="cover-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', duration: 0.8 }}>
        🛡️
      </motion.div>
      <motion.h1 className="slide-title gradient-green" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        Tecniche di Protezione
      </motion.h1>
      <motion.p className="slide-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        Strategie concrete e strumenti pratici per difendersi dalle minacce informatiche nella vita di tutti i giorni.
      </motion.p>
    </div>
  ),

  // Slide 2 - Autenticazione a Due Fattori
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge protezione" variants={fadeUp} initial="hidden" animate="visible">Protezione</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Autenticazione a Due Fattori (2FA)
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          La <strong>2FA</strong> aggiunge un secondo livello di verifica oltre alla password. Anche se un attaccante ruba la password, non può accedere senza il secondo fattore.
        </motion.p>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box success">
            <div className="info-box-title"><FiLock /> I tre fattori</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li><strong>Qualcosa che sai:</strong> Password, PIN</li>
                <li><strong>Qualcosa che hai:</strong> Smartphone, token fisico</li>
                <li><strong>Qualcosa che sei:</strong> Impronta digitale, volto</li>
              </ul>
            </div>
          </div>
          <div className="info-box info">
            <div className="info-box-title"><FiSmartphone /> Metodi 2FA comuni</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li><strong>SMS:</strong> Codice via messaggio (meno sicuro)</li>
                <li><strong>App Authenticator:</strong> Google/Microsoft Authenticator</li>
                <li><strong>Chiave fisica:</strong> YubiKey, Titan Key (più sicuro)</li>
                <li><strong>Biometrico:</strong> Impronta, FaceID</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div className="info-box success" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
          <div className="info-box-title">📊 Efficacia</div>
          <div className="info-box-content">
            La 2FA blocca il <strong>99,9%</strong> degli attacchi automatizzati e il <strong>96%</strong> degli attacchi di phishing di massa (Microsoft, 2023).
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 3 - Password sicure
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge protezione" variants={fadeUp} initial="hidden" animate="visible">Protezione</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Password Sicure
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Password</th>
                <th>Tempo per crackarla</th>
                <th>Livello</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>123456</code></td>
                <td>Istantaneo</td>
                <td style={{ color: 'var(--accent-red)' }}>❌ Pessimo</td>
              </tr>
              <tr>
                <td><code>password</code></td>
                <td>Istantaneo</td>
                <td style={{ color: 'var(--accent-red)' }}>❌ Pessimo</td>
              </tr>
              <tr>
                <td><code>Marco2005</code></td>
                <td>~3 ore</td>
                <td style={{ color: 'var(--accent-orange)' }}>⚠️ Debole</td>
              </tr>
              <tr>
                <td><code>Gatto!Nero42</code></td>
                <td>~3 anni</td>
                <td style={{ color: 'var(--accent-orange)' }}>⚠️ Medio</td>
              </tr>
              <tr>
                <td><code>c4v4ll0-b4tt3r14-gr4ff3tt4</code></td>
                <td>~milioni di anni</td>
                <td style={{ color: 'var(--accent-green)' }}>✅ Forte</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        <motion.div className="info-box success" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box-title">💡 Consiglio: usa una passphrase</div>
          <div className="info-box-content">
            Una frase di 3-4 parole casuali è più sicura e facile da ricordare di una password complessa. Es: <code>cavallo-batteria-graffetta</code>. Usa un <strong>password manager</strong> (Bitwarden, 1Password) per gestirle tutte.
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 4 - Aggiornamenti software
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge protezione" variants={fadeUp} initial="hidden" animate="visible">Protezione</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Aggiornamenti Software
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Gli aggiornamenti software non aggiungono solo funzionalità: <strong>correggono vulnerabilità di sicurezza</strong> che gli attaccanti sfruttano attivamente. Ricorda: WannaCry ha sfruttato una falla per cui la patch esisteva già da 2 mesi.
        </motion.p>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box success">
            <div className="info-box-title"><FiRefreshCw /> Cosa aggiornare</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li>Sistema operativo (Windows Update, macOS)</li>
                <li>Browser (Chrome, Firefox, Edge)</li>
                <li>Antivirus e firewall</li>
                <li>App dello smartphone</li>
                <li>Firmware del router Wi-Fi</li>
              </ul>
            </div>
          </div>
          <div className="info-box warning">
            <div className="info-box-title"><FiShield /> Best practice</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li>Attivare gli aggiornamenti automatici</li>
                <li>Non rimandare gli aggiornamenti di sicurezza</li>
                <li>Riavviare il PC quando richiesto</li>
                <li>Controllare settimanalmente gli aggiornamenti</li>
                <li>Non usare software non più supportato (es: Windows 7)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 5 - Email e allegati
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge protezione" variants={fadeUp} initial="hidden" animate="visible">Protezione</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Prudenza con Email e Allegati
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Le email sono il vettore di attacco numero uno. Ecco le regole fondamentali:
        </motion.p>
        <motion.div className="attack-flow" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          {[
            { n: '✉️', title: 'Verifica il mittente', desc: 'Controlla l\'indirizzo email completo, non solo il nome. Diffida di domini simili (aruba-servizi.com vs aruba.it)' },
            { n: '🔗', title: 'Non cliccare link sospetti', desc: 'Passa il mouse sopra il link per vedere l\'URL reale. Se hai dubbi, accedi al servizio digitando l\'indirizzo nel browser' },
            { n: '📎', title: 'Attenzione agli allegati', desc: 'Non aprire file .exe, .bat, .js, .vbs. Diffida di .doc e .xls che chiedono di "abilitare le macro"' },
            { n: '⏰', title: 'Diffida dell\'urgenza', desc: 'Le email legittime non chiedono azioni immediate. "Il tuo account sarà cancellato in 24h" è quasi sempre una truffa' },
            { n: '🔒', title: 'Non condividere dati sensibili', desc: 'Nessuna azienda seria chiede password, PIN o codici di sicurezza via email' },
          ].map((step) => (
            <motion.div key={step.n} className="attack-step" whileHover={{ x: 8 }} transition={{ duration: 0.2 }}>
              <div className="step-number" style={{ background: 'var(--gradient-green)', fontSize: '1.1rem' }}>{step.n}</div>
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

  // Slide 6 - Backup
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge protezione" variants={fadeUp} initial="hidden" animate="visible">Protezione</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Backup: La Regola del 3-2-1
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Il backup è l'ultima linea di difesa contro ransomware e perdita di dati. La regola del <strong>3-2-1</strong> è lo standard:
        </motion.p>
        <motion.div className="stat-grid" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="stat-card">
            <div style={{ fontSize: '3rem', marginBottom: '0.3rem' }}>3️⃣</div>
            <div className="stat-number" style={{ fontSize: '1.3rem' }}>3 Copie</div>
            <div className="stat-label">Avere almeno 3 copie dei dati importanti</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '3rem', marginBottom: '0.3rem' }}>💾</div>
            <div className="stat-number" style={{ fontSize: '1.3rem' }}>2 Supporti</div>
            <div className="stat-label">Salvare su almeno 2 tipi di supporto diversi (es: HDD + cloud)</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '3rem', marginBottom: '0.3rem' }}>🌍</div>
            <div className="stat-number" style={{ fontSize: '1.3rem' }}>1 Offsite</div>
            <div className="stat-label">Almeno 1 copia in una posizione diversa (cloud, altra sede)</div>
          </div>
        </motion.div>
        <motion.div className="info-box success" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
          <div className="info-box-title"><FiHardDrive /> Strumenti consigliati</div>
          <div className="info-box-content">
            Cloud: Google Drive, OneDrive, iCloud. Locale: hard disk esterno. Per automatizzare: Windows Backup, Time Machine (Mac), o software come Duplicati (gratuito e open source).
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 7 - Navigazione sicura
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge protezione" variants={fadeUp} initial="hidden" animate="visible">Protezione</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Navigazione Sicura
        </motion.h2>
        <motion.ul className="slide-list" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <li>
            <span className="list-icon"><FiLock /></span>
            <span><strong>HTTPS:</strong> Verifica sempre il lucchetto nella barra degli indirizzi. Non inserire dati su siti HTTP.</span>
          </li>
          <li>
            <span className="list-icon"><FiWifi /></span>
            <span><strong>Wi-Fi pubbliche:</strong> Non fare operazioni bancarie o login su Wi-Fi pubbliche. Usa una VPN se necessario.</span>
          </li>
          <li>
            <span className="list-icon"><FiSmartphone /></span>
            <span><strong>App ufficiali:</strong> Scarica app solo da Google Play Store o Apple App Store. Controlla le recensioni.</span>
          </li>
          <li>
            <span className="list-icon"><FiShield /></span>
            <span><strong>Antivirus:</strong> Mantieni un antivirus aggiornato. Windows Defender (gratuito) è già un buon punto di partenza.</span>
          </li>
          <li>
            <span className="list-icon"><FiMail /></span>
            <span><strong>Privacy:</strong> Limita le informazioni personali condivise online. Ogni dato pubblicato può essere usato per social engineering.</span>
          </li>
        </motion.ul>
      </div>
    </div>
  ),

  // Slide 8 - Cosa fare se si è stati attaccati
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge protezione" variants={fadeUp} initial="hidden" animate="visible">Protezione</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Cosa Fare se Sei Stato Attaccato
        </motion.h2>
        <motion.div className="attack-flow" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          {[
            { n: '1', title: 'Non farti prendere dal panico', desc: 'Agisci con calma ma rapidamente. Ogni minuto conta per limitare i danni.' },
            { n: '2', title: 'Disconnetti il dispositivo', desc: 'Scollega Internet e la rete locale per impedire la propagazione o la comunicazione col server dell\'attaccante.' },
            { n: '3', title: 'Cambia le password', desc: 'Da un altro dispositivo sicuro, cambia immediatamente le password degli account compromessi.' },
            { n: '4', title: 'Avvisa la banca', desc: 'Se hai condiviso dati finanziari, contatta subito la banca per bloccare carte e operazioni sospette.' },
            { n: '5', title: 'Scansiona il dispositivo', desc: 'Esegui una scansione completa con un antivirus aggiornato. Considera un ripristino del sistema.' },
            { n: '6', title: 'Denuncia', desc: 'Segnala l\'attacco alla Polizia Postale (commissariatodips.it) e al CERT nazionale.' },
          ].map((step) => (
            <motion.div key={step.n} className="attack-step" whileHover={{ x: 8 }} transition={{ duration: 0.2 }}>
              <div className="step-number" style={{ background: 'var(--gradient-green)' }}>{step.n}</div>
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

  // Slide 9 - Checklist interattiva
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge protezione" variants={fadeUp} initial="hidden" animate="visible">Interattivo</motion.span>
        <motion.h2 className="slide-title gradient-green" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Checklist di Sicurezza Personale
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Verifica il tuo livello di sicurezza. Clicca sugli elementi che già metti in pratica:
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <SecurityChecklist />
        </motion.div>
      </div>
    </div>
  ),

  // Slide 10 - Riepilogo protezione
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge protezione" variants={fadeUp} initial="hidden" animate="visible">Protezione</motion.span>
        <motion.h2 className="slide-title gradient-green" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Riepilogo: Tecniche di Protezione
        </motion.h2>
        <motion.div className="info-box success" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="info-box-title">🛡️ Le 5 regole d'oro</div>
          <div className="info-box-content">
            <ul style={{ paddingLeft: '1rem', lineHeight: '2' }}>
              <li><strong>1. Attiva la 2FA</strong> su tutti gli account importanti (email, banca, social)</li>
              <li><strong>2. Aggiorna sempre</strong> sistema operativo, browser e app</li>
              <li><strong>3. Usa password forti e uniche</strong> con un password manager</li>
              <li><strong>4. Fai backup regolari</strong> seguendo la regola 3-2-1</li>
              <li><strong>5. Pensa prima di cliccare</strong>: verifica mittente, link e allegati</li>
            </ul>
          </div>
        </motion.div>
        <motion.div className="info-box info" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box-title">💡 Ricorda</div>
          <div className="info-box-content">
            La sicurezza informatica non è un prodotto, è un <strong>processo continuo</strong>. La tecnologia da sola non basta: il fattore umano è la prima e l'ultima linea di difesa.
          </div>
        </motion.div>
      </div>
    </div>
  ),
]

export default slides
