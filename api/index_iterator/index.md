---
layout: default
menu_item: api
title: IndexIterator
description: Version 0.26.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "#next": "#next"
---

## <a name="create"></a><span>IndexIterator.</span>create <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
IndexIterator.create(index).then(function(indexIterator) {
  // Use indexIterator
});
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) | The index to iterate |

| Returns |  |
| --- | --- |
| [IndexIterator](/api/index_iterator/) | The newly created iterator |

## <a name="next"></a><span>IndexIterator#</span>next <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var indexEntry = indexIterator.next();
```

| Returns |  |
| --- | --- |
| [IndexEntry](/api/index_entry/) |  |

