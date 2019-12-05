

export function buildBem(className: string) {
    return {
        element: (elClassName: string, additionalEl?: string) => {
            const firstClassName = `${className}__${elClassName}`;

            return [
                firstClassName,
                additionalEl && `${firstClassName}_${additionalEl}`
            ].filter(Boolean).join(' ');
        },
        block: () => className
    }
}