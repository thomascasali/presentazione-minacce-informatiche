# Schede di Lavoro - Giochi di Ruolo sulla Cybersecurity

Queste schede sono progettate per attivita didattiche interattive in cui gli studenti simulano scenari reali di attacco e difesa informatica.

---

## Scenario 1: L'Email Sospetta di Aruba

### Contesto
L'azienda "TechSolutions Srl" gestisce il sito web aziendale tramite Aruba. Lunedi mattina, l'impiegata Maria riceve un'email che sembra provenire da Aruba, con oggetto: "URGENTE: Il tuo dominio scadra tra 24 ore".

### Ruoli

| Ruolo | Descrizione | N. studenti |
|-------|-------------|-------------|
| **Maria** (vittima) | Impiegata amministrativa, non esperta di informatica. Ha fretta perche ha una riunione tra 30 minuti. | 1 |
| **L'attaccante** | Cybercriminale che ha preparato l'email di phishing e il sito falso. Deve descrivere come ha costruito l'attacco. | 1 |
| **Il collega IT** | Tecnico informatico dell'azienda. Viene consultato da Maria. Deve identificare i segnali sospetti. | 1 |
| **Osservatori** | Analizzano la scena e prendono appunti sui segnali di allarme. Alla fine votano le decisioni prese. | Resto della classe |

### Svolgimento

**Fase 1 - L'attacco (10 minuti)**
1. L'attaccante legge ad alta voce l'email che ha preparato (usare il modello sotto)
2. Maria reagisce naturalmente: ha fretta, il dominio e importante per l'azienda
3. Maria puo decidere di: cliccare sul link, chiedere al collega IT, ignorare l'email

**Fase 2 - L'analisi (10 minuti)**
1. Il collega IT analizza l'email punto per punto
2. Gli osservatori annotano i red flag identificati
3. Discussione: cosa ha fatto bene/male Maria?

**Fase 3 - Debriefing (10 minuti)**
1. L'attaccante rivela come ha costruito l'attacco
2. Si discutono le contromisure
3. Gli osservatori votano: Maria ha agito correttamente?

### Modello Email per lo Scenario

```
Da: assistenza@aruba-servizi.com
Oggetto: URGENTE - Il tuo dominio sta per scadere!

Gentile Cliente,

Ti informiamo che il tuo dominio techsolutions.it scadra tra 24 ore.

Per evitare la sospensione immediata del servizio, ti preghiamo
di rinnovare cliccando sul pulsante qui sotto:

    [RINNOVA ORA - http://aruba-rinnovo.xyz/rinnova]

Se non procedi al rinnovo, il dominio verra cancellato definitivamente.

Cordiali saluti,
Servizio Clienti Aruba
```

### Domande per la discussione
- Quali elementi dell'email sono sospetti?
- Come si verifica se un'email e autentica?
- Cosa fare se si e gia cliccato sul link?
- Come si segnala un tentativo di phishing?

---

## Scenario 2: L'Attacco Ransomware all'Ospedale

### Contesto
L'ospedale "San Marco" viene colpito da un attacco ransomware simile a WannaCry. Tutti i computer mostrano una schermata che chiede 300 dollari in Bitcoin per sbloccare i file. Il pronto soccorso e bloccato, le cartelle cliniche sono inaccessibili.

### Ruoli

| Ruolo | Descrizione | N. studenti |
|-------|-------------|-------------|
| **Direttore dell'ospedale** | Deve prendere decisioni rapide: pagare il riscatto? Chiamare la polizia? Come gestire i pazienti? | 1 |
| **Responsabile IT** | Deve valutare la situazione tecnica: quanto e grave? Si puo recuperare? Ci sono backup? | 1 |
| **Medico di turno** | Ha pazienti urgenti e non puo accedere alle cartelle cliniche. Deve decidere come procedere. | 1 |
| **Giornalista** | E arrivata una segnalazione. Vuole capire cosa e successo e informare il pubblico. | 1 |
| **Consulente di sicurezza** | Viene chiamato per gestire l'incidente. Deve spiegare cosa e successo e cosa fare. | 1 |
| **Osservatori** | Prendono appunti sulle decisioni e valutano le scelte fatte. | Resto della classe |

