---
layout: default
menu_item: api
title: IndexConflictIterator
description: Version 0.26.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "#next": "#next"
---

## <a name="create"></a><span>IndexConflictIterator.</span>create <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
IndexConflictIterator.create(index).then(function(indexConflictIterator) {
  // Use indexConflictIterator
});
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) | The index to scan |

| Returns |  |
| --- | --- |
| [IndexConflictIterator](/api/index_conflict_iterator/) | The newly created conflict iterator |

## <a name="next"></a><span>IndexConflictIterator#</span>next <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var indexEntry = indexConflictIterator.next();
```

| Returns |  |
| --- | --- |
| [IndexEntry](/api/index_entry/) |  |

