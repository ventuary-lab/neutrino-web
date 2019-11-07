import "reflect-metadata";

const metadataKey = Symbol("key");

export function dictionaryKey(key: string) {
    return Reflect.metadata(metadataKey, key);
}

export function getDictionaryKey(target: any, propertyKey: string) {
    return Reflect.getMetadata(metadataKey, target, propertyKey);
}

