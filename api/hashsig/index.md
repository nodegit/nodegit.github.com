---
layout: default
menu_item: api
title: Hashsig
description: Version 0.5.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "createFromFile": "#createFromFile"
  "#compare": "#compare"
  "#free": "#free"
  "OPTION": "#OPTION"
---

## <a name="create"></a><span>Hashsig.</span>create <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Hashsig.create(buf, buflen, opts).then(function(hashsig) {
  // Use hashsig
});
```

| Parameters | Type |   |
| --- | --- | --- |
| buf | String | The input buffer. |
| buflen | Number | The input buffer size. |
| opts | Number | The signature computation options (see above). |

| Returns |  |
| --- | --- |
| [Hashsig](/api/hashsig/) | The computed similarity signature. |

## <a name="createFromFile"></a><span>Hashsig.</span>createFromFile <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Hashsig.createFromFile(path, opts).then(function(hashsig) {
  // Use hashsig
});
```

| Parameters | Type |   |
| --- | --- | --- |
| path | String | The path to the input file. |
| opts | Number | The signature computation options (see above). |

| Returns |  |
| --- | --- |
| [Hashsig](/api/hashsig/) | The computed similarity signature. |

## <a name="compare"></a><span>Hashsig#</span>compare <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = hashsig.compare();
```

| Returns |  |
| --- | --- |
| Number |  [0 to 100] on success as the similarity score, or error code. |

## <a name="free"></a><span>Hashsig#</span>free <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
hashsig.free();
```

## <a name="OPTION"></a><span>Hashsig.</span>OPTION <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Hashsig.OPTION.</span>NORMAL | 0 |
| <span>Hashsig.OPTION.</span>IGNORE_WHITESPACE | 1 |
| <span>Hashsig.OPTION.</span>SMART_WHITESPACE | 2 |
| <span>Hashsig.OPTION.</span>ALLOW_SMALL_FILES | 4 |

