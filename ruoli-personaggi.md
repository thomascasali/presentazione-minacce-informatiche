# Ruoli Dettagliati dei Personaggi - Giochi di Ruolo Cybersecurity

Questo documento contiene le schede individuali da consegnare a ogni studente prima dell'attivita. Ogni scheda descrive il personaggio, il suo background, i suoi obiettivi e le frasi suggerite per guidare l'interpretazione.

> **Nota per il docente:** stampare e ritagliare le schede singole. Ogni studente deve conoscere solo il proprio ruolo, non quello degli altri.

---

## Scenario 1: L'Email Sospetta di Aruba

### RUOLO: Maria (la vittima)

**Chi sei:**
Maria Bianchi, 42 anni, impiegata amministrativa presso TechSolutions Srl da 8 anni. Ti occupi di fatturazione, contratti e rapporti con i fornitori. Non sei esperta di informatica: sai usare Word, Excel e la posta elettronica, ma per qualsiasi problema tecnico chiami il collega dell'IT.

**La tua giornata:**
E' lunedi mattina, hai una riunione importante con il direttore tra 30 minuti. Stai controllando velocemente la posta prima di preparare i documenti per la riunione. Il sito web aziendale e fondamentale perche i clienti lo usano per inviare ordini.

**Il tuo stato d'animo:**
Sei di fretta e un po' stressata. L'ultima volta che il sito e andato giu, il direttore si e arrabbiato molto. Non vuoi che succeda di nuovo.

**Cosa sai:**
- Il dominio aziendale e gestito da Aruba (lo sai perche hai firmato tu la fattura del rinnovo lo scorso anno)
- Non ricordi esattamente quando scade il dominio
- Il collega IT e in ferie questa settimana (o almeno cosi credi)
- Hai la carta aziendale per i pagamenti dei servizi

**I tuoi obiettivi:**
1. Risolvere il problema del dominio il prima possibile
2. Non arrivare in ritardo alla riunione
3. Non fare figuracce con il direttore

**Come comportarti:**
- Leggi l'email ad alta voce con preoccupazione
- Esprimi la fretta: "Oddio, scade tra 24 ore! Devo fare qualcosa subito!"
- Se qualcuno ti suggerisce di verificare, puoi resistere un po': "Ma non c'e tempo! E se il sito va giu?"
- Alla fine, lasciati convincere (o no) in base a come si sviluppa la scena

**Frasi suggerite:**
- "Oh no, il dominio sta per scadere! Il direttore mi ammazza se il sito va giu!"
- "Ma sembra proprio un'email di Aruba, ha il logo e tutto..."
- "Non ho tempo di chiamare nessuno, la riunione e tra 30 minuti"
- "Aspetta, ma il Mario dell'IT non era in ferie?"

---

### RUOLO: L'Attaccante

**Chi sei:**
Sei un cybercriminale che opera da un paese dell'Est Europa. Fai parte di un gruppo organizzato specializzato in phishing. Il tuo compito e spiegare alla classe (in terza persona) come hai costruito l'attacco, passo dopo passo.

**Il tuo background:**
Compri liste di email aziendali italiane nel dark web. Sai che Aruba e il provider piu usato in Italia, quindi le email che imitano Aruba hanno un alto tasso di successo. Fai questo lavoro da 3 anni e guadagni circa 3.000-5.000 euro al mese con le credenziali rubate.

**Come hai costruito l'attacco:**
1. Hai acquistato il dominio "aruba-servizi.com" per 8 euro
2. Hai copiato la grafica del sito Aruba (logo, colori, layout)
3. Hai creato una pagina di login identica a quella vera
4. Hai scritto l'email con tono urgente e professionale
5. Hai inviato l'email a 50.000 indirizzi aziendali italiani
6. Il tuo server registra le credenziali inserite dalle vittime

**I tuoi obiettivi nella scena:**
1. Spiegare alla classe come hai preparato l'attacco (dopo la fase 1)
2. Far capire quanto e facile e poco costoso creare un attacco di phishing
3. Spiegare cosa fai con le credenziali rubate (le rivendi, le usi per accedere ai pannelli Aruba e redirigere i siti, oppure cerchi dati bancari)

**Frasi suggerite:**
- "Ho comprato il dominio aruba-servizi.com per 8 euro. In 2 ore avevo il sito clone pronto"
- "Su 50.000 email inviate, di solito il 3-5% abbocca. Sono 1.500-2.500 credenziali"
- "Le credenziali Aruba le rivendo a 5-15 euro l'una, oppure le uso per accedere ai pannelli di controllo"
- "L'urgenza funziona sempre: la gente non ragiona quando ha paura"

