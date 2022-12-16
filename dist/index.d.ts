declare class LFUCache {
    private cache;
    private frequencies;
    private minFrequency;
    private capacity;
    constructor(capacity: number);
    get(key: number): number;
    updateFrequency(frequencyKey: number, key: number): void;
    put(key: number, value: number): void;
}

export { LFUCache };
