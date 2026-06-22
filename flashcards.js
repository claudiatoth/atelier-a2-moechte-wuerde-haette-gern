// ============================================
// FLASHCARDS - Atelier A2: Cele 3 feluri de AȘ VREA
// Claudia Toth · 32 carduri: concept + möchte + würde gern + hätte gern + comparație + vocab
// REGULĂ: NICIODATĂ ghilimele interne ASCII — emfază cu CAPS; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Concept (6) ===
    { de: "möchte", ro: "aș dori / vreau (politicos)", audio: "audio/letters/a-moechte.wav" },
    { de: "würde gern", ro: "aș … cu plăcere (+ acțiune)", audio: "audio/letters/a-wuerdegern.wav" },
    { de: "hätte gern", ro: "aș vrea (+ obiect, la comandă)", audio: "audio/letters/a-haettegern.wav" },
    { de: "möchte + Nomen / Infinitiv", ro: "merge la obiect SAU acțiune (versatil)", audio: "audio/letters/a-moechte-flex.wav" },
    { de: "würde gern + Infinitiv", ro: "pentru ACȚIUNI (verb la final)", audio: "audio/letters/a-wuerde-inf.wav" },
    { de: "hätte gern + Nomen", ro: "pentru OBIECTE (substantiv)", audio: "audio/letters/a-haette-nom.wav" },

    // === möchte (6) ===
    { de: "Ich möchte einen Kaffee.", ro: "Aș dori o cafea.", audio: "audio/letters/m-kaffee.wav" },
    { de: "Möchtest du etwas?", ro: "Ai dori ceva?", audio: "audio/letters/m-etwas.wav" },
    { de: "Ich möchte nach Hause gehen.", ro: "Aș vrea să merg acasă.", audio: "audio/letters/m-hause.wav" },
    { de: "Wir möchten bezahlen.", ro: "Am vrea să plătim.", audio: "audio/letters/m-bezahlen.wav" },
    { de: "Was möchten Sie?", ro: "Ce doriți? (politicos)", audio: "audio/letters/m-was.wav" },
    { de: "Ich möchte nicht.", ro: "Nu aș dori.", audio: "audio/letters/m-nicht.wav" },

    // === würde gern (6) ===
    { de: "Ich würde gern reisen.", ro: "Mi-ar plăcea să călătoresc.", audio: "audio/letters/wg-reisen.wav" },
    { de: "Ich würde gern ein Eis essen.", ro: "Aș mânca cu plăcere o înghețată.", audio: "audio/letters/wg-eis.wav" },
    { de: "Würdest du gern tanzen?", ro: "Ai vrea să dansezi?", audio: "audio/letters/wg-tanzen.wav" },
    { de: "Wir würden gern einen Film sehen.", ro: "Am vedea cu plăcere un film.", audio: "audio/letters/wg-film.wav" },
    { de: "Ich würde gern Deutsch lernen.", ro: "Mi-ar plăcea să învăț germană.", audio: "audio/letters/wg-deutsch.wav" },
    { de: "Was würdest du gern machen?", ro: "Ce ai vrea să faci?", audio: "audio/letters/wg-was.wav" },

    // === hätte gern (6) ===
    { de: "Ich hätte gern einen Tee.", ro: "Aș vrea un ceai.", audio: "audio/letters/hg-tee.wav" },
    { de: "Ich hätte gern die Rechnung.", ro: "Aș vrea nota.", audio: "audio/letters/hg-rechnung.wav" },
    { de: "Hättest du gern einen Kaffee?", ro: "Ai vrea o cafea?", audio: "audio/letters/hg-kaffee.wav" },
    { de: "Wir hätten gern die Speisekarte.", ro: "Am vrea meniul.", audio: "audio/letters/hg-karte.wav" },
    { de: "Ich hätte gern ein Kilo Äpfel.", ro: "Aș vrea un kil de mere.", audio: "audio/letters/hg-aepfel.wav" },
    { de: "Was hätten Sie gern?", ro: "Ce ați dori? (la comandă)", audio: "audio/letters/hg-was.wav" },

    // === Comparație & capcană (4) ===
    { de: "Ich will (zu direkt)", ro: "vreau (sec) — la politețe folosește möchte", audio: "audio/letters/c-will.wav" },
    { de: "gern = gerne", ro: "identice (gerne e doar mai lung)", audio: "audio/letters/c-gern.wav" },
    { de: "möchte ähnlich wie hätte gern", ro: "la comandă (obiect) — aproape la fel", audio: "audio/letters/c-moechte-nom.wav" },
    { de: "würde gern ähnlich wie möchte", ro: "la acțiuni (verb) — aproape la fel", audio: "audio/letters/c-wuerde-inf.wav" },

    // === Vocabular cafenea (4) ===
    { de: "die Speisekarte", ro: "meniul", audio: "audio/letters/v-speisekarte.wav" },
    { de: "die Rechnung", ro: "nota de plată", audio: "audio/letters/v-rechnung.wav" },
    { de: "bestellen", ro: "a comanda", audio: "audio/letters/v-bestellen.wav" },
    { de: "bezahlen", ro: "a plăti", audio: "audio/letters/v-bezahlen.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