---

### RUOLO: Il Collega IT

**Chi sei:**
Marco Verdi, 35 anni, tecnico informatico di TechSolutions Srl. Sei l'unico responsabile IT dell'azienda (PMI con 25 dipendenti). Hai una buona conoscenza della sicurezza informatica e hai gia visto diversi tentativi di phishing.

**La tua situazione:**
Non sei in ferie (Maria si sbagliava). Sei al piano di sotto a configurare un nuovo PC. Maria ti chiama al telefono o viene a cercarti.

**Cosa sai:**
- Il dominio aziendale scade tra 4 mesi (hai il calendario dei rinnovi)
- Aruba non manda mai email con toni cosi urgenti
- Hai gia segnalato ad Aruba email simili in passato
- Conosci i segnali tipici del phishing

**I tuoi obiettivi:**
1. Analizzare l'email e identificare i segnali sospetti
2. Spiegare a Maria (e alla classe) perche l'email e falsa
3. Mostrare come si verifica la legittimita di un'email

**Analisi da fare (punto per punto):**
- Controllare il mittente: "aruba-servizi.com" non e "aruba.it"
- Il tono urgente e un classico red flag
- Il link punta a un dominio diverso da aruba.it
- Mancano i dati aziendali reali nel footer
- Accedere al pannello Aruba per verificare la scadenza reale

**Frasi suggerite:**
- "Aspetta Maria, fammi vedere questa email prima di fare qualsiasi cosa"
- "Guarda il mittente: aruba-servizi.com. Il dominio vero e aruba.it"
- "Passa il mouse sul link senza cliccare... vedi? Porta a un sito diverso"
- "Ho appena controllato: il dominio scade tra 4 mesi. Questa email e falsa"
- "Non e la prima volta che arrivano email cosi. Le segnalo sempre ad abuse@aruba.it"

---

### RUOLO: Osservatore

**Il tuo compito:**
Osserva attentamente la scena senza intervenire. Compila la scheda qui sotto durante la simulazione.

**Scheda di osservazione:**

| Elemento | Osservazione |
|----------|-------------|
| Quanti red flag ha notato Maria? | |
| Maria ha chiesto aiuto? A chi? | |
| Cosa ha fatto di giusto Maria? | |
| Cosa ha fatto di sbagliato Maria? | |
| Il collega IT ha spiegato bene? | |
| Quali red flag hai notato TU? | |
| Cosa avresti fatto al posto di Maria? | |

**Alla fine vota:**
- Maria ha agito in modo ragionevole? (Si/No)
- Il collega IT e intervenuto in modo efficace? (Si/No)
- L'attacco era convincente? (Si/No)

---

## Scenario 2: L'Attacco Ransomware all'Ospedale

### RUOLO: Direttore dell'Ospedale

**Chi sei:**
Dott. Giovanni Martini, 58 anni, Direttore Generale dell'Ospedale San Marco da 5 anni. Sei un medico di formazione, non un informatico. La tua priorita assoluta e la sicurezza dei pazienti.

**La situazione:**
Sono le 8:30 di un martedi mattina. Il responsabile IT ti ha appena chiamato: tutti i computer dell'ospedale mostrano una schermata di riscatto. Il pronto soccorso ha 15 pazienti in attesa, 3 interventi chirurgici sono programmati per oggi, e le cartelle cliniche elettroniche sono inaccessibili.

**Le tue preoccupazioni:**
- Pazienti a rischio: allergie, terapie in corso, dosaggi farmaci sono nel sistema
- Reputazione dell'ospedale
- Responsabilita legale (GDPR: i dati dei pazienti sono stati violati?)
- Budget: l'ospedale ha gia problemi economici

**Le tue opzioni (devi scegliere):**
1. Pagare il riscatto ($300 per PC, ma sono centinaia di PC)
2. Non pagare e tentare il ripristino dai backup
3. Chiamare la Polizia Postale
4. Dirottare i pazienti verso altri ospedali
5. Tornare a carta e penna per le emergenze

**Frasi suggerite:**
- "Quanto tempo ci vuole per ripristinare i sistemi? Ho pazienti in pericolo ORA"
- "Se paghiamo, siamo sicuri di riavere i dati? E se chiedono ancora soldi?"
- "Dobbiamo informare i pazienti che i loro dati potrebbero essere stati rubati?"
- "Chi e responsabile? Come e potuto succedere?"
- "Chiamate subito la Polizia Postale e avvisate il Garante Privacy"

