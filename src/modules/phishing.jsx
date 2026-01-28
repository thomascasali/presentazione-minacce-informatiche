import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiAlertTriangle, FiMail, FiLink, FiEye, FiCheck, FiX } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

function EmailDemo() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div>
      <div className="email-demo">
        <div className="email-header">
          <div className="email-field">
            <strong>Da:</strong>
            <span>{revealed ? <span className="suspicious">assistenza@aruba-servizi.com (FALSO!)</span> : 'assistenza@aruba-servizi.com'}</span>
          </div>
          <div className="email-field">
            <strong>A:</strong> mario.rossi@email.it
          </div>
          <div className="email-field">
            <strong>Ogg:</strong>
            <span>{revealed ? <span className="suspicious">Urgenza tipica del phishing</span> : 'URGENTE: Il tuo dominio sta per scadere!'}</span>
          </div>
        </div>
        <div className="email-body">
          <p>Gentile Cliente,</p>
          <p style={{ margin: '0.8rem 0' }}>
            Ti informiamo che il tuo dominio {revealed ? <span className="suspicious">mariorossi.it (generico)</span> : <strong>mariorossi.it</strong>} scadrà tra <strong style={revealed ? { color: '#ef4444' } : {}}>24 ore</strong>.
          </p>
          <p>Per evitare la {revealed ? <span className="suspicious">senso di urgenza = red flag</span> : 'sospensione immediata'} del servizio, ti preghiamo di rinnovare immediatamente cliccando sul pulsante qui sotto:</p>
          <div style={{ textAlign: 'center' }}>
            <span className="email-cta-btn" style={revealed ? { background: '#ef4444' } : {}}>
              {revealed ? '⚠️ LINK MALEVOLO: http://aruba-rinnovo.xyz' : '🔄 Rinnova Ora'}
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', marginTop: '1rem' }}>
            Se non procedi al rinnovo entro le prossime 24 ore, il tuo dominio verrà {revealed ? <span className="suspicious">minaccia = pressione psicologica</span> : 'cancellato definitivamente'}.
          </p>
        </div>
        <div className="email-footer">
          {revealed
            ? '⚠️ Footer generico senza dati reali di Aruba S.p.A. - Mancano P.IVA e sede legale'
            : 'Aruba S.p.A. - Servizio Clienti - assistenza@aruba.it'}
        </div>
      </div>
      <motion.button
        onClick={() => setRevealed(!revealed)}
        style={{
          marginTop: '1rem',
          padding: '0.7rem 1.5rem',
          background: revealed ? 'var(--accent-green)' : 'var(--accent-red)',
          color: 'white',
          borderRadius: 'var(--radius)',
          fontSize: '0.95rem',
          fontWeight: 600,
          transition: 'all 0.3s ease',
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {revealed ? '👁️ Nascondi analisi' : '🔍 Rivela gli indizi sospetti'}
      </motion.button>
    </div>
  )
}

function RedFlagAnalysis() {
  return (
    <div className="red-flags-list">
      <div className="red-flag-item">
        <span className="flag-icon"><FiAlertTriangle /></span>
        <span><strong>Mittente sospetto:</strong> "aruba-servizi.com" non è il dominio ufficiale di Aruba (aruba.it)</span>
      </div>
      <div className="red-flag-item">
        <span className="flag-icon"><FiAlertTriangle /></span>
        <span><strong>Urgenza artificiale:</strong> "24 ore", "cancellato definitivamente" creano pressione psicologica</span>
      </div>
      <div className="red-flag-item">
        <span className="flag-icon"><FiAlertTriangle /></span>
        <span><strong>Link nascosto:</strong> Il pulsante porta a "aruba-rinnovo.xyz", non al sito ufficiale aruba.it</span>
      </div>
      <div className="red-flag-item">
        <span className="flag-icon"><FiAlertTriangle /></span>
        <span><strong>Generico:</strong> Non cita il nome completo del cliente né dettagli specifici dell'account</span>
      </div>
      <div className="red-flag-item">
        <span className="flag-icon"><FiAlertTriangle /></span>
        <span><strong>Footer incompleto:</strong> Mancano P.IVA, sede legale e riferimenti ufficiali dell'azienda</span>
      </div>
    </div>
  )
}

