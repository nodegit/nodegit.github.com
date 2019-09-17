---
layout: default
menu_item: api
title: Hashsig
description: Version 0.26.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "createFromFile": "#createFromFile"
  "#compare": "#compare"
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
| buf | String |  |
| buflen | Number |  |
| opts | Number |  |

| Returns |  |
| --- | --- |
| [Hashsig](/api/hashsig/) |  |

## <a name="createFromFile"></a><span>Hashsig.</span>createFromFile <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Hashsig.createFromFile(path, opts).then(function(hashsig) {
  // Use hashsig
});
```

| Parameters | Type |   |
| --- | --- | --- |
| path | String |  |
| opts | Number |  |

| Returns |  |
| --- | --- |
| [Hashsig](/api/hashsig/) |  |

## <a name="compare"></a><span>Hashsig#</span>compare <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = hashsig.compare(b);
```

| Parameters | Type |
| --- | --- | --- |
| b | [Hashsig](/api/hashsig/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="OPTION"></a><span>Hashsig.</span>OPTION <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Hashsig.OPTION.</span>NORMAL | 0 |
| <span>Hashsig.OPTION.</span>IGNORE_WHITESPACE | 1 |
| <span>Hashsig.OPTION.</span>SMART_WHITESPACE | 2 |
| <span>Hashsig.OPTION.</span>ALLOW_SMALL_FILES | 4 |

