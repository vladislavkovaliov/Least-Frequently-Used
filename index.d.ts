declare module 'least-frequently-used' {
    class LFUCache {
        constructor(capacity: number);
        get(key: number): number;
        put(key: number, value: number): void;
    }
}