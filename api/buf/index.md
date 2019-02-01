---
layout: default
menu_item: api
title: Buf
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#containsNul": "#containsNul"
  "#grow": "#grow"
  "#isBinary": "#isBinary"
  "#set": "#set"
  "Instance Variables": "#ivars"
---

## <a name="containsNul"></a><span>Buf#</span>containsNul <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = buf.containsNul();
```

| Returns |  |
| --- | --- |
| Number |  1 if buffer contains a NUL byte |

## <a name="grow"></a><span>Buf#</span>grow <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
buf.grow(target_size).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| target_size | Number | The desired available size |

| Returns |  |
| --- | --- |
| Number |  0 on success, -1 on allocation failure |

## <a name="isBinary"></a><span>Buf#</span>isBinary <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = buf.isBinary();
```

| Returns |  |
| --- | --- |
| Number |  1 if buffer looks like non-text data |

## <a name="set"></a><span>Buf#</span>set <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
buf.set(data, datalen).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| data | Buffer | The data to copy into the buffer |
| datalen | Number | The length of the data to copy into the buffer |

| Returns |  |
| --- | --- |
| Number |  0 on success, -1 on allocation failure |

## <a name="ivars"></a>Instance Variables

| Variable | Type | Description |
| --- | --- | --- |
| <a name="asize"></a>asize | Number |  |
| <a name="ptr"></a>ptr | String |  |
| <a name="size"></a>size | Number |  |

