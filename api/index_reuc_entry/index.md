---
layout: default
menu_item: api
title: IndexReucEntry
description: Version 0.26.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "add": "#add"
  "clear": "#clear"
  "entryCount": "#entryCount"
  "find": "#find"
  "getByIndex": "#getByIndex"
  "getByPath": "#getByPath"
  "remove": "#remove"
  "Instance Variables": "#ivars"
---

## <a name="add"></a><span>IndexReucEntry.</span>add <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
IndexReucEntry.add(index, path, ancestor_mode, ancestor_id, our_mode, our_id, their_mode, their_id).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |
| path | String |  |
| ancestor_mode | Number |  |
| ancestor_id | [Oid](/api/oid/) |  |
| our_mode | Number |  |
| our_id | [Oid](/api/oid/) |  |
| their_mode | Number |  |
| their_id | [Oid](/api/oid/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="clear"></a><span>IndexReucEntry.</span>clear <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
IndexReucEntry.clear(index).then(function() {
  // method complete});
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |

## <a name="entryCount"></a><span>IndexReucEntry.</span>entryCount <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = IndexReucEntry.entryCount(index);
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="find"></a><span>IndexReucEntry.</span>find <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
IndexReucEntry.find(index, path).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |
| path | String |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="getByIndex"></a><span>IndexReucEntry.</span>getByIndex <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var indexReucEntry = IndexReucEntry.getByIndex(index, n);
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |
| n | Number |  |

| Returns |  |
| --- | --- |
| [IndexReucEntry](/api/index_reuc_entry/) |  |

## <a name="getByPath"></a><span>IndexReucEntry.</span>getByPath <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var indexReucEntry = IndexReucEntry.getByPath(index, path);
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |
| path | String |  |

| Returns |  |
| --- | --- |
| [IndexReucEntry](/api/index_reuc_entry/) |  |

## <a name="remove"></a><span>IndexReucEntry.</span>remove <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
IndexReucEntry.remove(index, n).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| index | [Index](/api/index/) |  |
| n | Number |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="ivars"></a>Instance Variables

| Variable | Type | Description |
| --- | --- | --- |
| <a name="mode"></a>mode | Number |  |
| <a name="oid"></a>oid | Oid |  |
| <a name="path"></a>path | String |  |

