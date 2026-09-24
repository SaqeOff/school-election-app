// Main Application Logic for Kazakhstani School Election System 2026

// Bilingual Dictionary
const i18n = {
    ru: {
        appTitle: "Выборы Президента Школьного Парламента",
        schoolSub: "КГУ «ШКОЛА-ЛИЦЕЙ № 1» • АСТАНА / АЛМАТЫ",
        navMain: "Главная & График",
        navRanking: "Рейтинг и Итоги",
        navAdmin: "Панель Админа",
        
        heroBadge: "⚡ ОФИЦИАЛЬНОЕ ОНЛАЙН-ГОЛОСОВАНИЕ 2026",
        heroTitle: "Голосование за Президента Школьного Парламента",
        heroSub: "Твой голос определяет будущее нашей школы! Посмотри программу кандидатов, следи за живым графиком голосов и сделай свой выбор.",
        btnVoteNow: "Отдать свой голос",
        btnViewLeaderboard: "Посмотреть рейтинг мест",
        
        statTotalVoted: "Всего отдано голосов",
        statTurnout: "Явка избирателей",
        statLeader: "Текущий лидер (1-е место)",
        
        chartTitle: "График голосов в реальном времени",
        chartSub: "Динамика подсчета голосов кандидатов с автоматическим ранжированием мест",
        liveStatus: "LIVE ПОДСЧЁТ",
        
        candidatesTitle: "Кандидаты в Президенты",
        candidatesSub: "Ознакомьтесь с предвыборной программой каждого кандидата и проголосуйте",
        btnVoteFor: "Проголосовать",
        
        podiumBadge: "👑 ОФИЦИАЛЬНЫЙ РЕЙТИНГ МЕСТ",
        podiumTitle: "Турнирная Таблица и Итоги Выборов",
        podiumSub: "Распределение мест кандидатов в Президенты Школьного Парламента на основе полученных голосов.",
        tableTitle: "Полный реестр результатов",
        thRank: "Место",
        thCandidate: "Кандидат",
        thClass: "Класс",
        thVotes: "Количество голосов",
        thShare: "Доля голосов (%)",
        thStatus: "Статус",
        
        adminLoginTitle: "Вход в Панель Администратора",
        adminLoginSub: "Управление голосами, накрутка мест, кандидаты и база учеников",
        adminUserLbl: "Логин",
        adminPassLbl: "Пароль",
        btnLogin: "Войти в панель управления ➔",
        adminPanelTitle: "Панель Управления Выборами",
        adminPanelSub: "Полный контроль над голосами, кандидатами и списками учеников",
        
        modalTitle: "Голосование за Кандидата",
        modalSub: "Подтвердите ваш выбор и введите свои данные для однократной верификации.",
        lblClass: "Выберите ваш класс",
        lblName: "Введите ваши ФИО (Фамилия Имя)",
        lblIin: "Введите Ваш ИИН (12 цифр)",
        iinSecHint: "🔒 Защита от накрутки: 1 ИИН может проголосовать только один раз. Выбор строго анонимен.",
        demoTitle: "⚡ ДЕМО-УЧЕНИКИ (Нажмите для быстрой проверки):",
        btnCancel: "Отмена",
        btnSubmitVote: "✅ Отдать свой голос",
        
        succTitle: "Ваш голос успешно учтен!",
        succSub: "Спасибо за участие в выборах! Ваш голос мгновенно обновлен в общем графике результатов.",
        btnGoChart: "📊 Посмотреть обновленный график",
        btnGoRanking: "🏆 Перейти в таблицу рейтинга",
        
        errInvalidIin: "ИИН должен состоять ровно из 12 цифр!",
        errAlreadyVoted: "⚠️ Ошибка: Ученик с данным ИИН уже проголосовал! Повторное голосование невозможно.",
        errEmptyFields: "Пожалуйста, заполните все поля формы!"
    },
    kk: {
        appTitle: "Мектеп Парламенті Президентін Сайлау",
        schoolSub: "«№ 1 МЕКТЕП-ЛИЦЕЙІ» КММ • АСТАНА / АЛМАТЫ",
        navMain: "Басты бет & График",
        navRanking: "Рейтинг және Қорытынды",
        navAdmin: "Әкімші Панелі",
        
        heroBadge: "⚡ РЕСМИ ОНЛАЙН ДАУЫС БЕРУ 2026",
        heroTitle: "Мектеп Парламентінің Президентін Сайлау",
        heroSub: "Сенің дауысың мектебіміздің болашағын айқындайды! Кандидаттардың бағдарламасымен танысып, өз таңдауыңды жаса.",
        btnVoteNow: "Өз дауысыңды беру",
        btnViewLeaderboard: "Орындар рейтингін көру",
        
        statTotalVoted: "Барлық дауыс бергендер",
        statTurnout: "Сайлаушылар қатысуы",
        statLeader: "Қазіргі көшбасшы (1-орын)",
        
        chartTitle: "Нақты уақыттағы дауыстар графигі",
        chartSub: "Орындарды автоматты түрде анықтайтын дауыстарды санау динамикасы",
        liveStatus: "LIVE САНАУ",
        
        candidatesTitle: "Президенттікке Кандидаттар",
        candidatesSub: "Әр кандидаттың сайлауалды бағдарламасымен танысып, дауыс беріңіз",
        btnVoteFor: "Дауыс беру",
        
        podiumBadge: "👑 РЕСМИ ОРЫНДАР РЕЙТИНГІ",
        podiumTitle: "Турнирлік Кесте және Сайлау Қорытындысы",
        podiumSub: "Мектеп Парламенті Президенттігіне үміткерлердің жинаған дауыстары бойынша орындарды бөлу.",
        tableTitle: "Нәтижелердің толық тізілімі",
        thRank: "Орын",
        thCandidate: "Кандидат",
        thClass: "Сынып",
        thVotes: "Дауыстар саны",
        thShare: "Дауыс үлесі (%)",
        thStatus: "Мәртебесі",
        
        adminLoginTitle: "Әкімші Панеліне Кіру",
        adminLoginSub: "Дауыстарды басқару, орындарды түзету, кандидаттар және оқушылар базасы",
        adminUserLbl: "Логин",
        adminPassLbl: "Құпия сөз",
        btnLogin: "Басқару панеліне кіру ➔",
        adminPanelTitle: "Сайлауды Басқару Панелі",
        adminPanelSub: "Дауыстар, кандидаттар және оқушылар тізімін толық бақылау",
        
        modalTitle: "Кандидатқа Дауыс Беру",
        modalSub: "Таңдауыңызды растап, бір реттік верификация үшін деректеріңізді енгізіңіз.",
        lblClass: "Сыныбыңызды таңдаңыз",
        lblName: "Аты-жөніңізді енгізіңіз (Т.Ә.Ж.)",
        lblIin: "ЖСН енгізіңіз (12 сан)",
        iinSecHint: "🔒 Бұрмалаудан қорғау: 1 ЖСН тек бір рет дауыс бере алады. Таңдау толық құпия.",
        demoTitle: "⚡ ДЕМО-ОҚУШЫЛАР (Жылдам тексеру үшін басыңыз):",
        btnCancel: "Бас тарту",
        btnSubmitVote: "✅ Өз дауысымды беру",
        
        succTitle: "Сіздің дауысыңыз сәтті есептелді!",
        succSub: "Сайлауға қатысқаныңызға рахмет! Сіздің дауысыңыз жалпы нәтижелер графигінде бірден жаңартылды.",
        btnGoChart: "📊 Жаңартылған графикті көру",
        btnGoRanking: "🏆 Рейтинг кестесіне өту",
        
        errInvalidIin: "ЖСН дәл 12 саннан тұруы керек!",
        errAlreadyVoted: "⚠️ Қате: Бұл ЖСН бойынша оқушы дауыс беріп қойған! Қайта дауыс беруге болмайды.",
        errEmptyFields: "Барлық өрістерді толтырыңыз!"
    }
};

