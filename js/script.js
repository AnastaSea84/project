"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// Создаём объект:
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Задаем пользователю вопросы:
const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('Ваша оценка?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('Ваша оценка?', '');

// Передаём ответы пользователя в объект "movies"
// Переменная в [] будет ключом, переменная после "=" - значением
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
// В консоль получим объект с введёнными данными