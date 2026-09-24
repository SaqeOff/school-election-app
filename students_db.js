// Database & Default Data for Kazakhstani School Parliament Elections

const APP_DATA_VERSION = "2.1";

const DEFAULT_SETTINGS = {
    schoolNameRu: "КГУ «Школа-лицей № 1»",
    schoolNameKk: "«№ 1 Мектеп-лицейі» КММ",
    verificationMode: "smart",
    adminLogin: "admin",
    adminPass: "admin123"
};

const DEFAULT_STUDENTS = [
    { id: 1, class: "11А", fullName: "Аманжолов Санжар Ерланович", iin: "070415501234", hasVoted: false },
    { id: 2, class: "11А", fullName: "Бейсенова Динара Кайратовна", iin: "070822602345", hasVoted: true, votedFor: "cand_2" },
    { id: 3, class: "11А", fullName: "Жумабаев Мадияр Русланович", iin: "070211503456", hasVoted: false },
    { id: 4, class: "11Б", fullName: "Касымов Арман Серикович", iin: "071105504567", hasVoted: false },
    { id: 5, class: "11Б", fullName: "Нурланова Аделина Тимуровна", iin: "070630605678", hasVoted: true, votedFor: "cand_1" },
    { id: 6, class: "10А", fullName: "Оспанов Алдияр Бауыржанович", iin: "080312506789", hasVoted: false },
    { id: 7, class: "10А", fullName: "Сатыбалиева Камила Айдаровна", iin: "080918607890", hasVoted: false },
    { id: 8, class: "10Б", fullName: "Султанов Темирлан Муратович", iin: "081225508901", hasVoted: true, votedFor: "cand_2" },
    { id: 9, class: "10Б", fullName: "Талгатова Томирис Данияровна", iin: "080704609012", hasVoted: false },
    { id: 10, class: "9А", fullName: "Утегенов Бекарыс Асылбекович", iin: "090514500123", hasVoted: false },
    { id: 11, class: "9А", fullName: "Шакирова Мадина Армановна", iin: "091028601234", hasVoted: false },
    { id: 12, class: "9Б", fullName: "Ибраев Алихан Канатбекұлы", iin: "090109502345", hasVoted: false }
];

const DEFAULT_CANDIDATES = [
    {
        id: "cand_2",
        name: "Айзере Нургалиева",
        class: "10 'Б'",
        motto: "«Твое время, твой голос, наши совместные победы!»",
        photo: "assets/candidate2.jpg",
        color: "#00A3E0",
        program: [
            "Зона релаксации и пуфы в библиотеке для комфортного отдыха",
            "Организация ежесезонных благотворительных ярмарок и эко-субботников",
            "Клуб ораторского мастерства и дебатов на казахском и английском",
            "Система менторства: старшеклассники помогают младшим классам"
        ],
        votes: 168
    },
    {
        id: "cand_1",
        name: "Алихан Смагулов",
        class: "11 'А'",
        motto: "«Знания, Технологии и Справедливость — Школа Будущего!»",
        photo: "assets/candidate1.jpg",
        color: "#E5B80B",
        program: [
            "Создание школьного IT-хаба и VR-лаборатории для учеников",
            "Официальные межклассовые киберспортивные турниры с призами",
            "Обновление ассортимента школьной столовой и зоны кафетерия",
            "Введение 'Дня без школьной формы' один раз в месяц"
        ],
        votes: 114
    },
    {
        id: "cand_3",
        name: "Амина Жумабекова",
        class: "11 'Б'",
        motto: "«Экология, Творчество и Поддержка каждого ученика!»",
        photo: "assets/candidate3.jpg",
        color: "#10B981",
        program: [
            "Школьный эко-проект по раздельному сбору пластика и макулатуры",
            "Регулярные арт-выставки ученических работ в холле школы",
            "Открытие книжного клуба с обменом интересной литературой",
            "Психологическая почта доверия и дни снятия стресса перед экзаменами"
        ],
        votes: 76
    }
];

// Initialize database in LocalStorage with automatic version migration
function initDatabase(forceReset = false) {
    const isOldVersion = localStorage.getItem("school_data_version") !== APP_DATA_VERSION;
    
    if (forceReset || isOldVersion || !localStorage.getItem("school_candidates_db")) {
        localStorage.setItem("school_candidates_db", JSON.stringify(DEFAULT_CANDIDATES));
        localStorage.setItem("school_data_version", APP_DATA_VERSION);
    }
    if (forceReset || !localStorage.getItem("school_students_db")) {
        localStorage.setItem("school_students_db", JSON.stringify(DEFAULT_STUDENTS));
    }
    if (forceReset || !localStorage.getItem("school_settings")) {
        localStorage.setItem("school_settings", JSON.stringify(DEFAULT_SETTINGS));
    }
    if (forceReset || !localStorage.getItem("school_votes_log")) {
        localStorage.setItem("school_votes_log", JSON.stringify([]));
    }
}

initDatabase();