// Global State
let currentLang = "ru";
let candidates = [];
let students = [];
let settings = {};
let votesLog = [];
let selectedCandidateId = null;
let isAdminLoggedIn = false;

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    loadAppState();
    renderAll();
    setupAdminLogin();
});

// Load App State from LocalStorage
function loadAppState() {
    initDatabase(); // from students_db.js
    candidates = JSON.parse(localStorage.getItem("school_candidates_db")) || [];
    students = JSON.parse(localStorage.getItem("school_students_db")) || [];
    settings = JSON.parse(localStorage.getItem("school_settings")) || {};
    votesLog = JSON.parse(localStorage.getItem("school_votes_log")) || [];
    
    // Ensure we have realistic candidate data
    if (candidates.length < 4) {
        initDatabase(true);
        candidates = JSON.parse(localStorage.getItem("school_candidates_db")) || [];
        students = JSON.parse(localStorage.getItem("school_students_db")) || [];
    }
}

function saveAppState() {
    localStorage.setItem("school_candidates_db", JSON.stringify(candidates));
    localStorage.setItem("school_students_db", JSON.stringify(students));
    localStorage.setItem("school_settings", JSON.stringify(settings));
    localStorage.setItem("school_votes_log", JSON.stringify(votesLog));
}

// Render everything
function renderAll() {
    renderStatsAndChart();
    renderCandidateCards();
    renderPodiumAndRanking();
    renderDemoChips();
    if (isAdminLoggedIn) {
        renderAdminVotesControl();
        renderAdminCandidatesList();
        renderAdminStudentsTable();
    }
}

