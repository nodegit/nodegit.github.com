---
layout: default
menu_item: api
title: Graph
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "descendantOf": "#descendantOf"
---

## <a name="descendantOf"></a><span>Graph.</span>descendantOf <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Graph.descendantOf(repo, commit, ancestor);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) |  |
| commit | [Oid](/api/oid/) | a previously loaded commit. |
| ancestor | [Oid](/api/oid/) | a potential ancestor commit. |

| Returns |  |
| --- | --- |
| Number |  1 if the given commit is a descendant of the potential ancestor,
 0 if not, error code otherwise. |