---

### RUOLO: Responsabile IT

**Chi sei:**
Ing. Laura Russo, 40 anni, responsabile dei sistemi informatici dell'ospedale. Gestisci un team di 3 tecnici per un ospedale con 400 PC e 1.200 dipendenti. Hai chiesto piu volte budget per la sicurezza, ma ti e sempre stato negato.

**Cosa sai della situazione tecnica:**
- Il ransomware si e diffuso attraverso la rete interna sfruttando il protocollo SMB
- Il punto di ingresso probabile: un'email con allegato aperto da qualcuno in amministrazione
- I backup esistono ma l'ultimo backup completo e di 5 giorni fa
- Il backup giornaliero incrementale e stato fatto ieri sera, ma potrebbe essere cifrato anche quello se era su una share di rete
- I file cifrati hanno estensione `.wncry`
- Circa 300 PC su 400 sono compromessi

**La tua frustrazione:**
Hai chiesto budget per:
- Aggiornare i PC da Windows 7 (ancora 80 PC con Windows 7)
- Segmentare la rete
- Formare il personale
Ti e sempre stato risposto "non ci sono fondi".

**Frasi suggerite:**
- "Il ransomware si chiama WannaCry. Sfrutta una vulnerabilita nota di Windows per cui esisteva una patch da mesi"
- "Abbiamo 80 PC ancora con Windows 7, non piu supportato. Ve l'avevo segnalato"
- "Il backup di 5 giorni fa dovrebbe essere pulito, ma ci vorranno almeno 48-72 ore per ripristinare tutto"
- "NON pagate il riscatto. Non c'e nessuna garanzia e finanziate i criminali"
- "Dobbiamo isolare i segmenti di rete immediatamente per fermare la propagazione"
- "Sto verificando se il backup incrementale di ieri e utilizzabile o se e stato cifrato anche quello"

---

### RUOLO: Medico di Turno

**Chi sei:**
Dott.ssa Sara Conti, 38 anni, medico del pronto soccorso. Hai 15 pazienti in attesa, tra cui un anziano con sospetto infarto e un bambino con febbre alta e convulsioni.

**Il tuo problema immediato:**
- Non puoi accedere alle cartelle cliniche elettroniche
- Non sai se i pazienti hanno allergie ai farmaci
- Non puoi verificare le terapie in corso
- Il sistema di prenotazione degli esami e bloccato
- Le macchine di diagnostica (TAC, radiografia) connesse alla rete sono offline

**Le tue priorita:**
1. Salvare le vite dei pazienti in pronto soccorso
2. Gestire le emergenze senza supporto informatico
3. Decidere se procedere con gli interventi programmati

**Frasi suggerite:**
- "Ho un paziente con sospetto infarto e non posso vedere la sua storia clinica! Ha allergie? Prende anticoagulanti?"
- "I pazienti non possono aspettare 48 ore! Ho bisogno di una soluzione ADESSO"
- "Possiamo tornare alle cartelle cartacee? Qualcuno ha copie stampate?"
- "Devo annullare gli interventi di oggi? E una decisione che puo costare vite"
- "Chiamate i medici di base dei pazienti per avere le loro anamnesi per telefono"

---

### RUOLO: Giornalista

**Chi sei:**
Alice Ferri, 30 anni, giornalista del quotidiano locale. Hai ricevuto una segnalazione anonima (probabilmente un dipendente) che l'ospedale e sotto attacco informatico. Sei arrivata al pronto soccorso e vedi confusione.

**I tuoi obiettivi:**
1. Capire cosa sta succedendo
2. Verificare se i dati dei pazienti sono a rischio
3. Scrivere un articolo informativo (non sensazionalistico)
4. Mettere pressione sulla direzione per la trasparenza

**Le domande che fai:**
- "E' vero che l'ospedale e stato attaccato da hacker?"
- "I dati personali dei pazienti sono stati rubati?"
- "Da quanto tempo i sistemi sono bloccati? Quando saranno ripristinati?"
- "Avete pagato un riscatto? Quanto?"
- "Come e potuto succedere? Quali misure di sicurezza erano in atto?"
- "I pazienti sono al sicuro? Ci sono stati ritardi nelle cure?"

**Frasi suggerite:**
- "Il pubblico ha diritto di sapere se i propri dati sanitari sono al sicuro"
- "Risulta che l'ospedale non avesse aggiornato i sistemi. Puo commentare?"
- "Quanti pazienti sono stati dirottati verso altri ospedali?"
- "Avete notificato il Garante della Privacy come previsto dal GDPR?"

