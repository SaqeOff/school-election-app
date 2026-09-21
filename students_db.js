// Mock Database for Kazakhstani School Parliament Elections
const DEFAULT_STUDENTS = [
    { id: 1, class: "11А", fullName: "Аманжолов Санжар Ерланович", iin: "070415501234", hasVoted: false },
    { id: 2, class: "11А", fullName: "Бейсенова Динара Кайратовна", iin: "070822602345", hasVoted: false },
    { id: 3, class: "11А", fullName: "Жумабаев Мадияр Русланович", iin: "070211503456", hasVoted: false },
    { id: 4, class: "11Б", fullName: "Касымов Арман Серикович", iin: "071105504567", hasVoted: false },
    { id: 5, class: "11Б", fullName: "Нурланова Аделина Тимуровна", iin: "070630605678", hasVoted: false },
    { id: 6, class: "10А", fullName: "Оспанов Алдияр Бауыржанович", iin: "080312506789", hasVoted: false },
    { id: 7, class: "10А", fullName: "Сатыбалиева Камила Айдаровна", iin: "080918607890", hasVoted: false },
    { id: 8, class: "10Б", fullName: "Султанов Темирлан Муратович", iin: "081225508901", hasVoted: false },
    { id: 9, class: "10Б", fullName: "Талгатова Томирис Данияровна", iin: "080704609012", hasVoted: false },
    { id: 10, class: "9А", fullName: "Утегенов Бекарыс Асылбекович", iin: "090514500123", hasVoted: false },
    { id: 11, class: "9А", fullName: "Шакирова Мадина Армановна", iin: "091028601234", hasVoted: false },
    { id: 12, class: "9Б", fullName: "Ибраев Алихан Канатбекұлы", iin: "090109502345", hasVoted: false }
];

const DEFAULT_CANDIDATES = [
    {
        id: "cand_1",
        name: "Алихан Смагулов",
        class: "11 'А'",
        motto: "«Знания, Технологии и Справедливость — Школа Будущего!»",
        photo: "assets/candidate1.jpg",
        program: [
            "Создание IT-хаба и VR-лаборатории для учеников",
            "Организация киберспортивных турниров между классами",
            "Обновление системы школьного буфета и зон отдыха",
            "Введение 'Дня без формы' один раз в месяц"
        ],
        votes: 14
    },
    {
        id: "cand_2",
        name: "Айзере Нургалиева",
        class: "10 'Б'",
        motto: "«Твое время, твой голос, наши совместные победы!»",
        photo: "assets/candidate2.jpg",
        program: [
            "Организация благотворительных ярмарок и Эко-субботников",
            "Клуб дебатов на английском и казахском языках",
            "Зона релаксации и пуфы в библиотеке для чтения и отдыха",
            "Система менторства: старшеклассники помогают младшим"
        ],
        votes: 19
    },
    {
        id: "cand_3",
        name: "Данияр Темирбеков",
        class: "11 'Б'",
        motto: "«Движение — жизнь: Спорт, Творчество и Драйв!»",
        photo: "assets/candidate3.jpg",
        program: [
            "Модернизация спортивных секций (футбол, баскетбол, волейбол)",
            "Ежемесячные творческие вечера и акустические концерты",
            "Улучшение школьного радио и создание видео-подкаста",
            "Создание комиссии по защите прав учеников"
        ],
        votes: 11
    }
];

// Initialize database in LocalStorage if empty
function initDatabase() {
    if (!localStorage.getItem("school_students_db")) {
        localStorage.setItem("school_students_db", JSON.stringify(DEFAULT_STUDENTS));
    }
    if (!localStorage.getItem("school_candidates_db")) {
        localStorage.setItem("school_candidates_db", JSON.stringify(DEFAULT_CANDIDATES));
    }
    if (!localStorage.getItem("school_votes_log")) {
        localStorage.setItem("school_votes_log", JSON.stringify([]));
    }
}

initDatabase();
