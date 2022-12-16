export class LFUCache {
    private cache: Map<number, Record<string, number>>;
    private frequencies: Map<number, Set<number>>;
    private minFrequency: number;
    private capacity: number;

    constructor(capacity: number) {
        this.cache       = new Map();
        this.frequencies = new Map();

        this.minFrequency = 1;
        this.capacity     = capacity;
    }

    get(key: number): number {
        if(!this.cache.has(key)) {
            return -1;
        }
        
        const record = this.cache.get(key);
        
        if (!record) {
            return -1;
        }

        record.frequency = record.frequency + 1;
        this.updateFrequency(record.frequency, key);
    
        return record.value;
    }

    updateFrequency(frequencyKey: number, key: number) {
        const oldFr = frequencyKey - 1;
        const oldSet = this.frequencies.get(oldFr);
        
        if (oldSet) {
            oldSet.delete(key);
        }
        
        if (this.frequencies.has(frequencyKey)) {
            const frequency = this.frequencies.get(frequencyKey);

            if (frequency) {
                frequency.add(key);
            }
        } else {
            this.frequencies.set(frequencyKey, (new Set<number>()).add(key));
        }
        
        if (frequencyKey < this.minFrequency || (oldSet && !oldSet.size && oldFr === this.minFrequency)) {
            this.minFrequency = frequencyKey;
        }
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) {
            return;
        }

        if (this.cache.has(key)) {
            const record = this.cache.get(key);
            
            if (!record) {
                return;
            }

            record.frequency = record.frequency + 1;
            record.value = value;
            
            this.updateFrequency(record.frequency, key);
        } else {
             if (this.cache.size === this.capacity) {       
                const frequency = this.frequencies.get(this.minFrequency);
                
                if (!frequency) {
                    return;
                }
                
                const [firstKey] = frequency.values();
                
                this.cache.delete(firstKey);
                frequency.delete(firstKey);
                this.minFrequency = 1;
            }
            this.cache.set(key, { value: value, frequency: 1 });
            this.updateFrequency(1, key);
        }
    }
}