## How to use?

```
const cache: LFUCache = new LFUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 1
cache.put(3, 3)
cache.get(2); // -1

```

## Available props

| PropType     | input                      | default |
|:-------------|----------------------------|---------|
| LFUCache     | number                     | 0       | 
| put          | key: number, value: number | 24      | 
| get          | key: number                | 24      | 

