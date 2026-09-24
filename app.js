// Application Logic for School Parliament Election Portal

// Bilingual Translations (Clean, without emojis)
const i18n = {
    ru: {
        appTitle: "Выборы Президента Школьного Парламента",
        schoolSub: "КГУ «Школа-лицей № 1» • 2026",
        navMain: "Голосование и График",
        navRanking: "Итоги Выборов",
        navAdmin: "Администрирование",
        
        heroBadge: "Официальное Голосование",
        heroTitle: "Выборы Президента Школьного Парламента",
        heroSub: "Ознакомьтесь с предвыборными программами кандидатов, следите за ходом подсчета голосов и примите участие в голосовании.",
        btnVoteNow: "Принять участие в голосовании",
        btnViewLeaderboard: "Таблица результатов",
        
        statTotalVoted: "Всего подано голосов",
        statTurnout: "Явка избирателей",
        statLeader: "Текущий лидер (1 место)",
        
        chartTitle: "Результаты голосования в реальном времени",
        chartSub: "Автоматический подсчет и распределение голосов по кандидатам",
        liveStatus: "Активно",
        
        candidatesTitle: "Кандидаты в Президенты",
        candidatesSub: "Ознакомьтесь с предвыборной программой каждого кандидата и проголосуйте",
        btnVoteFor: "Проголосовать",
        
        podiumBadge: "Итоговый протокол",
        podiumTitle: "Рейтинг кандидатов и распределение мест",
        podiumSub: "Сводная таблица результатов голосования на основе подтвержденных бюллетеней учеников.",
        tableTitle: "Полный реестр результатов",
        thRank: "Место",
        thCandidate: "Кандидат",
        thClass: "Класс",
        thVotes: "Количество голосов",
        thShare: "Доля (%)",
        thStatus: "Статус",
        
        adminLoginTitle: "Вход для избирательной комиссии",
        adminLoginSub: "Авторизуйтесь для управления голосованием и базой учеников",
        adminUserLbl: "Имя пользователя",
        adminPassLbl: "Пароль",
        btnLogin: "Войти",
        adminPanelTitle: "Панель Избирательной Комиссии",
        adminPanelSub: "Управление списком кандидатов, голосами и реестром учеников",
        
        modalTitle: "Голосование за кандидата",
        modalSub: "Для учета голоса укажите класс, ФИО и ваш ИИН.",
        lblClass: "Класс",
        lblName: "Фамилия и Имя ученика",
        lblIin: "ИИН ученика (12 цифр)",
        iinSecHint: "1 ИИН может проголосовать только один раз. Повторный голос исключен.",
        btnCancel: "Отмена",
        btnSubmitVote: "Подтвердить выбор",
        
        succTitle: "Голос успешно принят",
        succSub: "Спасибо за участие в выборах! Ваш голос учтен в общей таблице результатов.",
        btnGoChart: "Вернуться к графику",
        btnGoRanking: "Посмотреть рейтинг",
        
        errInvalidIin: "ИИН должен состоять ровно из 12 цифр.",
        errAlreadyVoted: "Ошибка: Ученик с данным ИИН уже принял участие в голосовании. Повторный голос не допускается.",
        errEmptyFields: "Пожалуйста, заполните все обязательные поля."
    },
    kk: {
        appTitle: "Мектеп Парламенті Президентін Сайлау",
        schoolSub: "«№ 1 Мектеп-лицейі» КММ • 2026",
        navMain: "Дауыс беру & График",
        navRanking: "Сайлау Қорытындысы",
        navAdmin: "Әкімшілендіру",
        
        heroBadge: "Ресми Дауыс Беру",
        heroTitle: "Мектеп Парламентінің Президентін Сайлау",
        heroSub: "Үміткерлердің сайлауалды бағдарламаларымен танысып, дауыс беру барысын қадағалаңыз және өз таңдауыңызды жасаңыз.",
        btnVoteNow: "Дауыс беруге қатысу",
        btnViewLeaderboard: "Нәтижелер кестесі",
        
        statTotalVoted: "Барлық берілген дауыстар",
        statTurnout: "Сайлаушылар қатысуы",
        statLeader: "Қазіргі көшбасшы (1 орын)",
        
        chartTitle: "Нақты уақыттағы дауыс беру нәтижелері",
        chartSub: "Кандидаттар бойынша дауыстарды автоматты түрде санау және бөлу",
        liveStatus: "Белсенді",
        
        candidatesTitle: "Президенттікке Үміткерлер",
        candidatesSub: "Әр кандидаттың сайлауалды бағдарламасымен танысып, дауыс беріңіз",
        btnVoteFor: "Дауыс беру",
        
        podiumBadge: "Қорытынды Хаттама",
        podiumTitle: "Үміткерлер рейтингі және орындарды бөлу",
        podiumSub: "Оқушылардың расталған бюллетеньдері негізіндегі дауыс беру нәтижелерінің жиынтық кестесі.",
        tableTitle: "Нәтижелердің толық тізілімі",
        thRank: "Орын",
        thCandidate: "Үміткер",
        thClass: "Сынып",
        thVotes: "Дауыстар саны",
        thShare: "Үлесі (%)",
        thStatus: "Мәртебесі",
        
        adminLoginTitle: "Сайлау комиссиясына кіру",
        adminLoginSub: "Дауыс беруді және оқушылар базасын басқару үшін жүйеге кіріңіз",
        adminUserLbl: "Пайдаланушы аты",
        adminPassLbl: "Құпия сөз",
        btnLogin: "Кіру",
        adminPanelTitle: "Сайлау Комиссиясының Панелі",
        adminPanelSub: "Кандидаттар тізімін, дауыстарды және оқушылар тізілімін басқару",
        
        modalTitle: "Кандидатқа дауыс беру",
        modalSub: "Дауысыңызды есепке алу үшін сынып, Т.Ә.Ж. және ЖСН көрсетіңіз.",
        lblClass: "Сынып",
        lblName: "Оқушының аты-жөні",
        lblIin: "Оқушының ЖСН (12 сан)",
        iinSecHint: "1 ЖСН тек бір рет дауыс бере алады. Қайта дауыс беруге жол берілмейді.",
        btnCancel: "Бас тарту",
        btnSubmitVote: "Таңдауды растау",
        
        succTitle: "Дауыс сәтті қабылданды",
        succSub: "Сайлауға қатысқаныңыз үшін рахмет! Сіздің дауысыңыз жалпы нәтижелер кестесінде ескерілді.",
        btnGoChart: "Графикке оралу",
        btnGoRanking: "Рейтингті көру",
        
        errInvalidIin: "ЖСН дәл 12 саннан тұруы керек.",
        errAlreadyVoted: "Қате: Бұл ЖСН бойынша оқушы дауыс беріп қойған. Қайта дауыс беруге болмайды.",
        errEmptyFields: "Барлық міндетті өрістерді толтырыңыз."
    }
};

