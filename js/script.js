"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// Создаём объект:
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (numberOfFilms && numberOfFilms >= 2) {
    for (let i = 0; i < 2; i++) {
        const watchedFilm = prompt('Назовите один из просмотренных фильмов');
        if (watchedFilm != null && watchedFilm.length >= 2 && watchedFilm.length < 50) {
            const filmRate = +prompt('Дайте этому фильму оценку');
            if (filmRate < 0 || filmRate > 10) {
                alert('Пожалуйста, поставьте оценку от 0 до 10');
                i--;
            } else if (filmRate >= 8 && filmRate <= 10) {
                alert('Благодарим за столь высокую оценку!');
            } else if (filmRate <= 5 && filmRate >= 0) {
                alert('Как жаль, что вам не понравилось!');
            } else if (filmRate > 5 && filmRate < 8) {
                alert('Спасибо за вашу оценку!');
            }
            personalMovieDB.movies[watchedFilm] = filmRate;
        } else if (watchedFilm == null) {
            i--;
        }
        else if (watchedFilm.length < 2 || watchedFilm.length > 50) {
            alert('Не бывает таких фильмов');
            i--;
        } else {
            alert('ERROR!!!!');
            console.log('Some error');
        }
    }

    alert('Спасибо за ваши ответы! =)');
    console.log(personalMovieDB);

} else if (numberOfFilms < 2 && numberOfFilms != null) {
    alert('С вами просто не о чем разговаривать...');
    console.log('Не смотрел фильмов');
} else {
    alert('ну и чего...');
    console.log('ошибка');

}

(personalMovieDB.count > 30) ? alert('А вы киноман!') : alert('Впереди у вас ещё много хороших фильмов!');





/*
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('Ваша оценка?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        // Если все условия в скобках выполнены - выполняем действие -->
        personalMovieDB.movies[a] = b;  // присваиваем даннные в объект
        console.log('OOOKKK!!'); // и выводим в консоль OK
    } else { // Если не выполнено хотя бы одно -->
        console.log('ERR!!!'); // выводим в консоль ERR
        i--; // и уменьшаем значение i на единицу - таким образом откатывая цикл на шаг назад
    }
}
*/
/*
if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Просмотрено немало фильмов');
    console.log('Просмотрено немало фильмов');
} else if (personalMovieDB.count > 30) {
    alert('Да вы киноман!');
    console.log('Да вы киноман!');
} else {
    alert('Произошла ошибка!');
    console.log('Произошла ошибка!');

}

console.log(personalMovieDB);
*/