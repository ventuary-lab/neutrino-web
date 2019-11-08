import "reflect-metadata";

const metadataKey = Symbol("key");

export function key(key: string) {
    return Reflect.metadata(metadataKey, key);
}

export function getKey(target: any, propertyKey: string) {
    return Reflect.getMetadata(metadataKey, target, propertyKey);
}