const slides = [
  // Slide 1 - Cover Phishing
  () => (
    <div className="slide slide-cover">
      <motion.div className="cover-icon" initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', duration: 0.8 }}>
        🎣
      </motion.div>
      <motion.h1 className="slide-title gradient-red" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        Phishing
      </motion.h1>
      <motion.p className="slide-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        L'arte dell'inganno digitale: come i criminali usano l'ingegneria sociale per rubare le nostre credenziali e informazioni personali.
      </motion.p>
    </div>
  ),

  // Slide 2 - Cos'è il phishing
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge phishing" variants={fadeUp} initial="hidden" animate="visible">Phishing</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Cos'è il Phishing?
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Il <strong>phishing</strong> (dall'inglese "fishing" = pescare) è una tecnica di <strong>ingegneria sociale</strong> in cui l'attaccante si finge un'entità affidabile per indurre la vittima a rivelare informazioni sensibili come password, numeri di carta di credito o dati personali.
        </motion.p>
        <motion.div className="info-box danger" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box-title"><FiMail /> Il meccanismo</div>
          <div className="info-box-content">
            Il termine richiama la metafora del "pescare": l'attaccante lancia un'esca (email, SMS, sito falso) e attende che la vittima "abbocchi", fornendo volontariamente le proprie credenziali.
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 3 - Come funziona un attacco
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge phishing" variants={fadeUp} initial="hidden" animate="visible">Phishing</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Come Funziona un Attacco di Phishing
        </motion.h2>
        <motion.div className="attack-flow" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          {[
            { n: '1', title: 'Preparazione', desc: 'L\'attaccante crea un\'email o sito che imita un servizio legittimo (banca, provider email, corriere)' },
            { n: '2', title: 'Invio', desc: 'L\'email viene inviata a migliaia di potenziali vittime (o mirata a una specifica - spear phishing)' },
            { n: '3', title: 'Esca', desc: 'Il messaggio contiene un\'urgenza: "Il tuo account sarà bloccato", "Pacco in consegna", "Fattura da pagare"' },
            { n: '4', title: 'Click', desc: 'La vittima clicca sul link e atterra su un sito falso visivamente identico all\'originale' },
            { n: '5', title: 'Raccolta', desc: 'La vittima inserisce le credenziali, che vengono inviate all\'attaccante' },
            { n: '6', title: 'Sfruttamento', desc: 'L\'attaccante usa le credenziali rubate per accedere agli account, rubare denaro o dati' },
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

  // Slide 4 - Tipi di phishing
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge phishing" variants={fadeUp} initial="hidden" animate="visible">Phishing</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Varianti del Phishing
        </motion.h2>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="info-box danger">
            <div className="info-box-title">📧 Email Phishing</div>
            <div className="info-box-content">Il più comune. In Italia: email false dall'<a href="https://www.agenziaentrate.gov.it/portale/avviso-del-9-aprile-2024" target="_blank" rel="noopener noreferrer">Agenzia delle Entrate</a> ("rimborso fiscale") e dall'<a href="https://www.commissariatodips.it/notizie/articolo/attenzione-alle-false-comunicazioni-che-sembrano-provenire-dallinps/index.html" target="_blank" rel="noopener noreferrer">INPS</a> ("aggiorna il profilo").</div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">🎯 Spear Phishing</div>
            <div className="info-box-content">Attacco mirato a una persona specifica. In Italia usato per colpire dirigenti aziendali e funzionari PA con email personalizzate.</div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">📱 Smishing (SMS)</div>
            <div className="info-box-content">In Italia: SMS falsi da "<a href="https://www.cybersecurity360.it/news/smishing-a-tema-poste-italiane-i-dettagli-e-come-difendersi/" target="_blank" rel="noopener noreferrer">PosteInfo</a>" (appare nel thread legittimo!) e "<a href="https://www.cybersecurity360.it/nuove-minacce/falsi-pacchi-in-arrivo-la-truffa-via-e-mail-e-via-sms/" target="_blank" rel="noopener noreferrer">Il tuo pacco è in giacenza</a>" da BRT/GLS/Amazon.</div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">📞 Vishing (Voce)</div>
            <div className="info-box-content">Phishing telefonico. In Italia: chiamate da finti operatori bancari che chiedono codici OTP per "bloccare movimenti sospetti".</div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 5 - Demo email phishing Aruba
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge phishing" variants={fadeUp} initial="hidden" animate="visible">Caso Reale</motion.span>
        <motion.h2 className="slide-title gradient-red" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Caso Aruba: Email di Phishing
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Ecco una ricostruzione di un tipico attacco di phishing che imita Aruba, uno dei più diffusi in Italia. Clicca per rivelare gli indizi sospetti.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <EmailDemo />
        </motion.div>
      </div>
    </div>
  ),

  // Slide 6 - Analisi red flag
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge phishing" variants={fadeUp} initial="hidden" animate="visible">Caso Reale</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Red Flag: Come Riconoscere il Phishing
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Analisi dettagliata degli indizi che ci permettono di riconoscere l'email fraudolenta:
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <RedFlagAnalysis />
        </motion.div>
      </div>
    </div>
  ),

  // Slide 7 - Il caso Aruba in dettaglio
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge phishing" variants={fadeUp} initial="hidden" animate="visible">Caso Reale</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Il Fenomeno Aruba in Italia
        </motion.h2>
        <motion.p className="slide-text" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          Le campagne di phishing che imitano Aruba sono tra le più diffuse in Italia. Aruba è il principale provider di hosting italiano, con milioni di clienti, il che lo rende un bersaglio ideale per i truffatori.
        </motion.p>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <div className="info-box warning">
            <div className="info-box-title">📊 Numeri del fenomeno</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li>Milioni di email fraudolente inviate ogni anno</li>
                <li>Oggetto tipico: rinnovo dominio, fattura, scadenza</li>
                <li>Target: PMI italiane e professionisti</li>
                <li>Aruba ha una pagina dedicata agli avvisi di phishing</li>
              </ul>
            </div>
          </div>
          <div className="info-box success">
            <div className="info-box-title">✅ Come verificare</div>
            <div className="info-box-content">
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                <li>Accedere sempre da aruba.it digitando l'URL</li>
                <li>Verificare lo stato dei servizi dall'area clienti</li>
                <li>Aruba non chiede mai dati via email</li>
                <li>Segnalare a abuse@aruba.it</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 8 - Phishing in Italia
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge phishing" variants={fadeUp} initial="hidden" animate="visible">Italia</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Phishing in Italia: Campagne Reali
        </motion.h2>
        <motion.div className="slide-columns" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="info-box danger">
            <div className="info-box-title">🏛️ <a href="https://www.agenziaentrate.gov.it/portale/avviso-del-9-aprile-2024" target="_blank" rel="noopener noreferrer">Agenzia delle Entrate</a></div>
            <div className="info-box-content">
              Campagne ricorrenti (2024-2025): email con oggetto "Rimborso fiscale" che chiedono dati bancari. URL con dominio simile ma <code>.info</code> o <code>.net</code> invece di <code>.gov.it</code>.
            </div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">🆔 <a href="https://www.commissariatodips.it/notizie/articolo/attenzione-alle-false-comunicazioni-che-sembrano-provenire-dallinps/index.html" target="_blank" rel="noopener noreferrer">INPS</a></div>
            <div className="info-box-content">
              Email false "Aggiorna il tuo profilo INPS" con link a siti clone che raccolgono codice fiscale, IBAN e credenziali SPID della vittima.
            </div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">📱 <a href="https://www.cybersecurity360.it/news/smishing-a-tema-poste-italiane-i-dettagli-e-come-difendersi/" target="_blank" rel="noopener noreferrer">PosteInfo (Smishing)</a></div>
            <div className="info-box-content">
              SMS che appare nello stesso thread dei messaggi reali di Poste Italiane: "Il tuo conto è stato limitato, verifica qui". La vittima si fida perché il messaggio appare tra quelli legittimi.
            </div>
          </div>
          <div className="info-box danger">
            <div className="info-box-title">📦 <a href="https://www.cybersecurity360.it/nuove-minacce/falsi-pacchi-in-arrivo-la-truffa-via-e-mail-e-via-sms/" target="_blank" rel="noopener noreferrer">Pacco in Giacenza</a></div>
            <div className="info-box-content">
              SMS massivi da "BRT", "GLS", "Amazon": link a pagine che chiedono 1-2€ per "sblocco consegna" ma in realtà rubano tutti i dati della carta di credito.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  ),

  // Slide 9 - Come proteggersi dal phishing
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge phishing" variants={fadeUp} initial="hidden" animate="visible">Phishing</motion.span>
        <motion.h2 className="slide-title" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Come Proteggersi dal Phishing
        </motion.h2>
        <motion.ul className="slide-list" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <li>
            <span className="list-icon"><FiEye /></span>
            <span><strong>Verifica il mittente:</strong> Controlla l'indirizzo email completo, non solo il nome visualizzato</span>
          </li>
          <li>
            <span className="list-icon"><FiLink /></span>
            <span><strong>Analizza i link:</strong> Passa il mouse sui link senza cliccare per vedere l'URL reale</span>
          </li>
          <li>
            <span className="list-icon"><FiAlertTriangle /></span>
            <span><strong>Diffida dell'urgenza:</strong> I messaggi legittimi non richiedono azioni immediate</span>
          </li>
          <li>
            <span className="list-icon"><FiCheck /></span>
            <span><strong>Verifica indipendentemente:</strong> Accedi ai servizi digitando l'URL direttamente nel browser</span>
          </li>
          <li>
            <span className="list-icon"><FiX /></span>
            <span><strong>Non fornire mai dati sensibili:</strong> Nessun servizio legittimo chiede password via email</span>
          </li>
        </motion.ul>
      </div>
    </div>
  ),

  // Slide 10 - Riepilogo phishing
  () => (
    <div className="slide">
      <div className="slide-inner">
        <motion.span className="slide-badge phishing" variants={fadeUp} initial="hidden" animate="visible">Phishing</motion.span>
        <motion.h2 className="slide-title gradient-red" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Riepilogo: Phishing
        </motion.h2>
        <motion.div className="info-box danger" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <div className="info-box-title">🎣 Punti chiave da ricordare</div>
          <div className="info-box-content">
            <ul style={{ paddingLeft: '1rem', lineHeight: '2' }}>
              <li>Il phishing sfrutta la <strong>fiducia e l'urgenza</strong> per ingannare le vittime</li>
              <li>Esistono varianti: email phishing, spear phishing, smishing, vishing</li>
              <li>In Italia: campagne che imitano <strong>Aruba, Agenzia delle Entrate, INPS e Poste</strong></li>
              <li><strong>Smishing PosteInfo:</strong> gli SMS falsi appaiono nel thread dei messaggi reali</li>
              <li><strong>Non cliccare mai</strong> su link in email/SMS sospetti e verificare dal sito ufficiale</li>
              <li>Segnalare a CERT-AgID, Polizia Postale o al provider del servizio imitato</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  ),
]

export default slides
