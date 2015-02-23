---
layout: default
menu_item: api
title: Stash
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "drop": "#drop"
  "FLAGS": "#FLAGS"
---

## <a name="drop"></a><span>Stash.</span>drop <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Stash.drop(repo, index);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The owning repository. |
| index | Number | The position within the stash list. 0 points to the most recent stashed state. |

| Returns |  |
| --- | --- |
| Number |  0 on success, or error code |

## <a name="FLAGS"></a><span>Stash.</span>FLAGS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Stash.FLAGS.</span>DEFAULT | 0 |
| <span>Stash.FLAGS.</span>KEEP_INDEX | 1 |
| <span>Stash.FLAGS.</span>INCLUDE_UNTRACKED | 2 |
| <span>Stash.FLAGS.</span>INCLUDE_IGNORED | 4 |

