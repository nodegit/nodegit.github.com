---
layout: default
menu_item: api
title: Revparse
description: Version 0.13.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "ext": "#ext"
  "single": "#single"
  "MODE": "#MODE"
---

## <a name="ext"></a><span>Revparse.</span>ext <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Revparse.ext(object_out, reference_out, repo, spec);
```

| Parameters | Type |   |
| --- | --- | --- |
| object_out | [Object](/api/object/) | pointer to output object |
| reference_out | [Reference](/api/reference/) | pointer to output reference or NULL |
| repo | [Repository](/api/repository/) | the repository to search in |
| spec | String | the textual specification for an object |

| Returns |  |
| --- | --- |
| Number |  0 on success, GIT_ENOTFOUND, GIT_EAMBIGUOUS, GIT_EINVALIDSPEC
 or an error code |

## <a name="single"></a><span>Revparse.</span>single <span class="tags"><span class="async">Async</span></span>

```js
Revparse.single(repo, spec).then(function(object) {
  // Use object
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to search in |
| spec | String | the textual specification for an object |

| Returns |  |
| --- | --- |
| [Object](/api/object/) |  |

## <a name="MODE"></a><span>Revparse.</span>MODE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Revparse.MODE.</span>SINGLE | 1 |
| <span>Revparse.MODE.</span>RANGE | 2 |
| <span>Revparse.MODE.</span>MERGE_BASE | 4 |