// State
let currentLang = "ru";
let candidates = [];
let students = [];
let settings = {};
let votesLog = [];
let selectedCandidateId = null;
let isAdminLoggedIn = false;

document.addEventListener("DOMContentLoaded", () => {
    loadAppState();
    renderAll();
    setupAdminLogin();
});

// Load App State
function loadAppState() {
    initDatabase();
    if (localStorage.getItem("school_data_version") !== "2.1") {
        initDatabase(true);
    }
    candidates = JSON.parse(localStorage.getItem("school_candidates_db")) || [];
    students = JSON.parse(localStorage.getItem("school_students_db")) || [];
    settings = JSON.parse(localStorage.getItem("school_settings")) || {};
    votesLog = JSON.parse(localStorage.getItem("school_votes_log")) || [];
}

function saveAppState() {
    localStorage.setItem("school_candidates_db", JSON.stringify(candidates));
    localStorage.setItem("school_students_db", JSON.stringify(students));
    localStorage.setItem("school_settings", JSON.stringify(settings));
    localStorage.setItem("school_votes_log", JSON.stringify(votesLog));
}

function renderAll() {
    renderStatsAndChart();
    renderCandidateCards();
    renderRankingTable();
    if (isAdminLoggedIn) {
        renderAdminVotesControl();
        renderAdminCandidatesList();
        renderAdminStudentsTable();
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (i18n[lang][key]) {
            elem.innerText = i18n[lang][key];
        }
    });

    document.querySelectorAll(".btn-lang").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    renderAll();
}

