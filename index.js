const SANITIZER = require('./modules/sanitizer.js')
const URL_PATTERN = require('./modules/urlPattern.js')

const URL_GENERATOR = (string) => {

    let url = SANITIZER(string)
    url = URL_PATTERN(url)
    return url

}

module.exports = URL_GENERATOR