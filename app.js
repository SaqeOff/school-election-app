// Main Application Logic for Kazakhstani School Election System

// Bilingual Translation Dictionary
const i18n = {
    ru: {
        appTitle: "Выборы Президента Школьного Парламента",
        schoolSub: "КГУ «ШКОЛА-ЛИЦЕЙ № 1» • АСТАНА / АЛМАТЫ",
        navVote: "Голосование",
        navResults: "Live Результаты",
        navAdmin: "Панель Комиссии",
        
        heroBadge: "⚡ ЧЕСТНЫЕ ШКОЛЬНЫЕ ВЫБОРЫ 2026",
        heroTitle: "Голосование за Президента Школьного Парламента",
        heroSub: "Каждый голос имеет значение! Для участия пройдите быструю верификацию ученика. Защита от накруток гарантирует честный результат.",
        
        classSelectLbl: "Выберите ваш класс",
        nameSelectLbl: "Введите ваши ФИО (Фамилия Имя)",
        iinLbl: "Введитe Ваш ИИН (12 цифр)",
        iinHint: "ИИН используется только для проверки факта 1 голоса. Голосование полностью анонимно.",
        btnVerify: "Войти в кабину голосования ➔",
        
        demoBarTitle: "⚡ ДЕМО-УЧЕНИКИ (Нажмите для быстрого теста):",
        
        errNotFound: "Ученик с такими данными не найден в школьном списке!",
        errAlreadyVoted: "⚠️ Внимание! Вы уже приняли участие в голосовании. Повторный голос не допускается.",
        errInvalidIIN: "ИИН должен состоять ровно из 12 цифр!",
        
        voterWelcome: "Добро пожаловать,",
        voterStatusBadge: "Верифицирован • Готов к выбору",
        
        btnSelect: "Выбрать кандидата",
        btnConfirmVote: "Да, подтвеждаю свой голос",
        modalTitle: "Подтверждение выбора",
        modalSub: "Вы уверены, что хотите отдать свой голос за данного кандидата? После подтверждения изменить выбор невозможно.",
        btnCancel: "Отмена",
        
        successTitle: "Ваш голос успешно учтен!",
        successSub: "Спасибо за активное участие в жизни школы. Ваш вклад крайне важен для нашего Парламента.",
        btnViewLive: "Смотреть результаты в реальном времени ➔",
        
        resultsTitle: "Результаты голосования в реальном времени",
        statTotalVoted: "Всего проголосовало",
        statTurnout: "Явка учеников",
        statLeader: "Текущий лидер",
        
        adminTitle: "Панель Администрации и Избирательной Комиссии",
        adminLoginSub: "Введите пароль администратора (по умолчанию: admin123)",
        adminPassLbl: "Пароль доступа",
        btnLogin: "Войти в панель",
        errWrongPass: "Неверный пароль администратора!",
        
        adminTabStudents: "База учеников",
        adminTabCandidates: "Кандидаты",
        adminTabActions: "Управление",
        
        btnResetVotes: "Сбросить все голоса",
        btnExportCSV: "Скачать отчет (CSV)",
        btnReloadDemo: "Восстановить Исходные Данные"
    },
    kk: {
        appTitle: "Мектеп Парламенті Президентін Сайлау",
        schoolSub: "«№ 1 МЕКТЕП-ЛИЦЕЙІ» КММ • АСТАНА / АЛМАТЫ",
        navVote: "Дауыс беру",
        navResults: "Live Нәтижелер",
        navAdmin: "Комиссия панелі",
        
        heroBadge: "⚡ АДАТТЫ МЕКТЕП САЙЛАУЫ 2026",
        heroTitle: "Мектеп Парламентінің Президентін Сайлау",
        heroSub: "Әрбір дауыс маңызды! Қатысу үшін оқушыны верификациялаудан өтіңіз. Бұрмалаудан қорғау әділ нәтижеге кепілдік береді.",
        
        classSelectLbl: "Сыныбыңызды таңдаңыз",
        nameSelectLbl: "Аты-жөніңізді енгізіңіз (Т.Ә.Ж.)",
        iinLbl: "ЖСН енгізіңіз (12 сан)",
        iinHint: "ЖСН тек 1 дауыс беру фактісін тексеру үшін қолданылады. Дауыс беру толық анонимді.",
        btnVerify: "Дауыс беру кабинасына кіру ➔",
        
        demoBarTitle: "⚡ ДЕМО-ОҚУШЫЛАР (Снау үшін басыңыз):",
        
        errNotFound: "Мұндай деректері бар оқушы мектеп тізімінен табылмады!",
        errAlreadyVoted: "⚠️ Назар аударыңыз! Сіз дауыс беріп қойдыңыз. Қайта дауыс беруге болмайды.",
        errInvalidIIN: "ЖСН дәл 12 саннан тұруы керек!",
        
        voterWelcome: "Қош келдіңіз,",
        voterStatusBadge: "Расталды • Таңдауға дайын",
        
        btnSelect: "Кандидатты таңдау",
        btnConfirmVote: "Иә, дауысымды растаймын",
        modalTitle: "Таңдауды растау",
        modalSub: "Осы кандидатқа дауыс бергіңіз келетініне сенімдісіз бе? Растағаннан кейін таңдауды өзгерту мүмкін емес.",
        btnCancel: "Бас тарту",
        
        successTitle: "Сіздің дауысыңыз сәтті есептелді!",
        successSub: "Мектеп өміріне белсене қатысқаныңыз үшін рахмет. Сіздің үлесіңіз Парламент үшін өте маңызды.",
        btnViewLive: "Нәтижелерді нақты уақытта көру ➔",
        
        resultsTitle: "Нақты уақыттағы дауыс беру нәтижелері",
        statTotalVoted: "Барлық дауыс бергендер",
        statTurnout: "Оқушылардың қатысуы",
        statLeader: "Қазіргі көшбасшы",
        
        adminTitle: "Әкімшілік және Сайлау Комиссиясының Панелі",
        adminLoginSub: "Әкімші құпия сөзін енгізіңіз (әдепкі бойынша: admin123)",
        adminPassLbl: "Қолжетімділік құпия сөзі",
        btnLogin: "Панельге кіру",
        errWrongPass: "Әкімші құпия сөзі қате!",
        
        adminTabStudents: "Оқушылар базасы",
        adminTabCandidates: "Кандидаттар",
        adminTabActions: "Басқару",
        
        btnResetVotes: "Барлық дауыстарды нөлдеу",
        btnExportCSV: "Есепті жүктеу (CSV)",
        btnReloadDemo: "Бастапқы деректерді қалпына келтіру"
    }
};

