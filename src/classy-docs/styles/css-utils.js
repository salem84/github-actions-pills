import facepaint from 'facepaint';

const breakpoints = [1024, 1280];

export const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

export const colors = {
    firstActiveColor: `#d00`,
    secondActiveColor: `orange`,
    superLightGray: `#ccc`,

    textColor: `#555`,
    lightTextColor:  `#777`,
    superLightTextColor:  `#aaa`,

    linkColor: `#a00`,
    hoverLinkColor: `#d00`,

    scrollBarThumb: `#eaeaea`,
    scrollBarTrack: `#f9f9f9`
}