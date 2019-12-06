

export function isNextJsPrefixed (url: string) {

    const splitted = url.split('/');

    return splitted[0] === '_next';
}