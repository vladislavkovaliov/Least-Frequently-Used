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
| LFUCache     | number                     | -       | 
| put          | key: number, value: number | -       | 
| get          | key: number                | -       | 