// Language Switching
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

// Navigation / View Switching
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
        renderPodiumAndRanking();
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

// ==================== STATS & LIVE CHART RENDERING ====================
function renderStatsAndChart() {
    const totalVotes = candidates.reduce((sum, c) => sum + (Number(c.votes) || 0), 0);
    const totalStudents = Math.max(students.length, 480);
    const turnout = totalStudents > 0 ? ((totalVotes / totalStudents) * 100).toFixed(1) : 0;

    // Sort candidates descending by votes
    const sorted = [...candidates].sort((a, b) => (b.votes || 0) - (a.votes || 0));
    const leader = sorted[0];

    document.getElementById("stat-total-votes").innerText = totalVotes;
    document.getElementById("stat-turnout").innerText = `${turnout}%`;
    document.getElementById("stat-leader-name").innerText = leader ? leader.name : "-";

    // Chart list
    const container = document.getElementById("chart-bars-container");
    container.innerHTML = "";

    sorted.forEach((cand, index) => {
        const votes = Number(cand.votes) || 0;
        const percent = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0;
        const isWinner = index === 0 && votes > 0;
        const rankMedal = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}`;

        const barItem = document.createElement("div");
        barItem.className = `chart-bar-item ${isWinner ? 'winner' : ''}`;
        barItem.innerHTML = `
            <div class="bar-meta">
                <div class="bar-candidate-info">
                    <div class="bar-rank-badge">${rankMedal}</div>
                    <img src="${cand.photo}" alt="${cand.name}" class="bar-avatar">
                    <div>
                        <div class="bar-cand-name">${cand.name} ${isWinner ? '<span style="color:var(--gold); font-size:0.8rem; margin-left:6px;">👑 ЛИДЕР</span>' : ''}</div>
                        <div class="bar-cand-class">${cand.class} класс</div>
                    </div>
                </div>
                <div class="bar-stats">
                    <div class="bar-votes-count">${votes} ${currentLang === 'kk' ? 'дауыс' : 'голосов'}</div>
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

// ==================== CANDIDATE CARDS RENDERING ====================
function renderCandidateCards() {
    const grid = document.getElementById("candidates-cards-grid");
    grid.innerHTML = "";

    // Sort to determine ranks
    const sorted = [...candidates].sort((a, b) => (b.votes || 0) - (a.votes || 0));

    sorted.forEach(cand => {
        const rankIndex = sorted.findIndex(c => c.id === cand.id);
        const rankText = rankIndex === 0 ? "🥇 1 МЕСТО / ЛИДЕР" : rankIndex === 1 ? "🥈 2 МЕСТО" : rankIndex === 2 ? "🥉 3 МЕСТО" : `${rankIndex + 1} МЕСТО`;
        const isGold = rankIndex === 0;

        const card = document.createElement("div");
        card.className = `candidate-card ${isGold ? 'first-place' : ''}`;
        card.innerHTML = `
            <div class="candidate-photo-box">
                <img src="${cand.photo}" alt="${cand.name}" class="candidate-photo">
                <div class="card-rank-tag ${isGold ? 'gold' : ''}">${rankText}</div>
                <div class="card-class-tag">${cand.class}</div>
            </div>
            <div class="candidate-content">
                <h3 class="cand-name-title">${cand.name}</h3>
                <p class="cand-motto-text">${cand.motto}</p>
                <div class="cand-program-label">Ключевые пункты программы:</div>
                <ul class="cand-program-list">
                    ${cand.program.map(p => `<li>${p}</li>`).join("")}
                </ul>
                <div class="card-votes-preview">
                    <span style="font-size: 0.85rem; color: var(--text-muted);">Текущие голоса:</span>
                    <strong style="color: ${isGold ? 'var(--gold)' : 'var(--primary-light)'}; font-size: 1.1rem;">
                        ${cand.votes}
                    </strong>
                </div>
                <button class="btn-vote-trigger" onclick="openVoteModalFor('${cand.id}')">
                    🗳️ ${i18n[currentLang].btnVoteFor}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==================== DEDICATED RANKING (PODIUM & TABLE) ====================
function renderPodiumAndRanking() {
    const sorted = [...candidates].sort((a, b) => (b.votes || 0) - (a.votes || 0));
    const totalVotes = candidates.reduce((sum, c) => sum + (Number(c.votes) || 0), 0);

    const podium = document.getElementById("podium-container");
    podium.innerHTML = "";

    // Podium order: 2nd place (left), 1st place (center), 3rd place (right)
    const top3 = [sorted[1], sorted[0], sorted[2]];

    top3.forEach((cand, idx) => {
        if (!cand) return;
        const actualRank = cand.id === sorted[0]?.id ? 1 : cand.id === sorted[1]?.id ? 2 : 3;
        const rankClass = `rank-${actualRank}`;
        const medal = actualRank === 1 ? "🥇" : actualRank === 2 ? "🥈" : "🥉";
        const label = actualRank === 1 ? "1 МЕСТО • ПРЕЗИДЕНТ" : `${actualRank} МЕСТО`;

        const slot = document.createElement("div");
        slot.className = `podium-slot ${rankClass}`;
        slot.innerHTML = `
            <div class="podium-avatar-wrap">
                ${actualRank === 1 ? '<div class="podium-crown">👑</div>' : ''}
                <img src="${cand.photo}" alt="${cand.name}" class="podium-avatar">
            </div>
            <div class="podium-cand-name">${cand.name}</div>
            <div class="podium-cand-votes">${cand.votes} ${currentLang === 'kk' ? 'дауыс' : 'голосов'}</div>
            <div class="podium-pillar">
                <div class="pillar-number">${medal}</div>
                <div class="pillar-label">${label}</div>
            </div>
        `;
        podium.appendChild(slot);
    });

    // Table rows
    const tbody = document.getElementById("ranking-table-tbody");
    tbody.innerHTML = "";

    sorted.forEach((cand, index) => {
        const votes = Number(cand.votes) || 0;
        const percent = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0;
        const rankBadgeClass = index === 0 ? "r-1" : index === 1 ? "r-2" : index === 2 ? "r-3" : "";
        const statusText = index === 0 ? "👑 Победитель (Президент)" : index < 3 ? "🥈 Призёр" : "Участник";

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><span class="rank-badge-col ${rankBadgeClass}">${index + 1}</span></td>
            <td>
                <div class="cand-cell">
                    <img src="${cand.photo}" alt="${cand.name}" class="table-cand-avatar">
                    <div>
                        <strong>${cand.name}</strong>
                        <div style="font-size: 0.78rem; color: var(--text-muted);">${cand.motto}</div>
                    </div>
                </div>
            </td>
            <td><strong>${cand.class}</strong></td>
            <td><strong style="font-size: 1.15rem; color: ${index === 0 ? 'var(--gold)' : 'var(--primary-light)'};">${votes}</strong></td>
            <td>
                <div style="font-weight: 700; margin-bottom: 4px;">${percent}%</div>
                <div class="bar-track" style="height: 6px; width: 100px;">
                    <div class="bar-fill" style="width: ${percent}%;"></div>
                </div>
            </td>
            <td>
                <span class="badge-status ${index === 0 ? 'badge-voted' : 'badge-not-voted'}" style="${index === 0 ? 'background:rgba(229,184,11,0.2); color:var(--gold); border:1px solid var(--gold);' : ''}">
                    ${statusText}
                </span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ==================== VOTE MODAL & VERIFICATION ====================
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
    // Select leader or first candidate by default
    const sorted = [...candidates].sort((a, b) => (b.votes || 0) - (a.votes || 0));
    openVoteModalFor(sorted[0]?.id || candidates[0]?.id);
}

function closeVoteModal() {
    document.getElementById("vote-modal").classList.remove("active");
    selectedCandidateId = null;
}

// Render Demo Chips in Vote Modal
function renderDemoChips() {
    const container = document.getElementById("vote-demo-chips");
    if (!container) return;
    container.innerHTML = "";

    // Show 4 students
    students.slice(0, 4).forEach(st => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "demo-chip";
        chip.innerHTML = `${st.fullName.split(' ')[0]} ${st.fullName.split(' ')[1]} (${st.class}) ${st.hasVoted ? '✓' : ''}`;
        chip.onclick = () => {
            document.getElementById("vote-input-class").value = st.class;
            document.getElementById("vote-input-name").value = st.fullName;
            document.getElementById("vote-input-iin").value = st.iin;
        };
        container.appendChild(chip);
    });
}

// Cast Vote Action (Verification + Anti-fraud)
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

    // Anti-fraud check: Check if student with this IIN has already voted!
    const existingStudent = students.find(s => s.iin === vIin);
    if (existingStudent && existingStudent.hasVoted) {
        showModalAlert(alertBox, i18n[currentLang].errAlreadyVoted);
        return;
    }

    // Verification passed: Record Vote
    if (existingStudent) {
        existingStudent.hasVoted = true;
        existingStudent.votedFor = selectedCandidateId;
    } else {
        // Smart registration: record new voter so duplicate IIN is impossible
        students.push({
            id: students.length + 1,
            class: vClass,
            fullName: vName,
            iin: vIin,
            hasVoted: true,
            votedFor: selectedCandidateId
        });
    }

    // Increment vote count for candidate
    const targetCand = candidates.find(c => c.id === selectedCandidateId);
    if (targetCand) {
        targetCand.votes = (Number(targetCand.votes) || 0) + 1;
    }

    // Log action
    votesLog.push({
        id: "VOTE_" + Date.now(),
        timestamp: new Date().toISOString(),
        iinMasked: vIin.substring(0, 4) + "****" + vIin.substring(8),
        class: vClass,
        candidateId: selectedCandidateId,
        candidateName: targetCand ? targetCand.name : ""
    });

    saveAppState();
    closeVoteModal();
    renderAll();

    // Show celebratory success modal
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

// ==================== ADMIN PANEL FUNCTIONS ====================
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
                alertBox.innerText = "Неверный логин или пароль администратора!";
                alertBox.style.display = "block";
            }
        });
    }
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    document.getElementById("admin-login-box").style.display = "block";
    document.getElementById("admin-content-box").style.display = "none";
}

function switchAdminTab(tabName) {
    document.querySelectorAll(".btn-admin-tab").forEach(b => {
        b.classList.toggle("active", b.dataset.admTab === tabName);
    });

    document.querySelectorAll(".admin-tab-pane").forEach(p => p.style.display = "none");
    const pane = document.getElementById(`adm-tab-${tabName}`);
    if (pane) pane.style.display = "block";
}

// Render Admin Votes Control Rows (Easy vote boosting / ranking)
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
                    <div style="font-size: 0.8rem; color: var(--text-muted);">${cand.class} класс</div>
                </div>
            </div>
            <div class="vote-adjusters">
                <input type="number" id="adm-vote-${cand.id}" class="vote-input-val" value="${cand.votes}" min="0">
                <button type="button" class="btn-quick-vote" onclick="adjustAdminVote('${cand.id}', 10)">+10</button>
                <button type="button" class="btn-quick-vote" onclick="adjustAdminVote('${cand.id}', 50)">+50</button>
                <button type="button" class="btn-quick-vote" onclick="adjustAdminVote('${cand.id}', -10)">-10</button>
                <button type="button" class="btn-make-leader" onclick="makeCandidateLeader('${cand.id}')">👑 Сделать 1-м</button>
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
        targetInput.value = maxVotes + 35; // Put ahead by 35 votes!
        saveAllAdminVotes();
        alert(`Кандидат выведен на 1-е место с ${targetInput.value} голосами!`);
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
    alert("Все голоса и расстановка мест успешно сохранены!");
}

// Preset Rankings (168, 114, 76, 42)
function applyPresetRankings() {
    const presets = [168, 114, 76, 42, 25, 15];
    candidates.forEach((c, idx) => {
        c.votes = presets[idx] || 10;
        const input = document.getElementById(`adm-vote-${c.id}`);
        if (input) input.value = c.votes;
    });

    saveAppState();
    renderAll();
    alert("Применен идеальный пресет мест (1-е место: 168, 2-е место: 114, 3-е место: 76, 4-е место: 42)!");
}

function resetAllVotesToZero() {
    if (confirm("Вы уверены, что хотите обнулить все голоса до 0?")) {
        candidates.forEach(c => c.votes = 0);
        students.forEach(s => s.hasVoted = false);
        votesLog = [];
        saveAppState();
        renderAll();
        alert("Все голоса сброшены до 0!");
    }
}

// Render Admin Candidates List (Edit / Delete)
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
                    <div style="font-size: 0.78rem; color: var(--text-muted);">${cand.motto}</div>
                </div>
            </div>
            <div>
                <button class="btn-secondary" style="border-color: var(--error); color: #FCA5A5; font-size: 0.8rem; padding: 6px 12px;" onclick="deleteCandidate('${cand.id}')">
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
    alert(`Кандидат "${name}" успешно добавлен!`);
}

function deleteCandidate(candId) {
    if (confirm("Удалить данного кандидата?")) {
        candidates = candidates.filter(c => c.id !== candId);
        saveAppState();
        renderAll();
    }
}

// Render Admin Students Table
function renderAdminStudentsTable() {
    const tbody = document.getElementById("admin-students-tbody");
    tbody.innerHTML = "";

    students.forEach((st, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${st.id || idx + 1}</td>
            <td><strong>${st.class}</strong></td>
            <td>${st.fullName}</td>
            <td><code>${st.iin}</code></td>
            <td>
                <span class="badge-status ${st.hasVoted ? 'badge-voted' : 'badge-not-voted'}">
                    ${st.hasVoted ? 'Проголосовал ✓' : 'Не голосовал'}
                </span>
            </td>
            <td>
                ${st.hasVoted ? `<button class="btn-quick-vote" onclick="resetStudentVote('${st.iin}')">Сбросить статус</button>` : '-'}
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
        renderDemoChips();
        alert(`Статус ученика с ИИН ${iin} сброшен на "Не голосовал".`);
    }
}

function exportVotesCSV() {
    let csv = "ID,Класс,ФИО,ИИН,Статус_Голосования\n";
    students.forEach(s => {
        csv += `${s.id},"${s.class}","${s.fullName}",${s.iin},${s.hasVoted ? "Проголосовал" : "Не_голосовал"}\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `election_official_report_${Date.now()}.csv`;
    a.click();
}

function restoreDefaultDemoData() {
    if (confirm("Восстановить заводские демонстрационные данные (4 кандидата, расстановка мест и ученики)?")) {
        localStorage.clear();
        initDatabase(true);
        loadAppState();
        renderAll();
        alert("Заводские данные успешно восстановлены!");
    }
}
