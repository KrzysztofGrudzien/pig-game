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
const cubeImgOne = document.querySelector('.cube__img--one--js');
const cubeImgTwo = document.querySelector('.cube__img--two--js');

const game = {
    levels: [0, 1, 2],
    time: 0,
    player1: {
        totalScores: [],
        currentScores: 0,
        isActive: true,
        wins: [],
        losses: [],
    },
    player2: {
        totalScores: [],
        currentScores: 0,
        isActive: false,
        wins: [],
        losses: [],
    },
};

const randomNumbers = () => {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    const randomNumber2 = Math.trunc(Math.random() * 6) + 1;
    cubeImgOne.src = `src/assets/icons/${randomNumber}.png`;
    cubeImgTwo.src = `src/assets/icons/${randomNumber2}.png`;
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
    } else {
        loginPanelOverlay.remove();
        userNameText.textContent = 'Welcome, unknow';
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
