# Minacce Informatiche - Presentazione Interattiva

Materiale didattico completo sulle minacce informatiche: una presentazione React interattiva con animazioni, esempi reali e quiz, accompagnata da schede per giochi di ruolo.

## Struttura del Repository

```
presentazione-minacce-informatiche/
├── src/
│   ├── modules/           # Moduli della presentazione (uno per argomento)
│   │   ├── index.js       # Registro dei moduli e metadati
│   │   ├── introduzione.jsx
│   │   ├── phishing.jsx
│   │   ├── malware.jsx
│   │   ├── trojan.jsx
│   │   ├── protezione.jsx
│   │   └── quiz.jsx
│   ├── pages/
│   │   ├── Home.jsx       # Landing page con navigazione moduli
│   │   └── Presentation.jsx  # Viewer slide con navigazione
│   ├── App.jsx            # Routing principale
│   ├── App.css            # Stili della presentazione
│   ├── index.css          # Stili globali e tema
│   └── main.jsx           # Entry point
├── schede-gioco-di-ruolo.md  # Schede per attivita in classe
├── package.json
├── vite.config.js
└── index.html
```

## Contenuti della Presentazione

La presentazione e organizzata in **6 moduli indipendenti** (~51 slide totali):

| Modulo | Slide | Contenuto |
|--------|-------|-----------|
| **Introduzione** | 8 | Panoramica cybersecurity, triade CIA, evoluzione minacce, statistiche |
| **Phishing** | 10 | Definizione, varianti, caso Aruba (demo interattiva email), red flag, protezione |
| **Malware** | 10 | Tipologie, vettori di diffusione, caso WannaCry (timeline, impatto globale) |
| **Trojan** | 10 | Definizione, tipi, caso Emotet (catena infezione, thread hijacking, botnet) |
| **Protezione** | 10 | 2FA, password sicure, aggiornamenti, backup 3-2-1, checklist interattiva |
| **Quiz** | 3 | 8 domande interattive con feedback e punteggio finale |

### Elementi interattivi
- **Demo email phishing Aruba**: simulazione di un'email di phishing con analisi dei red flag (click per rivelare)
- **Checklist di sicurezza**: gli studenti verificano il proprio livello di sicurezza
- **Quiz a risposta multipla**: 8 domande con feedback immediato e spiegazioni

## Come Usare

### Sviluppo locale

```bash
# Installare le dipendenze
npm install

# Avviare il server di sviluppo
npm run dev
```

Il server di sviluppo si avvia su `http://localhost:5173`.

### Build per produzione

```bash
npm run build
```

I file compilati saranno nella cartella `dist/`.

### Deploy su GitHub Pages

```bash
npm run deploy
```

Questo comando esegue la build e pubblica su GitHub Pages. La presentazione sara disponibile all'indirizzo:
`https://thomascasali.github.io/presentazione-minacce-informatiche/`

## Navigazione della Presentazione

### Da tastiera
- **Freccia destra / Spazio**: slide successiva
- **Freccia sinistra**: slide precedente
- **F**: attiva/disattiva fullscreen
- **Esc**: torna alla home

### Da touch (smartphone/tablet)
- **Swipe sinistra**: slide successiva
- **Swipe destra**: slide precedente

### Pulsanti
- Barra di navigazione in basso con pulsanti Indietro/Avanti e contatore slide
- Barra di progresso in alto
- Pulsante Home per tornare alla pagina iniziale
- Pulsante Fullscreen in alto a destra

## Architettura Modulare

La presentazione e progettata per essere facilmente estensibile:

### Aggiungere un nuovo modulo

1. Creare un file in `src/modules/nuovomodulo.jsx` che esporta un array di componenti slide:

```jsx
const slides = [
  () => (
    <div className="slide slide-cover">
      <h1 className="slide-title">Titolo Modulo</h1>
    </div>
  ),
  () => (
    <div className="slide">
      <div className="slide-inner">
        {/* contenuto slide */}
      </div>
    </div>
  ),
]

export default slides
```

2. Registrare il modulo in `src/modules/index.js`:

```js
// Aggiungere l'export
export { default as nuovomodulo } from './nuovomodulo.jsx'

// Aggiungere all'ordine
export const moduleOrder = [
  // ...moduli esistenti,
  'nuovomodulo',
]

// Aggiungere i metadati
export const modulesMeta = {
  // ...moduli esistenti,
  nuovomodulo: {
    id: 'nuovomodulo',
    title: 'Nuovo Modulo',
    description: 'Descrizione del modulo.',
    icon: '📚',
    className: 'nuovomodulo',
    badge: 'nuovomodulo',
  },
}
```

3. (Opzionale) Aggiungere stili per il badge e la card in `App.css`.

### Rimuovere un modulo

Rimuovere l'entry da `moduleOrder` in `src/modules/index.js`. Il modulo non apparira nella home ma il file resta disponibile per un futuro riutilizzo.

### Riordinare i moduli

Modificare l'array `moduleOrder` in `src/modules/index.js`. L'ordine dei moduli nella home segue l'ordine dell'array.

## Schede Gioco di Ruolo

Il file `schede-gioco-di-ruolo.md` contiene 5 scenari per attivita didattiche in classe:

1. **L'Email Sospetta di Aruba** - Simulazione phishing (30 min, livello base)
2. **L'Attacco Ransomware all'Ospedale** - Gestione crisi WannaCry (40 min, livello intermedio)
3. **Il Trojan nel Documento del Collega** - Thread hijacking Emotet (35 min, livello intermedio)
4. **Il Social Engineering al Telefono** - Vishing e persuasione (30 min, livello base)
5. **La Gara di Sicurezza** - Red Team vs Blue Team (30 min, livello avanzato)

Ogni scenario include ruoli, svolgimento, materiali e domande per la discussione.

## Tecnologie Utilizzate

- **React 19** - Framework UI
- **Vite** - Build tool
- **Framer Motion** - Animazioni
- **React Router** - Navigazione tra moduli
- **React Icons** - Icone
- **gh-pages** - Deploy su GitHub Pages

## Licenza

Materiale didattico a scopo educativo.