### Svolgimento

**Fase 1 - La scoperta (5 minuti)**
Il responsabile IT descrive la situazione:
- Tutti i PC mostrano la schermata del riscatto
- I file sono cifrati (.wncry)
- Il sistema di prenotazioni e bloccato
- Le cartelle cliniche elettroniche sono inaccessibili
- Il ransomware si sta diffondendo nella rete

**Fase 2 - La crisi (15 minuti)**
Ogni personaggio agisce nel suo ruolo:
1. Il direttore convoca una riunione d'emergenza
2. Il responsabile IT spiega le opzioni tecniche
3. Il medico segnala l'urgenza dei pazienti
4. Il giornalista pone domande scomode
5. Il consulente propone un piano d'azione

**Fase 3 - Le decisioni (10 minuti)**
Il gruppo deve decidere:
- Si paga il riscatto? (Pro e contro)
- Come si gestiscono i pazienti?
- Cosa si comunica al pubblico?
- Quali azioni tecniche intraprendere?

**Fase 4 - Debriefing (10 minuti)**
- Discussione sulle decisioni prese
- Cosa si sarebbe potuto fare per prevenire l'attacco?
- Quali lezioni impariamo da WannaCry?

### Scheda decisioni

| Decisione | Opzione A | Opzione B |
|-----------|-----------|-----------|
| Riscatto | Pagare ($300) per sbloccare subito | Non pagare e tentare il ripristino |
| Pazienti | Dirottare verso altri ospedali | Tornare a carta e penna |
| Media | Comunicato stampa trasparente | Silenzio fino alla risoluzione |
| Tecnico | Spegnere tutti i PC | Isolare i segmenti di rete |

---

## Scenario 3: Il Trojan nel Documento del Collega

### Contesto
L'azienda "FinanceGroup" riceve un'email apparentemente dal commercialista, con un documento Excel allegato dal titolo "Fatture_Q3_2024.xlsx". Il documento chiede di "Abilitare le macro per visualizzare il contenuto". In realta, il computer del commercialista e stato infettato da Emotet, che sta usando il thread hijacking.

### Ruoli

| Ruolo | Descrizione | N. studenti |
|-------|-------------|-------------|
| **Luca** (dipendente) | Riceve l'email. Il commercialista gli manda spesso documenti Excel. Non sospetta nulla. | 1 |
| **Il commercialista** | Il suo PC e infettato da Emotet a sua insaputa. Non sa che stanno partendo email dal suo account. | 1 |
| **Emotet** (il trojan) | Spiega passo passo cosa fa il malware: ruba email, risponde, allega file, si diffonde. | 1 |
| **Responsabile sicurezza** | Viene allertato quando l'antivirus rileva attivita sospetta. Deve investigare. | 1 |
| **Osservatori** | Compilano una scheda di analisi dell'attacco. | Resto della classe |

### Svolgimento

**Fase 1 - L'infezione iniziale (5 minuti)**
Il "Trojan Emotet" racconta in prima persona:
1. "Sono arrivato sul PC del commercialista tramite un'email con allegato Word"
2. "Ho rubato tutte le sue email e la rubrica dei contatti"
3. "Ho trovato una conversazione recente con Luca di FinanceGroup"
4. "Ho risposto a quella conversazione con un file Excel infetto"

**Fase 2 - La trappola (10 minuti)**
1. Luca legge l'email: sembra una risposta normale del commercialista
2. Apre il file Excel: "Abilita macro per visualizzare il contenuto"
3. Decisione critica: abilitare o no?
4. Se abilita: Emotet si installa e inizia a rubare dati

