// Функция для проверки приватности базы данных
function showDb(database) {
    if (database.private) {
        console.log("База данных является приватной и не отображается.");
    } else {
        console.log(database.seriasDB);
    }
}

// Функция для запроса приватности у пользователя
function askPrivacy() {
    const answer = prompt("Хотите сделать базу данных приватной? (да/нет)").toLowerCase();
    return answer === "да";
}

// Запрос любимых жанров у пользователя
function getFavoriteGenres() {
    const genres = [];
    for (let i = 0; i < 3; i++) {
        const genre = prompt("Ваш любимый жанр?");
        genres.push(genre);
    }
    return genres;
}

// Пример использования
const database = {
    private: askPrivacy(), // Запрашиваем у пользователя приватность
    seriasDB: "Список сериалов..."
};

// Проверяем базу данных
showDb(database);

// Получаем любимые жанры
const favoriteGenres = getFavoriteGenres();
console.log("Ваши любимые жанры:", favoriteGenres);