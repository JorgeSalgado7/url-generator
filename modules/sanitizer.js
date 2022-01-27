const SANITIZER = (string) => {

    string
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

    return string

}

module.exports = SANITIZER