**Fase 3 - La scoperta (10 minuti)**
1. L'antivirus segnala attivita sospetta (dopo ore/giorni)
2. Il responsabile sicurezza investiga
3. Si scopre la catena di infezione
4. Il commercialista viene avvisato

**Fase 4 - Debriefing (10 minuti)**
- Come si poteva evitare l'infezione?
- Perche il thread hijacking e cosi efficace?
- Quali politiche aziendali servono?
- Come verificare la legittimita di un allegato?

### Scheda di analisi per gli osservatori

| Fase | Cosa e successo | Errore commesso | Come si poteva evitare |
|------|----------------|-----------------|----------------------|
| Infezione commercialista | | | |
| Invio email a Luca | | | |
| Apertura allegato | | | |
| Abilitazione macro | | | |
| Diffusione in azienda | | | |

---

## Scenario 4: Il Social Engineering al Telefono

### Contesto
Un attaccante chiama la segreteria dell'istituto scolastico fingendosi un tecnico Microsoft. Dice che il computer della scuola ha un virus e che deve intervenire urgentemente da remoto.

### Ruoli

| Ruolo | Descrizione | N. studenti |
|-------|-------------|-------------|
| **Segretaria** | Riceve la chiamata. Non e esperta di informatica, ma e responsabile e attenta. | 1 |
| **Attaccante** | Si finge tecnico Microsoft. Usa tecniche di persuasione: urgenza, autorita, paura. | 1 |
| **Dirigente scolastico** | Viene consultato dalla segretaria. Deve decidere come procedere. | 1 |
| **Tecnico IT della scuola** | Viene chiamato per verificare. Sa che Microsoft non chiama mai direttamente. | 1 |
| **Osservatori** | Annotano le tecniche di persuasione usate dall'attaccante. | Resto della classe |

### Script dell'attaccante (traccia)

```
"Buongiorno, sono Marco Bianchi del supporto tecnico Microsoft.
Il nostro sistema ha rilevato che il vostro computer ha un virus
molto pericoloso che sta inviando dati sensibili degli studenti
a server esterni.

E' urgente intervenire subito, altrimenti i dati personali
degli studenti potrebbero essere compromessi. Le chiedo di
andare al computer e seguire le mie istruzioni per installare
il nostro software di assistenza remota...

[Se la segretaria esita]
Capisco la sua preoccupazione, ma ogni minuto che passa i dati
dei vostri studenti sono a rischio. Posso fornirle il mio
numero di matricola Microsoft: MS-2847592."
```

### Tecniche di persuasione da identificare

| Tecnica | Esempio nello scenario | Perche funziona |
|---------|----------------------|-----------------|
| **Autorita** | "Sono del supporto Microsoft" | Le persone tendono a obbedire a figure autorevoli |
| **Urgenza** | "E' urgente intervenire subito" | La fretta impedisce di ragionare lucidamente |
| **Paura** | "I dati degli studenti sono a rischio" | La paura delle conseguenze spinge ad agire |
| **Reciprocita** | "Siamo qui per aiutarvi gratuitamente" | Chi riceve aiuto si sente in obbligo |
| **Legittimita apparente** | "Numero matricola MS-2847592" | I dettagli specifici creano credibilita |

---

## Scenario 5: La Gara di Sicurezza (attivita competitiva)

### Contesto
Due squadre competono per proteggere un'azienda fittizia. Una squadra attacca (Red Team), l'altra difende (Blue Team).

### Ruoli

| Squadra | Ruolo | Obiettivo |
|---------|-------|-----------|
| **Red Team** (attacco) | Pianificare attacchi | Trovare vulnerabilita e simulare attacchi |
| **Blue Team** (difesa) | Implementare difese | Proteggere l'azienda e rispondere agli incidenti |
| **Arbitro** | Valutare | Giudicare l'efficacia di attacchi e difese |