---

### RUOLO: Consulente di Sicurezza

**Chi sei:**
Dott. Andrea Marchi, 45 anni, consulente senior di cybersecurity presso CyberDefense Italia. Sei stato chiamato d'urgenza dalla direzione dell'ospedale. Arrivi 2 ore dopo la scoperta dell'attacco.

**La tua esperienza:**
Hai gestito oltre 50 incidenti ransomware negli ultimi 5 anni. Conosci WannaCry nel dettaglio. Sai che il tasso di recupero dati pagando il riscatto e solo del 4%.

**Il tuo piano d'azione (presentalo punto per punto):**
1. **Contenimento:** Isolare i segmenti di rete per fermare la propagazione
2. **Identificazione:** Confermare il tipo di ransomware e il vettore di ingresso
3. **Preservazione:** Fare una copia forense dei dischi per le indagini
4. **Ripristino:** Valutare i backup e pianificare il recovery
5. **Comunicazione:** Notificare Garante Privacy entro 72 ore (obbligo GDPR)
6. **Post-incidente:** Analisi delle cause e piano di remediation

**Frasi suggerite:**
- "Prima cosa: isoliamo la rete. Staccate i cavi di rete da tutti i PC non ancora infetti"
- "NON pagate il riscatto. Solo il 4% di chi paga recupera tutti i dati"
- "Questo ransomware sfrutta una vulnerabilita nota. La domanda e: perche i sistemi non erano aggiornati?"
- "Dobbiamo notificare il Garante Privacy entro 72 ore. E un obbligo di legge"
- "La buona notizia: WannaCry e ben conosciuto. Se i backup sono intatti, possiamo ripristinare"
- "La cattiva notizia: ci vorranno giorni. Nel frattempo, serve un piano di continuita operativa"

---

## Scenario 3: Il Trojan nel Documento del Collega

### RUOLO: Luca (il dipendente)

**Chi sei:**
Luca Galli, 28 anni, impiegato contabile presso FinanceGroup Srl. Lavori con Excel tutti i giorni: fatture, bilanci, report. Il commercialista ti manda documenti Excel almeno 2-3 volte a settimana.

**La tua routine:**
Apri l'email, scarichi l'allegato, lo apri in Excel. Lo fai decine di volte al giorno. Il commercialista usa spesso le macro nei fogli Excel per calcoli automatici, quindi non ti sorprende la richiesta di abilitarle.

**L'email che ricevi:**
Sembra una risposta a una conversazione reale che hai avuto con il commercialista la settimana scorsa riguardo alle fatture del Q3. Il messaggio dice: "Ciao Luca, ecco il file aggiornato con le correzioni di cui parlavamo. Fammi sapere se torna tutto."

**Cosa pensi:**
- "Ah, finalmente ha corretto quelle fatture"
- L'email e nel thread della conversazione precedente
- Il mittente sembra essere il commercialista (stesso nome, stessa firma)
- Il file si chiama "Fatture_Q3_2024_rev2.xlsx" - sembra logico

**Come comportarti:**
- Apri l'email con naturalezza, senza sospetti
- Quando Excel chiede di abilitare le macro, esita un attimo ma poi procedi
- Se qualcuno ti ferma, reagisci con: "Ma e il commercialista! Lo conosco da anni!"

**Frasi suggerite:**
- "Ah bene, il dottor Ferrara ha finalmente mandato le correzioni"
- "Si, chiede di abilitare le macro, ma i suoi fogli le usano sempre per i calcoli automatici"
- "Ma e nel thread della conversazione che abbiamo avuto la settimana scorsa! Come fa ad essere falso?"
- "Ok, capisco, ma come faccio a sapere che un'email del commercialista non e vera?"

---

### RUOLO: Il Commercialista (vittima inconsapevole)

**Chi sei:**
Dott. Alberto Ferrara, 52 anni, commercialista con studio proprio. Hai 40 clienti tra cui FinanceGroup. Usi molto le email per scambiare documenti. Non sei molto aggiornato sulla sicurezza informatica: il tuo antivirus e scaduto da 3 mesi.

**Cosa ti e successo (non lo sai ancora):**
2 settimane fa hai aperto un allegato Word da un'email che sembrava della tua banca. Hai abilitato le macro. Da quel momento Emotet e nel tuo PC e sta:
- Rubando tutte le tue email
- Leggendo i contatti della tua rubrica
- Rispondendo alle conversazioni recenti con allegati infetti
- Inviando email dal tuo account a tutti i tuoi clienti

