const SANITIZER = (string) => {

    let urlSanitize = string
        .replaceAll('|', '')
        .replaceAll('°', '')
        .replaceAll('¬', '')
        .replaceAll('!', '')
        .replaceAll('"', '')
        .replaceAll('#', '')
        .replaceAll('$', '')
        .replaceAll('%', '')
        .replaceAll('%', '')
        .replaceAll('&', '')
        .replaceAll('/', '')
        .replaceAll('(', '')
        .replaceAll(')', '')
        .replaceAll('=', '')
        .replaceAll('¿', '')
        .replaceAll('?', '')
        .replaceAll("'", '')
        .replaceAll('\'', '')
        .replaceAll('¡', '')
        .replaceAll('´', '')
        .replaceAll('+', '')
        .replaceAll('*', '')
        .replaceAll('~', '')
        .replaceAll('{', '')
        .replaceAll('}', '')
        .replaceAll('[', '')
        .replaceAll(']', '')
        .replaceAll('^', '')
        .replaceAll('`', '')
        .replaceAll(',', '')
        .replaceAll(';', '')
        .replaceAll('.', '')
        .replaceAll(':', '')
        .replaceAll('_', '')
        .replaceAll('@', '')
        .replaceAll('<', '')
        .replaceAll('>', '')

    return urlSanitize

}

module.exports = SANITIZER