// Global App State
let currentLang = "ru";
let studentsData = [];
let candidatesData = [];
let votesLogData = [];
let currentVoter = null;
let pendingCandidateId = null;
let isAdminAuthenticated = false;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    loadDatabase();
    setupEventListeners();
    renderDemoChips();
    applyLanguage(currentLang);
    showView("verification");
});

// Load data from LocalStorage
function loadDatabase() {
    studentsData = JSON.parse(localStorage.getItem("school_students_db")) || [];
    candidatesData = JSON.parse(localStorage.getItem("school_candidates_db")) || [];
    votesLogData = JSON.parse(localStorage.getItem("school_votes_log")) || [];
}

function saveDatabase() {
    localStorage.setItem("school_students_db", JSON.stringify(studentsData));
    localStorage.setItem("school_candidates_db", JSON.stringify(candidatesData));
    localStorage.setItem("school_votes_log", JSON.stringify(votesLogData));
}

// Switch Languages
function applyLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (i18n[lang][key]) {
            if (elem.tagName === "INPUT" && elem.type === "placeholder") {
                elem.placeholder = i18n[lang][key];
            } else {
                elem.innerText = i18n[lang][key];
            }
        }
    });

    document.querySelectorAll(".btn-lang").forEach(b => {
        b.classList.toggle("active", b.dataset.lang === lang);
    });
}

