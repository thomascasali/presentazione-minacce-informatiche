import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiHome, FiMaximize, FiMinimize } from 'react-icons/fi'
import { modulesMeta } from '../modules/index.js'
import * as allModules from '../modules/index.js'

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  }),
}

function Presentation() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const slides = allModules[moduleId] || []
  const meta = modulesMeta[moduleId] || {}
  const totalSlides = slides.length

  const goNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1)
      setCurrentSlide((s) => s + 1)
    }
  }, [currentSlide, totalSlides])

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide((s) => s - 1)
    }
  }, [currentSlide])

  const goHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {})
    }
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'Escape') {
        goHome()
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen()
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, goHome, toggleFullscreen])

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  // Touch support
  useEffect(() => {
    let touchStartX = 0
    const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX }
    const handleTouchEnd = (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext()
        else goPrev()
      }
    }
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goNext, goPrev])

  if (!slides.length) {
    return (
      <div className="slide slide-cover">
        <h1 className="slide-title">Modulo non trovato</h1>
        <button className="nav-btn" onClick={goHome}>Torna alla Home</button>
      </div>
    )
  }

  const SlideComponent = slides[currentSlide]
  const progress = ((currentSlide + 1) / totalSlides) * 100

  return (
    <div className="presentation-container">
      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Fullscreen button */}
      <button className="fullscreen-btn" onClick={toggleFullscreen} title="Fullscreen (F)">
        {isFullscreen ? <FiMinimize /> : <FiMaximize />}
      </button>

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ width: '100%', height: '100%' }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Keyboard hint on first slide */}
      {currentSlide === 0 && (
        <motion.div
          className="keyboard-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="key-icon">←</span>
          <span className="key-icon">→</span>
          per navigare &nbsp;|&nbsp;
          <span className="key-icon">F</span>
          fullscreen &nbsp;|&nbsp;
          <span className="key-icon">Esc</span>
          home
        </motion.div>
      )}

      {/* Navigation */}
      <nav className="slide-nav">
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="nav-btn home-btn" onClick={goHome} title="Torna alla home (Esc)">
            <FiHome />
            <span>Home</span>
          </button>
          <button className="nav-btn" onClick={goPrev} disabled={currentSlide === 0} title="Slide precedente">
            <FiChevronLeft />
            <span>Indietro</span>
          </button>
        </div>

        <div className="nav-info">
          <span className="nav-module-name">{meta.title || moduleId}</span>
          <span className="nav-slide-counter">{currentSlide + 1} / {totalSlides}</span>
        </div>

        <button className="nav-btn" onClick={goNext} disabled={currentSlide === totalSlides - 1} title="Prossima slide">
          <span>Avanti</span>
          <FiChevronRight />
        </button>
      </nav>
    </div>
  )
}

export default Presentation