**Quando vieni avvisato (fase 3):**
Ricevi una telefonata da Luca o dal responsabile sicurezza che ti informa che dal tuo account stanno partendo email infette.

**La tua reazione:**
- Shock e imbarazzo: "Ma io non ho mandato nessun file!"
- Preoccupazione: "Se hanno le mie email, hanno i dati finanziari di 40 clienti!"
- Senso di colpa: "Forse e colpa di quell'email della banca che ho aperto..."
- Panico: "Devo avvisare tutti i miei clienti immediatamente!"

**Frasi suggerite:**
- "Non ho mandato nessun file a Luca oggi! L'ultima email gliela ho mandata giovedi scorso!"
- "Aspettate... 2 settimane fa ho aperto un allegato che sembrava della banca. Ho abilitato le macro..."
- "Madonna, nelle mie email ci sono i dati fiscali di 40 aziende! Dichiarazioni dei redditi, F24, bilanci..."
- "Cosa devo fare? Devo avvisare tutti i clienti? Devo denunciare?"
- "Il mio antivirus? Ehm... credo che sia scaduto da qualche mese..."

---

### RUOLO: Emotet (il Trojan) - narratore tecnico

**Chi sei:**
Sei il malware Emotet. Racconti in prima persona cosa fai, passo dopo passo. Il tuo tono e freddo, tecnico, quasi orgoglioso della tua efficienza. Sei il "malware piu pericoloso del mondo" secondo Europol.

**La tua storia (raccontala in ordine):**

**Fase 1 - L'infezione del commercialista:**
"Due settimane fa sono arrivato sul PC del dottor Ferrara. Un'email dalla sua banca con un documento Word. Ha abilitato le macro e io mi sono installato silenziosamente. Nessun antivirus mi ha rilevato: il suo era scaduto da 3 mesi."

**Fase 2 - La raccolta dati:**
"Ho iniziato a lavorare in silenzio. Ho rubato:
- 3.200 email dagli ultimi 6 mesi
- 180 contatti della rubrica con email e nomi
- Cookie e password salvate nel browser (home banking, email, social)
- Documenti Excel e PDF con dati fiscali di 40 aziende"

**Fase 3 - Il thread hijacking:**
"Ho analizzato le conversazioni recenti. Ho trovato un thread con Luca di FinanceGroup sulle fatture del Q3. Perfetto. Ho risposto a quel thread, copiando lo stile di scrittura del commercialista, e ho allegato il mio file Excel infetto. Per Luca sembrera un messaggio normale dal suo commercialista."

**Fase 4 - La propagazione:**
"Quando Luca abilitera le macro, mi installero anche sul suo PC. E da li ripartiro: rubare email, contatti, rispondere ad altre conversazioni. In una settimana posso infettare un'intera azienda."

**Fase 5 - Il payload:**
"Ma il mio vero scopo non e solo rubare email. Scarico anche i miei amici: TrickBot per rubare le credenziali bancarie, e Ryuk per il colpo finale - cifrare tutti i dati dell'azienda e chiedere un riscatto."

**Frasi suggerite:**
- "Sono modulare: posso fare qualsiasi cosa. Rubare dati, inviare spam, scaricare ransomware. Sono un coltellino svizzero del cybercrimine."
- "Il thread hijacking e la mia arma migliore. Le persone si fidano delle conversazioni in corso."
- "Il vostro antivirus? Cambio forma ogni poche ore. Quando mi analizzano, sono gia diverso."
- "Sono stato smantellato da Europol nel 2021. Ma sono tornato. Torno sempre."

---

### RUOLO: Responsabile Sicurezza

**Chi sei:**
Dott.ssa Elena Rossi, 36 anni, IT Security Manager di FinanceGroup. Hai certificazioni CISSP e CEH. Hai implementato un sistema EDR (Endpoint Detection and Response) che ha rilevato attivita sospetta sul PC di Luca.

**Cosa ha rilevato il tuo sistema:**
- Connessioni in uscita verso IP sospetti (server di comando e controllo Emotet)
- Esecuzione di PowerShell anomala dopo l'apertura del file Excel
- Tentativi di accesso a share di rete da parte del processo Excel
- Download di file eseguibili da URL esterni

**Il tuo piano di risposta:**

1. **Isolamento immediato:**
   - Disconnetti il PC di Luca dalla rete
   - Blocca gli IP dei server C2 sul firewall

