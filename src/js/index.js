import '../scss/main.scss';
const panelScores = document.querySelector('.panel--js');
const panelScoresBtn = document.querySelector('.panel__btn--js');
const panelLevels = document.querySelector('.levels--js');
const panelLevelsBtn = document.querySelector('.levels__text--js');

const openPanelScores = () => {
    panelScores.classList.toggle('panel--hide');
};

const openPanelLevels = () => {
    panelLevels.classList.toggle('levels--hide');
};

panelScoresBtn.addEventListener('click', openPanelScores);
panelLevelsBtn.addEventListener('click', openPanelLevels);