function switchView(viewId) {
    document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.add("active");
    }

    document.querySelectorAll(".btn-nav").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.view === viewId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewId === "main") {
        renderStatsAndChart();
        renderCandidateCards();
    } else if (viewId === "ranking") {
        renderRankingTable();
    } else if (viewId === "admin") {
        if (isAdminLoggedIn) {
            document.getElementById("admin-login-box").style.display = "none";
            document.getElementById("admin-content-box").style.display = "block";
            renderAdminVotesControl();
            renderAdminCandidatesList();
            renderAdminStudentsTable();
        } else {
            document.getElementById("admin-login-box").style.display = "block";
            document.getElementById("admin-content-box").style.display = "none";
        }
    }
}

// ==================== STATS & CHART ====================
function renderStatsAndChart() {
    const totalVotes = candidates.reduce((sum, c) => sum + (Number(c.votes) || 0), 0);
    const totalVotersEstimate = Math.max(students.length, 480);
    const turnout = totalVotersEstimate > 0 ? ((totalVotes / totalVotersEstimate) * 100).toFixed(1) : 0;

    const sorted = [...candidates].sort((a, b) => (b.votes || 0) - (a.votes || 0));
    const leader = sorted[0];

    document.getElementById("stat-total-votes").innerText = totalVotes;
    document.getElementById("stat-turnout").innerText = `${turnout}%`;
    document.getElementById("stat-leader-name").innerText = leader ? leader.name : "-";

    const container = document.getElementById("chart-bars-container");
    container.innerHTML = "";

    sorted.forEach((cand, index) => {
        const votes = Number(cand.votes) || 0;
        const percent = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0;
        const isWinner = index === 0 && votes > 0;
        const rankLabel = `${index + 1} ${currentLang === 'kk' ? 'орын' : 'место'}`;

        const barItem = document.createElement("div");
        barItem.className = `chart-bar-item ${isWinner ? 'winner' : ''}`;
        barItem.innerHTML = `
            <div class="bar-meta">
                <div class="bar-candidate-info">
                    <span class="bar-rank-tag">${rankLabel}</span>
                    <img src="${cand.photo}" alt="${cand.name}" class="bar-avatar">
                    <div>
                        <div class="bar-cand-name">${cand.name}</div>
                        <div class="bar-cand-class">${cand.class} класс</div>
                    </div>
                </div>
                <div class="bar-stats">
                    <div class="bar-votes-count">${votes}</div>
                    <div class="bar-percent">${percent}%</div>
                </div>
            </div>
            <div class="bar-track">
                <div class="bar-fill" style="width: ${percent}%;"></div>
            </div>
        `;
        container.appendChild(barItem);
    });
}