// Navigation & View Switching
function showView(viewId) {
    document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.add("active");
    }

    document.querySelectorAll(".btn-nav").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.view === viewId);
    });

    if (viewId === "results") {
        renderLiveResults();
    } else if (viewId === "admin" && isAdminAuthenticated) {
        renderAdminDashboard();
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Language buttons
    document.querySelectorAll(".btn-lang").forEach(btn => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    // Navigation buttons
    document.querySelectorAll(".btn-nav").forEach(btn => {
        btn.addEventListener("click", () => {
            const view = btn.dataset.view;
            if (view === "admin" && !isAdminAuthenticated) {
                document.getElementById("admin-login-box").style.display = "block";
                document.getElementById("admin-content-box").style.display = "none";
            }
            showView(view);
        });
    });

    // Student Verification Form Submit
    const verifyForm = document.getElementById("verification-form");
    if (verifyForm) {
        verifyForm.addEventListener("submit", handleStudentVerification);
    }

    // Modal Confirmation Actions
    document.getElementById("btn-confirm-modal").addEventListener("click", executeVote);
    document.getElementById("btn-cancel-modal").addEventListener("click", closeModal);

    // Admin Login Form
    document.getElementById("admin-login-form").addEventListener("submit", handleAdminLogin);
    
    // Admin Action Buttons
    document.getElementById("btn-reset-votes").addEventListener("click", resetAllVotes);
    document.getElementById("btn-export-csv").addEventListener("click", exportVotesCSV);
    document.getElementById("btn-restore-demo").addEventListener("click", restoreDemoData);
}

// Render Demo Student Chips for Easy Testing
function renderDemoChips() {
    const chipsContainer = document.getElementById("demo-chips-container");
    if (!chipsContainer) return;
    
    chipsContainer.innerHTML = "";
    // Pick 4 students (some voted, some not voted)
    studentsData.slice(0, 4).forEach(st => {
        const chip = document.createElement("button");
        chip.className = "demo-chip";
        chip.type = "button";
        chip.innerHTML = `${st.fullName} (${st.class}) ${st.hasVoted ? '✓' : ''}`;
        chip.addEventListener("click", () => {
            document.getElementById("select-class").value = st.class;
            document.getElementById("input-fullname").value = st.fullName;
            document.getElementById("input-iin").value = st.iin;
        });
        chipsContainer.appendChild(chip);
    });
}

// Handle Verification
function handleStudentVerification(e) {
    e.preventDefault();
    const alertBox = document.getElementById("verify-alert");
    alertBox.style.display = "none";

    const selClass = document.getElementById("select-class").value;
    const inputName = document.getElementById("input-fullname").value.trim();
    const inputIIN = document.getElementById("input-iin").value.trim();

    // Check IIN format
    if (!/^\d{12}$/.test(inputIIN)) {
        showAlert(alertBox, i18n[currentLang].errInvalidIIN, "danger");
        return;
    }

    // Lookup in DB
    const student = studentsData.find(s => 
        s.class === selClass &&
        s.iin === inputIIN
    );

    if (!student) {
        showAlert(alertBox, i18n[currentLang].errNotFound, "danger");
        return;
    }

    // Anti-cheating check: check if student has already voted
    if (student.hasVoted) {
        showAlert(alertBox, i18n[currentLang].errAlreadyVoted, "danger");
        return;
    }

    // Success verification
    currentVoter = student;
    renderVotingBooth();
    showView("voting");
}

function showAlert(elem, msg, type = "danger") {
    elem.className = `alert alert-${type}`;
    elem.innerText = msg;
    elem.style.display = "block";
}

// Render Candidates Grid in Voting Booth
function renderVotingBooth() {
    const bannerName = document.getElementById("voter-banner-name");
    const bannerClass = document.getElementById("voter-banner-class");
    if (bannerName) bannerName.innerText = currentVoter.fullName;
    if (bannerClass) bannerClass.innerText = `Класс: ${currentVoter.class}`;

    const grid = document.getElementById("candidates-grid");
    grid.innerHTML = "";

    candidatesData.forEach(cand => {
        const card = document.createElement("div");
        card.className = "candidate-card";
        
        card.innerHTML = `
            <div class="candidate-photo-wrapper">
                <img src="${cand.photo}" alt="${cand.name}" class="candidate-photo">
                <span class="candidate-badge-class">${cand.class}</span>
            </div>
            <div class="candidate-body">
                <h3 class="candidate-name">${cand.name}</h3>
                <p class="candidate-motto">${cand.motto}</p>
                <div class="candidate-program-title">Предвыборные тезисы:</div>
                <ul class="candidate-program-list">
                    ${cand.program.map(p => `<li>${p}</li>`).join("")}
                </ul>
                <button class="btn-vote" onclick="promptVoteConfirm('${cand.id}')">
                    ${i18n[currentLang].btnSelect}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Modal Vote Confirmation
function promptVoteConfirm(candidateId) {
    pendingCandidateId = candidateId;
    const cand = candidatesData.find(c => c.id === candidateId);
    
    document.getElementById("modal-cand-name").innerText = cand.name;
    document.getElementById("modal-cand-class").innerText = cand.class;
    document.getElementById("vote-modal").classList.add("active");
}

function closeModal() {
    document.getElementById("vote-modal").classList.remove("active");
    pendingCandidateId = null;
}

// Execute Vote (Record and Save)
function executeVote() {
    if (!currentVoter || !pendingCandidateId) return;

    // 1. Mark student as voted
    const studentInDb = studentsData.find(s => s.id === currentVoter.id);
    if (studentInDb) {
        studentInDb.hasVoted = true;
    }

    // 2. Add vote count to candidate
    const cand = candidatesData.find(c => c.id === pendingCandidateId);
    if (cand) {
        cand.votes += 1;
    }

    // 3. Add entry to audit log
    votesLogData.push({
        id: "VOTE_" + Date.now(),
        timestamp: new Date().toISOString(),
        voterClass: currentVoter.class,
        candidateId: pendingCandidateId,
        candidateName: cand.name
    });

    saveDatabase();
    closeModal();
    renderDemoChips();
    showView("success");
}

// Live Results View Rendering
function renderLiveResults() {
    loadDatabase();
    
    const totalVotes = candidatesData.reduce((sum, c) => sum + c.votes, 0);
    const totalStudents = studentsData.length;
    const turnoutPercent = totalStudents > 0 ? ((totalVotes / totalStudents) * 100).toFixed(1) : 0;

    // Sort candidates by votes descending
    const sortedCandidates = [...candidatesData].sort((a, b) => b.votes - a.votes);
    const leader = sortedCandidates[0];

    // Stats
    document.getElementById("stat-total-votes").innerText = totalVotes;
    document.getElementById("stat-turnout").innerText = `${turnoutPercent}%`;
    document.getElementById("stat-leader-name").innerText = leader ? leader.name : "-";

    // Results List
    const resultsContainer = document.getElementById("results-list-container");
    resultsContainer.innerHTML = "";

    sortedCandidates.forEach((cand, index) => {
        const percent = totalVotes > 0 ? ((cand.votes / totalVotes) * 100).toFixed(1) : 0;
        const isWinner = index === 0 && cand.votes > 0;

        const item = document.createElement("div");
        item.className = `result-item-card ${isWinner ? 'winner' : ''}`;
        
        item.innerHTML = `
            ${isWinner ? `<div class="winner-crown-badge">👑 КӨШБАСШЫ / ЛИДЕР</div>` : ''}
            <div class="result-item-header">
                <img src="${cand.photo}" alt="${cand.name}" class="result-avatar">
                <div class="result-cand-info">
                    <h3>${index + 1}. ${cand.name}</h3>
                    <p>Класс: ${cand.class}</p>
                </div>
                <div class="result-votes-count">
                    <div class="result-votes-num">${cand.votes} голосов</div>
                    <div class="result-percent-badge">${percent}%</div>
                </div>
            </div>
            <div class="progress-bar-track">
                <div class="progress-bar-fill" style="width: ${percent}%;"></div>
            </div>
        `;
        resultsContainer.appendChild(item);
    });
}

// Admin Dashboard Authentication & Handlers
function handleAdminLogin(e) {
    e.preventDefault();
    const pass = document.getElementById("input-admin-pass").value;
    if (pass === "admin123") {
        isAdminAuthenticated = true;
        document.getElementById("admin-login-box").style.display = "none";
        document.getElementById("admin-content-box").style.display = "block";
        renderAdminDashboard();
    } else {
        alert(i18n[currentLang].errWrongPass);
    }
}

function renderAdminDashboard() {
    const tbody = document.getElementById("admin-students-tbody");
    tbody.innerHTML = "";

    studentsData.forEach(st => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${st.id}</td>
            <td><strong>${st.class}</strong></td>
            <td>${st.fullName}</td>
            <td><code>${st.iin}</code></td>
            <td>
                <span class="badge-status ${st.hasVoted ? 'badge-voted' : 'badge-not-voted'}">
                    ${st.hasVoted ? 'Проголосовал ✓' : 'Не голосовал'}
                </span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Reset votes
function resetAllVotes() {
    if (confirm("Вы действительно хотите сбросить все голоса? Это действие невозможно отменить.")) {
        candidatesData.forEach(c => c.votes = 0);
        studentsData.forEach(s => s.hasVoted = false);
        votesLogData = [];
        saveDatabase();
        renderAdminDashboard();
        renderDemoChips();
        alert("Все результаты успешно сброшены!");
    }
}

// Export CSV
function exportVotesCSV() {
    let csv = "ID,Класс,ФИО,ИИН,Статус_Голосования\n";
    studentsData.forEach(s => {
        csv += `${s.id},"${s.class}","${s.fullName}",${s.iin},${s.hasVoted ? "Проголосовал" : "Не_голосовал"}\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `election_results_${Date.now()}.csv`;
    a.click();
}

// Restore default demo data
function restoreDemoData() {
    if (confirm("Восстановить исходную базу данных учеников и кандидатов?")) {
        localStorage.clear();
        initDatabase();
        loadDatabase();
        renderAdminDashboard();
        renderDemoChips();
        alert("Исходные данные успешно восстановлены!");
    }
}
