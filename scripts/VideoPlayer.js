import './utils/pxToRem.js'
const rootSelector = '[data-js-video-player]'


class VideoPlayer {
    selectors = {
        root: rootSelector,
        video: '[data-js-video-player-video]',
        panel: '[data-js-video-player-panel]',
        playButton: '[data-js-video-player-play-button]',
    }

    stateClasses = {
        isActive: 'is-active'
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.videoElement = this.rootElement.querySelector(this.selectors.video);
        this.pannelElement = this.rootElement.querySelector(this.selectors.panel);
        this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton);
        this.bindEvents();
    }


    onPlayButtonClick = () => {
        this.videoElement.play();
        this.videoElement.controls = true;
        this.pannelElement.classList.remove(this.stateClasses.isActive)
    }


    onVideoPause = () => {

        this.videoElement.controls = false;
        this.pannelElement.classList.add(this.stateClasses.isActive)
    }





    bindEvents() {
        this.playButtonElement.addEventListener('click', this.onPlayButtonClick);
        this.videoElement.addEventListener('pause', this.onVideoPause);
    }
}


class VideoPLayerCollection {

    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach(el => {
            new VideoPlayer(el);
        });
    }

}

export default VideoPLayerCollection