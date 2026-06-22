// ============================================
// TEORIE - Atelier A2: Cele 3 feluri de AȘ VREA
// Claudia Toth · Annettes Deutschkurs
// möchte · würde gern · hätte gern — și când folosești fiecare (aprofundare Konjunktiv II L17)
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>💬 1. „AȘ VREA" în germană: 3 unelte</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Atelier de aprofundare — möchte · würde gern · hätte gern</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Comandă la cafenea ☕</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Visează cu glas tare 💭</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 Despre ce e atelierul</h4>
                <p>În română spui mereu <strong>„aș vrea"</strong> — la cafenea, la magazin, când visezi. În germană ai <strong>trei unelte</strong> pentru asta, fiecare cu rolul ei. Acest atelier le pune cap la cap (aprofundează Konjunktiv II din Lecția 17):</p>
                <div class="example-box">
                    <p class="de">Ich <strong>möchte</strong> einen Kaffee. <span style="color:#5A5147;">(generic, politicos)</span></p>
                    <p class="de">Ich <strong>würde gern</strong> reisen. <span style="color:#5A5147;">(o ACȚIUNE — mi-ar plăcea să fac)</span></p>
                    <p class="de">Ich <strong>hätte gern</strong> einen Tee. <span style="color:#5A5147;">(un OBIECT — la comandă)</span></p>
                </div>
            </div>

            <div class="theory-box info-box">
                <h4>🧭 Pe scurt</h4>
                <ul>
                    <li><strong>möchte</strong> = „aș dori / vreau (politicos)" — merge la obiect SAU acțiune (cea mai versatilă).</li>
                    <li><strong>würde gern</strong> = „aș … cu plăcere" — pentru o <strong>ACȚIUNE</strong> (+ verb la infinitiv).</li>
                    <li><strong>hätte gern</strong> = „aș vrea" — pentru un <strong>OBIECT</strong> (+ substantiv), tipic la comandă.</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Regula de aur a politeții: NU spui „Ich will…" când ceri ceva (sună a poruncă). Spui <strong>„Ich möchte…"</strong> sau <strong>„Ich hätte gern…"</strong>. Sună de o mie de ori mai frumos! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Scrie un mic dialog la cafenea sau la magazin (6-8 propoziții) folosind <strong>möchte</strong>, <strong>würde gern</strong> și <strong>hätte gern</strong>. „Ich hätte gern… / Ich würde gern… / Ich möchte…" <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/yssELskBdcByztJz9" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #5A5147; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: möchte -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🟢 2. möchte = „aș dori / vreau (politicos)"</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-moechte.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Regula</h4>
                <p style="margin:0;"><strong>möchte</strong> este forma politicoasă a lui <strong>wollen</strong> (a vrea). Se comportă ca un verb modal: se conjugă, iar al doilea verb (dacă există) merge la <strong>infinitiv, la final</strong>.</p>
            </div>

            <table class="grammar-table">
                <thead><tr><th>Pronume</th><th>möchten</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td><strong>möchte</strong></td><td>aș dori</td></tr>
                    <tr><td>du</td><td><strong>möchtest</strong></td><td>ai dori</td></tr>
                    <tr><td>er/sie/es</td><td><strong>möchte</strong></td><td>ar dori</td></tr>
                    <tr><td>wir</td><td><strong>möchten</strong></td><td>am dori</td></tr>
                    <tr><td>ihr</td><td><strong>möchtet</strong></td><td>ați dori</td></tr>
                    <tr><td>sie/Sie</td><td><strong>möchten</strong></td><td>ar dori / ați dori</td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>💡 möchte + obiect SAU + acțiune</h4>
                <p style="margin:0;"><strong>+ substantiv:</strong> Ich <strong>möchte</strong> einen Kaffee. <em>(Aș dori o cafea.)</em><br>
                <strong>+ infinitiv (la final):</strong> Ich <strong>möchte</strong> nach Hause <strong>gehen</strong>. <em>(Aș vrea să merg acasă.)</em><br>
                <strong>Întrebare:</strong> Was <strong>möchten</strong> Sie? / <strong>Möchtest</strong> du etwas?</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>möchte e cel mai sigur pariu: îl poți folosi aproape oriunde spui „vreau" politicos — și pentru obiecte, și pentru acțiuni. 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: würde gern -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔵 3. würde gern = „aș … cu plăcere" (+ ACȚIUNE)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-wuerde-gern.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Regula</h4>
                <p style="margin:0;"><strong>würde + gern + Infinitiv</strong> = „mi-ar plăcea să FAC ceva". E pentru <strong>acțiuni</strong> (verbul la infinitiv, la final). „würde" se conjugă, „gern(e)" stă după el:</p>
            </div>

            <table class="grammar-table">
                <thead><tr><th>Pronume</th><th>würde + gern + Infinitiv</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td><strong>würde</strong> gern reisen</td><td>aș călători cu plăcere</td></tr>
                    <tr><td>du</td><td><strong>würdest</strong> gern tanzen</td><td>ai dansa cu plăcere</td></tr>
                    <tr><td>er/sie/es</td><td><strong>würde</strong> gern schlafen</td><td>ar dormi cu plăcere</td></tr>
                    <tr><td>wir</td><td><strong>würden</strong> gern essen</td><td>am mânca cu plăcere</td></tr>
                    <tr><td>ihr</td><td><strong>würdet</strong> gern spielen</td><td>ați juca cu plăcere</td></tr>
                    <tr><td>sie/Sie</td><td><strong>würden</strong> gern kommen</td><td>ar veni cu plăcere</td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>💡 würde gern la lucru</h4>
                <p style="margin:0;">Ich <strong>würde gern</strong> nach Italien <strong>reisen</strong>. <em>(Mi-ar plăcea să călătoresc în Italia.)</em><br>
                Ich <strong>würde gern</strong> ein Eis <strong>essen</strong>. <em>(Aș mânca cu plăcere o înghețată.)</em><br>
                <strong>Würdest</strong> du gern <strong>tanzen</strong>? <em>(Ai vrea să dansezi?)</em></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Vezi un VERB de acțiune (reisen, tanzen, essen)? → <strong>würde gern + verbul la final</strong>. E perechea lui „möchte + infinitiv". 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: hätte gern -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🟣 4. hätte gern = „aș vrea" (+ OBIECT, la comandă)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-haette-gern.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Regula</h4>
                <p style="margin:0;"><strong>hätte + gern + substantiv (Akkusativ)</strong> = „aș vrea (să am/să primesc) ceva". E formula <strong>preferată la comandă</strong> (cafenea, restaurant, magazin):</p>
            </div>

            <table class="grammar-table">
                <thead><tr><th>Pronume</th><th>hätte + gern + Nomen</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td>ich</td><td><strong>hätte</strong> gern einen Tee</td><td>aș vrea un ceai</td></tr>
                    <tr><td>du</td><td><strong>hättest</strong> gern einen Kaffee</td><td>ai vrea o cafea</td></tr>
                    <tr><td>er/sie/es</td><td><strong>hätte</strong> gern ein Eis</td><td>ar vrea o înghețată</td></tr>
                    <tr><td>wir</td><td><strong>hätten</strong> gern die Karte</td><td>am vrea meniul</td></tr>
                    <tr><td>ihr</td><td><strong>hättet</strong> gern Wasser</td><td>ați vrea apă</td></tr>
                    <tr><td>sie/Sie</td><td><strong>hätten</strong> gern die Rechnung</td><td>ar/ați vrea nota</td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>💡 hätte gern la comandă</h4>
                <p style="margin:0;">Ich <strong>hätte gern</strong> einen Tee. <em>(Aș vrea un ceai.)</em><br>
                Wir <strong>hätten gern</strong> die Speisekarte, bitte. <em>(Am vrea meniul, vă rog.)</em><br>
                Was <strong>hätten</strong> Sie <strong>gern</strong>? <em>(Ce ați dori? — întrebarea chelnerului.)</em></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>La cafenea, „Ich hätte gern einen Kaffee" sună perfect de natural — ca un nativ. Urmează un OBIECT, niciodată un verb de acțiune. 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Care când + capcană + recap + dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🗣️ 5. Care când? + capcană + dialog</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🎯 Care când?</h4>
                <table class="grammar-table">
                    <thead><tr><th>Vrei…</th><th>Formula</th><th>Exemplu</th></tr></thead>
                    <tbody>
                        <tr><td>un OBIECT (la comandă)</td><td><strong>hätte gern</strong> / möchte + Nomen</td><td>Ich hätte gern einen Tee.</td></tr>
                        <tr><td>o ACȚIUNE</td><td><strong>würde gern</strong> / möchte + Infinitiv</td><td>Ich würde gern reisen.</td></tr>
                        <tr><td>orice (versatil, politicos)</td><td><strong>möchte</strong></td><td>Ich möchte einen Tee / gehen.</td></tr>
                    </tbody>
                </table>
                <p style="margin:6px 0 0;"><em>möchte + Nomen</em> ≈ <em>hätte gern + Nomen</em> · <em>möchte + Infinitiv</em> ≈ <em>würde gern + Infinitiv</em>.</p>
            </div>

            <div class="theory-box" style="background:#F5F0E8; border-left-color:#D4A574;">
                <h4>⚠️ Capcane</h4>
                <p style="margin:0;">❌ <s>Ich will einen Kaffee.</s> (sec, ca o poruncă) → ✅ Ich <strong>hätte gern</strong> / <strong>möchte</strong> einen Kaffee.<br>
                ❌ <s>Ich hätte gern reisen.</s> (hätte gern NU merge cu un verb de acțiune) → ✅ Ich <strong>würde gern</strong> reisen.<br>
                <strong>gern = gerne</strong> — identice (gerne e doar puțin mai lung). „gern" stă după verbul conjugat.</p>
            </div>

            <div class="theory-box" style="border-left-color:#047857;">
                <h4>📝 Recap rapid</h4>
                <ul>
                    <li><strong>möchte</strong> = vreau politicos (obiect sau acțiune) — cel mai versatil.</li>
                    <li><strong>würde gern</strong> + Infinitiv = mi-ar plăcea să FAC (acțiune).</li>
                    <li><strong>hätte gern</strong> + Nomen = aș vrea să AM/PRIMESC (obiect, la comandă).</li>
                    <li>Niciodată „ich will" la politețe.</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>💬 Dialog: Andreea & Carolina la cafenea</h4>
                <p><strong style="color:#065f46;">Andreea:</strong> Ich <strong>hätte gern</strong> einen Cappuccino. Und du?<br><span class="ro-translation">Aș vrea un cappuccino. Tu?</span></p>
                <p><strong style="color:#065f46;">Carolina:</strong> Ich <strong>möchte</strong> einen Tee. Und ich <strong>würde gern</strong> ein Stück Kuchen <strong>essen</strong>.<br><span class="ro-translation">Eu aș dori un ceai. Și aș mânca cu plăcere o bucată de tort.</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Gute Idee! Ich <strong>würde</strong> auch gern Kuchen <strong>probieren</strong>. <strong>Hättest</strong> du gern Schokolade oder Apfel?<br><span class="ro-translation">Bună idee! Și eu aș gusta cu plăcere tort. Ai vrea de ciocolată sau de mere?</span></p>
                <p><strong style="color:#065f46;">Carolina:</strong> Schokolade, bitte. Später <strong>möchte</strong> ich noch shoppen <strong>gehen</strong>.<br><span class="ro-translation">De ciocolată, te rog. Mai târziu aș vrea să merg și la cumpărături.</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Perfekt. Entschuldigung, wir <strong>hätten gern</strong> die Karte! 😄<br><span class="ro-translation">Perfect. Scuzați, am vrea meniul!</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>hätte gern + obiect · würde gern + acțiune · möchte la ambele. Cu astea trei, comanzi și visezi politicos ca un nativ! Viel Erfolg! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
