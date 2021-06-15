import '../scss/main.scss';
import confetti from 'canvas-confetti';
import randomTime from './helpers/randomTime';
const panelScores = document.querySelector('.panel--js');
const btnPanelScores = document.querySelector('.panel__btn--js');
const panelLevels = document.querySelector('.levels--js');
const btnPanelLevels = document.querySelector('.levels__text--js');
const loginPanelOverlay = document.querySelector('.login-panel-overlay-bg--js');
const btnPanelLogin = document.querySelector('.login-panel__btn--js');
const loginPanelInput = document.querySelector('.login-panel__input--js');
const userNameText = document.querySelector('.header__login--js');
const btnRandomNumbers = document.querySelector('.btn--one--js');
const btnHoldScore = document.querySelector('.btn--two--js');
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
const winScores = document.querySelector('.scores__wins--js');
const lossesScores = document.querySelector('.scores__losses--js');
const btnNewGame = document.querySelector('.new-game--js');
const btnsWrapper = document.querySelector('.buttons--js');
const btnResetGame = document.querySelector('.scores__btn--js');
const timerScores = document.querySelector('.scores__timer--js');
const btnLevelOne = document.querySelector('.levels__btn--one--js');
const btnLevelTwo = document.querySelector('.levels__btn--two--js');
const btnLevelThree = document.querySelector('.levels__btn--three--js');
const btnsLevels = document.querySelectorAll('.levels__btn--js');

const game = {
    level: 1,
    time: 60 * 5,
    randomTime,
    player1: {
        totalScore: 0,
        currentScore: 0,
        wins: 0,
    },
    player2: {
        totalScore: 0,
        currentScore: 0,
        wins: 0,
    },
};

let time = game.time,
    level = game.level,
    player1Wins = game.player1.wins,
    player2Wins = game.player2.wins,
    player1TotalScore = game.player1.totalScore,
    player2TotalScore = game.player2.totalScore,
    player1CurrentScore = game.player1.currentScore,
    player2CurrentScore = game.player2.currentScore;

const keyboardShortcutsResetGame = () => {
    window.addEventListener('keyup', e => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
            resetGame();
        }
    });
};

const newMatchContent = info => {
    titleWin.classList.remove('hide');
    titleWin.textContent = `${info}`;
    btnNewGame.classList.add('hide');
    btnResetGame.textContent = 'New Match';
    btnsWrapper.classList.add('hide');
    keyboardShortcutsResetGame();
};

