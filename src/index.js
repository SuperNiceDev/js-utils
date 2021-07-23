export { default as isUserAgentSearchBot } from "./browser/isUserAgentSearchBot";
// import * as browser from './browser'
// export {browser}

export { getLocalStorageItem, setLocalStorageItem } from "./data/localStrorage";
export { default as shuffleArray } from "./data/shuffleArray";

export {
  findNearestMarkerByAddress,
  getMarkerByAddress,
} from "./google/google";

export { default as getRandomInt } from "./number/getRandomInt";
export { default as getRandomFloat } from "./number/getRandomFloat";
export { default as getRangeProgress } from "./number/getRangeProgress";

export { default as loadScript } from "./script/loadScript";

export { default as cleanPath } from "./string/cleanPath";
export { default as fixedEncodeURIComponent } from "./string/fixedEncodeURIComponent";
export { default as replaceUmlauts } from "./string/replaceUmlauts";
export { default as validateEmail } from "./string/validateEmail";
