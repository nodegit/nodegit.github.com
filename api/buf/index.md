---
layout: default
menu_item: api
title: Buf
description: Version 0.26.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#containsNul": "#containsNul"
  "#dispose": "#dispose"
  "#grow": "#grow"
  "#isBinary": "#isBinary"
  "#set": "#set"
  "#setString": "#setString"
  "Instance Variables": "#ivars"
---

## <a name="containsNul"></a><span>Buf#</span>containsNul <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = buf.containsNul();
```

| Returns |  |
| --- | --- |
| Number |  1 if buffer contains a NUL byte |

## <a name="dispose"></a><span>Buf#</span>dispose <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
buf.dispose();
```

## <a name="grow"></a><span>Buf#</span>grow <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = buf.grow(target_size);
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

## <a name="set"></a><span>Buf#</span>set <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = buf.set(data, datalen);
```

| Parameters | Type |
| --- | --- | --- |
| data | Buffer | The data to copy into the buffer |
| datalen | Number | The length of the data to copy into the buffer |

| Returns |  |
| --- | --- |
| Number |  0 on success, -1 on allocation failure |

## <a name="setString"></a><span>Buf#</span>setString <span class="tags"><span class="sync">Sync</span></span>

```js
buf.setString(The);
```

Sets the content of a GitBuf to a string.

| Parameters | Type |
| --- | --- | --- |
| The | string | utf8 value to set in the buffer. The string will be null terminated. |

## <a name="ivars"></a>Instance Variables

| Variable | Type | Description |
| --- | --- | --- |
| <a name="asize"></a>asize | Number |  |
| <a name="ptr"></a>ptr | String |  |
| <a name="size"></a>size | Number |  |