btnLevelTwo.addEventListener('click', () => {
    btnLevelOne.classList.remove('levels__btn--active');
    btnLevelTwo.classList.add('levels__btn--active');
    btnLevelThree.classList.remove('levels__btn--active');

    const countDown = () => {
        if (time <= 0) {
            clearInterval(idTimer);
            timerScores.textContent = `00:00`;
            if (player1Wins > player2Wins) {
                let info = `YOU'RE THE BEST !!!`;
                createConfettiAnimationFireworks();
                newGameContent(info);
            } else if (player1Wins < player2Wins) {
                let info = `YOU'RE LOOSER !!!`;
                createConfettiAnimationFireworks();
                newGameContent(info);
            } else {
                let info = `YOU DRAW !!!`;
                newGameContent(info);
            }
        } else {
            let timeGame = time--;
            let minutes = parseInt(timeGame / 60);
            let seconds = parseInt(timeGame % 60);
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
    levelScores.textContent = `level: ${level + 1}`;
});

btnLevelThree.addEventListener('click', () => {
    btnLevelOne.classList.remove('levels__btn--active');
    btnLevelTwo.classList.remove('levels__btn--active');
    btnLevelThree.classList.add('levels__btn--active');
    let randomTime = game.randomTime(60, 120);

    const countDown = () => {
        if (randomTime <= 0) {
            clearInterval(idTimer);
            timerScores.textContent = `00:00`;
            if (player1Wins > player2Wins) {
                let info = `YOU'RE THE BEST !!!`;
                createConfettiAnimationFireworks();
                newMatchContent(info);
            } else if (player1Wins < player2Wins) {
                let info = `YOU'RE LOOSER !!!`;
                createConfettiAnimationFireworks();
                newMatchContent(info);
            } else {
                let info = `YOU DRAW !!!`;
                newMatchContent(info);
            }
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

    levelScores.textContent = `level: ${level + 2}`;
});

const randomNumbers = () => {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    const randomNumber2 = Math.trunc(Math.random() * 6) + 1;
    cubeImgOne.src = `src/assets/icons/${randomNumber}.png`;
    cubeImgTwo.src = `src/assets/icons/${randomNumber2}.png`;

    if (randomNumber !== 1 && randomNumber2 !== 1) {
        if (boardPlayerOne.classList.contains('active')) {
            player1CurrentScore += randomNumber + randomNumber2;
            currentScoreOne.textContent = player1CurrentScore;
        } else if (boardPlayerTwo.classList.contains('active')) {
            player2CurrentScore += randomNumber + randomNumber2;
            currentScoreTwo.textContent = player2CurrentScore;
        }
    } else if (randomNumber === 1 || randomNumber2 === 1) {
        if (boardPlayerOne.classList.contains('active')) {
            currentScoreOne.textContent = 0;
            player1CurrentScore = 0;
            player1TotalScore += 0;
            scoreOne.textContent = player1TotalScore;
            let percentageScore = (220 * player1TotalScore) / 100;
            progressBarLoaderPlayerOne.style.width = `${percentageScore <= 220 ? percentageScore : 218}px`;
            setActivePlayer();
        } else if (boardPlayerTwo.classList.contains('active')) {
            currentScoreTwo.textContent = 0;
            player2CurrentScore = 0;
            player2TotalScore += 0;
            scoreTwo.textContent = player2TotalScore;
            let percentageScore = (220 * player2TotalScore) / 100;
            progressBarLoaderPlayerTwo.style.width = `${percentageScore <= 220 ? percentageScore : 218}px`;
            setActivePlayer();
        }
    }
};

const holdScore = () => {
    player1TotalScore += player1CurrentScore;
    player2TotalScore += player2CurrentScore;
    scoreOne.textContent = player1TotalScore;
    scoreTwo.textContent = player2TotalScore;
    player1CurrentScore = 0;
    player2CurrentScore = 0;
    currentScoreOne.textContent = 0;
    currentScoreTwo.textContent = 0;
    let percentageScorePlayer1 = (220 * player1TotalScore) / 100;
    progressBarLoaderPlayerOne.style.width = `${percentageScorePlayer1 <= 220 ? percentageScorePlayer1 : 218}px`;
    let percentageScorePlayer2 = (220 * player2TotalScore) / 100;
    progressBarLoaderPlayerTwo.style.width = `${percentageScorePlayer2 <= 220 ? percentageScorePlayer2 : 218}px`;
    if (player1TotalScore >= 100) {
        createConfettiAnimationBasic();
        titleWin.classList.remove('hide');
        titleWin.textContent = 'YOU WIN!!!';
        player1Wins += 1;
        winScores.textContent = `wins: ${player1Wins}`;
        btnNewGame.classList.remove('hide');
        btnsWrapper.classList.add('hide');
        if (player1Wins >= 10) {
            let info = `YOU'RE THE BEST !!!`;
            createConfettiAnimationFireworks();
            newMatchContent(info);
        }
    } else if (player2TotalScore >= 100) {
        createConfettiAnimationBasic();
        titleWin.classList.remove('hide');
        titleWin.textContent = 'YOU LOST!!!';
        player2Wins += 1;
        lossesScores.textContent = `losses: ${player2Wins}`;
        btnNewGame.classList.remove('hide');
        btnsWrapper.classList.add('hide');
        if (player2Wins >= 10) {
            let info = `YOU'RE LOOSER !!!`;
            createConfettiAnimationFireworks();
            newMatchContent(info);
        }
    }

    if (player1Wins > 0 || player2Wins > 0) {
        btnsLevels.forEach(btn => {
            btn.setAttribute('disabled', true);
            btn.style.borderColor = '#32415b';
        });
        btnLevelOne.classList.add('levels__btn--active');
        btnLevelTwo.classList.remove('levels__btn--active');
        btnLevelThree.classList.remove('levels__btn--active');
    }
};

const createConfettiAnimationFireworks = () => {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            }),
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            }),
        );
    }, 250);
    setTimeout(() => {
        canvas.remove();
    }, 1000);
};

const createConfettiAnimationBasic = () => {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
        confetti(
            Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
            }),
        );
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
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
    btnsWrapper.classList.remove('hide');
    player1TotalScore = 0;
    player2TotalScore = 0;
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
btnPanelScores.addEventListener('click', openPanelScores);
btnPanelLevels.addEventListener('click', openPanelLevels);

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
    if (e.key === 'Enter') {
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

btnPanelLogin.addEventListener('click', logIn);

btnRandomNumbers.addEventListener('click', randomNumbers);

btnHoldScore.addEventListener('click', holdScore);

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
