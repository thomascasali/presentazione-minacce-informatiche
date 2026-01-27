import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

const quizData = [
  {
    question: 'Ricevi un\'email da "assistenza@aruba-servizio.com" che ti chiede di rinnovare il dominio entro 24 ore. Cosa fai?',
    options: [
      'Clicco subito sul link per non perdere il dominio',
      'Rispondo all\'email chiedendo se è autentica',
      'Accedo direttamente al sito aruba.it per verificare lo stato del dominio',
      'Inoltro l\'email a tutti i miei contatti per avvisarli',
    ],
    correct: 2,
    explanation: 'Non bisogna mai cliccare su link in email sospette. L\'azione corretta è accedere direttamente al sito ufficiale (aruba.it) digitando l\'URL nel browser per verificare lo stato dei propri servizi.',
  },
  {
    question: 'Cosa ha sfruttato il ransomware WannaCry per diffondersi nel 2017?',
    options: [
      'Email di phishing con allegati infetti',
      'Una vulnerabilità nel protocollo SMB di Windows (EternalBlue)',
      'Chiavette USB infette distribuite nelle aziende',
      'Un attacco ai server DNS mondiali',
    ],
    correct: 1,
    explanation: 'WannaCry sfruttava l\'exploit EternalBlue, una vulnerabilità nel protocollo SMBv1 di Windows. La patch era disponibile da 2 mesi (MS17-010), ma molti sistemi non erano aggiornati.',
  },
  {
    question: 'Qual è la differenza principale tra un Trojan e un virus?',
    options: [
      'Il Trojan è più pericoloso del virus',
      'Il Trojan colpisce solo smartphone, il virus solo PC',
      'Il Trojan non si auto-replica, deve essere installato dall\'utente',
      'Il Trojan è più facile da rilevare con un antivirus',
    ],
    correct: 2,
    explanation: 'A differenza dei virus che si auto-replicano allegandosi ad altri file, i Trojan non si auto-replicano. Si mascherano da software legittimo e necessitano dell\'azione dell\'utente per essere installati.',
  },
  {
    question: 'Cos\'è il "thread hijacking" usato da Emotet?',
    options: [
      'Un attacco che ruba i thread della CPU per minare criptovalute',
      'Una tecnica che risponde a conversazioni email reali con allegati infetti',
      'Un metodo per rubare le password dei thread di forum online',
      'Un tipo di attacco DDoS che sovraccarica i server email',
    ],
    correct: 1,
    explanation: 'Emotet rubava le email dai computer infetti e poi rispondeva alle conversazioni esistenti con allegati malevoli. Questo rendeva le email molto credibili perché arrivavano nel contesto di conversazioni reali.',
  },
  {
    question: 'La 2FA (autenticazione a due fattori) blocca circa il:',
    options: [
      '50% degli attacchi automatizzati',
      '75% degli attacchi automatizzati',
      '90% degli attacchi automatizzati',
      '99,9% degli attacchi automatizzati',
    ],
    correct: 3,
    explanation: 'Secondo Microsoft, la 2FA blocca il 99,9% degli attacchi automatizzati. È una delle misure di sicurezza più efficaci e semplici da implementare.',
  },
  {
    question: 'Quale di queste password è la PIÙ sicura?',
    options: [
      'P@ssw0rd!',
      'MarioRossi1990',
      'cavallo-batteria-graffetta-luna',
      'Qwerty123456!',
    ],
    correct: 2,
    explanation: 'Una passphrase composta da parole casuali è più sicura e facile da ricordare. Le altre password sono tutte varianti comuni facilmente individuabili dagli strumenti di brute force.',
  },
  {
    question: 'Cosa significa la regola del backup "3-2-1"?',
    options: [
      '3 backup al giorno, 2 alla settimana, 1 al mese',
      '3 copie dei dati, 2 tipi di supporto diversi, 1 copia offsite',
      '3 password, 2 email, 1 antivirus',
      '3 firewall, 2 antivirus, 1 VPN',
    ],
    correct: 1,
    explanation: 'La regola 3-2-1 prevede: 3 copie totali dei dati, su 2 tipi di supporto diversi (es: HDD + cloud), con 1 copia in una posizione geografica diversa (offsite).',
  },
  {
    question: 'Un collega ti manda un file Word via email chiedendoti di "abilitare le macro" per visualizzarlo. Cosa fai?',
    options: [
      'Abilito le macro perché mi fido del collega',
      'Apro il file su un computer diverso',
      'Verifico con il collega (via telefono o di persona) se ha davvero inviato quel file',
      'Elimino subito l\'email e formatto il computer',
    ],
    correct: 2,
    explanation: 'L\'account del collega potrebbe essere compromesso (come nel caso di Emotet/thread hijacking). È fondamentale verificare attraverso un canale diverso (telefono, di persona) prima di aprire allegati che richiedono macro.',
  },
]

