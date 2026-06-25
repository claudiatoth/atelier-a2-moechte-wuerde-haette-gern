// ============================================
// TEST FINAL - Atelier A2: Cele 3 feluri de AȘ VREA
// Claudia Toth · 15 întrebări (Formele + Care când? + Traducere)
// ============================================

const finalTestData = [
    // 🟢 Formele (5)
    { type: 'multiple', category: '🟢 Formele', question: '„möchte" este forma politicoasă a verbului:', options: ['wollen', 'mögen', 'müssen', 'machen'], correct: 'wollen', explanation: '„möchte" = wollen politicos (formal vine din mögen — Konjunktiv II).' },
    { type: 'luckentext', category: '🟢 Formele', question: 'möchten, du:', sentence: '<strong>______</strong> du auch etwas?', translation: 'möchten → ?, du', accept: ['möchtest', 'moechtest'], correct: 'Möchtest', explanation: 'du möchtest.' },
    { type: 'luckentext', category: '🟢 Formele', question: 'würde, ich (+ Infinitiv):', sentence: 'Ich <strong>______</strong> gern reisen.', translation: 'würde → ?, ich', accept: ['würde', 'wuerde'], correct: 'würde', explanation: 'ich würde gern + Infinitiv.' },
    { type: 'luckentext', category: '🟢 Formele', question: 'hätte, ich (+ Nomen):', sentence: 'Ich <strong>______</strong> gern einen Tee.', translation: 'hätte → ?, ich', accept: ['hätte', 'haette'], correct: 'hätte', explanation: 'ich hätte gern + Nomen.' },
    { type: 'multiple', category: '🟢 Formele', question: 'Care formă NU se folosește la politețe (sună sec)?', options: ['Ich will…', 'Ich möchte…', 'Ich hätte gern…', 'Ich würde gern…'], correct: 'Ich will…', explanation: '„Ich will" e direct; foloseşte möchte / hätte gern / würde gern.' },

    // 🔵 Care când? (5)
    { type: 'multiple', category: '🔵 Care când?', question: 'Pentru un OBIECT (la comandă) folosești:', options: ['hätte gern (+ Nomen)', 'würde gern (+ Infinitiv)', 'will (+ Nomen)', 'werde (+ Infinitiv)'], correct: 'hätte gern (+ Nomen)', explanation: 'Obiect → hätte gern + substantiv.' },
    { type: 'multiple', category: '🔵 Care când?', question: 'Pentru o ACȚIUNE (un verb) folosești:', options: ['würde gern (+ Infinitiv)', 'hätte gern (+ Infinitiv)', 'hätte gern (+ Nomen)', 'habe gern'], correct: 'würde gern (+ Infinitiv)', explanation: 'Acțiune → würde gern + verbul la infinitiv.' },
    { type: 'multiple', category: '🔵 Care când?', question: 'Care formă merge la AMBELE (obiect și acțiune)?', options: ['möchte', 'hätte gern', 'würde gern', 'wäre gern'], correct: 'möchte', explanation: 'möchte e cea mai versatilă: + Nomen sau + Infinitiv.' },
    { type: 'multiple', category: '🔵 Care când?', question: 'Care propoziție e GREȘITĂ?', options: ['Ich hätte gern reisen.', 'Ich hätte gern einen Tee.', 'Ich würde gern reisen.', 'Ich möchte reisen.'], correct: 'Ich hätte gern reisen.', explanation: 'hätte gern NU merge cu un verb de acțiune → würde gern reisen.' },
    { type: 'multiple', category: '🔵 Care când?', question: '„gern" și „gerne" sunt:', options: ['identice (sinonime)', 'forme diferite ca sens', 'una corectă, una greșită', 'la timpuri diferite'], correct: 'identice (sinonime)', explanation: 'gern = gerne; gerne e doar puțin mai lung.' },

    // 🗣️ Traducere (5)
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți (la comandă):', ro: 'Aș vrea o cafea.', accept: ['ich hätte gern einen kaffee', 'ich haette gern einen kaffee', 'ich möchte einen kaffee', 'ich moechte einen kaffee'], correct: 'Ich hätte gern einen Kaffee.', explanation: 'Obiect → hätte gern / möchte + Nomen.' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți (acțiune):', ro: 'Mi-ar plăcea să călătoresc.', accept: ['ich würde gern reisen', 'ich wuerde gern reisen', 'ich möchte reisen', 'ich moechte reisen'], correct: 'Ich würde gern reisen.', explanation: 'Acțiune → würde gern + Infinitiv.' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți (politicos):', ro: 'Aș vrea să merg acasă.', accept: ['ich möchte nach hause gehen', 'ich moechte nach hause gehen', 'ich würde gern nach hause gehen', 'ich wuerde gern nach hause gehen'], correct: 'Ich möchte nach Hause gehen.', explanation: 'Acțiune → möchte / würde gern + Infinitiv.' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți:', ro: 'Aș vrea nota, vă rog.', accept: ['ich hätte gern die rechnung bitte', 'ich haette gern die rechnung bitte', 'ich möchte die rechnung bitte', 'ich moechte die rechnung bitte'], correct: 'Ich hätte gern die Rechnung, bitte.', explanation: 'Obiect → hätte gern + Nomen.' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți (du):', ro: 'Ce ai dori?', accept: ['was möchtest du', 'was moechtest du', 'was hättest du gern', 'was haettest du gern'], correct: 'Was möchtest du?', explanation: 'du möchtest / hättest du gern.' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function normalizeTestAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre möchte / würde gern / hätte gern.</p>
            <ul class="test-info-list">
                <li>🟢 Formele (5) · 🔵 Care când? (5) · 🗣️ Traducere (5)</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userNorm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === userNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #5A5147;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function () { buildFinalTest(); });
