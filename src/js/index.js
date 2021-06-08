import '../scss/main.scss';
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
const titleWin = document.querySelector('.win--js');
const levelScores = document.querySelector('.scores__level--js');
const winsScores = document.querySelector('.scores__wins--js');
const lossesScores = document.querySelector('.scores__losses--js');
const btnNewGame = document.querySelector('.new-game--js');
const buttons = document.querySelector('.buttons--js');
const btnResetGame = document.querySelector('.scores__btn--js');
const timerScores = document.querySelector('.scores__timer--js');
const btnLevelOne = document.querySelector('.levels__btn--one--js');
const btnLevelTwo = document.querySelector('.levels__btn--two--js');
const btnLevelThree = document.querySelector('.levels__btn--three--js');
const btnsLevels = document.querySelectorAll('.levels__btn');

const game = {
    level: 1,
    time: 60 * 10,
    getRandomTime(min, max) {
        return Math.trunc(Math.random() * (max - min + 1) + min);
    },
    player1: {
        totalScores: 0,
        currentScores: 0,
        wins: 0,
    },
    player2: {
        totalScores: 0,
        currentScores: 0,
        wins: 0,
    },
};

btnLevelTwo.addEventListener('click', () => {
    btnLevelOne.classList.remove('levels__btn--active');
    btnLevelTwo.classList.add('levels__btn--active');
    btnLevelThree.classList.remove('levels__btn--active');
    const countDown = () => {
        if (game.time <= 0) {
            clearInterval(idTimer);
            timerScores.textContent = `00:00`;
        } else {
            let time = game.time--;
            let minutes = parseInt(time / 60);
            let seconds = parseInt(time % 60);
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            timerScores.textContent = `${minutes}:${seconds}`;
        }
    };

    let idTimer = setInterval(countDown, 1000);
    btnsLevels.forEach(btn => {
        btn.setAttribute('disabled', true);
        btn.style.borderColor = '#32415b';
    });
    levelScores.textContent = `level: ${game.level + 1}`;
});

btnLevelThree.addEventListener('click', () => {
    btnLevelOne.classList.remove('levels__btn--active');
    btnLevelTwo.classList.remove('levels__btn--active');
    btnLevelThree.classList.add('levels__btn--active');
    let randomTime = game.getRandomTime(600, 1000);
    const countDown = () => {
        if (randomTime <= 0) {
            clearInterval(idTimer);
            timerScores.textContent = `00:00`;
        } else {
            let time = randomTime--;
            let minutes = parseInt(time / 60);
            let seconds = parseInt(time % 60);
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            timerScores.textContent = `?? : ??`;
        }
    };

    let idTimer = setInterval(countDown, 1000);
    btnsLevels.forEach(btn => {
        btn.setAttribute('disabled', true);
        btn.style.borderColor = '#32415b';
    });

    levelScores.textContent = `level: ${game.level + 2}`;
});

const randomNumbers = () => {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    const randomNumber2 = Math.trunc(Math.random() * 6) + 1;
    cubeImgOne.src = `src/assets/icons/${randomNumber}.png`;
    cubeImgTwo.src = `src/assets/icons/${randomNumber2}.png`;

    if (randomNumber !== 1 && randomNumber2 !== 1) {
        if (boardPlayerOne.classList.contains('active')) {
            game.player1.currentScores += randomNumber + randomNumber2;
            currentScoreOne.textContent = game.player1.currentScores;
        } else if (boardPlayerTwo.classList.contains('active')) {
            game.player2.currentScores += randomNumber + randomNumber2;
            currentScoreTwo.textContent = game.player2.currentScores;
        }
    } else if (randomNumber === 1 || randomNumber2 === 1) {
        if (boardPlayerOne.classList.contains('active')) {
            currentScoreOne.textContent = 0;
            game.player1.currentScores = 0;
            game.player1.totalScores += 0;
            scoreOne.textContent = game.player1.totalScores;
            let percentageScore = (220 * game.player1.totalScores) / 100;
            progressBarLoaderPlayerOne.style.width = `${percentageScore <= 220 ? percentageScore : 218}px`;
            setActivePlayer();
        } else if (boardPlayerTwo.classList.contains('active')) {
            currentScoreTwo.textContent = 0;
            game.player2.currentScores = 0;
            game.player2.totalScores += 0;
            scoreTwo.textContent = game.player2.totalScores;
            let percentageScore = (220 * game.player2.totalScores) / 100;
            progressBarLoaderPlayerTwo.style.width = `${percentageScore <= 220 ? percentageScore : 218}px`;
            setActivePlayer();
        }
    }
};