function QuizSlide() {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleSelect = useCallback((index) => {
    if (selected !== null) return
    setSelected(index)
    if (index === quizData[currentQ].correct) {
      setScore((s) => s + 1)
    }
  }, [selected, currentQ])

  const handleNext = useCallback(() => {
    if (currentQ < quizData.length - 1) {
      setCurrentQ((q) => q + 1)
      setSelected(null)
    } else {
      setFinished(true)
    }
  }, [currentQ])

  const handleReset = useCallback(() => {
    setCurrentQ(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }, [])

  if (finished) {
    const pct = Math.round((score / quizData.length) * 100)
    return (
      <div className="quiz-container">
        <motion.div className="quiz-score" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <div className="quiz-score-number">{score}/{quizData.length}</div>
          <div className="quiz-score-label">
            {pct >= 80 ? 'Eccellente! Sei un esperto di cybersecurity!' : pct >= 60 ? 'Buon risultato! Continua a studiare.' : 'Devi ripassare! Rivedi i moduli precedenti.'}
          </div>
          <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            ({pct}% di risposte corrette)
          </div>
          <button className="quiz-next-btn" onClick={handleReset} style={{ marginTop: '1.5rem' }}>
            Riprova il Quiz
          </button>
        </motion.div>
      </div>
    )
  }

  const q = quizData[currentQ]
  return (
    <div className="quiz-container">
      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
        Domanda {currentQ + 1}/{quizData.length}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <div className="quiz-question">{q.question}</div>
          <div className="quiz-options">
            {q.options.map((opt, i) => {
              let className = 'quiz-option'
              if (selected !== null) {
                if (i === selected) {
                  className += ' selected ' + (i === q.correct ? 'correct' : 'wrong')
                } else if (i === q.correct) {
                  className += ' show-correct'
                }
              }
              return (
                <motion.button
                  key={i}
                  className={className}
                  onClick={() => handleSelect(i)}
                  whileHover={selected === null ? { scale: 1.01 } : {}}
                  whileTap={selected === null ? { scale: 0.99 } : {}}
                >
                  <span style={{ fontWeight: 600, marginRight: '0.5rem' }}>{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </motion.button>
              )
            })}
          </div>
          {selected !== null && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className={`quiz-feedback ${selected === q.correct ? 'correct' : 'wrong'}`}>
                <strong>{selected === q.correct ? '✅ Corretto!' : '❌ Sbagliato!'}</strong>
                <br />
                {q.explanation}
              </div>
              <button className="quiz-next-btn" onClick={handleNext}>
                {currentQ < quizData.length - 1 ? 'Prossima domanda →' : 'Vedi risultati'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const slides = [
  // Slide 1 - Cover
  () => (
    <div className="slide slide-cover">
      <motion.div className="cover-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', duration: 0.8 }}>
        🧠
      </motion.div>
      <motion.h1 className="slide-title" style={{ background: 'linear-gradient(135deg, #f59e0b, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        Quiz Interattivo
      </motion.h1>
      <motion.p className="slide-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        Metti alla prova le tue conoscenze sulle minacce informatiche! 8 domande per testare quello che hai imparato.
      </motion.p>
    </div>
  ),

  // Slide 2 - Quiz
  () => (
    <div className="slide">
      <div className="slide-inner" style={{ alignItems: 'center' }}>
        <motion.span className="slide-badge quiz" variants={fadeUp} initial="hidden" animate="visible">Quiz</motion.span>
        <QuizSlide />
      </div>
    </div>
  ),

  // Slide 3 - Conclusione
  () => (
    <div className="slide slide-cover">
      <motion.div className="cover-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', duration: 0.8 }}>
        🎓
      </motion.div>
      <motion.h1 className="slide-title gradient-blue" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        Grazie!
      </motion.h1>
      <motion.p className="slide-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        Ricorda: la sicurezza informatica inizia dalla consapevolezza. Ogni giorno, le tue scelte digitali fanno la differenza.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} style={{ marginTop: '1rem' }}>
        <div className="info-box success" style={{ maxWidth: '500px', textAlign: 'center' }}>
          <div className="info-box-content" style={{ fontSize: '1.1rem' }}>
            <strong>La sicurezza non è un prodotto, è un processo.</strong>
            <br />
            <span style={{ fontSize: '0.9rem' }}>— Bruce Schneier</span>
          </div>
        </div>
      </motion.div>
    </div>
  ),
]

export default slides