2. **Indagine:**
   - Analizza il file Excel malevolo in sandbox
   - Verifica i log email per capire quante email infette sono state inviate
   - Controlla se altri PC hanno ricevuto file simili

3. **Contenimento:**
   - Avvisa tutti i dipendenti di NON aprire allegati dal commercialista
   - Blocca le macro su tutti i PC aziendali
   - Scansiona tutti gli endpoint

4. **Comunicazione:**
   - Avvisa il commercialista che il suo account e compromesso
   - Informa la direzione sull'incidente
   - Prepara una comunicazione per i clienti se dati sono stati esposti

**Frasi suggerite:**
- "Luca, non toccare piu nulla su quel PC. Lo disconnetto dalla rete immediatamente"
- "Il file che hai aperto conteneva Emotet. E uno dei malware piu sofisticati in circolazione"
- "Dobbiamo chiamare il dottor Ferrara: il suo computer e compromesso e sta inviando email infette a tutti i suoi clienti"
- "Da oggi le macro nei file Office sono disabilitate su tutti i PC aziendali. Nessuna eccezione"
- "Fortunatamente il nostro EDR ha rilevato l'attivita anomala in tempo. Senza, ci sarebbero volute settimane"

---

### RUOLO: Osservatore (Scenario 3)

**Scheda di analisi della catena di attacco:**

| Fase | Cosa e successo | Errore commesso | Come si poteva evitare |
|------|----------------|-----------------|----------------------|
| Infezione commercialista | Il commercialista ha aperto un allegato della "banca" | | |
| Raccolta dati | Emotet ha rubato email e contatti | | |
| Thread hijacking | Emotet ha risposto a una conversazione reale | | |
| Apertura file da Luca | Luca ha aperto il file pensando fosse del commercialista | | |
| Abilitazione macro | Luca ha abilitato le macro nel file Excel | | |
| Rilevamento | L'EDR ha segnalato attivita sospetta | | |

**Domande da valutare:**
- Il commercialista e colpevole o vittima?
- Luca avrebbe potuto accorgersi dell'inganno?
- L'azienda aveva le giuste protezioni?
- Cosa sarebbe successo senza il sistema EDR?

---

## Scenario 4: Il Social Engineering al Telefono

### RUOLO: Segretaria

**Chi sei:**
Anna Colombo, 50 anni, segretaria dell'Istituto Comprensivo "Galileo Galilei" da 20 anni. Sei responsabile, precisa e attenta. Gestisci le comunicazioni dell'istituto: telefonate, email, PEC.

**Il tuo rapporto con la tecnologia:**
Usi il computer per il registro elettronico, le email e il protocollo. Quando hai problemi tecnici chiami il tecnico informatico della scuola, che viene 2 giorni a settimana (martedi e giovedi). Oggi e mercoledi: il tecnico non c'e.

**La telefonata che ricevi:**
Un uomo con voce professionale si presenta come tecnico Microsoft. Parla con sicurezza e usa termini tecnici. Ti dice che il computer della scuola ha un virus che sta inviando i dati degli studenti a server esterni. Deve intervenire urgentemente da remoto.

**Le tue preoccupazioni:**
- I dati degli studenti (minori!) devono essere protetti
- Se e vero che c'e un virus, e una cosa gravissima
- Il tecnico non c'e oggi e il dirigente e in riunione
- Non vuoi prendere una decisione sbagliata

**Come comportarti:**
- Inizia preoccupata ma attenta
- Fai domande per capire meglio
- Esprimi dubbi ma lasciati anche impressionare dall'urgenza
- La decisione finale dipende da quanto l'attaccante e convincente

**Frasi suggerite:**
- "Oh mio Dio, i dati degli studenti? Sono minori! E gravissimo!"
- "Ma scusi, Microsoft chiama direttamente le scuole? Non e mai successo prima..."
- "Il nostro tecnico non c'e oggi. Posso farla richiamare domani?"
- "Mi puo dare un numero dove posso richiamarla? Devo verificare con il dirigente"
- "Come fate a sapere che il nostro computer ha un virus? Avete il nostro indirizzo IP?"

---

### RUOLO: L'Attaccante (finto tecnico Microsoft)

**Chi sei:**
Sei un truffatore professionista che opera call center di vishing dall'estero. Chiami centinaia di numeri al giorno: scuole, studi professionali, piccole aziende. Cerchi persone non tecniche a cui far installare un software di controllo remoto (TeamViewer o AnyDesk), che ti permette di accedere al computer.

**Il tuo script (adattalo in base alle risposte):**

