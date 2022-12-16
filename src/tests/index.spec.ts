import { LFUCache } from '..';

describe("LFUCache", () => {
    test('scenario #1', () => {
        const cache: LFUCache = new LFUCache(2);

        expect(cache.put(1, 1)).toBeFalsy();
        expect(cache.put(2, 2)).toBeFalsy();
        expect(cache.get(1)).toBe(1);
        expect(cache.put(3, 3)).toBeFalsy();
        expect(cache.get(2)).toBe(-1);
        expect(cache.get(3)).toBe(3);
        expect(cache.put(4, 4)).toBeFalsy();
        expect(cache.get(1)).toBe(-1);
        expect(cache.get(3)).toBe(3);
        expect(cache.get(4)).toBe(4);
    });
});