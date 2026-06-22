// ============================================
// EXERCIȚII - Atelier A2: Cele 3 feluri de AȘ VREA
// Claudia Toth · möchte · würde gern · hätte gern · 5 exerciții
// forme · würde/hätte gern · möchte conjugat · politicos · traducere
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Forma conjugată (möchte / würde / hätte) (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: 'ich + möchten → ____ (aș dori)', hint: 'möchten, ich', correct: 'möchte', accept: ['möchte', 'moechte'] },
    { id: 'b', prompt: 'du + möchten → ____ (ai dori)', hint: 'möchten, du', correct: 'möchtest', accept: ['möchtest', 'moechtest'] },
    { id: 'c', prompt: 'wir + möchten → ____ (am dori)', hint: 'möchten, wir', correct: 'möchten', accept: ['möchten', 'moechten'] },
    { id: 'd', prompt: 'ich + würde → ____ (aș…)', hint: 'würde, ich', correct: 'würde', accept: ['würde', 'wuerde'] },
    { id: 'e', prompt: 'du + würde → ____ (ai…)', hint: 'würde, du', correct: 'würdest', accept: ['würdest', 'wuerdest'] },
    { id: 'f', prompt: 'ihr + würde → ____ (ați…)', hint: 'würde, ihr', correct: 'würdet', accept: ['würdet', 'wuerdet'] },
    { id: 'g', prompt: 'ich + hätte → ____ (aș avea)', hint: 'hätte, ich', correct: 'hätte', accept: ['hätte', 'haette'] },
    { id: 'h', prompt: 'du + hätte → ____ (ai avea)', hint: 'hätte, du', correct: 'hättest', accept: ['hättest', 'haettest'] },
    { id: 'i', prompt: 'er + möchten → ____ (ar dori)', hint: 'möchten, er', correct: 'möchte', accept: ['möchte', 'moechte'] },
    { id: 'j', prompt: 'sie (pl) + hätte → ____ (ar vrea)', hint: 'hätte, sie', correct: 'hätten', accept: ['hätten', 'haetten'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Scrie forma conjugată corectă.</strong><br>
        möchte/möchtest/möchte/möchten/möchtet/möchten · würde/würdest/würde/würden/würdet/würden · hätte/hättest/hätte/hätten/hättet/hätten.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="forma conjugată...">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: würde gern (acțiune) sau hätte gern (obiect)? (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', text: 'Ich ____ einen Tee. (urmează un OBIECT)', a: 'hätte gern', b: 'würde gern', correct: 'hätte gern', expl: 'Obiect (einen Tee) → hätte gern.' },
    { id: 'b', text: 'Ich ____ schwimmen gehen. (urmează o ACȚIUNE)', a: 'würde gern', b: 'hätte gern', correct: 'würde gern', expl: 'Acțiune (schwimmen gehen) → würde gern.' },
    { id: 'c', text: 'Ich ____ ein neues Handy. (obiect)', a: 'hätte gern', b: 'würde gern', correct: 'hätte gern', expl: 'Obiect (ein Handy) → hätte gern.' },
    { id: 'd', text: 'Ich ____ nach Berlin fahren. (acțiune)', a: 'würde gern', b: 'hätte gern', correct: 'würde gern', expl: 'Acțiune (fahren) → würde gern.' },
    { id: 'e', text: 'Wir ____ ein Eis. (obiect)', a: 'hätten gern', b: 'würden gern', correct: 'hätten gern', expl: 'Obiect (ein Eis) → hätten gern.' },
    { id: 'f', text: 'Wir ____ einen Film schauen. (acțiune)', a: 'würden gern', b: 'hätten gern', correct: 'würden gern', expl: 'Acțiune (schauen) → würden gern.' },
    { id: 'g', text: '____ du gern einen Kaffee? (obiect)', a: 'Hättest', b: 'Würdest', correct: 'Hättest', expl: 'Obiect (einen Kaffee) → Hättest du gern.' },
    { id: 'h', text: '____ du gern tanzen? (acțiune)', a: 'Würdest', b: 'Hättest', correct: 'Würdest', expl: 'Acțiune (tanzen) → Würdest du gern.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>⚖️ würde gern sau hätte gern? Urmează un OBIECT sau o ACȚIUNE?</strong><br>
        Substantiv (obiect) → hätte gern · verb la infinitiv (acțiune) → würde gern.
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="display:block; margin-bottom:5px;"><input type="radio" name="ex2-${it.id}" value="${it.a}"> ${it.a}</label>
                <label style="display:block;"><input type="radio" name="ex2-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: möchte conjugat (forma politicoasă a lui wollen) (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Ich ____ einen Kaffee.', hint: 'möchten, ich', correct: 'möchte', accept: ['möchte', 'moechte'] },
    { id: 'b', prompt: '____ du auch etwas?', hint: 'möchten, du', correct: 'Möchtest', accept: ['möchtest', 'moechtest'] },
    { id: 'c', prompt: 'Wir ____ bezahlen.', hint: 'möchten, wir', correct: 'möchten', accept: ['möchten', 'moechten'] },
    { id: 'd', prompt: '____ ihr ins Kino gehen?', hint: 'möchten, ihr', correct: 'Möchtet', accept: ['möchtet', 'moechtet'] },
    { id: 'e', prompt: 'Er ____ ein Eis.', hint: 'möchten, er', correct: 'möchte', accept: ['möchte', 'moechte'] },
    { id: 'f', prompt: '____ Sie noch etwas? (Sie-formal)', hint: 'möchten, Sie', correct: 'Möchten', accept: ['möchten', 'moechten'] },
    { id: 'g', prompt: 'Ich ____ nach Hause gehen.', hint: 'möchten, ich', correct: 'möchte', accept: ['möchte', 'moechte'] },
    { id: 'h', prompt: 'Die Kinder ____ spielen.', hint: 'möchten, sie (pl)', correct: 'möchten', accept: ['möchten', 'moechten'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🟢 Completează cu forma corectă a lui „möchte" (forma politicoasă a lui wollen).</strong><br>
        ich möchte · du möchtest · er/sie/es möchte · wir möchten · ihr möchtet · sie/Sie möchten.
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="möcht...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Cea mai politicoasă / corectă formulare (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', text: 'La cafenea, ceri o cafea (cel mai elegant):', a: 'Ich hätte gern einen Kaffee.', b: 'Ich will einen Kaffee.', correct: 'Ich hätte gern einen Kaffee.', expl: 'hätte gern + obiect = politicos. „Ich will" sună sec.' },
    { id: 'b', text: 'Vrei să mergi acasă:', a: 'Ich möchte nach Hause gehen.', b: 'Ich hätte gern nach Hause gehen.', correct: 'Ich möchte nach Hause gehen.', expl: 'Acțiune → möchte/würde gern + Infinitiv; NU hätte gern + verb.' },
    { id: 'c', text: 'Mi-ar plăcea să călătoresc:', a: 'Ich würde gern reisen.', b: 'Ich hätte gern reisen.', correct: 'Ich würde gern reisen.', expl: 'Acțiune (reisen) → würde gern.' },
    { id: 'd', text: 'La bar, ceri o bere:', a: 'Ich hätte gern ein Bier.', b: 'Ich will ein Bier.', correct: 'Ich hätte gern ein Bier.', expl: 'Obiect, politicos → hätte gern.' },
    { id: 'e', text: 'Care sună a poruncă (nepoliticos)?', a: 'Ich will jetzt gehen!', b: 'Ich möchte gehen.', correct: 'Ich will jetzt gehen!', expl: '„Ich will" = direct, sec; „möchte" = politicos.' },
    { id: 'f', text: 'Mi-ar plăcea să dansez:', a: 'Ich würde gern tanzen.', b: 'Ich hätte gern tanzen.', correct: 'Ich würde gern tanzen.', expl: 'Acțiune (tanzen) → würde gern.' },
    { id: 'g', text: 'gern sau gerne?', a: 'Ambele corecte (sinonime)', b: 'Doar gern e corect', correct: 'Ambele corecte (sinonime)', expl: 'gern = gerne; gerne e doar puțin mai lung.' },
    { id: 'h', text: '„Ich möchte einen Tee" și „Ich hätte gern einen Tee":', a: 'Aproape la fel (ambele politicoase)', b: 'Complet diferite', correct: 'Aproape la fel (ambele politicoase)', expl: 'La comandă, möchte + Nomen ≈ hätte gern + Nomen.' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎯 Alege varianta politicoasă & corectă.</strong><br>
        Obiect → hätte gern / möchte · Acțiune → würde gern / möchte · niciodată „ich will" la politețe.
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="display:block; margin-bottom:5px;"><input type="radio" name="ex4-${it.id}" value="${it.a.replace(/"/g, '&quot;')}"> ${it.a}</label>
                <label style="display:block;"><input type="radio" name="ex4-${it.id}" value="${it.b.replace(/"/g, '&quot;')}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex4-${it.id}"]:checked`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Aș vrea o cafea. (la comandă)', correct: 'Ich hätte gern einen Kaffee.', accept: ['ich hätte gern einen kaffee', 'ich haette gern einen kaffee', 'ich möchte einen kaffee', 'ich moechte einen kaffee'] },
    { id: 'b', ro: 'Mi-ar plăcea să călătoresc în Italia.', correct: 'Ich würde gern nach Italien reisen.', accept: ['ich würde gern nach italien reisen', 'ich wuerde gern nach italien reisen'] },
    { id: 'c', ro: 'Aș vrea să merg acasă. (politicos)', correct: 'Ich möchte nach Hause gehen.', accept: ['ich möchte nach hause gehen', 'ich moechte nach hause gehen', 'ich würde gern nach hause gehen', 'ich wuerde gern nach hause gehen'] },
    { id: 'd', ro: 'Aș vrea un ceai, te rog.', correct: 'Ich hätte gern einen Tee, bitte.', accept: ['ich hätte gern einen tee bitte', 'ich haette gern einen tee bitte', 'ich möchte einen tee bitte', 'ich moechte einen tee bitte'] },
    { id: 'e', ro: 'Ai vrea ceva? (du, la comandă)', correct: 'Möchtest du etwas?', accept: ['möchtest du etwas', 'moechtest du etwas', 'hättest du gern etwas', 'haettest du gern etwas'] },
    { id: 'f', ro: 'Mi-ar plăcea să văd un film.', correct: 'Ich würde gern einen Film sehen.', accept: ['ich würde gern einen film sehen', 'ich wuerde gern einen film sehen', 'ich möchte einen film sehen', 'ich moechte einen film sehen'] },
    { id: 'g', ro: 'Am vrea să plătim.', correct: 'Wir möchten bezahlen.', accept: ['wir möchten bezahlen', 'wir moechten bezahlen', 'wir würden gern bezahlen', 'wir wuerden gern bezahlen'] },
    { id: 'h', ro: 'Aș vrea nota, vă rog.', correct: 'Ich hätte gern die Rechnung, bitte.', accept: ['ich hätte gern die rechnung bitte', 'ich haette gern die rechnung bitte', 'ich möchte die rechnung bitte', 'ich moechte die rechnung bitte'] },
    { id: 'i', ro: 'Ce ai dori? (du)', correct: 'Was möchtest du?', accept: ['was möchtest du', 'was moechtest du', 'was hättest du gern', 'was haettest du gern'] },
    { id: 'j', ro: 'Mi-ar plăcea să învăț germană.', correct: 'Ich würde gern Deutsch lernen.', accept: ['ich würde gern deutsch lernen', 'ich wuerde gern deutsch lernen', 'ich möchte deutsch lernen', 'ich moechte deutsch lernen'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană.</strong> obiect → hätte gern / möchte · acțiune → würde gern / möchte + infinitiv.
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
