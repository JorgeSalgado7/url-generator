const SANITIZE = (string) => {

    string
        .replaceAll(' ', '-')
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