**Apertura:**
"Buongiorno, sono Marco Bianchi del Supporto Tecnico Microsoft, reparto sicurezza. Parlo con la persona responsabile dei computer dell'istituto?"

**L'allarme:**
"Il nostro sistema di monitoraggio ha rilevato che il computer con licenza assegnata al vostro istituto sta inviando dati sensibili a server esterni. Si tratta probabilmente di dati degli studenti. E' una situazione molto grave che richiede un intervento immediato."

**Se chiedono prove:**
"Posso darle il mio numero di matricola Microsoft: MS-2847592. Inoltre posso mostrarle il problema direttamente sul computer. Ha presente il Visualizzatore Eventi di Windows? Apra il menu Start e cerchi 'Visualizzatore eventi'. Vedra molti errori in rosso: quelli sono i segni del virus."

*Nota: il Visualizzatore Eventi mostra SEMPRE errori e warning, su qualsiasi computer. E un trucco psicologico.*

**Se esitano:**
"Capisco la prudenza, e' un segno di buona sicurezza. Ma ogni minuto che passa, i dati dei vostri studenti sono a rischio. Siamo tenuti a intervenire entro 30 minuti dalla segnalazione, altrimenti dovremmo disattivare la licenza Windows per proteggere la rete."

**Se chiedono di richiamare:**
"Purtroppo il nostro sistema non permette chiamate in entrata al reparto sicurezza. Ma posso inviarle una email di conferma dall'indirizzo support@microsoft-security-center.com." *(dominio falso)*

**Il tuo obiettivo reale:**
Far installare AnyDesk o TeamViewer, ottenere il codice di accesso remoto, e poi:
- Installare malware
- Rubare file e credenziali
- Eventualmente bloccare il PC e chiedere un "pagamento per la riparazione"

---

### RUOLO: Dirigente Scolastico

**Chi sei:**
Prof. Roberto De Luca, 55 anni, dirigente dell'istituto. Sei in riunione ma la segretaria ti interrompe perche "Microsoft dice che c'e un virus che ruba i dati degli studenti".

**Cosa sai:**
- Microsoft non chiama mai direttamente le scuole
- La scuola ha un contratto di assistenza con una ditta locale
- Per qualsiasi problema IT c'e il tecnico (che oggi non c'e)
- I dati degli studenti sono sensibili e protetti dal GDPR

**Il tuo ruolo:**
Sei la voce della ragione. Devi calmare la situazione e prendere la decisione giusta.

**Frasi suggerite:**
- "Anna, Microsoft non chiama mai direttamente. E' una truffa molto comune"
- "Non toccare nulla sul computer. Chiama il nostro tecnico e digli di venire domani mattina per un controllo"
- "Se fosse davvero Microsoft, avrebbero contattato la nostra ditta di assistenza, non la segreteria"
- "Prendi nota del numero da cui hanno chiamato e segnaliamolo alla Polizia Postale"

---

### RUOLO: Tecnico IT della Scuola

**Chi sei:**
Simone Parisi, 32 anni, tecnico informatico freelance che segue 5 istituti scolastici. Vai alla "Galileo Galilei" il martedi e il giovedi. La segretaria ti chiama sul cellulare per chiederti un parere.

**Cosa sai con certezza:**
- Microsoft non effettua MAI chiamate dirette ai clienti per segnalare virus
- Il Visualizzatore Eventi di Windows mostra sempre errori/warning: e normale
- Non esiste un "numero di matricola Microsoft" per i tecnici del supporto telefonico
- Il dominio "microsoft-security-center.com" non e un dominio Microsoft ufficiale
- Le truffe telefoniche che imitano Microsoft sono diffusissime

**Frasi suggerite:**
- "Anna, e una truffa al 100%. Microsoft non chiama MAI i clienti per segnalare virus"
- "Il Visualizzatore Eventi mostra sempre errori: e normale, non significa che c'e un virus"
- "Non installare nessun software e non dare nessun codice a questa persona"
- "Chiudi la telefonata immediatamente. Se vuoi stare tranquilla, domani vengo a fare un controllo completo"
- "Segnala il numero alla Polizia Postale su commissariatodips.it"

---

## Scenario 5: La Gara di Sicurezza (Red Team vs Blue Team)

### RUOLO: Red Team Leader

**Chi sei:**
Sei il capo del team di attacco. Il tuo obiettivo e violare la sicurezza dell'azienda fittizia "DataCorp Srl" (50 dipendenti, settore consulenza). Coordini il tuo team per scegliere e pianificare 3 attacchi.

