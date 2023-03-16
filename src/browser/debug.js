// https://www.npmjs.com/package/debug
// import debug from 'debug'
// import bowser from 'bowser'


// const isDevMode = (process.env.NODE_ENV !== 'production')
// const isDevMode = true

// const browser = bowser.getParser(window.navigator.userAgent)
// const browserInfo = browser.getBrowser()
// console.log('>>>>>>>>>>>>>>>>>>>>>>> browserInfo.name:', browserInfo.name)


const debug = (id) => (...rest) =>
{
  // https://developers.google.com/web/tools/chrome-devtools/console/console-write#styling_console_output_with_css
  console.log(id, ...rest);
};

export default debug;


// https://developers.google.com/web/tools/chrome-devtools/console/api
// console.dir(elem)

// if (window) {
//   window.debug = log;
// }

// if (!isDevMode)
// if (browserInfo.name === 'Internet Explorer')
// {
//   window.debug = log
// }
// else
// {
//   window.debug = require('debug')
// }


// to enable debug paste line below into browser console
// localStorage.debug = 'log:*'

// // const log = window.debug('log: ***COMPONENT_NAME***')

// log('func() this:', this)
// log('func() this:', this)

// console.log('log ...')
// console.warn('warn ...')
// console.error('error ...')
// console.table('error ...')
