import SlideDown from './slide-down';
import SlideUp from './slide-up';
export default class SlideToggle {
    /**
     * @param {HTMLElement} element
     * @param {Number} duration
     * @returns {Promise<boolean>}
     */
    constructor (element, duration = 467) {
        if (window.getComputedStyle(element).display === 'none') {
            return new SlideDown(element, duration);
        }
        return new SlideUp(element, duration);
    }
}