**Come scegliere gli attacchi:**
Analizza le difese probabili del Blue Team e scegli attacchi che le aggirino. Ricorda:
- Gli attacchi basati sull'inganno (phishing, vishing) sono difficili da bloccare solo con la tecnologia
- Gli attacchi tecnici (exploit, malware) possono essere bloccati da difese tecnologiche
- Combinare attacchi sociali e tecnici e la strategia piu efficace

**Per ogni attacco devi specificare:**
1. Tipo di attacco scelto
2. Target specifico (chi colpisci e perche)
3. Come esegui l'attacco (step by step)
4. Cosa ottieni se l'attacco ha successo
5. Quanto e realistico (da 1 a 5)

**Suggerimento strategico:**
Inizia con un attacco di ricognizione (cercare informazioni su LinkedIn, sito web) per personalizzare gli attacchi successivi. L'informazione e potere.

---

### RUOLO: Blue Team Leader

**Chi sei:**
Sei il capo del team di difesa. Devi proteggere "DataCorp Srl" con un budget limitato: puoi scegliere solo 5 misure di sicurezza dalla lista di 10 disponibili.

**Come scegliere le difese:**
Pensa a quali sono le minacce piu probabili per un'azienda di consulenza con 50 dipendenti:
- Email e il vettore di attacco piu comune
- I dipendenti sono il punto debole principale
- I dati dei clienti sono l'asset piu prezioso
- Il budget e limitato: scegli difese ad alto impatto

**Per ogni difesa devi specificare:**
1. Quale misura hai scelto e perche
2. Come la implementi concretamente
3. Quali attacchi blocca
4. Quali attacchi NON blocca (limiti)

**Suggerimento strategico:**
Una buona strategia bilancia difese tecniche (antivirus, firewall) con difese umane (formazione). La tecnologia da sola non basta.

---

### RUOLO: Arbitro

**Chi sei:**
Sei il giudice della gara. Valuti l'efficacia degli attacchi del Red Team e delle difese del Blue Team.

**Criteri di valutazione:**

Per il Red Team:
- **Realismo** (1-3 punti): l'attacco e realistico e ben descritto?
- **Creativita** (0-1 bonus): l'attacco e originale e ben costruito?
- **Efficacia** (1-3 punti): l'attacco avrebbe successo nella realta?

Per il Blue Team:
- **Copertura** (1-3 punti): le difese coprono le minacce principali?
- **Implementazione** (1-3 punti): le difese sono descritte in modo concreto?
- **Risposta** (0-1 bonus): il team sa spiegare perche una difesa blocca un attacco specifico?

**Tabella punteggio:**

| Round | Attacco Red Team | Difesa Blue Team | Esito | Punti Red | Punti Blue |
|-------|-----------------|-----------------|-------|-----------|------------|
| 1 | | | Bloccato / Parziale / Riuscito | | |
| 2 | | | Bloccato / Parziale / Riuscito | | |
| 3 | | | Bloccato / Parziale / Riuscito | | |
| **Totale** | | | | | |

**Come valutare gli esiti:**
- **Bloccato:** la difesa del Blue Team avrebbe fermato l'attacco. Motiva la decisione.
- **Parziale:** l'attacco ha successo parziale ma le difese limitano i danni.
- **Riuscito:** le difese non coprono questo tipo di attacco. L'attaccante ha successo.

---

## Note per il Docente

### Distribuzione dei ruoli
- Assegnare i ruoli in base alla personalita degli studenti: chi e timido puo fare l'osservatore, chi e estroverso puo interpretare l'attaccante
- Per classi numerose, dividere in gruppi paralleli che eseguono lo stesso scenario
- Ruotare i ruoli nelle sessioni successive per dare a tutti l'esperienza di attaccante e difensore

### Stampa delle schede
- Stampare ogni ruolo su un foglio separato
- Non far leggere i ruoli altrui prima della simulazione (specialmente il ruolo dell'attaccante)
- Le schede degli osservatori possono essere condivise

### Tempi
- Prevedere 5 minuti di lettura individuale dei ruoli prima di iniziare
- Usare un timer visibile per le fasi
- Il debriefing e la fase piu importante: non tagliarlo mai

### Varianti
- **Versione semplificata:** solo 2-3 ruoli per scenario
- **Versione avanzata:** aggiungere complicazioni in corso (es: "il ransomware si sta diffondendo anche al laboratorio analisi")
- **Versione competitiva:** valutare le decisioni con un punteggio
