---
layout: default
menu_item: api
title: Indexer
description: Version 0.5.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#commit": "#commit"
  "#free": "#free"
  "#hash": "#hash"
---

## <a name="commit"></a><span>Indexer#</span>commit <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = indexer.commit(stats);
```

| Parameters | Type |
| --- | --- | --- |
| stats | [TransferProgress](/api/transfer_progress/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="free"></a><span>Indexer#</span>free <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
indexer.free();
```

## <a name="hash"></a><span>Indexer#</span>hash <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = indexer.hash();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

