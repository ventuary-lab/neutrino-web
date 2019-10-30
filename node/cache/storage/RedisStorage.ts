import redis, { RedisClient } from 'redis';
import {
    toArray as _toArray
} from 'lodash';

/**
 * redisClient is any due to absence of type declaration in 'redis' module
 */
export interface RedisStorageParams {
    namespace: string;
    redisClient: any;
    redis: string;
};
export interface RedisStorageConstructor {
    new (params: RedisStorageParams): RedisStorage;
}
const defaultParams = {
    namespace: 'waves-contract-cache',
    redisClient: null
}

class RedisStorage {
    _namespace: string;
    _redisClient: any; // RedisClient

    constructor(params = defaultParams) {
        // Create redis connection
        this._namespace = params.namespace || 'waves-contract-cache';
        // this._redisClient = params.redisClient || redis.createClient( || {});
        this._redisClient = params.redisClient;
    }

    get(key) {
        return this._call('get', key);
    }

    set(key, value) {
        return this._call('set', key, value);
    }

    hget(key, field) {
        return this._call('hget', key, field);
    }

    hgetall(key) {
        return this._call('hgetall', key);
    }

    hkeys(key) {
        return this._call('hkeys', key);
    }

    hset(key, field, value) {
        return this._call('hset', key, field, value);
    }

    del(key) {
        return this._call('del', key);
    }

    getDefaultRedisCallback (resolve: any, reject: any): (err: Error, reply: () => void) => void {
        return (err, reply) => {
            if (err) {
                reject(err);
            } else {
                resolve(reply);
            }
        };
    };

    async _call(methodName: string, ...restParams: any[]) {
        // const args = _toArray(arguments);
        // const method = args.shift();

        // Add namespace
        // args[0] = this._namespace + ':' + args[0];

        // return new Promise((resolve, reject) => {
        //     const callback = (err, reply) => {
        //         if (err) {
        //             reject(err);
        //         } else {
        //             resolve(reply);
        //         }
        //     };

        //     this._redisClient[method].apply(this._redisClient, [method, ...restParams]);
        // });

        const mutatedMethodName =  this._namespace + ':' + methodName;

        return new Promise((resolve, reject) => {
            const callback = this.getDefaultRedisCallback(resolve, reject);

            this._redisClient[methodName].apply(this._redisClient, [...restParams, callback]);
        });
    }
};

export default RedisStorage;