const holdScore = () => {
    game.player1.totalScores += game.player1.currentScores;
    game.player2.totalScores += game.player2.currentScores;
    scoreOne.textContent = game.player1.totalScores;
    scoreTwo.textContent = game.player2.totalScores;
    game.player1.currentScores = 0;
    game.player2.currentScores = 0;
    currentScoreOne.textContent = 0;
    currentScoreTwo.textContent = 0;
    let percentageScorePlayer1 = (220 * game.player1.totalScores) / 100;
    progressBarLoaderPlayerOne.style.width = `${percentageScorePlayer1 <= 220 ? percentageScorePlayer1 : 218}px`;
    let percentageScorePlayer2 = (220 * game.player2.totalScores) / 100;
    progressBarLoaderPlayerTwo.style.width = `${percentageScorePlayer2 <= 220 ? percentageScorePlayer2 : 218}px`;
    if (game.player1.totalScores >= 100) {
        titleWin.classList.remove('hide');
        titleWin.textContent = 'YOU WIN!!!';
        game.player1.wins += 1;
        winsScores.textContent = `wins: ${game.player1.wins}`;
        btnNewGame.classList.remove('hide');
        buttons.classList.add('hide');
    } else if (game.player2.totalScores >= 100) {
        titleWin.classList.remove('hide');
        titleWin.textContent = 'YOU LOST!!!';
        game.player2.wins += 1;
        lossesScores.textContent = `losses: ${game.player2.wins}`;
        btnNewGame.classList.remove('hide');
        buttons.classList.add('hide');
    }
};

const openPanelScores = () => {
    panelScores.classList.toggle('panel--hide');
};

const openPanelLevels = () => {
    panelLevels.classList.toggle('levels--hide');
};

const startNewGame = () => {
    titleWin.classList.add('hide');
    btnNewGame.classList.add('hide');
    buttons.classList.remove('hide');
    buttons.classList.remove('hide');
    game.player1.totalScores = 0;
    game.player2.totalScores = 0;
    currentScoreOne.textContent = 0;
    currentScoreTwo.textContent = 0;
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    progressBarLoaderPlayerOne.style.width = '0px';
    progressBarLoaderPlayerTwo.style.width = '0px';
    cubeImgOne.src = `src/assets/icons/${0}.png`;
    cubeImgTwo.src = `src/assets/icons/${0}.png`;
};

const resetGame = () => {
    document.location.reload(true);
};

btnResetGame.addEventListener('click', resetGame);
btnNewGame.addEventListener('click', startNewGame);
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
    if (e.key === 'Enter' || e.key === 'Escape') {
        logIn();
    }
});

window.addEventListener('keyup', e => {
    if (e.key === 'Enter' || e.key === 'Escape') {
        logIn();
        startNewGame();
    }
});

window.addEventListener('keyup', e => {
    if (e.key === 'ArrowUp') {
        randomNumbers();
    }
});

window.addEventListener('keyup', e => {
    if (e.key === 'ArrowDown') {
        holdScore();
        setActivePlayer();
    }
});

loginPanelBtn.addEventListener('click', logIn);

randomNumbersBtn.addEventListener('click', randomNumbers);

holdBtn.addEventListener('click', holdScore);

const setActivePlayer = () => {
    scoreOne.classList.toggle('player--active');
    scoreTwo.classList.toggle('player--active');
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
};

holdBtn.addEventListener('click', setActivePlayer);
