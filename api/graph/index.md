---
layout: default
menu_item: api
title: Graph
description: Version 0.11.7
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "aheadBehind": "#aheadBehind"
  "descendantOf": "#descendantOf"
---

## <a name="aheadBehind"></a><span>Graph.</span>aheadBehind <span class="tags"><span class="async">Async</span></span>

```js
Graph.aheadBehind(repo, local, upstream).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository where the commits exist |
| local | [Oid](/api/oid/) | the commit for local |
| upstream | [Oid](/api/oid/) | the commit for upstream |

| Returns |  |
| --- | --- |
| Number | number of unique from commits in `local` |

## <a name="descendantOf"></a><span>Graph.</span>descendantOf <span class="tags"><span class="async">Async</span></span>

```js
Graph.descendantOf(repo, commit, ancestor).then(function(result) {
  // Use result
});
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