// ==================== CANDIDATE CARDS ====================
function renderCandidateCards() {
    const grid = document.getElementById("candidates-cards-grid");
    grid.innerHTML = "";

    const sorted = [...candidates].sort((a, b) => (b.votes || 0) - (a.votes || 0));

    sorted.forEach(cand => {
        const rankIndex = sorted.findIndex(c => c.id === cand.id);
        const isLeader = rankIndex === 0;
        const rankText = isLeader ? (currentLang === 'kk' ? '1 Орын / Көшбасшы' : '1 Место / Лидер') : `${rankIndex + 1} ${currentLang === 'kk' ? 'Орын' : 'Место'}`;

        const card = document.createElement("div");
        card.className = "candidate-card";
        card.innerHTML = `
            <div class="candidate-photo-box">
                <img src="${cand.photo}" alt="${cand.name}" class="candidate-photo">
                <div class="card-rank-tag ${isLeader ? 'leader' : ''}">${rankText}</div>
                <div class="card-class-tag">${cand.class}</div>
            </div>
            <div class="candidate-content">
                <h3 class="cand-name-title">${cand.name}</h3>
                <p class="cand-motto-text">${cand.motto}</p>
                <div class="cand-program-label">${currentLang === 'kk' ? 'Бағдарлама бағыттары:' : 'Пункты предвыборной программы:'}</div>
                <ul class="cand-program-list">
                    ${cand.program.map(p => `<li>${p}</li>`).join("")}
                </ul>
                <div class="card-votes-preview">
                    <span style="color: var(--text-secondary);">${currentLang === 'kk' ? 'Жинаған дауысы:' : 'Получено голосов:'}</span>
                    <strong style="color: ${isLeader ? 'var(--accent-gold)' : 'var(--text-primary)'}; font-size: 1rem;">
                        ${cand.votes}
                    </strong>
                </div>
                <button class="btn-vote-trigger" onclick="openVoteModalFor('${cand.id}')">
                    ${i18n[currentLang].btnVoteFor}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==================== RANKING TABLE ====================
function renderRankingTable() {
    const sorted = [...candidates].sort((a, b) => (b.votes || 0) - (a.votes || 0));
    const totalVotes = candidates.reduce((sum, c) => sum + (Number(c.votes) || 0), 0);

    const tbody = document.getElementById("ranking-table-tbody");
    tbody.innerHTML = "";

    sorted.forEach((cand, index) => {
        const votes = Number(cand.votes) || 0;
        const percent = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0;
        const isFirst = index === 0;
        const statusText = isFirst ? (currentLang === 'kk' ? 'Көшбасшы (1 орын)' : 'Лидер (1 место)') : (currentLang === 'kk' ? 'Қатысушы' : 'Кандидат');

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><span class="rank-num-badge ${isFirst ? 'r-1' : ''}">${index + 1}</span></td>
            <td>
                <div class="cand-cell">
                    <img src="${cand.photo}" alt="${cand.name}" class="table-cand-avatar">
                    <div>
                        <strong>${cand.name}</strong>
                    </div>
                </div>
            </td>
            <td>${cand.class}</td>
            <td><strong>${votes}</strong></td>
            <td>
                <div style="font-weight: 600; font-size: 0.85rem; margin-bottom: 4px;">${percent}%</div>
                <div class="bar-track" style="height: 5px; width: 90px;">
                    <div class="bar-fill" style="width: ${percent}%; background-color: ${isFirst ? 'var(--accent-gold)' : 'var(--primary)'};"></div>
                </div>
            </td>
            <td>
                <span class="status-badge ${isFirst ? 'status-leader' : 'status-nominee'}">
                    ${statusText}
                </span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ==================== REAL VOTING & IIN/FIO RECORDING ====================
function openVoteModalFor(candidateId) {
    selectedCandidateId = candidateId;
    const cand = candidates.find(c => c.id === candidateId);
    if (!cand) return;

    document.getElementById("modal-cand-img").src = cand.photo;
    document.getElementById("modal-cand-name").innerText = cand.name;
    document.getElementById("modal-cand-class").innerText = `${cand.class} класс`;

    const alertBox = document.getElementById("vote-modal-alert");
    alertBox.style.display = "none";

    document.getElementById("vote-modal").classList.add("active");
}

function openVoteModal() {
    const sorted = [...candidates].sort((a, b) => (b.votes || 0) - (a.votes || 0));
    openVoteModalFor(sorted[0]?.id || candidates[0]?.id);
}

function closeVoteModal() {
    document.getElementById("vote-modal").classList.remove("active");
    selectedCandidateId = null;
}

// REAL VOTE PROCESSING
function handleCastVote(e) {
    e.preventDefault();
    const alertBox = document.getElementById("vote-modal-alert");
    alertBox.style.display = "none";

    const vClass = document.getElementById("vote-input-class").value.trim();
    const vName = document.getElementById("vote-input-name").value.trim();
    const vIin = document.getElementById("vote-input-iin").value.trim();

    if (!vClass || !vName || !vIin) {
        showModalAlert(alertBox, i18n[currentLang].errEmptyFields);
        return;
    }

    if (!/^\d{12}$/.test(vIin)) {
        showModalAlert(alertBox, i18n[currentLang].errInvalidIin);
        return;
    }

    // STRICT ANTI-FRAUD VERIFICATION: Has this IIN already been used to vote?
    const existingStudentByIin = students.find(s => s.iin === vIin);
    if (existingStudentByIin && existingStudentByIin.hasVoted) {
        showModalAlert(alertBox, i18n[currentLang].errAlreadyVoted);
        return;
    }

    // RECORD REAL VOTER DATA
    const voteTime = new Date().toLocaleString("ru-RU");

    if (existingStudentByIin) {
        // Update existing record with the entered name and class
        existingStudentByIin.fullName = vName;
        existingStudentByIin.class = vClass;
        existingStudentByIin.hasVoted = true;
        existingStudentByIin.votedFor = selectedCandidateId;
        existingStudentByIin.timestamp = voteTime;
    } else {
        // Add new real student voter into database
        students.push({
            id: students.length + 1,
            class: vClass,
            fullName: vName,
            iin: vIin,
            hasVoted: true,
            votedFor: selectedCandidateId,
            timestamp: voteTime
        });
    }

    // Increment candidate vote count
    const targetCand = candidates.find(c => c.id === selectedCandidateId);
    if (targetCand) {
        targetCand.votes = (Number(targetCand.votes) || 0) + 1;
    }

    // Add entry to audit log
    votesLog.push({
        id: "VOTE_" + Date.now(),
        timestamp: voteTime,
        fullName: vName,
        class: vClass,
        iin: vIin,
        candidateName: targetCand ? targetCand.name : ""
    });

    // Save and render
    saveAppState();
    closeVoteModal();
    renderAll();

    // Reset inputs
    document.getElementById("vote-form").reset();

    // Show confirmation modal
    document.getElementById("success-modal").classList.add("active");
}

function showModalAlert(elem, msg) {
    elem.innerText = msg;
    elem.style.display = "block";
}

function closeSuccessAndShowMain() {
    document.getElementById("success-modal").classList.remove("active");
    switchView("main");
}

function closeSuccessAndShowRanking() {
    document.getElementById("success-modal").classList.remove("active");
    switchView("ranking");
}

// ==================== ADMIN DASHBOARD ====================
function setupAdminLogin() {
    const form = document.getElementById("admin-login-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = document.getElementById("input-admin-user").value.trim();
            const pass = document.getElementById("input-admin-pass").value.trim();
            const alertBox = document.getElementById("admin-login-alert");

            if (user === (settings.adminLogin || "admin") && pass === (settings.adminPass || "admin123")) {
                isAdminLoggedIn = true;
                alertBox.style.display = "none";
                document.getElementById("admin-login-box").style.display = "none";
                document.getElementById("admin-content-box").style.display = "block";
                renderAdminVotesControl();
                renderAdminCandidatesList();
                renderAdminStudentsTable();
            } else {
                alertBox.innerText = "Неверное имя пользователя или пароль.";
                alertBox.style.display = "block";
            }
        });
    }
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    document.getElementById("admin-login-box").style.display = "block";
    document.getElementById("admin-content-box").style.display = "none";
    document.getElementById("admin-login-form").reset();
}

function switchAdminTab(tabName) {
    document.querySelectorAll(".btn-admin-tab").forEach(b => {
        b.classList.toggle("active", b.dataset.admTab === tabName);
    });

    document.querySelectorAll(".admin-tab-pane").forEach(p => p.style.display = "none");
    const pane = document.getElementById(`adm-tab-${tabName}`);
    if (pane) pane.style.display = "block";
}

// Admin Votes Editing
function renderAdminVotesControl() {
    const container = document.getElementById("admin-votes-control-list");
    container.innerHTML = "";

    candidates.forEach(cand => {
        const row = document.createElement("div");
        row.className = "vote-control-row";
        row.innerHTML = `
            <div class="cand-admin-info">
                <img src="${cand.photo}" alt="${cand.name}" class="cand-admin-avatar">
                <div>
                    <strong>${cand.name}</strong>
                    <div style="font-size: 0.78rem; color: var(--text-secondary);">${cand.class} класс</div>
                </div>
            </div>
            <div class="vote-adjusters">
                <input type="number" id="adm-vote-${cand.id}" class="vote-input-val" value="${cand.votes}" min="0">
                <button type="button" class="btn-quick-vote" onclick="adjustAdminVote('${cand.id}', 10)">+10</button>
                <button type="button" class="btn-quick-vote" onclick="adjustAdminVote('${cand.id}', 50)">+50</button>
                <button type="button" class="btn-quick-vote" onclick="adjustAdminVote('${cand.id}', -10)">-10</button>
                <button type="button" class="btn-make-leader" onclick="makeCandidateLeader('${cand.id}')">Назначить 1 место</button>
            </div>
        `;
        container.appendChild(row);
    });
}

function adjustAdminVote(candId, delta) {
    const input = document.getElementById(`adm-vote-${candId}`);
    if (input) {
        input.value = Math.max(0, (parseInt(input.value) || 0) + delta);
    }
}

function makeCandidateLeader(candId) {
    let maxVotes = 0;
    candidates.forEach(c => {
        const input = document.getElementById(`adm-vote-${c.id}`);
        const val = input ? parseInt(input.value) : c.votes;
        if (val > maxVotes) maxVotes = val;
    });

    const targetInput = document.getElementById(`adm-vote-${candId}`);
    if (targetInput) {
        targetInput.value = maxVotes + 25;
        saveAllAdminVotes();
    }
}

function saveAllAdminVotes() {
    candidates.forEach(c => {
        const input = document.getElementById(`adm-vote-${c.id}`);
        if (input) {
            c.votes = Math.max(0, parseInt(input.value) || 0);
        }
    });

    saveAppState();
    renderAll();
}

function applyPresetRankings() {
    const presets = [168, 114, 76, 42];
    candidates.forEach((c, idx) => {
        c.votes = presets[idx] || 20;
        const input = document.getElementById(`adm-vote-${c.id}`);
        if (input) input.value = c.votes;
    });

    saveAppState();
    renderAll();
}

function resetAllVotesToZero() {
    if (confirm("Обнулить все голоса кандидатов до 0?")) {
        candidates.forEach(c => c.votes = 0);
        students.forEach(s => s.hasVoted = false);
        votesLog = [];
        saveAppState();
        renderAll();
    }
}

// Candidates CRUD
function renderAdminCandidatesList() {
    const container = document.getElementById("admin-candidates-list");
    container.innerHTML = "";

    candidates.forEach(cand => {
        const div = document.createElement("div");
        div.className = "vote-control-row";
        div.innerHTML = `
            <div class="cand-admin-info">
                <img src="${cand.photo}" alt="${cand.name}" class="cand-admin-avatar">
                <div>
                    <strong>${cand.name}</strong> (${cand.class})
                    <div style="font-size: 0.75rem; color: var(--text-secondary);">${cand.motto}</div>
                </div>
            </div>
            <div>
                <button class="btn-secondary" style="color: var(--error); font-size: 0.78rem; padding: 4px 10px;" onclick="deleteCandidate('${cand.id}')">
                    Удалить
                </button>
            </div>
        `;
        container.appendChild(div);
    });
}

function handleAddNewCandidate(e) {
    e.preventDefault();
    const name = document.getElementById("new-cand-name").value.trim();
    const cClass = document.getElementById("new-cand-class").value.trim();
    const votes = parseInt(document.getElementById("new-cand-votes").value) || 0;
    const photo = document.getElementById("new-cand-photo").value.trim() || "assets/candidate1.jpg";
    const motto = document.getElementById("new-cand-motto").value.trim();
    const programRaw = document.getElementById("new-cand-program").value.trim();

    const program = programRaw.split("\n").map(l => l.trim()).filter(l => l.length > 0);

    const newCand = {
        id: "cand_" + Date.now(),
        name: name,
        class: cClass,
        motto: motto,
        photo: photo,
        program: program.length > 0 ? program : ["Активное участие в жизни школы"],
        votes: votes
    };

    candidates.push(newCand);
    saveAppState();
    renderAll();
    document.getElementById("form-add-candidate").reset();
}

function deleteCandidate(candId) {
    if (confirm("Удалить выбранного кандидата?")) {
        candidates = candidates.filter(c => c.id !== candId);
        saveAppState();
        renderAll();
    }
}

// Students Table
function renderAdminStudentsTable() {
    const tbody = document.getElementById("admin-students-tbody");
    tbody.innerHTML = "";

    students.forEach((st, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td><strong>${st.class}</strong></td>
            <td>${st.fullName}</td>
            <td><code>${st.iin}</code></td>
            <td>
                <span class="badge-status ${st.hasVoted ? 'badge-voted' : 'badge-not-voted'}">
                    ${st.hasVoted ? 'Проголосовал' : 'Не голосовал'}
                </span>
            </td>
            <td>
                ${st.hasVoted ? `<button class="btn-quick-vote" onclick="resetStudentVote('${st.iin}')">Сбросить голос</button>` : '-'}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function resetStudentVote(iin) {
    const st = students.find(s => s.iin === iin);
    if (st) {
        st.hasVoted = false;
        saveAppState();
        renderAdminStudentsTable();
    }
}

function exportVotesCSV() {
    let csv = "ID,Класс,ФИО,ИИН,Статус_Голосования,Дата\n";
    students.forEach((s, i) => {
        csv += `${i + 1},"${s.class}","${s.fullName}",${s.iin},${s.hasVoted ? "Проголосовал" : "Не_голосовал"},"${s.timestamp || ''}"\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `election_protocol_${Date.now()}.csv`;
    a.click();
}

function restoreDefaultDemoData() {
    if (confirm("Сбросить данные к исходным настройкам?")) {
        localStorage.clear();
        initDatabase(true);
        loadAppState();
        renderAll();
    }
}
