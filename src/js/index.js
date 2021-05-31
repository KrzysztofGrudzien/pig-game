import '../scss/main.scss';
//import randomNumbers from './helpers/randomNumbers';
const panelScores = document.querySelector('.panel--js');
const panelScoresBtn = document.querySelector('.panel__btn--js');
const panelLevels = document.querySelector('.levels--js');
const panelLevelsBtn = document.querySelector('.levels__text--js');
const loginPanelOverlay = document.querySelector('.login-panel-overlay-bg--js');
const loginPanelBtn = document.querySelector('.login-panel__btn--js');
const loginPanelInput = document.querySelector('.login-panel__input--js');
const userNameText = document.querySelector('.header__login--js');
const randomNumbersBtn = document.querySelector('.btn--one--js');
const holdBtn = document.querySelector('.btn--two--js');
const cubeImgOne = document.querySelector('.cube__img--one--js');
const cubeImgTwo = document.querySelector('.cube__img--two--js');
const scoreOne = document.querySelector('.game__score--one--js');
const scoreTwo = document.querySelector('.game__score--two--js');
const currentScoreOne = document.querySelector('.current__score--one--js');
const currentScoreTwo = document.querySelector('.current__score--two--js');
const boardPlayerOne = document.querySelector('.player--one--js');
const boardPlayerTwo = document.querySelector('.player--two--js');
const titlePlayerOne = document.querySelector('.player__title--one--js');
const titlePlayerTwo = document.querySelector('.player__title--two--js');
const loginPlayerOne = document.querySelector('.player__login--one--js');
const loginPlayerTwo = document.querySelector('.player__login--two--js');
const markPlayerOne = document.querySelector('.player-mark--one--js');
const markPlayerTwo = document.querySelector('.player-mark--two--js');
const progressBarStartPlayerOne = document.querySelector('.progress__start--one--js');
const progressBarEndPlayerOne = document.querySelector('.progress__end--one--js');
const progressBarStartPlayerTwo = document.querySelector('.progress__start--two--js');
const progressBarEndPlayerTwo = document.querySelector('.progress__end--two--js');
const progressBarPlayerOne = document.querySelector('.progress__bar--one--js');
const progressBarPlayerTwo = document.querySelector('.progress__bar--two--js');
const currentScoreBorderPlayerOne = document.querySelector('.current--one--js');
const currentScoreBorderPlayerTwo = document.querySelector('.current--two--js');
const currentTextScorePlayerOne = document.querySelector('.current__text--one--js');
const currentTextScorePlayerTwo = document.querySelector('.current__text--two--js');
const currentScorePlayerOne = document.querySelector('.current__score--one--js');
const currentScorePlayerTwo = document.querySelector('.current__score--two--js');
const progressBarLoaderPlayerOne = document.querySelector('.progress__bar--loader--one--js');
const progressBarLoaderPlayerTwo = document.querySelector('.progress__bar--loader--two--js');

const game = {
    levels: [0, 1, 2],
    time: 0,
    player1: {
        totalScores: [],
        currentScores: 0,
        wins: [],
        losses: [],
    },
    player2: {
        totalScores: [],
        currentScores: 0,
        wins: [],
        losses: [],
    },
};

const randomNumbers = () => {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    const randomNumber2 = Math.trunc(Math.random() * 6) + 1;
    cubeImgOne.src = `src/assets/icons/${randomNumber}.png`;
    cubeImgTwo.src = `src/assets/icons/${randomNumber2}.png`;

    if (scoreOne.classList.contains('player--active')) {
        game.player1.totalScores.push(randomNumber, randomNumber2);
        const currentScore = game.player1.totalScores.reduce(
            (accumulator, currentValue = 0) => accumulator + currentValue,
        );
        game.player1.currentScores += randomNumber + randomNumber2;
        currentScoreOne.textContent = currentScore;
        let percentageScore = (220 * game.player1.currentScores) / 100;
        progressBarLoaderPlayerOne.style.width = `${percentageScore <= 220 ? percentageScore : 218}px`;
    } else if (scoreTwo.classList.contains('player--active')) {
        game.player2.totalScores.push(randomNumber, randomNumber2);
        const currentScore = game.player2.totalScores.reduce(
            (accumulator, currentValue = 0) => accumulator + currentValue,
        );
        game.player2.currentScores += randomNumber + randomNumber2;
        currentScoreTwo.textContent = currentScore;
        let percentageScore = (220 * game.player2.currentScores) / 100;
        progressBarLoaderPlayerTwo.style.width = `${percentageScore <= 220 ? percentageScore : 218}px`;
    }
};

const openPanelScores = () => {
    panelScores.classList.toggle('panel--hide');
};

const openPanelLevels = () => {
    panelLevels.classList.toggle('levels--hide');
};

panelScoresBtn.addEventListener('click', openPanelScores);
panelLevelsBtn.addEventListener('click', openPanelLevels);

const logIn = () => {
    if (loginPanelInput.value !== '') {
        loginPanelOverlay.remove();
        userNameText.textContent = `Welcome, ${loginPanelInput.value}`;
        loginPlayerOne.textContent = `${loginPanelInput.value}`;
    } else {
        loginPanelOverlay.remove();
        userNameText.textContent = 'Welcome, unknow';
        loginPlayerOne.textContent = 'unknow';
    }
};

loginPanelInput.addEventListener('keyup', e => {
    if (e.keyCode === 13 || e.keyCode === 27) {
        logIn();
    }
});

window.addEventListener('keyup', e => {
    if (e.keyCode === 13 || e.keyCode === 27) {
        logIn();
    }
});

loginPanelBtn.addEventListener('click', logIn);

randomNumbersBtn.addEventListener('click', randomNumbers);

holdBtn.addEventListener('click', () => {
    scoreOne.classList.toggle('player--active');
    scoreTwo.classList.toggle('player--active');
    scoreOne.textContent = game.player1.currentScores;
    game.player1.totalScores = [];
    currentScoreOne.textContent = 0;
    scoreTwo.textContent = game.player2.currentScores;
    game.player2.totalScores = [];
    currentScoreTwo.textContent = 0;
    boardPlayerOne.classList.toggle('active');
    boardPlayerTwo.classList.toggle('active');
    titlePlayerOne.classList.toggle('player--active');
    titlePlayerTwo.classList.toggle('player--active');
    loginPlayerOne.classList.toggle('player--active');
    loginPlayerTwo.classList.toggle('player--active');
    markPlayerOne.classList.toggle('player__mark--active');
    markPlayerTwo.classList.toggle('player__mark--active');
    progressBarStartPlayerOne.classList.toggle('player--active');
    progressBarEndPlayerOne.classList.toggle('player--active');
    progressBarStartPlayerTwo.classList.toggle('player--active');
    progressBarEndPlayerTwo.classList.toggle('player--active');
    progressBarPlayerTwo.classList.toggle('progress__bar--active');
    progressBarPlayerOne.classList.toggle('progress__bar--active');
    currentScoreBorderPlayerOne.classList.toggle('current--active');
    currentScoreBorderPlayerTwo.classList.toggle('current--active');
    currentTextScorePlayerOne.classList.toggle('player--active');
    currentTextScorePlayerTwo.classList.toggle('player--active');
    currentScorePlayerOne.classList.toggle('player--active');
    currentScorePlayerTwo.classList.toggle('player--active');
});
