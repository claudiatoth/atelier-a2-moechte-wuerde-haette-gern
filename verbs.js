// ============================================
// VERB-KONJUGATION - Atelier A2: Cele 3 feluri de AȘ VREA
// 6 verbe: wollen · mögen · haben · werden · bestellen · bezahlen
// Familia „a vrea" (wollen→möchte, mögen→möchte) + sursele hätte/würde + 2 verbe de cafenea
// ============================================

const verbsData = [
    {
        inf: 'wollen', ro: 'a vrea', typ: 'modal', aux: 'haben', part: 'gewollt',
        praes: [
            ['ich','will','vreau'],['du','willst','vrei'],['er/sie/es','will','vrea'],
            ['wir','wollen','vrem'],['ihr','wollt','vreți'],['sie/Sie','wollen','vor']
        ],
        praet: [
            ['ich','wollte','voiam'],['du','wolltest','voiai'],['er/sie/es','wollte','voia'],
            ['wir','wollten','voiam'],['ihr','wolltet','voiați'],['sie/Sie','wollten','voiau']
        ],
        perf: [
            ['ich','habe gewollt','am vrut'],['du','hast gewollt','ai vrut'],['er/sie/es','hat gewollt','a vrut'],
            ['wir','haben gewollt','am vrut'],['ihr','habt gewollt','ați vrut'],['sie/Sie','haben gewollt','au vrut']
        ],
        note: '🚨 MODAL. „Ich will" e direct/sec. Forma politicoasă = „Ich möchte" (= „aș dori"). La politețe folosește möchte, nu will!'
    },
    {
        inf: 'mögen', ro: 'a plăcea', typ: 'modal', aux: 'haben', part: 'gemocht',
        praes: [
            ['ich','mag','îmi place'],['du','magst','îți place'],['er/sie/es','mag','îi place'],
            ['wir','mögen','ne place'],['ihr','mögt','vă place'],['sie/Sie','mögen','le place']
        ],
        praet: [
            ['ich','mochte','îmi plăcea'],['du','mochtest','îți plăcea'],['er/sie/es','mochte','îi plăcea'],
            ['wir','mochten','ne plăcea'],['ihr','mochtet','vă plăcea'],['sie/Sie','mochten','le plăcea']
        ],
        perf: [
            ['ich','habe gemocht','mi-a plăcut'],['du','hast gemocht','ți-a plăcut'],['er/sie/es','hat gemocht','i-a plăcut'],
            ['wir','haben gemocht','ne-a plăcut'],['ihr','habt gemocht','v-a plăcut'],['sie/Sie','haben gemocht','le-a plăcut']
        ],
        note: '🚨 MODAL. Konjunktiv II = möchte/möchtest/möchte/möchten/möchtet/möchten (= „aș dori"). De aici vine „Ich möchte…"!'
    },
    {
        inf: 'haben', ro: 'a avea', typ: 'tare (neregulat)', aux: 'haben', part: 'gehabt',
        praes: [
            ['ich','habe','am'],['du','hast','ai'],['er/sie/es','hat','are'],
            ['wir','haben','avem'],['ihr','habt','aveți'],['sie/Sie','haben','au']
        ],
        praet: [
            ['ich','hatte','aveam'],['du','hattest','aveai'],['er/sie/es','hatte','avea'],
            ['wir','hatten','aveam'],['ihr','hattet','aveați'],['sie/Sie','hatten','aveau']
        ],
        perf: [
            ['ich','habe gehabt','am avut'],['du','hast gehabt','ai avut'],['er/sie/es','hat gehabt','a avut'],
            ['wir','haben gehabt','am avut'],['ihr','habt gehabt','ați avut'],['sie/Sie','haben gehabt','au avut']
        ],
        note: '🚨 NEREGULAT. Konjunktiv II = hätte → „Ich hätte gern einen Kaffee" (hätte gern + OBIECT, la comandă).'
    },
    {
        inf: 'werden', ro: 'a deveni', typ: 'tare (neregulat)', aux: 'sein', part: 'geworden',
        praes: [
            ['ich','werde','devin'],['du','wirst','devii'],['er/sie/es','wird','devine'],
            ['wir','werden','devenim'],['ihr','werdet','deveniți'],['sie/Sie','werden','devin']
        ],
        praet: [
            ['ich','wurde','deveneam'],['du','wurdest','deveneai'],['er/sie/es','wurde','devenea'],
            ['wir','wurden','deveneam'],['ihr','wurdet','deveneați'],['sie/Sie','wurden','deveneau']
        ],
        perf: [
            ['ich','bin geworden','am devenit'],['du','bist geworden','ai devenit'],['er/sie/es','ist geworden','a devenit'],
            ['wir','sind geworden','am devenit'],['ihr','seid geworden','ați devenit'],['sie/Sie','sind geworden','au devenit']
        ],
        note: '🚨 NEREGULAT. Konjunktiv II = würde → „Ich würde gern reisen" (würde gern + ACȚIUNE, verbul la infinitiv).'
    },
    {
        inf: 'bestellen', ro: 'a comanda', typ: 'regulat', aux: 'haben', part: 'bestellt',
        praes: [
            ['ich','bestelle','comand'],['du','bestellst','comanzi'],['er/sie/es','bestellt','comandă'],
            ['wir','bestellen','comandăm'],['ihr','bestellt','comandați'],['sie/Sie','bestellen','comandă']
        ],
        praet: [
            ['ich','bestellte','comandam'],['du','bestelltest','comandai'],['er/sie/es','bestellte','comanda'],
            ['wir','bestellten','comandam'],['ihr','bestelltet','comandați'],['sie/Sie','bestellten','comandau']
        ],
        perf: [
            ['ich','habe bestellt','am comandat'],['du','hast bestellt','ai comandat'],['er/sie/es','hat bestellt','a comandat'],
            ['wir','haben bestellt','am comandat'],['ihr','habt bestellt','ați comandat'],['sie/Sie','haben bestellt','au comandat']
        ],
        note: '✅ Regulat (prefix be- → fără ge- la Perfekt: bestellt). „Ich möchte einen Kaffee bestellen."'
    },
    {
        inf: 'bezahlen', ro: 'a plăti', typ: 'regulat', aux: 'haben', part: 'bezahlt',
        praes: [
            ['ich','bezahle','plătesc'],['du','bezahlst','plătești'],['er/sie/es','bezahlt','plătește'],
            ['wir','bezahlen','plătim'],['ihr','bezahlt','plătiți'],['sie/Sie','bezahlen','plătesc']
        ],
        praet: [
            ['ich','bezahlte','plăteam'],['du','bezahltest','plăteai'],['er/sie/es','bezahlte','plătea'],
            ['wir','bezahlten','plăteam'],['ihr','bezahltet','plăteați'],['sie/Sie','bezahlten','plăteau']
        ],
        perf: [
            ['ich','habe bezahlt','am plătit'],['du','hast bezahlt','ai plătit'],['er/sie/es','hat bezahlt','a plătit'],
            ['wir','haben bezahlt','am plătit'],['ihr','habt bezahlt','ați plătit'],['sie/Sie','haben bezahlt','au plătit']
        ],
        note: '✅ Regulat (prefix be- → fără ge-: bezahlt). „Wir möchten bezahlen." / „Wir würden gern bezahlen."'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#5A5147;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 6 verbe pentru „a vrea" & cafenea</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'wollen→möchte, mögen→möchte (sursa lui „möchte"), haben→hätte gern, werden→würde gern + bestellen & bezahlen.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„<strong>möchte</strong> vine din <strong>mögen</strong> (Konjunktiv II) și e forma politicoasă a lui <strong>wollen</strong>. <strong>hätte gern</strong> vine din <strong>haben</strong>, <strong>würde gern</strong> din <strong>werden</strong>. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
