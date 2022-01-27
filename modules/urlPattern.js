const URL_PATTERN = (string) => {

    let urlPattern = string.toLowerCase().replaceAll(' ', '-')
    return urlPattern
}

module.exports = URL_PATTERN