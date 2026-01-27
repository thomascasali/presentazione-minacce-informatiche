import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { moduleOrder, modulesMeta } from '../modules/index.js'
import * as allModules from '../modules/index.js'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Home() {
  return (
    <div className="home-container">
      <motion.header
        className="home-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="home-shield-icon">🛡️</span>
        <h1 className="home-title">Minacce Informatiche</h1>
        <p className="home-subtitle">
          Presentazione interattiva sulla sicurezza informatica: phishing, malware, trojan e tecniche di protezione.
        </p>
      </motion.header>

      <motion.div
        className="modules-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {moduleOrder.map((id) => {
          const meta = modulesMeta[id]
          const mod = allModules[id]
          const slideCount = mod ? mod.length : 0

          return (
            <motion.div key={id} variants={cardVariants}>
              <Link to={`/modulo/${id}`} className={`module-card ${meta.className}`}>
                <div className="module-icon">{meta.icon}</div>
                <h2 className="module-title">{meta.title}</h2>
                <p className="module-description">{meta.description}</p>
                <div className="module-slide-count">
                  📄 {slideCount} slide
                </div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.footer
        style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          position: 'relative',
          zIndex: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Materiale didattico sulla sicurezza informatica — Usa le frecce o i tasti per navigare
      </motion.footer>
    </div>
  )
}

export default Home
