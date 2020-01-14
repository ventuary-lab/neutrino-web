

export function isNextJsPrefixed (url: string) {

    const splitted = url.split('/');

    return splitted[0] === '_next';
}

export function grabProcessArgumentValue(args: string[], key: string) {
    if (!args.includes(key)) {
        return;
    }

    return args[args.indexOf(key) + 1];
}