### Svolgimento (30 minuti)

**Round 1 - Pianificazione (10 minuti)**
- Red Team: sceglie 3 attacchi da una lista (phishing, malware, social engineering, exploit)
- Blue Team: sceglie 5 misure di difesa da una lista (2FA, backup, formazione, antivirus, firewall, aggiornamenti, policy email, VPN, segmentazione rete, password manager)

**Round 2 - Simulazione (10 minuti)**
- Red Team presenta ogni attacco con una breve descrizione
- Blue Team spiega se e come le sue difese avrebbero bloccato l'attacco
- L'arbitro assegna punti

**Round 3 - Valutazione (10 minuti)**
- Discussione collettiva
- Quali attacchi hanno avuto successo? Perche?
- Quali difese si sono rivelate piu efficaci?

### Sistema di punteggio

| Evento | Punti Red Team | Punti Blue Team |
|--------|---------------|-----------------|
| Attacco riuscito (non bloccato) | +3 | 0 |
| Attacco parzialmente bloccato | +1 | +1 |
| Attacco completamente bloccato | 0 | +3 |
| Difesa innovativa e ben spiegata | 0 | +1 bonus |
| Attacco creativo e realistico | +1 bonus | 0 |

### Lista attacchi disponibili per il Red Team

1. **Email phishing** mirata al reparto contabilita
2. **Ransomware** tramite allegato Word con macro
3. **Vishing** (telefonata) fingendosi il supporto IT
4. **USB dropping** - chiavetta infetta nel parcheggio aziendale
5. **Attacco al Wi-Fi** guest della sala riunioni
6. **Spear phishing** al CEO con informazioni da LinkedIn
7. **Watering hole** - compromissione del sito piu visitato dai dipendenti
8. **Credential stuffing** con password rubate da data breach

### Lista difese disponibili per il Blue Team

1. **Autenticazione a due fattori** su tutti gli account
2. **Backup 3-2-1** con test di ripristino mensile
3. **Formazione** trimestrale sulla sicurezza per tutti i dipendenti
4. **Antivirus** di nuova generazione (EDR) su tutti i PC
5. **Firewall** perimetrale con IDS/IPS
6. **Aggiornamenti** automatici entro 48h dal rilascio
7. **Policy email** con blocco macro e filtro allegati
8. **VPN** obbligatoria per accesso remoto
9. **Segmentazione di rete** tra reparti
10. **Password manager** aziendale con password policy

---

## Consigli per il Docente

### Preparazione
- Stampare le schede ruolo e distribuirle 5 minuti prima dell'attivita
- Preparare un timer visibile per le fasi
- Avere un proiettore per mostrare i template delle email (dalla presentazione)

### Gestione dell'attivita
- Incoraggiare l'improvvisazione, ma mantenere il focus sull'obiettivo didattico
- Intervenire se gli studenti si allontanano troppo dallo scenario
- Prendere appunti per il debriefing finale

### Valutazione
- Valutare la partecipazione attiva (non solo le risposte corrette)
- Premiare chi identifica i segnali di allarme
- Premiare le soluzioni creative e realistiche

### Tempistiche consigliate

| Scenario | Durata | Livello |
|----------|--------|---------|
| 1 - Email Aruba | 30 min | Base |
| 2 - Ransomware Ospedale | 40 min | Intermedio |
| 3 - Trojan Emotet | 35 min | Intermedio |
| 4 - Social Engineering | 30 min | Base |
| 5 - Gara Red vs Blue | 30 min | Avanzato |

### Collegamento con la presentazione
- Scenario 1 -> Modulo Phishing (slide 5-7)
- Scenario 2 -> Modulo Malware (slide 5-9)
- Scenario 3 -> Modulo Trojan (slide 5-9)
- Scenario 4 -> Modulo Phishing (slide 4) + Modulo Protezione
- Scenario 5 -> Tutti i moduli
