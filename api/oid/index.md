---
layout: default
menu_item: api
title: Oid
description: Version 0.12.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "fromString": "#fromString"
  "#cmp": "#cmp"
  "#cpy": "#cpy"
  "#equal": "#equal"
  "#iszero": "#iszero"
  "#ncmp": "#ncmp"
  "#strcmp": "#strcmp"
  "#streq": "#streq"
  "#tostrS": "#tostrS"
---

## <a name="fromString"></a><span>Oid.</span>fromString <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = Oid.fromString(str);
```

| Parameters | Type |   |
| --- | --- | --- |
| str | String | input hex string; must be pointing at the start of the hex sequence and have at least the number of bytes needed for an oid encoded in hex (40 bytes). |

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | oid structure the result is written into. |

## <a name="cmp"></a><span>Oid#</span>cmp <span class="tags"><span class="sync">Sync</span></span>

```js
var result = oid.cmp(b);
```

| Parameters | Type |
| --- | --- | --- |
| b | [Oid](/api/oid/) | second oid structure. |

| Returns |  |
| --- | --- |
| Number |  
<
0, 0, >0 if a 
<
 b, a == b, a > b. |

## <a name="cpy"></a><span>Oid#</span>cpy <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = oid.cpy();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) | oid structure the result is written into. |

## <a name="equal"></a><span>Oid#</span>equal <span class="tags"><span class="sync">Sync</span></span>

```js
var result = oid.equal(b);
```

| Parameters | Type |
| --- | --- | --- |
| b | [Oid](/api/oid/) | second oid structure. |

| Returns |  |
| --- | --- |
| Number |  true if equal, false otherwise |

## <a name="iszero"></a><span>Oid#</span>iszero <span class="tags"><span class="sync">Sync</span></span>

```js
var result = oid.iszero();
```

| Returns |  |
| --- | --- |
| Number |  1 if all zeros, 0 otherwise. |

## <a name="ncmp"></a><span>Oid#</span>ncmp <span class="tags"><span class="sync">Sync</span></span>

```js
var result = oid.ncmp(b, len);
```

| Parameters | Type |
| --- | --- | --- |
| b | [Oid](/api/oid/) | second oid structure. |
| len | Number | the number of hex chars to compare |

| Returns |  |
| --- | --- |
| Number |  0 in case of a match |

## <a name="strcmp"></a><span>Oid#</span>strcmp <span class="tags"><span class="sync">Sync</span></span>

```js
var result = oid.strcmp(str);
```

| Parameters | Type |
| --- | --- | --- |
| str | String | input hex string of an object id. |

| Returns |  |
| --- | --- |
| Number |  -1 if str is not valid, 
<
0 if id sorts before str,
         0 if id matches str, >0 if id sorts after str. |

## <a name="streq"></a><span>Oid#</span>streq <span class="tags"><span class="sync">Sync</span></span>

```js
var result = oid.streq(str);
```

| Parameters | Type |
| --- | --- | --- |
| str | String | input hex string of an object id. |

| Returns |  |
| --- | --- |
| Number |  0 in case of a match, -1 otherwise. |

## <a name="tostrS"></a><span>Oid#</span>tostrS <span class="tags"><span class="sync">Sync</span></span>

```js
var string = oid.tostrS();
```

| Returns |  |
| --- | --- |
| String |  the c-string |

