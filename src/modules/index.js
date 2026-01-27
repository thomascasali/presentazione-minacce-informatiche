export { default as introduzione } from './introduzione.jsx'
export { default as phishing } from './phishing.jsx'
export { default as malware } from './malware.jsx'
export { default as trojan } from './trojan.jsx'
export { default as protezione } from './protezione.jsx'
export { default as quiz } from './quiz.jsx'

export const moduleOrder = [
  'introduzione',
  'phishing',
  'malware',
  'trojan',
  'protezione',
  'quiz',
]

export const modulesMeta = {
  introduzione: {
    id: 'introduzione',
    title: 'Introduzione alle Minacce',
    description: 'Panoramica del panorama delle minacce informatiche moderne: cosa sono, perché sono importanti e come ci riguardano ogni giorno.',
    icon: '🌐',
    className: 'introduzione',
    badge: 'introduzione',
  },
  phishing: {
    id: 'phishing',
    title: 'Phishing',
    description: 'Come funzionano gli attacchi di phishing, il caso Aruba e le tecniche per riconoscere email e siti fraudolenti.',
    icon: '🎣',
    className: 'phishing',
    badge: 'phishing',
  },
  malware: {
    id: 'malware',
    title: 'Malware',
    description: 'Tipologie di software malevolo, il caso WannaCry e come i malware si diffondono e danneggiano i sistemi.',
    icon: '🦠',
    className: 'malware',
    badge: 'malware',
  },
  trojan: {
    id: 'trojan',
    title: 'Trojan',
    description: 'Il cavallo di Troia digitale: come funziona Emotet, le botnet e le catene di infezione moderne.',
    icon: '🐴',
    className: 'trojan',
    badge: 'trojan',
  },
  protezione: {
    id: 'protezione',
    title: 'Tecniche di Protezione',
    description: 'Strategie concrete per difendersi: autenticazione a due fattori, aggiornamenti, backup e buone pratiche quotidiane.',
    icon: '🛡️',
    className: 'protezione',
    badge: 'protezione',
  },
  quiz: {
    id: 'quiz',
    title: 'Quiz Interattivo',
    description: 'Metti alla prova le tue conoscenze con domande interattive sulle minacce informatiche e le tecniche di difesa.',
    icon: '🧠',
    className: 'quiz',
    badge: 'quiz',
  },
}
