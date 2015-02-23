---
layout: default
menu_item: api
title: Reset
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "default": "#default"
  "TYPE": "#TYPE"
---

## <a name="default"></a><span>Reset.</span>default <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Reset.default(repo, target, pathspecs);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Repository where to perform the reset operation. |
| target | [Object](/api/object/) | The committish which content will be used to reset the content of the index. |
| pathspecs | [Strarray](/api/strarray/) | List of pathspecs to operate on. |

| Returns |  |
| --- | --- |
| Number |  0 on success or an error code 
<
 0 |

## <a name="TYPE"></a><span>Reset.</span>TYPE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Reset.TYPE.</span>SOFT | 1 |
| <span>Reset.TYPE.</span>MIXED | 2 |
| <span>Reset.TYPE.</span>HARD | 3 |

